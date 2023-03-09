//react deps
import React, { useRef } from 'react'
//content editable deps
import ContentEditable from 'react-contenteditable'

class EditableTitle extends React.Component {
    constructor(props) {
        super(props)
        this.contentEditable = React.createRef()
        this.state = { html: props.title }
    }

    handleChange = event => {
        this.setState({ html: event.target.value })
    }

    render = () => {
        return (
            <ContentEditable
                innerRef={this.contentEditable}
                html={this.state.html}
                disabled={false}
                onChange={this.handleChange}
                onBlur={this.props.onBlur(this.state.html)}
                style={{
                    width: '100%',
                    padding: '1rem 0',
                    textTransform: 'uppercase'
                }}
            />
        )
    }
}

export default EditableTitle
