import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Success = () => {
	 const router = useRouter()
const [count, setCount] = useState(15)
	
	/* setInterval(() => {
		if(count <= 1)return
		setCount(count - 1)
	}, 1000)
    //code goes here
	setTimeout(() => {

		router.push("https://www.adaptive-elearn.com/");
   }, 15000) */

	return (
    <section>
      <article>
        <Heading fontSize={"1.5rem"}>Your Application has been sent </Heading>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to
        </p>

        <Heading fontSize={"1rem"}>
          You will be re-directed to ADES home page in{" "}
          <Box fontSize={"1.5rem"}>{count}</Box> seconds
        </Heading>
      </article>
    </section>
  );
}

export default Success