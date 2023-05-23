import { Box, Button, Text, useMediaQuery } from "@chakra-ui/react";

export default function Step({ step, stepNumber, children }) {

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <article >
      <Button
         bg={step === stepNumber || (step === 5 && stepNumber === 5)? 'blue'
          : 'gray'
        } 
        color={step === stepNumber || (step === 5 && stepNumber === 5)? 'white'
          : 'black'}
        cursor={'default'}
        _hover={{
          bg: ''
        }}
      >
        {stepNumber}
      </Button>
  
        <Text display={isLargerThan700? 'block' : 'none'}>{children}</Text>
      
    </article>
  );
}
