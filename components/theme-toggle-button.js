import { useState } from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Icon } from "@chakra-ui/react";
import { HiSun, HiMoon } from "react-icons/hi";
import styled from "@emotion/styled";

const Switch = styled.div`
  width: 60px;
  height: 30px;
  background-color: rgba(235, 149, 52, 0.4);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  &[data-isOn="true"] {
    justify-content: flex-end;
    background-color: rgba(149, 52, 235, 0.4);
  }
`;

const Handle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 40px;
  text-align: center;
`;

export const ThemeToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  const { toggleColorMode } = useColorMode();
  const toggleSwitch = () => {
    setIsOn(!isOn);
    toggleColorMode();
  };

  return (
    <Switch data-isOn={isOn} onClick={toggleSwitch}>
      <Handle
        layout
        transition={spring}
        key={useColorModeValue("dark", "light")}
      >
        <Icon
          as={useColorModeValue(HiSun, HiMoon)}
          color={useColorModeValue("#eb9534", "#9534eb")}
        />
      </Handle>
    </Switch>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
