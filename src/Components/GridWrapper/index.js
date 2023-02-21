const GridWrapper = ({ children }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateRows: 'auto 1fr auto',
                height: '100vh'
            }}
        >
            {children}
        </div>
    )
}

export default GridWrapper
