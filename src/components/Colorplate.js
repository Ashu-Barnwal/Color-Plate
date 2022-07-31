const Colorplate = ({bg, hex, cName}) => {
    return (
        <div className={`plate${cName}`}>
            <div className={`colorPlate${cName}`} style={{
                backgroundColor: bg
            }}>
            </div>
            <p>{bg === '' ? 'Empty Value' : bg.toUpperCase()}</p>
            <p>{hex === '' ? '' : hex}</p>
        </div>
    )
}

export default Colorplate