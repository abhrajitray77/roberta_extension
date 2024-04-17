import React from "react";

//Response component
type ResProps = {
  response: any;
};

const Res = ({ response }: ResProps) => {
  return (
    <div className="space-y-2">
      <h1 className="pt-2 text-base font-medium text-gray-900">Response: </h1>
      {/*    conditional rendering of response */}
      {response ? (
        <div className="p-5 text-gray-800 bg-gray-50/40 backdrop-blur-md rounded-lg space-y-2">
          <div className="font-semibold flex space-x-2">
            <p>Received Text:</p>
            <p className="text-gray-900 font-medium">
              {response["Received Text"]}
            </p>
          </div>
          <div className="font-semibold flex space-x-2">
            <p>Prediction:</p>
            <p className="text-gray-900 font-medium">
              {response["Prediction"]}
            </p>
          </div>
          <div className="font-semibold flex space-x-2">
            <p>Probability:</p>
            <p className="text-gray-900 font-medium">
              {response["Probability"]}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Res;
