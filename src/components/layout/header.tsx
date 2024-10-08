'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation
import { Card, CardBody, Button, Tooltip } from "@nextui-org/react";
import { House, AppWindow, GraduationCap } from "lucide-react";

// Define the possible button types
type ButtonType = "home" | "projects" | "education";

export default function Header() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState<ButtonType>("home");

  // Sync the active button with the current route
  useEffect(() => {
    const currentPath = window.location.pathname; // Use window.location.pathname
    switch (currentPath) {
      case "/projects":
        setActiveButton("projects");
        break;
      case "/education":
        setActiveButton("education");
        break;
      default:
        setActiveButton("home");
    }
  }, []);

  // Navigate using router.push() for client-side navigation
  const handleNavigation = (buttonName: ButtonType, path: string) => {
    setActiveButton(buttonName);
    router.push(path); // Client-side navigation
  };

  return (
    <Card className="max-w-[400px] w-full">
      <CardBody className="flex flex-row gap-8 justify-between">
        <Tooltip showArrow={true} content="Home">
          <Button
            className="shrink"
            variant={activeButton === "home" ? "solid" : "light"}
            onClick={() => handleNavigation("home", "/")}
          >
            <House color={activeButton === "home" ? "white" : "gray"} />
          </Button>
        </Tooltip>
        <Tooltip showArrow={true} content="Projects">
          <Button
            className="shrink"
            variant={activeButton === "projects" ? "solid" : "light"}
            onClick={() => handleNavigation("projects", "/projects")}
          >
            <AppWindow color={activeButton === "projects" ? "white" : "gray"} />
          </Button>
        </Tooltip>
        <Tooltip showArrow={true} content="Education">
          <Button
            className="shrink"
            variant={activeButton === "education" ? "solid" : "light"}
            onClick={() => handleNavigation("education", "/education")}
          >
            <GraduationCap color={activeButton === "education" ? "white" : "gray"} />
          </Button>
        </Tooltip>
      </CardBody>
    </Card>
  );
}
