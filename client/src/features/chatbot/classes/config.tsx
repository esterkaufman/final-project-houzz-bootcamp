import { Component, ReactElement } from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import HelpOptions from "../component/HelpOptions/HelpOptions";
import LinkList from '../component/LinkList/LinkList';
const Config =
{
    botName: "LearningBot",
    initialMessages:
    [
        createChatBotMessage("Hi, I'm here to help. What do you want to learn?",
            { widget: "helpOptions" }
            )
    ],
    state:undefined,
    customComponents:undefined,
    customStyles:
    {
        botMessageBox:
        {
            backgroundColor: "#376B7E",
        },
        chatButton:
        {
            backgroundColor: "#376B7E",
        },
    },
    customMessages:undefined,
    widgets: [

        {
            widgetName: "helpOptions",
            widgetFunc: (props:any):ReactElement =>  <HelpOptions {...props}/> ,
            props:undefined   ,
            mapStateToProps:[]       
          },
          {
            widgetName: "javascriptLinks",
            widgetFunc: (props:any):ReactElement => <LinkList {...props} />,
            props: {
              options: [
                {
                  text: "Introduction to JS",
                  url:
                    "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
                  id: 1,
                },
                {
                  text: "Mozilla JS Guide",
                  url:
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                  id: 2,
                },
                {
                  text: "Frontend Masters",
                  url: "https://frontendmasters.com",
                  id: 3,
                },
              ],
            },
            mapStateToProps:[]       
          },
      
    ]
}
export default Config