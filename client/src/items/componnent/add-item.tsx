import { Component, ReactNode } from "react";
import { Add } from "../../app/server-calls";
import ItemForm from "./item-form";

class AddItem extends Component<AddItemProps, AddItemState> {

    constructor(props: AddItemProps) {
        super(props)
        this.state = {}
        this.AddItem = this.AddItem.bind(this)
    }

    AddItem(): void {
        // Add("items")
    }

    render(): ReactNode {
        return (
            <div>
                add Item
                <ItemForm OnSubmitDoing={this.AddItem}></ItemForm>
            </div>
        )
    }

}

export default AddItem

type AddItemProps = IAddItemProps
type AddItemState = IAddItemState

interface IAddItemProps { }
interface IAddItemState { }