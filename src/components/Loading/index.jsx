import styled from 'styled-components'

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
