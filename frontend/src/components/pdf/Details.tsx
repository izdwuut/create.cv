import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';
import { connect, ConnectedProps } from "react-redux"
import { RootState } from 'src/store/reducers';
import * as Types from 'src/store/reducers/components/cv/edit/details/types'

const mapStateToProps = (state:RootState):Types.DetailsState => {
    return state.details
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

export class Details extends React.Component<Props> {
    render():JSX.Element {
        return (
            <View style={this.props.style.section}>
                <Text style={this.props.style.header}>{this.props.emptyHeader ? '' : this.props.header}</Text>
                {(this.props.city != '' || this.props.country != '') &&
                    <Text style={this.props.style.origin}>{this.props.city}{this.props.country != '' && this.props.city != '' ? ', ' : ''}{this.props.country}</Text>
                }
                {this.props.email != '' &&
                    <Link style={this.props.style.email} src={`mailto:${this.props.email}`}>{this.props.email}</Link>
                }
                {this.props.mobile != '' &&
                    <Text style={this.props.style.mobileHeader}>
                        Mobile: {this.props.mobile}
                    </Text>
                }
                {this.props.birthDate != '' &&
                    <Text style={this.props.style.birthDate}>
                        Birth date: {this.props.birthDate}
                    </Text>
                }
                {this.props.drivingLicense != '' &&
                    <Text style={this.props.style.drivingLicense}>
                        Driving license: {this.props.drivingLicense}
                    </Text>
                }
            </View>
        )
    }
}

export default connector(Details)

