import React from "react";
import "./Card.css";
import { useSearch } from "../context/SearchContext";
import classNames from "classnames";

export function Card(props) {
  const { data } = props;

  const { search } = useSearch();

  const classes = classNames(["card", data.title === search ? "selected" : ""]);

  if (data.title !== search) return null;

  return (
    <div className={classes}>
      <h2>{data.title}</h2>
      <div>Released Date: {data.released}</div>
      <br />
      <div>{data.tagline}</div>
    </div>
  );
}
