const Colorplate = ({bg, hex}) => {
    const dColor = [
        'black', 
        '#000', 
        '#000000',
        'grey',
        'blue',
        'darkblue'
    ];
    const invColor = dColor.includes(bg.toLowerCase()) ? 'white' : 'black';
    return (
        <div style={{
            backgroundColor: bg,
            color: invColor,
            border: '2px solid ' + invColor,
            borderRadius: '10px',
            width: '14rem',
            height: '12rem',
            padding: '1rem',
            fontSize: '2rem',
            boxShadow: '1px 5px 7px #161514',
            overflowWrap: 'break-word'
        }}>
            <p>{bg === '' ? 'Empty Value' : bg}</p>
            <p>{hex === '' ? '' : hex}</p>
        </div>
    )
}

export default Colorplate