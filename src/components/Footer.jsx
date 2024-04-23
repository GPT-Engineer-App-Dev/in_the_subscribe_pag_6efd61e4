import React from "react";
import { Flex, VStack, Text, HStack, Button } from "@chakra-ui/react";
import { FaEnvelope, FaInfoCircle, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex as="footer" position="absolute" left="0" bottom="0" direction={{ base: "column", md: "row" }} width="full" justify="space-between" p={4} borderTopWidth="1px">
      <VStack spacing={4} align="start">
        <Text fontSize="sm">&copy; {new Date().getFullYear()} RaqmiyaCrypto. All rights reserved.</Text>
        <Text fontSize="sm">Contact us: raqmiyacrypto@gmail.com</Text>
      </VStack>
      <HStack spacing={4}>
        <Button as="a" href="mailto:raqmiyacrypto@gmail.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
          Contact Us
        </Button>
        <Button as="a" href="#" leftIcon={<FaInfoCircle />} colorScheme="teal" variant="outline">
          About Us
        </Button>
        <Button as="a" href="#" leftIcon={<FaLink />} colorScheme="teal" variant="outline">
          Other Links
        </Button>
      </HStack>
    </Flex>
  );
};

export default Footer;
