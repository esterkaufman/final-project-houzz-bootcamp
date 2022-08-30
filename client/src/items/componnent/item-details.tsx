import { Component, ReactNode } from "react";
import WithRouter, { IWithRouterProps } from "../../app/with-router";
import { Item } from "../types";
import { itemsOrginalArray } from "../items";


const ItemDetailsWithRouter = WithRouter(class ItemDetails extends Component<ItemDetailsProps, ItemStateProps> {

  constructor(props: ItemDetailsProps) {
    super(props);

    this.state = {
      item: itemsOrginalArray.find(x => x.id === +this.props.params.id!)!
    }
  }

  render() : ReactNode{
    const { navigate } = this.props
    const { item } = this.state

    return (
      <div>
        <button onClick={() => { navigate("/") }} >X</button>
        <br />
        id: {item.id}
        <br />
        name: {item.name}
        <br />
        price: {item.price}
      </div>
    );
  }

}
)


export default ItemDetailsWithRouter;

type ItemStateProps = IItemDetailsStase
type ItemDetailsProps = IWithRouterProps & IItemDetailsProps

interface IItemDetailsProps { }
interface IItemDetailsStase {
  item: Item
}
