"use client";
import { Button, Steps, theme, ConfigProvider } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Owner from "./Owner";
import Hospital from "./Hospital";
import Verifier from "./Verifiers";
import Dapp from "./Dapp";
import NoServer from "./NoServer";

export default function Demo() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [server, setServer] = useState("");

  const CustomSteps = styled.div`
    .ant-steps-item-icon .ant-steps-icon {
      color: orange !important;
    }
    .ant-steps-item-icon {
      background-color: black !important;
      border-color: orange !important;
    }
    
    .ant-steps-item {
      color: white !important;
    }
  `;

  const steps = [
    {
      title: <span style={{ color: "orange" }}>Authorize</span>,
      content: <Owner />,
    },
    {
      title: <span style={{ color: "orange" }}>Data Provider</span>,
      content: <Hospital />,
    },
    {
      title: <span style={{ color: "orange" }}>Data Analysis</span>,
      content: <Dapp />,
    },
    {
      title: <span style={{ color: "orange" }}>Verify</span>,
      content: <Verifier />,
    },
  ];

  useEffect(() => {
    // reset
    axios
      .get("http://localhost:3000/reset_accounts", {
        headers: {
          "Content-Type": "application/json",
          from: "owner",
        },
      })
      .then((res) => {
        setServer("true");
      })
      .catch(function (error) {
        setServer("false");
      });
  }, []);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleReset = () => {
    window.location.reload();
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    margin: 16,
    height: "80%",
  };
  return (
    <div>
      {server == "true" && (
        <div>
          <CustomSteps>
            <Steps
              current={current}
              items={items}
              style={{ margin: 25, width: "95%" }}
            />
          </CustomSteps>
          <div style={contentStyle}>{steps[current].content}</div>
          <div style={{ margin: 20 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={handleReset}>
                Reset
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: 10 }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      )}
      {server == "false" && <NoServer />}
    </div>
  );
}
