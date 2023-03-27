import { Col, Row } from "antd";
import React from "react";
import SearchInput from "../SearchInput";
import "./index.scss";

const Header = () => {
  return (
    <Row
      justify={"space-between"}
      align={"middle"}
      className="header-admin-container"
    >
      <div>mDoctor</div>
      <Row align={"middle"} gutter={32}>
        <Col>Logout user mDoctor</Col>
        <Col>
          <SearchInput />
        </Col>
      </Row>
    </Row>
  );
};

export default Header;
