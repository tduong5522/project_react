import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./index.scss";

const items: MenuProps["items"] = [
  {
    label: "Dashboard",
    key: "dashboard",
  },
  {
    label: "Basic setting",
    key: "basic-setting",
  },
  {
    label: "Goods",
    key: "goods",
  },
  {
    label: "Order/Delivery",
    key: "order-delivery",
  },
  {
    label: "Notice board",
    key: "notice-board",
  },
  {
    label: "Statistics",
    key: "statistics",
  },
];

const MenuAdmin = ({ className, ...rests }: MenuProps) => {
  return (
    <Menu
      items={items}
      mode="horizontal"
      theme="dark"
      className={`admin-menu-container ${className || ""}`}
      {...rests}
    />
  );
};

export default MenuAdmin;
