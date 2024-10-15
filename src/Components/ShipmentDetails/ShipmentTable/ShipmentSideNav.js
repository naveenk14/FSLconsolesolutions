import React from "react";
import { Card, Row, Col, Tag } from "antd";
import "./ShipmentSideNav.css";
import ShipmentSidebarArrow from "../../../assets/ShipmentSibarArrow.svg";
import CountryFlag from "../../Core-Components/CountryFlag";

const shipmentData = [
  {
    id: "BIPAQA2407422L",
    status: "Import",
    from: "Singapore",
    to: "Jebel Ali",
    countryCode: "IN",
    flagTo: "AE",
  },
  {
    id: "S00092298",
    status: "Transshipment",
    from: "Singapore",
    to: "Riyadh",
    countryCode: "IN",
    flagTo: "SA",
  },
  {
    id: "BIPJEB2407415L",
    status: "Transshipment",
    from: "Singapore",
    to: "Aqaba",
    countryCode: "IN",
    flagTo: "SE",
  },
  {
    id: "SEJEA24080291-03",
    status: "Transshipment",
    from: "Singapore",
    to: "Mombasa",
    countryCode: "IN",
    flagTo: "SE",
  },
  {
    id: "BIPAQA2407422L",
    status: "Import",
    from: "Singapore",
    to: "Jebel Ali",
    countryCode: "IN",
    flagTo: "SE",
  },
  {
    id: "S00092298",
    status: "Transshipment",
    from: "Singapore",
    to: "Riyadh",
    countryCode: "IN",
    flagTo: "SE",
  },
  {
    id: "S00092298",
    status: "Transshipment",
    from: "Singapore",
    to: "Riyadh",
    countryCode: "IN",
    flagTo: "SE",
  },
];

const ShipmentCard = ({ id, status, from, to, countryCode, flagTo }) => (
  <Card className="shipment__sidebarcard" style={{ marginBottom: 7 }}>
    <Row align="middle" style={{ width: "100%", padding: "0px" }}>
      <Col span={14} style={{ fontSize: "14px", fontWeight: "500" }}>
        {id}
      </Col>
      <Col span={7} style={{ textAlign: "right" }}>
        <Tag
          className="shipmentsidebartag"
          style={{ width: "109px", textAlign: "center" }}
          color={status === "Import" ? "green" : "blue"}
        >
          {status}
        </Tag>
      </Col>
    </Row>

    <Row style={{ marginTop: "5px" }}>
      <Col span={24} style={{ fontSize: "14px" }}>
        <span style={{ marginRight: "30px" }}>
          <CountryFlag countryCode={countryCode} /> {from}
        </span>
        <img src={ShipmentSidebarArrow} />
        <span style={{ marginLeft: "30px" }}>
          <CountryFlag countryCode={flagTo} /> {to}
        </span>
      </Col>
    </Row>
  </Card>
);

const ShipmentSidNav = () => (
  <div
    className="shipmentsidebar"
    style={{
      width: "100%",
      maxWidth: "272px",
      // height: "100px",
      // margin: "10px 10px",
      border: "1px solid #E7E8F2",
      background: "#F3F5F7",
    }}
  >
    {shipmentData.map((item) => (
      <ShipmentCard key={item.id} {...item} />
    ))}
  </div>
);

export default ShipmentSidNav;
