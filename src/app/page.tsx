import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Chip,
  Tooltip
} from "@nextui-org/react";

import "/node_modules/flag-icons/css/flag-icons.min.css";

import { Mail, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <>
          <Card
        className={`max-w-[400px] w-full md:hidden`}
      >
        <CardBody className="flex flex-row justify-between">
          <Tooltip showArrow={true} content="Mail">
            <Button className="shrink" variant="light">
              <Mail color="gray" />
            </Button>
          </Tooltip>
          <Tooltip showArrow={true} content="Twitter">
            <Button className="shrink" variant="light">
              <Twitter color="gray" />
            </Button>
          </Tooltip>
          <Tooltip showArrow={true} content="LinkedIn">
            <Button className="shrink" variant="light">
              <Linkedin color="gray" />
            </Button>
          </Tooltip>
        </CardBody>
      </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="justify-between gap-3">
            <div className="flex gap-5">
              <Avatar
                isBordered
                color="default"
                radius="full"
                size="md"
                src="/images/profile-picture.jpg"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  Maarten Speet
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @mespeet
                </h5>
              </div>
            </div>
            <Button
              className={"bg-transparent text-foreground border-default-200"}
              color="primary"
              radius="full"
              size="sm"
              variant="bordered"
            >
              hire me
            </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>
              Laravel Developer with a
              niche for Cyber Security.
            </p>
          </CardBody>
          <CardFooter className="flex justify-between">
            <Chip color="success"><span className="w-2 h-2 mr-2 rounded-full text-green-700 animate-pulse-custom">●</span>Available for hire</Chip>
            <Tooltip showArrow={true} content="The Netherlands">
              <span className="ml-2 fi fi-nl rounded-sm" aria-label="flag_nl" role="img"></span>
            </Tooltip>
          </CardFooter>
        </Card>
    </>
  );
}
