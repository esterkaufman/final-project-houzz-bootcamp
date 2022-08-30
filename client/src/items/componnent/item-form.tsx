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
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }


  handleFormChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newItem: Item = { ...this.state.item! }
    switch (e.target.name) {
      case ("name"):
        newItem.name = e.target.value
        this.setState({ item: newItem });
        break;
      case ("price"):
        newItem.price = +e.target.value
        this.setState({ item: newItem })
    }
  }

  handleFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    this.props.OnSubmitDoing()
    this.props.navigate("/Data")
  }

  render(): ReactNode {

    const { item } = this.state

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" placeholder="name" value={item?.name} onChange={this.handleFormChange} name="name" />
        <input type="number" placeholder="price" value={item?.price} onChange={this.handleFormChange} name="price" />
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