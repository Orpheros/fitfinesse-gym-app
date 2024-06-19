// DynamicSteps.js
import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

export const DynamicSteps: React.FC<any> = ({
  userData,
  maxSteps,
  specialSteps,
}) => {
  // Function to generate steps array
  const generateSteps = (maxSteps: number, specialSteps: any[]) => {
    const stepsArray = [];
    for (let i = 1; i <= maxSteps; i++) {
      const specialStep = specialSteps.find((step) => step.index === i);
      stepsArray.push({
        title: specialStep ? specialStep.title : "",
      });
    }
    return stepsArray;
  };

  // Generate the steps array
  const items = generateSteps(maxSteps, specialSteps);

  return (
    <Steps
      size="small"
      current={userData.loyalty_points}
      direction="horizontal"
      items={items}
    ></Steps>
  );
};
