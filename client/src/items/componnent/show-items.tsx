import { Component, ReactNode } from "react";
import WithRouter, { IWithRouterProps } from "../../app/with-router";
import { Item } from "../types";
import { Outlet } from "react-router-dom";

const ShowItems = WithRouter(class ShowItemsWithoutRouter extends Component<ItemProps, ItaemState>{

  constructor(props: ItemProps) {
    super(props)
    let itemsOrginalArray: Array<Item> = JSON.parse(localStorage.getItem("items") || "[]")! ;
    
    this.state = {
      itemsOrginalArray: itemsOrginalArray,
      items: itemsOrginalArray
    }
    this.searchInput = this.searchInput.bind(this)
  }  
  searchInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setTimeout(() => this.filterItems(e), 400);
  }

  filterItems(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ items: this.state.itemsOrginalArray.filter(x => x.name.includes(e.target.value)), itemsOrginalArray: this.state.itemsOrginalArray },
      () => { console.log(this.state.items) })
  }



  render(): ReactNode {
    const { navigate } = this.props
    const { items } = this.state
    return (
      <div>
        <input type="text" onChange={this.searchInput} />
        {items.map((x) => (
          <div key={x.id}>
            {x.id}  {x.name}  {x.price}
            <button onClick={() => { navigate(`/itemDetailse/${x.id}`) }}>details</button>
            <button onClick={() => { navigate(`/editItem/${x.id}`) }}>edit</button>
          </div>
        ))
        }
        <Outlet />
      </div>
    );
  }
}
)
export default ShowItems;

type ItemProps = IItemProps & IWithRouterProps;
type ItaemState = IItemState;

interface IItemProps { }
interface IItemState {
  items: Array<Item>
  itemsOrginalArray: Array<Item>
}



