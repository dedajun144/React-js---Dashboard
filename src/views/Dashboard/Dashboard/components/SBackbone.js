// Chakra imports
import { Button, Flex, Icon, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";
import PieChart from "./charts/PieChart";
import { pieChartDataCharts1, pieChartOptionsCharts1 } from "./charts/chartData.js";

const SBackbone = ({ title }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card minHeight="290.5px" p="1.2rem" width={{ lg: "400px" }}>
      <Flex w="100%">
        <Text fontSize="lg" color="gray.400" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      <CardBody>
        <Flex my={{ lg: "2rem" }} mx={{ lg: "-5rem" }}>
          <PieChart chartData={pieChartDataCharts1} chartOptions={pieChartOptionsCharts1} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default SBackbone;
