import axios from 'axios';
import React, { Component } from 'react';
import "./HelpOptions.css";
class LearningOptions extends Component<{props:any},{options:Array<any>}>  {
  options: any=[];
 constructor(props:any){
  super(props)
  
 }
 
  // options = [
  //   {
  //     text: "Javascript",
  //     handler: (this.props as any).actionProvider.handleJavascriptList,
  //     id: 1,
  //   },
  //   { text: "Data visualization", handler: () => {}, id: 2 },
  //   { text: "APIs", handler: () => {}, id: 3 },
  //   { text: "Security", handler: () => {}, id: 4 },
  //   { text: "Interview prep", handler: () => {}, id: 5 },
  // ];

 a=axios.get('http://localhost:8080/chatbot/getAllItems').then(response=>{
console.log(response.data);
this.options=response.data
 },err=>{
console.log(err);
 })

  optionsMarkup = this.options.map((option:any) => (
    <button
      className="learning-option-button"
   >
      {option.title}
    </button>
  ));
//   key={option.id}
//   onClick={option.handler}
// >
//   {option.text}
  render() {
    
  return (
    <div className="learning-options-container">{this.optionsMarkup}</div>);
};
}
export default LearningOptions;