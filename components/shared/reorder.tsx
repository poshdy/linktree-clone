"use client";
import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Reorder } from "framer-motion";
type Props = {};

const ReOrder = (props: Props) => {
  const [items, setItems] = useState<any[]>();
  return (
    <Reorder.Group
      onReorder={setItems}
      axis="x"
      values={items!!}
    >
        
    </Reorder.Group>
  );
};

export default ReOrder;
