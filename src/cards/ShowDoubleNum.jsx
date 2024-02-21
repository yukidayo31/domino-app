import { chakra, VStack, HStack, Card, CardBody, Text } from "@chakra-ui/react";
import { initialDominoes, showDoubleNum } from "../utils/utils";

export default function ShowDoubleNum() {
  return (
    <VStack spacing={"10px"}>
      <Card mt={3} width={"70%"} background={"gray.100"}>
        <CardBody pt={1}>
          <chakra.h2
            fontSize="20px"
            fontWeight={"700"}
            textAlign={"left"}
            mb={3}
          >
            Source
          </chakra.h2>
          <HStack>
            {initialDominoes.map((domino, index) => {
              return <Text key={index}>{JSON.stringify(domino)}</Text>;
            })}
          </HStack>
        </CardBody>
      </Card>
      <Card mt={3} width={"70%"} background={"gray.100"}>
        <CardBody pt={1}>
          <chakra.h2
            fontSize="20px"
            fontWeight={"700"}
            textAlign={"left"}
            mb={3}
          >
            Double Numbers
          </chakra.h2>
          <HStack>
            <Text>{JSON.stringify(showDoubleNum(initialDominoes))}</Text>;
          </HStack>
        </CardBody>
      </Card>
    </VStack>
  );
}
