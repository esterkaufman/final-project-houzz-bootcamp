import { Component, ReactNode } from "react";
import { Edit } from "../../app/server-calls";
import WithRouter, { IWithRouterProps } from "../../app/with-router";
import ItemForm from "./item-form";

const EditItem = WithRouter(class EditItemWithoutRouter extends Component<EditItemProps, EditItemState> {

    constructor(props: EditItemProps) {
        super(props)
        this.state = {}
        this.EditItem = this.EditItem.bind(this)
    }

    EditItem(): void {
        Edit("items" ,this.props.params.id!)
    }

    render(): ReactNode {
        const { params } = this.props
        return (
            <div>
                id: {params.id}
                <ItemForm OnSubmitDoing={this.EditItem}></ItemForm>
            </div>
        )
    }

}
)

export default EditItem

type EditItemProps = IEditItemProps & IWithRouterProps
type EditItemState = IEditItemState

interface IEditItemProps { }
interface IEditItemState {
}