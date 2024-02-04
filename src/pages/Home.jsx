import React from 'react'
import "./Styles/Home.css";
import {  Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { connect } from "react-redux";

import { templates } from "../asset/data/templates";


const Home = () => {

 const navigate = useNavigate();

 const handleOnClick = (id) =>{
     navigate('/fill-details')
 }



  return (
    <>
      <>
        <div className="home">
          <div className="home-templates-cont">
            <h2 className="template-header-title">Templates</h2>
            <p className="template-select-text">
              Select a template to get started
            </p>

            <Stack
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                  sm: "1fr 1fr",
                  md: "1fr 1fr",
                  lg: "1fr 1fr 1fr",
                  xl: "1fr 1fr 1fr 1fr",
                },
                gridGap: "30px",
              }}
            >
              {templates.map((template) => {
                return (
                  <Box
                    key={template.id}
                    id="template"
                    className="templates-img-cont"
                  >
                    <img
                      style={{ width: "75%" }}
                      className="template-img"
                      src={template.template_img}
                      alt={template.template_name}
                    />
                    <Button
                      className="use-template-btn"
                      onClick={() => handleOnClick(template.id)}
                      size="medium"
                      variant="contained"
                      color="primary"
                    >
                      Use Template
                    </Button>
                  </Box>
                );
              })}
            </Stack>
          </div>
        </div>
      </>
    
    </>
  )
}

export default Home
