import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import EducationSection from "../components/EducationSection";
import KeySkills from "../components/KeySkills";
import PersonalInfo from "../components/PersonalInfo";
import ResumePreview from "../components/ResumePreview";
import WorkExperience from "../components/WorkExperience";
import SidebarDetailFilling from "../components/SidebarDetailFilling";
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


const DetailsFilling = () => {
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
