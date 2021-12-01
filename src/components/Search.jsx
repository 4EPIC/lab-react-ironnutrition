import { Input } from "antd";
import { Card, Col, Divider, Button } from "antd";

export default function Search({ search, handleFilter }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={search}
        type="text"
        onChange={(e) => handleFilter(e.target.value)}
      />
    </>
  );
}
