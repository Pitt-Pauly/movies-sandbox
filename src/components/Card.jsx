import React from "react";
import "./Card.css";

export function Card(props) {
  const { data } = props;
  return <div className="card">{JSON.stringify(data)}</div>;
}
