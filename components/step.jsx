import { Button } from "@chakra-ui/react";

export default function Step({ step, stepNumber, children }) {
  return (
    <article >
      <Button
         bg={step == stepNumber || (step == 5 && stepNumber == 4)? 'blue'
          : 'gray'
        } 
        color={step == stepNumber || (step == 5 && stepNumber == 4)? 'white'
          : 'black'}
      >
        {stepNumber}
      </Button>
      <div>
        <p >STEP {stepNumber}</p>
        <h2 >{children.toUpperCase()}</h2>
      </div>
    </article>
  );
}
