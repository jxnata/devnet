import {
  Box,
  Button,
  Center,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Account, core } from "@klever/sdk";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import transactions, { ITransaction } from "../raw";

export default function Home() {
  const toast = useToast();
  const [balance, setBalance] = useState(0);
  const [body, setBody] = useState<ITransaction>();
  const [address, setAddress] = useState("");

  const init = useCallback(async () => {
    if (!core.isKleverWebActive()) {
      await core.initialize();
    }
    window.kleverWeb.provider = {
      api: "https://api.devnet.klever.finance",
      node: "https://node.devnet.klever.finance",
    };
    const account = new Account();
    setAddress(account.getWalletAddress());
    setBalance((await account.getAccount()).Balance);
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  const trigger = useCallback(async () => {
    const account = new Account();

    console.log(body);
    const txData = { payload: body?.tx, type: body?.type };

    // @ts-ignore
    const unsignedTx = await account.buildTransaction([txData]);

    const signedTx = await account.signTransaction(unsignedTx);

    const { data } = await account.broadcastTransactions([signedTx]);

    if (data?.txsHashes?.length > 0) {
      console.log(data?.txsHashes[0]);
      toast({
        title: "The action was successfully sent to the blockchain",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTimeout(async () => {
        setBalance((await account.getAccount()).Balance);
        window.open(
          `https://api.devnet.klever.finance/v1.0/transaction/${data?.txsHashes[0]}`,
          "_blank"
        );
      }, 4000);
    }
  }, [body, toast]);

  return (
    <div>
      <Head>
        <title>Devnet Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box margin="auto" px={3} py={10} maxWidth="800px" maxHeight="800px">
        <Text my={15}>
          <b>Balance: </b>
          {balance}
        </Text>
        <Input placeholder="Your address" mb={15} value={address} readOnly />
        <Select
          mb={15}
          placeholder="Select a Transaction"
          onChange={(e) => setBody(transactions[Number(e.target.value) || 0])}
        >
          {transactions.map((t, i) => (
            <option key={i} value={i}>
              {t.name}
            </option>
          ))}
        </Select>
        <Textarea
          placeholder="Transaction Body"
          mb={5}
          onChange={(e) =>
            // @ts-ignore
            setBody((old) => {
              return { ...old, tx: JSON.parse(e.target.value) };
            })
          }
          value={JSON.stringify(body?.tx, undefined, 4)}
          height={300}
        />
        <Center mb={5}>
          <Button onClick={trigger} disabled={!address} colorScheme="blue">
            Trigger
          </Button>
        </Center>
      </Box>
    </div>
  );
}
