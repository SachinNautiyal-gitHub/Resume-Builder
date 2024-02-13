import "./Styles/MyResumes.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";
import Grid from "@mui/material/Grid";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { connect } from "react-redux";
import { templates } from "../asset/data/templates";
import { addAllExperience, addEducation, addPersonalInfo, editSkill, selectResume,selectTemplate,} from "../redux/action/Actions";



const StatetoProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const DispatchtoProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
  setSelectedResumeId: (id) => dispatch(selectResume(id)),
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
  onAddEducation: (details) => dispatch(addEducation(details)),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
});

const MyResumes = (props) => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const newResumes = window.localStorage.getItem("resumes")
      ? JSON.parse(window.localStorage.getItem("resumes"))
      : [];

    setResumes(newResumes);
  }, []);

  const navigate = useNavigate();

  const getTemplate = (resume, index) => {
    let template = templates.find(
      (eachTemplate) => eachTemplate.id === resume.template_id
    );
   
    const TemplateComp = React.cloneElement(template.template, {
      personalinfo: resume.personalInfo,
      workexperience: resume.experiences,
      educationinfo: resume.educationInfo,
      skills: resume.skills,
      key: resume.id,
      index: index,
    });

    return TemplateComp;
  };

  const deleteResume = (resume) => {
    let resumes = window.localStorage.getItem("resumes");

    let newResumes = JSON.parse(resumes);
    const newSetOfResumes = newResumes.filter((eachResume) => {
      return eachResume.id !== resume.id;
    });

    window.localStorage.setItem("resumes", JSON.stringify(newSetOfResumes));
    setResumes(newSetOfResumes);
  };

  const downloadResume = (id) => {
    const doc = new JsPDF("p", "pt", "a4");
    const capture = document.getElementById(`${id}ITEM`);
  
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); // Correct MIME type
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
  
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      doc.save(`resume.pdf`);
    });
  };
  

  const setUserData = (resume) => {

    props.onAddPersonalInfo(resume.personalInfo);


    props.setAllExperience(resume.experiences);


    props.onAddEducation(resume.educationInfo);


    props.onEditSkill(resume.skills);
  };

  const navigateToFillDetails = (resume) => {
    props.setSelectedTemplateId(resume.template_id);
    props.setSelectedResumeId(resume.id);
    setUserData(resume);
    navigate("/fill-details");
  };

  return (
    <>
      <div className="my-resumes">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="grid"
          >
            {resumes.length >= 1 ? (
              resumes.map((resume, index) => {
                return (
                  <Grid
                    item
                    className={`resume `}
                    id={`${index}resume`}
                    margin={2}
                    key={index}
                  >
                    <div id={`${index}ITEM`}>
                    {getTemplate(resume, index)}
                      <div className="use-template-btn-cont">
                        <Button
                          className="use-template-btn"
                          onClick={() => {
                            downloadResume(index);
                          }}
                          size="medium"
                          variant="contained"
                        >
                          Download
                        </Button>
                        <Button
                          className="use-template-btn"
                          onClick={() => {
                            deleteResume(resume);
                          }}
                          size="medium"
                          variant="contained"
                        >
                          Delete
                        </Button>
                        <Button
                          className="use-template-btn"
                          onClick={() => navigateToFillDetails(resume)}
                          size="medium"
                          variant="contained"
                        >
                          Edit Template
                        </Button>
                      </div>
                    </div>
                  </Grid>
                );
              })
            ) : (
              <div className="no-resumes-container">
                <SentimentVeryDissatisfiedIcon fontSize="large" />
                <p className="no-resumes-text">
                  You do not have any Resumes yet. Make One to view it here.
                </p>
              </div>
            )}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default connect(StatetoProps, DispatchtoProps)(MyResumes);
