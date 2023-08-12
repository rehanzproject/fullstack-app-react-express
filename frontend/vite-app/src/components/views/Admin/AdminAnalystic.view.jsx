import React from "react";
import ChartAdmin from "../../organism/ChartAdmin/ChartAdmin.organism";

function AdminAnalystic() {
  return (
    <div className="p-10 bg-dark-20">
      <div className=" bg-white p-10">
        <h1 className="font-bold text-2xl">Visitor Analystic</h1>
        <ChartAdmin />
      </div>
    </div>
  );
}

export default AdminAnalystic;
