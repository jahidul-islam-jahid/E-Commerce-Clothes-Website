import React from "react";

function Title({title,secondTitle,description}) {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-semibold">
        {title} <strong className="text-[#516EBF]">{secondTitle}</strong>
      </h1>
      <p className="text-lg py-2 text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default Title;
