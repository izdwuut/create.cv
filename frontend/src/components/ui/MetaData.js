import * as React from 'react';
import { Form, TextArea, Container, Accordion, Icon, Input } from 'semantic-ui-react'
import { updateFirstName } from '../../redux/actions/ui/metaData/actions'
import { connect } from "react-redux";

export class MetaData extends React.Component {
    render() {
        return (
            <Form>
                <Form.Input label='Name' type='text' onChange={e => this.props.updateFirstName(e.target.value)} value={this.props.firstName} />
                <Form.Input label='Second name' type='text' />
                <Form.Input label='Last name' type='text' />
                <Form.Input label='Position' type='text' />
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return state.metaData
}

export default connect(
    mapStateToProps,
    { updateFirstName }
)(MetaData);