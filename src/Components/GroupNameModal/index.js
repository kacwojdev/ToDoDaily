import { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { DarkenButton, PrimaryButton } from '../../styledComponents'

const ModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ModalInput = styled.input`
    border-radius: 20px;
    padding: 10px 30px;
    color: black;
    font-size: 1.2rem;
`

const CorrectionInfo = styled.span`
    color: rgb(222 35 35);
    margin-top: 1rem;
`

const ButtonsGroup = styled.div`
    margin-top: 1rem;
`

const GroupNameModal = ({ visible, handleSetVisibility, addGroup }) => {
    const [inputValue, setInput] = useState('')
    const [correctInput, setInputValidation] = useState(true)

    const confirmAction = () => {
        if (inputValue !== '') {
            handleSetVisibility(false)
            addGroup({
                id: 12,
                name: inputValue,
                data: []
            })
            setInputValidation(true)
            setInput('')
        } else {
            setInputValidation(false)
        }
    }

    const cancelAction = () => {
        handleSetVisibility(false)
        setInputValidation(true)
        setInput('')
    }

    const handleInputChange = e => {
        setInput(e.target.value)
    }

    return (
        <>
            {visible ? (
                <ModalBox>
                    <h3>Type group name:</h3>
                    <ModalInput value={inputValue} onChange={handleInputChange}></ModalInput>
                    {correctInput ? null : (
                        <CorrectionInfo>your group name is incorrect...</CorrectionInfo>
                    )}
                    <ButtonsGroup>
                        <DarkenButton onClick={confirmAction}>Done</DarkenButton>
                        <PrimaryButton onClick={cancelAction}>Cancel</PrimaryButton>
                    </ButtonsGroup>
                </ModalBox>
            ) : null}
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    addGroup: group => dispatch({ type: 'GROUP_ADD', group })
})

export default connect(null, mapDispatchToProps)(GroupNameModal)
