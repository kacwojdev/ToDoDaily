import styled from 'styled-components'
import { PrimaryButton } from '../../../styledComponents'

export const RegisterSubmitBtn = styled(PrimaryButton)`
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    background: ${props => (props.disabled ? 'rgb(125 229 185)' : 'rgb(54, 179, 126)')};
    color: white;
    border-radius: 0;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`
