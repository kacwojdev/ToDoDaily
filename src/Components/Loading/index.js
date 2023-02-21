import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

const Loading = () => {
    return (
        <div>
            <LoadingBox>Loading ...</LoadingBox>
        </div>
    )
}

export default Loading
