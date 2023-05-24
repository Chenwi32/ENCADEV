import Head from "next/head";
import Step from "../components/step";
import { useState } from "react";
import Form from "../components/forms/form";
import { Container, Flex, Heading, Text, Toast, useMediaQuery } from "@chakra-ui/react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const stepTitles = [
  "Personal info",
  "Qualification",
  "Civil Status",
  "Financial Status",
"Confirm",
  "Finish",
];

export default function Home() {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const [formData, setFormData] = useState(
    {
      personalInfo: {
        name: "",
        email: "",
        phoneNumber: "",
        country: "",
        province: "",
        city: "",
      },
      qualification: {
        qualification: "",
        othersSpecific: "",
        certificate: "",
        subject: "",
        institution: "",
        date: "",
        lanOfInstruct: "",
        englishProff: "",
        experience: "",
      },
      civilStatus: {
        marital: "",
        numOfChildren: "",
        ageGroup: "",
        bringingThem: "",
        drivingSkills: "",
        sessionLocation: "",
      },
      financialStatus: {
        signature: "",
        date: "",
      },
    });
  const [step, setStep] = useState(4);

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

  const sendData = async () => {
    const timestamp = Date.now().toString();

    const candidate = doc(db, `candidates/${timestamp}`);

    const candidateData = formData;

    try {
      await setDoc(candidate, candidateData).then(() => {});
      Toast(
        "The information has been sent successfully. Thank you for the efforts",
        {
          hideProgressBar: true,
          autoClose: 6000,
          type: "success",
        }
      );
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
      <Container maxW={1200} p={2}>
        <Heading mb={5} textAlign={'center'}>ADES Healthcare Form</Heading>
        <Flex flexDirection={isLargerThan700 ? "row" : "column"}>
          <aside>
            <Flex
              flexDirection={isLargerThan700 ? "column" : "row"}
              gap={5}
              justifyContent={"space-between"}
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

          <Form
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
}
