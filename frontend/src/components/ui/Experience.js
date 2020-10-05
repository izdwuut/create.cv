import * as React from 'react';
import {
    Button,
    Segment,
    Form,
    Input,
    TextArea,
    Header
} from 'semantic-ui-react'
import { connect } from "react-redux"
import MainContext from '../../CreateCVApp'
import debounce from '../../utilities/debounce'
import { updatePreview } from '../../redux/actions/pdf/pdfViewer/actions'
import { debounceTime } from '../../utilities/variables'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../redux/actions/ui/experience/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const mapStateToProps = state => {
    return state.experience
}



export class Experience extends React.Component {

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateHeader = header => {
        this.props.updateHeader(header)
        this.updatePreview()
    }

    updatePosition = (id, position) => {
        this.props.updatePosition(id, position)
        this.updatePreview()
    }

    updateCompany = (id, company) => {
        this.props.updateCompany(id, company)
        this.updatePreview()
    }

    updateCity = (id, city) => {
        this.props.updateCity(id, city)
        this.updatePreview()
    }

    updateCountry = (id, country) => {
        this.props.updateCountry(id, country)
        this.updatePreview()
    }

    updateDescription = (id, description) => {
        this.props.updateDescription(id, description)
        this.updatePreview()
    }

    updateFromDate = (id, from) => {
        this.props.updateFromDate(id, new Date(from))
        this.updatePreview()
    }

    updateToDate = (id, to) => {
        this.props.updateToDate(id, new Date(to))
        this.updatePreview()
    }

    deleteExperience = id => {
        this.props.deleteExperience(id)
        this.updatePreview()
    }

    addExperience = () => {
        this.props.addExperience({
            position: '',
            company: '',
            city: '',
            country: '',
            fromDate: new Date(),
            toDate: new Date(),
            description: ''
        })
        this.updatePreview()
    }
    render() {
        let experience = []
        if (experience) {
            for (let i = 0; i < this.props.experience.length; i++) {
                experience.push(
                    <Segment>
                        <Form.Field
                            control={Input}
                            label='Position'
                            value={this.props.experience[i].position}
                            onChange={e => this.updatePosition(i, e.target.value)}
                        />
                        <Form.Field
                            control={Input}
                            label='Company'
                            value={this.props.experience[i].company}
                            onChange={e => this.updateCompany(i, e.target.value)}
                        />
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='City'
                                value={this.props.experience[i].city}
                                onChange={e => this.updateCity(i, e.target.value)}
                            />
                            <Form.Field
                                control={Input}
                                label='Country'
                                value={this.props.experience[i].country}
                                onChange={e => this.updateCountry(i, e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <DatePicker
                                selected={this.props.experience[i].fromDate}
                                onChange={date => this.updateFromDate(i, date)}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                                showFullMonthYearPicker
                            />
                            <DatePicker
                                selected={this.props.experience[i].toDate}
                                onChange={date => this.updateToDate(i, date)}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                                showFullMonthYearPicker
                            />

                        </Form.Group>
                        <Form.Field
                            control={TextArea}
                            label='Description'
                            value={this.props.experience[i].description}
                            onChange={e => this.updateDescription(i, e.target.value)}
                        />
                        <Button onClick={() => this.deleteExperience(i)}>
                            Delete
                </Button>
                    </Segment>
                )
            }

            return (
                <Segment>
                    <Header>{this.props.header}</Header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                    {experience.length > 0 &&
                        <Form>
                            {experience}
                        </Form>
                    }

                    <Button onClick={() => this.addExperience()}>
                        Add
            </Button>
                </Segment>
            )
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: header => dispatch(Actions.updateHeader(header)),
        updatePreview: isUpdate => dispatch(updatePreview(isUpdate)),
        updatePosition: (id, position) => dispatch(Actions.updatePosition(id, position)),
        updateCompany: (id, company) => dispatch(Actions.updateCompany(id, company)),
        updateCity: (id, city) => dispatch(Actions.updateCity(id, city)),
        updateCountry: (id, country) => dispatch(Actions.updateCountry(id, country)),
        updateFromDate: (id, from) => dispatch(Actions.updateFromDate(id, from)),
        updateToDate: (id, to) => dispatch(Actions.updateToDate(id, to)),
        updateDescription: (id, description) => dispatch(Actions.updateDescription(id, description)),
        deleteExperience: id => dispatch(Actions.deleteExperience(id)),
        addExperience: experience => dispatch(Actions.addExperience(experience)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Experience)