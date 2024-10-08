"use client";

import React, { HTMLAttributes } from "react";
import { Card, CardBody, Button, Tooltip } from "@nextui-org/react";

import Link from "next/link";

import { Mail, Twitter, Linkedin } from "lucide-react";

// Ensure that React.Component is used correctly by extending HTMLAttributes
export default class Sidebar extends React.Component<
  HTMLAttributes<HTMLDivElement>
> {
  render() {
    return (
      <Card
        className={`max-w-[100px] place-center ${
          this.props.className || ""
        } hidden md:block`}
      >
        <CardBody className="flex gap-8 justify-between">
          <Tooltip showArrow={true} content="Mail">
            <Link href="mailto:mespeet@gmail.com">
              <Button className="shrink" variant="light">
                <Mail color="gray" />
              </Button>
            </Link>
          </Tooltip>
          <Tooltip showArrow={true} content="Twitter">
            <Link href="https://x.com/mespeet">
              <Button className="shrink" variant="light">
                <Twitter color="gray" />
              </Button>
            </Link>
          </Tooltip>
          <Tooltip showArrow={true} content="LinkedIn">
            <Link href="https://www.linkedin.com/in/maarten-speet-2b9b0426b/">
              <Button className="shrink" variant="light">
                <Linkedin color="gray" />
              </Button>
            </Link>
          </Tooltip>
        </CardBody>
      </Card>
    );
  }
}
