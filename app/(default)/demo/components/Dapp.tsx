"use client";
import { useEffect, useState } from "react";

import {
  Card,
  Space,
  Divider,
  Button,
  Input,
  Form,
  message,
  Radio,
  QRCode,
  Upload,
  Table,
  Tag,
  Modal,
} from "antd";
import type { RadioChangeEvent } from "antd";
import axios from "axios";
import React from "react";
import { InboxOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default function Dapp() {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadResponse, setUploadResponse] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [researcherAccounts, setResearcherAccounts] = useState<any[]>([]);
  const [accessTypes, setAccessTypes] = useState<any[]>([]);
  const [account, setAcount] = useState({
    name: "Analyst A",
    index: 0,
  });

  const [computeRes, setComputeRes] = useState({
    name: "",
    data: [],
  });
  const [dataRes, setDataRes] = useState({
    name: "",
    description: "",
  });
  const [functions, setFunctions] = useState<any[]>([]);
  const [proof, setProof] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [qrCode, setQrCode] = React.useState("https://github.com");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Add new handler function
  const handleExternalRoute = () => {
    setIsLoading(true);
    window.open("http://localhost:3001", "_blank"); // Replace with your desired port/route

    // Start 10 second timer
    setTimeout(() => {
      setIsEnabled(true);
      setIsLoading(false);
    }, 10000);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      message.error("Please select a file first");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/zk-email",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadResponse(response.data);
    } catch (error) {
      message.error("Failed to upload file");
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const consoleRef = React.createRef();

  const downloadFile = (data: any, fileName: any, fileType: any) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType });
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const exportToJson = (e: any) => {
    e.preventDefault();
    downloadFile(JSON.stringify(createJSON()), "proof.json", "text/json");
  };

  const handleMessage = (mess: boolean) => {
    if (mess) {
      message.success(`Successfully Generated Proof!`);
    } else {
      message.error(`Failed to Generate Proof`);
    }
  };

  const handleGenerate = async () => {
    console.log(localStorage.getItem("myStorage"));
    setLoading(true);
    const apiCall2 = () => {
      return axios.post(
        "http://localhost:3000/generate_proof",
        JSON.parse(localStorage.getItem("myStorage") || "{}")
      );
    };

    apiCall2()
      .then(async (response) => {
        setProof(response.data);
        setLoading(false);
        setDone(true);
        handleMessage(true);
      })
      .catch((error) => {
        console.log(error);
        handleMessage(false);
      });
  };
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setDataRes(selectedRows[0]);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  const rowSelectionFunc = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setComputeRes(selectedRows[0]);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const handleAccountChange = (e: RadioChangeEvent) => {
    let temp = {
      name: e.target.value[0],
      index: e.target.value[1],
    };
    setAcount(temp);
  };

  const { Dragger } = Upload;

  const populate_options = () => {
    const options: any[] = [];
    for (let i = 0; i < functions.length; i++) {
      options.push({
        key: i,
        name: functions[i]["function"]["name"],
        description: functions[i]["function"]["description"],
      });
    }
    return options;
  };
  const populate_data = () => {
    const options: any[] = [];
    for (let i = 0; i < functions.length; i++) {
      options.push({
        key: i,
        name: functions[i]["function"]["name"],
        data: functions[i]["data"],
      });
    }
    return options;
  };
  const createJSON = () => {
    let res: any = {};
    res["function"] = {
      name: dataRes["name"],
      description: dataRes["description"],
    };
    res["data"] = {
      name: computeRes["name"],
      values: computeRes["data"],
    };
    res["proof"] = proof;
    return JSON.stringify(res, null, 2);
  };

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  const columnsInner = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
    },
  ];

  const columns = [
    {
      title: "Data",
      dataIndex: "data",
      key: "data",
      render: (text: any) => (
        <div style={{ margin: 5 }}>
          <Table
            columns={columnsInner}
            dataSource={text}
            pagination={{ position: [] }}
            bordered={true}
          />
        </div>
      ),
    },
  ];

  const columnsFunc = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  function handleAccessTypes(address: string) {
    return new Promise(function (resolve, reject) {
      axios
        .get("http://localhost:3000/access_policies?address=" + address)
        .then((response) => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/accounts?account_type=data_analysts")
      .then(async (res) => {
        setResearcherAccounts(res.data);

        let temp: any[] = [];
        for (let i = 0; i < res.data.length; i++) {
          let type = await handleAccessTypes(res.data[i]["address"]);
          temp.push(type);
        }
        setAccessTypes(temp);
      });
    axios.get("http://localhost:3000/available_functions").then((res) => {
      setFunctions(res.data);
    });
  }, []);

  return (
    <div style={{ height: "100%", margin: 0, boxSizing: "border-box" }}>
      {contextHolder}
      {researcherAccounts.length > 0 && functions.length > 0 && (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: 10,
              gap: 10,
            }}
          >
            <Radio.Group
              value={account}
              onChange={handleAccountChange}
              style={{ height: "100%" }}
            >
              {researcherAccounts.map((val, i) => (
                <Radio.Button value={[val["account_name"], i]}>
                  {val["account_name"]}
                </Radio.Button>
              ))}
            </Radio.Group>

            <Button
              type="primary"
              onClick={handleExternalRoute}
              loading={isLoading}
            >
              {isLoading ? "Verify..." : "Verify Aadhar"}
            </Button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: 10,
              gap: 10,
            }}
          >
            <Button onClick={showModal} icon={<InboxOutlined />}>
              Dont have access?
            </Button>
          </div>

          {/* Modal component - place at root level of return */}
          <Modal
            title="Upload File"
            open={isModalVisible}
            onOk={handleFileUpload}
            onCancel={() => {
              setIsModalVisible(false);
              setSelectedFile(null);
              setUploadResponse([]);
            }}
            okText="Submit"
            confirmLoading={isUploading}
          >
            <Upload.Dragger
              beforeUpload={(file) => {
                setSelectedFile(file);
                return false;
              }}
              onRemove={() => setSelectedFile(null)}
              maxCount={1}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Upload.Dragger>

            {uploadResponse.length > 0 && (
              <div style={{ marginTop: 16 }}>
                <h4>Response:</h4>
                <ul>
                  {uploadResponse.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </Modal>

          <Card
            title={account["name"]}
            style={{ height: "90%", overflow: "scroll", margin: 10 }}
            bordered={false}
          >
            <div style={{ width: "100%", fontWeight: "bold" }}>
              Granted Access Policies
              <p />
              {/* ... existing code ... */}
            </div>

            <h4>Select Function</h4>
            <Space direction="vertical" style={{ display: "flex" }}>
              <Form
                form={form}
                name="horizontal_login"
                layout="vertical"
                onFinish={onFinish}
              >
                <Form.Item>
                  <Table
                    rowSelection={{
                      type: "radio",
                      ...rowSelection,
                      // Disable selections until enabled
                      getCheckboxProps: (record) => ({
                        disabled: !isEnabled,
                      }),
                    }}
                    columns={columnsFunc}
                    dataSource={populate_options()}
                    pagination={{ position: [] }}
                  />

                  <p />
                  <h4>Available Data</h4>
                  <Table
                    rowSelection={{
                      type: "radio",
                      ...rowSelectionFunc,
                      // Disable selections until enabled
                      getCheckboxProps: (record) => ({
                        disabled: !isEnabled,
                      }),
                    }}
                    columns={columns}
                    dataSource={populate_data()}
                    pagination={{ position: [] }}
                  />
                </Form.Item>
                <Button block type='primary' onClick={handleGenerate} disabled={(JSON.stringify(computeRes) == '{}' || JSON.stringify(dataRes) == '{}')}>Generate Proof!</Button>
              <Divider type='horizontal' />
              <div id="myqrcode">
                  {loading && 
                    <Card loading={loading}>None</Card>
                  }
                  {done && 
                  <div>
                    <TextArea rows={6} style={{ color: 'black'}}  defaultValue={createJSON()} disabled={true} />
                    <Button type="primary" onClick={exportToJson} style={{marginTop: 10}}>
                      Download Proof
                    </Button>
                    <p/>
                  </div>
                  }
              </div>
              </Form>
            </Space>
          </Card>
        </div>
      )}
    </div>
  );
}
