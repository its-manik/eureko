import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col w-full p-6 mx-auto max-w-lg text-center bg-white rounded-lg border border-gray-100 shadow animate-pulse">
      <div className="mb-4 h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>{" "}
      <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto mb-4"></div>{" "}
      <div className="flex justify-center items-center my-8">
        <div className="h-8 bg-gray-300 rounded w-1/4 mx-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/6"></div>
      </div>
      <div className="mb-8 space-y-4">
        {[1, 2, 3, 4, 5].map((key) => (
          <div
            key={key}
            className="h-4 bg-gray-300 rounded w-5/6 mx-auto"
          ></div>
        ))}
      </div>
      <div className="h-10 bg-gray-300 rounded w-1/2 mx-auto"></div>{" "}
    </div>
  );
};

export default loading;
