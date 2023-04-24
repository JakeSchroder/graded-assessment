import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor='white' sx={{borderRadius:10}} align='stretch' spacing={4} >
      <Image src={imageSrc} sx={{borderRadius:10}}/>
      <Heading color='black' fontSize='2md' fontWeight='bold' paddingLeft={5}>{title}</Heading>
      <Text color='GrayText' fontSize='xs' paddingLeft={5}>{description}</Text>
      <Text color='black' fontSize='sm' paddingBottom={3} paddingLeft={5}>
        See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </Text>
    </VStack>
  );
};

export default Card;
