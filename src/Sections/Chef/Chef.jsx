/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ChefCard from "../../Components/Home/ChefCard/ChefCard";
import "./Chef.css";

const Chef = ({ data }) => {
  return (
    <>
      <h1 className="text-center mt-3" style={{ color: "lightsalmon" }}>
        Meet Our Chef
      </h1>
      <div className="chef-card">
        {data.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </>
  );
};

export default Chef;
