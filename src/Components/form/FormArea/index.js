import React from 'react'
import styled from 'styled-components'

const FormAreaBox = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: left;
    margin-bottom: 30px;
`

const FormInput = styled.input`
    padding: 15px 20px;
    border-radius: 15px;
    border: none;
`

const FormLabel = styled.label`
    margin-bottom: 5px;
    color: rgb(199 199 199);
`

const NotValidMsg = styled.p`
    color: red;
`

const FormArea = React.forwardRef((props, ref) => {

    return (
        <FormAreaBox>
            <FormLabel>{props.label}</FormLabel>
            <FormInput ref={ref} data-type={props.dataType} type={props.inputType}></FormInput>
            {props.isValid ? null : <NotValidMsg>{props.notValidMsg}</NotValidMsg>}
        </FormAreaBox>
    )
})

export default FormArea