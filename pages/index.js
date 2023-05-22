import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Step from "../components/step";
import { useState } from "react";
import Form from "../components/forms/form";
import { Container, Flex, useMediaQuery } from "@chakra-ui/react";

const stepTitles = [
  "your info",
  "Your qualification",
  "Civil Status",
  "Financial Status",
  "Finish",
];

export default function Home() {
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
      marital: '',
      numOfChildren: '',
      ageGroup: '',
      bringingThem: '',
      drivingSkills: '',
      sessionLocation: '',
    },

    financialStatus: {
      signature: '',
      date: '',
    }
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
      });
    } else if (step == 3) {
      setFormData({
        ...formData,
        // Add data from next component
      });
    }
  };

  return (
    <Container maxW={1200}>
      <Head>
        <title>ADES-UK Healthcare</title>
        <meta name="description" content="ADES-UK healthcare form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flexDirection={isLargerThan700 ? "row" : "column"}>
        <aside>
          {stepTitles.map((title, i) => {
            return (
              <Step key={title} step={step} stepNumber={i + 1}>
                {title}
              </Step>
            );
          })}
        </aside>

        <Form
          step={step}
          setStep={setStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      </Flex>
    </Container>
  );
}
