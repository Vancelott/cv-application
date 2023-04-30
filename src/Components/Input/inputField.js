import React from 'react';
import './inputStyle.css';
// import { useForm } from "react-hook-form";

const basicInfo = ['First Name', 'Last Name', 'Email', 'Phone'];
const education = ['School Name', 'Title of qualification', 'Date of Study'];
const experience = ['Company Name', 'Position Title', 'Tasks at your job'];

// add date picker for education and experience

// const { register, handleSubmit } = useForm();

const onInputChange = (event) => {
  <div>{event.target.value}</div>
}

const infoInput = basicInfo.map((index) => (
    <input className="input" key={index} onChange={onInputChange}/>
  ));
  const infoText = basicInfo.map((element, index) => (
      <p className="inputText" key={index}>{element}</p>
  ));
      const educationInput = education.map((index) => (
      <input key={index}/>
      ));
      const educationText = education.map((element, index) => (
        <p className="inputText" key={index}>{element}</p>
      ));
          const experienceInput = experience.map((index) => (
          <input key={index}/>
          ));

          const experienceText = experience.map((element, index) => (
              <p className="inputText" key={index}>{element}</p>
            ));

const InputField = () => {    
            const infoList = infoText.map((element, index) => (
                <React.Fragment key={index}>
                {element}
                {infoInput[index]}
                </React.Fragment>
            ));
            const educationList = educationText.map((element, index) => (
                <React.Fragment key={index}>
                {element}
                {educationInput[index]}
                </React.Fragment>
            ));
            const experienceList = experienceText.map((element, index) => (
                <React.Fragment key={index}>
                {element}
                {experienceInput[index]}
                </React.Fragment>
            ));
          return (
            <form>
                <div className="infoList">
              <ul>{infoList}</ul>
                </div>
              <ul>{educationList}</ul>
              <ul>{experienceList}</ul>
              <button onClick={DisplayInput}>Submit</button>
            </form>
          );
};

const DisplayInput = (onSubmit) => {
    console.log( {onInputChange} )
}

export default InputField;