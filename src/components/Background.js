const Background = ({setBStyle, setRStyle, setClassName, cName, inputRef}) => {
    return (
        <div className="btnTheme">
            <button 
                className={`btnW${cName}`}
                onClick={() => {
                    setRStyle('');
                    setBStyle('#c0c0c0');
                    setClassName('');
                    inputRef.current.focus();
                }}
            ></button>
            <button 
                className={`btnD${cName}`}
                onClick={() => {
                    setRStyle('');
                    setBStyle('#403939');
                    setClassName('Dark');
                    inputRef.current.focus();
                }}
            ></button>
            <button 
                className={`btnR${cName}`}
                onClick={() => {
                    setRStyle('fade 20s infinite');
                    setBStyle('lightgreen');
                    setClassName('');
                    inputRef.current.focus();
                }}
            ></button>
        </div>
    )
}

export default Background
