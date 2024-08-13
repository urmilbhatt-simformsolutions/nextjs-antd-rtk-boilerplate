"use client";

import React from "react";
import { ConfigProvider, theme } from "antd";

const AntdConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

export default AntdConfigProvider;
