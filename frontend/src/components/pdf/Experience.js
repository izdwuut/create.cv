import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import MainContext from '../../CreateCVApp';
import { connect } from "react-redux";
import getDateString from '../../utilities/getDateString'
export class Experience extends React.Component {
    render() {
        return (
            <View>
                {this.props.visible &&
                    <View>
                        <Text style={this.props.style.header}>{this.props.header}</Text>
                        {this.props.experience.map(experience => {
                            return <View style={this.props.style.section}>
                                <Text style={this.props.style.header}>{experience.header}</Text>
                                {experience.position != '' &&
                                    <Text style={this.props.style.position}>{experience.position}</Text>
                                }
                                {experience.company != '' &&
                                    <Text style={this.props.style.company}>{experience.company}</Text>
                                }
                                {(experience.city != '' || experience.country != '') &&
                                    <Text style={this.props.style.origin}>{experience.city}{experience.city && experience.country && ', '}{experience.country}</Text>
                                }
                                {(experience.fromDate || experience.toDate) &&
                                    <Text style={this.props.style.duration}>{getDateString(experience.fromDate)}{experience.fromDate && experience.toDate && ' - '}{getDateString(experience.toDate)}</Text>
                                }
                                {experience.description != '' &&
                                    <Text style={this.props.style.description}>{experience.description}</Text>
                                }
                            </View>
                        })}
                    </View>
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state.experience
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Experience);