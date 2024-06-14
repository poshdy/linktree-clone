import Title from "@/components/shared/title";
import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
type Props = {};

const StoreAnalytics = (props: Props) => {
  return (
    <SectionWrapper className="w-full flex items-center justify-around">
      <div className="flex flex-col items-center space-y-1">
        <Title title="Store Visits" />
        <span>0</span>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <Title title="Product Clicks" />
        <span>0</span>
      </div>
    </SectionWrapper>
  );
};

export default StoreAnalytics;
