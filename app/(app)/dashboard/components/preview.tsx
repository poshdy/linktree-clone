import React from "react";

type Props = {};

const Preview = (props: Props) => {
  return (
    <div className="border col-span-2 flex items-center justify-center border-yellow-500">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">hwllp</div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
