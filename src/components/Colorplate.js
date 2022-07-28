const Colorplate = ({bg, hex, cName}) => {
    // const dColor = [
    //     'black', 
    //     '#000', 
    //     '#000000',
    //     'grey',
    //     'blue',
    //     'darkblue'
    // ];
    // const invColor = dColor.includes(bg.toLowerCase()) ? 'white' : 'black';
    return (
        <div className={`plate${cName}`} style={{
            // backgroundColor: bg,
            // color: invColor,
            // border: '2px solid ' + invColor,
            // borderRadius: '15px',
            // width: '14rem',
            // height: '12rem',
            // padding: '1rem',
            // fontSize: '2rem',
            // boxShadow: '1px 5px 7px #161514',
            // overflowWrap: 'break-word'
        }}>
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