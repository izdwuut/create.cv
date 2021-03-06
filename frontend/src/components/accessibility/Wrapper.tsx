import { connect, ConnectedProps } from "react-redux"
import React from 'react'
import { Global } from '@emotion/core';

import highContrastTheme from 'styles/components/accessibility/themes/highContrastTheme'
import defaultTheme from 'styles/components/accessibility/themes/defaultTheme'
import { RootState } from 'src/store/reducers';

const mapStateToProps = (state: RootState) => {
    return state.accessibility
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

class Wrapper extends React.Component<Props> {
    getTheme() {
        return this.props.isHighContrastMode ? highContrastTheme : defaultTheme
    }

    render() {
        return (
            <div>
                <Global styles={this.getTheme()} />
                {this.props.children}
            </div>
        )
    }
}

export default connector(Wrapper)
