import { Container, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import axios from "axios";
import { doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import Head from "next/head";
import Step from "../components/step";
import SolarForm from "../components/forms/solarForm";

const stepTitles = [
  "Personal info",
  "Confirm"
];

  
const SolarTraining = () => {


    const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

    const [formData, setFormData] = useState({
      personalInfo: {
        name: "",
        email: "",
        phoneNumber: "",
        country: "",
        province: "",
        city: "",
      },
      qualification: {
        elecKnowledge: "",
        highestQual: "",
      },
    });
    const [step, setStep] = useState(1);

    const updateFormData = (data) => {
      if (step == 1) {
        setFormData({
          ...formData,
          // Probably better to add each individual key:value of personalInfo but oh well
          personalInfo: data,
        });
      } else if (step == 2) {
        setFormData({
          ...formData,
          // add the data from the next component
          qualification: data,
        });
      } else if (step == 3) {
        setFormData({
          ...formData,
          // Add data from next component
          civilStatus: data,
        });
      } else if (step == 4) {
        setFormData({
          ...formData,
          // Add data from next component
          financialStatus: data,
        });
      }
    };

    const sendNotification = async (data) => {
      const response = await axios.post("/api/sendgrid", data);
    };

    const sendData = async (e) => {
      const timestamp = Date.now().toString();

      const candidate = doc(db, `solarCandidates/${timestamp}`);

      const candidateData = formData;

      try {
        await setDoc(candidate, candidateData).then(() => {});
        sendNotification(candidateData);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>
      <Head>
        <title>ADES-UK Healthcare</title>
        <meta name="description" content="ADES-UK healthcare form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        boxShadow={"2xl"}
        bg={"brand.300"}
        maxW={900}
        borderRadius={isLargerThan700 ? "xl" : "unset"}
        p={isLargerThan700 ? 10 : 3}
      >
        <Heading
          color={"brand.100"}
          fontFamily={"Andika"}
          mb={5}
          textAlign={"center"}
        >
          {step === 6 ? "Success" : "ADES Solar Training Application"}
        </Heading>
        <Flex flexDirection={isLargerThan700 ? "row" : "column"}>
          <aside>
            <Flex
              flexDirection={isLargerThan700 ? "column" : "row"}
              gap={isLargerThan700 ? 5 : 3}
              
              mb={1}
            >
              {stepTitles.map((title, i) => {
                return (
                  <Step key={title} step={step} stepNumber={i + 1}>
                    {title}
                  </Step>
                );
              })}
            </Flex>
            <Text mb={5} fontSize={"0.8rem"}>
              Progress Bar
            </Text>
          </aside>
          <SolarForm
            step={step}
            setStep={setStep}
            formData={formData}
            updateFormData={updateFormData}
            sendData={sendData}
          />
        </Flex>
      </Container>
    </>
  );
};





export default SolarTraining;