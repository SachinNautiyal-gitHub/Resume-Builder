import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import EducationSection from "../components/AppComponents/EducationSection";
import KeySkills from "../components/AppComponents/KeySkills";
import PersonalInfo from "../components/AppComponents/PersonalInfo";
import ResumePreview from "../components/AppComponents/ResumePreview";
import WorkExperience from "../components/AppComponents/WorkExperience";
import SidebarDetailFilling from "../components/AppComponents/SidebarDetailFilling";
// import {
//   Navbar,
//   SidebarDetailFilling,
//   EducationSection,
//   KeySkills,
//   PersonalInfo,
//   ResumePreview,
//   WorkExperience,
// } from "./";
import "./Styles/DetailsFilling.css";


const DetailsFilling = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="details-filling">
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          <SidebarDetailFilling tab={tab} setTab={setTab} />
          {tab === 0 ? ( <PersonalInfo setTab={setTab} tab={tab} /> ) : null}
          {tab === 1 ? ( <WorkExperience setTab={setTab} tab={tab} /> ) : null}
          {tab === 2 ? <EducationSection setTab={setTab} tab={tab} /> : null}
          {tab === 3 ? <KeySkills setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 4 ? <ResumePreview setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default DetailsFilling;
