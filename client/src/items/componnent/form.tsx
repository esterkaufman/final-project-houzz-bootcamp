import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
import React, { Component, ReactNode } from "react";
import WithRouter, { IWithRouterProps } from "../../app/with-router"
import { itemsOrginalArray } from "../items";
import { Item } from "../types";

const ItemForm = WithRouter(class ItemFormWithout extends Component<EditOrAddItemProps, EditOrAddItemState>{

  constructor(props: EditOrAddItemProps) {
    super(props)
    this.state = {
      item: itemsOrginalArray.find(x => x.id === +this.props.params.id!)
    }
    this.ChangeName = this.ChangeName.bind(this)
    this.changePrice = this.changePrice.bind(this)
    this.OnSubmit = this.OnSubmit.bind(this)
  }

  ChangeName(e: React.ChangeEvent<HTMLInputElement>): void {
    const newItem: Item = { ...this.state.item! }
    newItem.name = e.target.value
    this.setState({ item: newItem });
  }

  changePrice(e: React.ChangeEvent<HTMLInputElement>): void {
    const newItem: Item = { ...this.state.item! }
    newItem.price = +e.target.value
    this.setState({ item: newItem });
  }

  OnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    this.props.OnSubmitDoing()
    this.props.navigate("/Data")
  }

  render(): ReactNode {

    const { item } = this.state

    return (
      <form onSubmit={this.OnSubmit}>
        <input type="text" placeholder="name" value={item?.name} onChange={this.ChangeName} />
        <input type="number" placeholder="price" value={item?.price} onChange={this.changePrice} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
)
export default ItemForm

type EditOrAddItemProps = ItemFormProps & IWithRouterProps
type EditOrAddItemState = ItemFormState

interface ItemFormProps {
  OnSubmitDoing: () => void
}

interface ItemFormState {
  item?: Item
}