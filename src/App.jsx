import ShowDoubleNum from "./cards/ShowDoubleNum";

import {
  initialDominoes,
  copyInitialDominoes,
  sortAsc,
  sortDesc,
  removeDuplicate,
  flip,
  removeCertainTotalNum,
  resetData,
} from "./utils/utils";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  Stack,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  const [sortedDominoes, setSortedDominoes] = useState([...initialDominoes]);
  const [select, setSelect] = useState("");

  const handleSortAsc = () => {
    const sortedResult = sortAsc([...initialDominoes]);
    setSortedDominoes(sortedResult);
  };

  const handleSortDesc = () => {
    const sortedResult = sortDesc([...initialDominoes]);
    setSortedDominoes(sortedResult);
  };

  const handleFlip = () => {
    const sortedResult = flip([...copyInitialDominoes]);
    setSortedDominoes(sortedResult);
  };

  const handleRemoveDuplicate = () => {
    const sortedResult = removeDuplicate([...initialDominoes]);
    setSortedDominoes(sortedResult);
  };

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const handleClickRemoveInput = () => {
    const inputNum = parseInt(select);
    const sortedResult = removeCertainTotalNum(inputNum);
    setSortedDominoes(sortedResult);
  };

  const handleReset = () => {
    setSortedDominoes(resetData());
  };
  return (
    <>
      <Heading>Dominoes</Heading>
      <Container maxW={"5xl"} mt={7} mb={"12"} pb={{ base: 20, md: 20 }}>
        <ShowDoubleNum />

        {/* Domino Cards Display */}
        <Container mt={5}>
          <Center>
            <HStack spacing={4}>
              {sortedDominoes.map((domino, index) => {
                const formattedDomino = domino.join(" - ");
                return (
                  <Card border={"1px solid black"} w={25} key={index}>
                    <CardBody>
                      <Center>
                        <Text ml={-4}>{formattedDomino}</Text>
                      </Center>
                    </CardBody>
                  </Card>
                );
              })}
            </HStack>
          </Center>
        </Container>
        {/* End of Domino Cards Display */}

        {/* Buttons Display */}
        <Container mt={5}>
          <Stack spacing={4} direction="row" align="center">
            <Button colorScheme="teal" fontSize={"sm"} onClick={handleSortAsc}>
              Sort (ASC)
            </Button>
            <Button colorScheme="teal" fontSize={"sm"} onClick={handleSortDesc}>
              Sort (DESC)
            </Button>
            <Button colorScheme="teal" fontSize={"sm"} onClick={handleFlip}>
              Flip
            </Button>
            <Button
              colorScheme="teal"
              fontSize={"sm"}
              onClick={handleRemoveDuplicate}
            >
              Remove Duplicate
            </Button>
            <Button colorScheme="teal" fontSize={"sm"} onClick={handleReset}>
              Reset
            </Button>
          </Stack>
        </Container>
        {/* End of Buttons Display */}

        {/* Input Display */}
        <Container mt={5}>
          <Input placeholder="Input Number" onChange={handleChange} />
          <Button
            mt={3}
            colorScheme="teal"
            fontSize={"sm"}
            onClick={handleClickRemoveInput}
          >
            Remove
          </Button>
        </Container>
        {/* End of Input Display */}
      </Container>
    </>
  );
}

export default App;
