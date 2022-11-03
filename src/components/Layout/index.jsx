import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";
import React from "react";
import { Col, Row } from 'antd';
import banner from '@Assets/banner.jpg';

export default function Layout() {
  return (
    <React.Fragment>
      <div className="banner">

      </div>
      <Row>
      <Navbar />
        <Col span={24}><Outlet /></Col>
      </Row>
    </React.Fragment>
  )
}