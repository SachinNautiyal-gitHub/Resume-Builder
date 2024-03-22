# Almabetter Frontend Project

# Resume Builder 
The Resume Builder project is a robust application developed using React, Material UI, and Redux for state management, aimed at simplifying the process of crafting professional resumes. This project offers users a seamless and intuitive interface to create personalized resumes tailored to their unique skills, experiences, and preferences.



## Application Folder Structure
1. [src/asset/Checks] -> Containing InputChecks file, which will check for the if any of input feild is filled or empty.

2. [src/asset/data] -> Containing two file data.js , and templates.js, In the data file we have custome fake data for resume template    and in the templates.js file we have array data of templates.

3. [src/asset/templates] -> Containing four Resume templates.

4. [src/components/AppComponents] -> Containing all the app component which is used in app.

5. [src/components/TemplateComponents] -> Containing all the resume components which is used in resume templates.

6. [src/components/Styles] -> Containing all the seprate css files of components.

7. [src/images] -> Containing all the images used in the project.

8. [src/pages] -> Containing all the pages file .

9. [src/pages/Styles] -> All the seprate css file of pages is inside this folder.

10. [src/redux] -> Containing two folder action and reducer, for state management of the app.

11. [src/store.js] - creating a react store inside this file.
   

```
├── public
├── src/
│   ├── asset
│   │       ├── Checks 
│   │       │      ├── InputChecks.js
│   │       ├── data
│   │       │      ├── data.js
│   │       │      ├── templates.js
│   │       ├── templates
│   │              ├── template1
│   │                        ├── Template1.js
│   │                        ├── template1.module.css
│   │              ├── template2
│   │                        ├── Template2.js
│   │                        ├── template2.module.css
│   │              ├── template3
│   │                        ├── Template3.js
│   │                        ├── template3.module.css
│   │              ├── template4
│   │                        ├── Template4.js
│   │                        ├── template4.module.css
│   │
│   ├── components
│   │       ├──  AppComponents
│   │                 ├── EducationSection.jsx
│   │                 ├── Footer.jsx
│   │                 ├── Input.jsx
│   │                 ├── KeySkills.jsx
│   │                 ├── Navbar.jsx
│   │                 ├── NextBackButton.jsx
│   │                 ├── PersonalInfo.jsx
│   │                 ├── ResumePreview.jsx
│   │                 ├── SelectedComponent.jsx
│   │                 ├── SidebarDetailFilling.jsx
│   │                 ├── WorkExperience.jsx 
│   │ 
│   │
│   │        ├── Styles - All the css files for componets files
│   │ 
│   │       ├──  TemplateComponents
│   │                 ├── HeaderSection.jsx
│   │                 ├── TemplateHeading.jsx
│   │                 ├── TemplateContact.jsx
│   │                 ├── TemplateEducation.jsx
│   │                 ├── TemplateExperience.jsx
│   │                 ├── TemplateKeySkills.jsx
│   │                 ├── TemplateObjective.jsx
│   │                 ├── TemplateProfileImg.jsx
│   │                 ├── TemplateProfileName.jsx
│   │
│   ├── images  - All the images used in this project is inside this folder 
│   ├── pages
│   │      ├── Styles - seprate css files for all the pages inside this folder 
│   │      ├── AboutUs.jsx
│   │      ├── DetailsFilling.jsx
│   │      ├── Home.jsx
│   │      ├── MyResume.jsx
│   │      ├── Preview.jsx
│   ├── redux
│   │      ├── action - Actions.js
│   │      ├── Reducer 
│   │            ├── CombileReducer.js
│   ├──          ├── Reducers.js
│   ├── App.css 
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── Store.js    
│       
│ 
├── README.md  
├── {} package-lock.json
└── {}package.json
```

## Installation 

You'll need to have **Node.js**  installed on your computer in order to begin working on the project. 

Once installed, Clone this repository to your **local** machine.

Install the required dependencies as mentioned below by using **npm install** command.
Start the server by using **npm start**.


## Deployment

Visit to see the working of Project : https://www.loom.com/share/61c833f61dd9491e9231c5824caa77e9?sid=54db399f-b6f6-4b0b-9570-f216e412fad1

See live site :  https://resume-builder-kappa-lovat.vercel.app/