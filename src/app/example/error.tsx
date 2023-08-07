"use client";

const Error = ({ error }: { error: Error }) => (
  <p style={{ color: "red" }}>Error: {error.message}</p>
);

export default Error;
