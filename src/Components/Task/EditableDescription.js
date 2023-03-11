import React from 'react'
import ContentEditable from 'react-contenteditable'

class EditableDescription extends React.Component {
    constructor(props) {
        super(props)
        this.contentEditable = React.createRef()
        this.state = { html: props.content }
    }
    handleChange = event => {
        this.setState({ html: event.target.value })
    }

    render = () => {
        return (
            <ContentEditable
                style={this.props.style}
                innerRef={this.contentEditable}
                html={this.state.html}
                disabled={false}
                onChange={this.handleChange}
                onBlur={() => this.props.onBlur(this.state.html)}
            />
        )
    }
}

export default EditableDescription
