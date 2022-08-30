import { Component } from "react";
import './App.css';
import AppRouter from "./app/app-router";
import { GetAll } from "./app/server-calls";
import { Item } from "./items/types";

class App extends Component<AppProps, AppState>{

   async  componentDidMount(){
    let items : Array<Item> = []
    await GetAll('items')
    .then((data) => {      
      items = {...data}
    }) 
    localStorage.setItem("items", JSON.stringify(items));
  }

  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

type AppProps = IAppProps
type AppState = IAppState
interface IAppProps { }
interface IAppState { items?: Array<Item> }

export default App;


