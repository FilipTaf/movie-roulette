import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import App from "../App";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
