import React from "react";
import { Input, InputProps } from "antd";
import { Icon } from "../Icons";

const SearchInput = (props: InputProps) => {
  return (
    <Input
      placeholder="Search the menu!"
      suffix={<Icon.Search width={15} height={15} color="gray" />}
      {...props}
    />
  );
};

export default SearchInput;
