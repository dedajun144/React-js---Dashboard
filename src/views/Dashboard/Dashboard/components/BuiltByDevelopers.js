// Chakra imports
import { Button, Flex, Icon, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";

const status = {
  good: "GOOD",
  warning: "WARNING",
  danger: "DANGER",
};

const BuiltByDevelopers = ({ title, name, description, image, total }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card minHeight="290.5px" p="1.2rem" width={{ lg: "400px" }}>
      <Flex w="100%">
        <Text fontSize="lg" color="gray.400" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      <CardBody>
        <Flex flexDirection="row" h="100%" width={{ lg: "100%" }} mx={{ lg: "5px" }} my={{ lg: "3rem" }}>
          <Flex flexDirection="column" bg="green.300" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
            <Flex justify="center">{image}</Flex>
            <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
              {status.good}
            </Text>
            <Text fontSize="12px" color={textColor} fontWeight="bold" textAlign="center">
              {total}
            </Text>
          </Flex>
          <Spacer />
          <Flex flexDirection="column" bg="yellow.200" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
            <Flex justify="center">{image}</Flex>
            <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
              {status.warning}
            </Text>
            <Text fontSize="12px" color={textColor} fontWeight="bold" textAlign="center">
              {total}
            </Text>
          </Flex>
          <Spacer />
          <Flex flexDirection="column" bg="red.300" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
            <Flex justify="center">{image}</Flex>
            <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
              {status.danger}
            </Text>
            <Text fontSize="12px" color={textColor} fontWeight="bold" textAlign="center">
              {total}
            </Text>
          </Flex>

          {/* {" "} */}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BuiltByDevelopers;
