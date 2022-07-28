const Background = ({setBStyle, setRStyle, setClassName, inputRef}) => {
    return (
        <div>
            <button 
                className="btnW"
                onClick={() => {
                    setRStyle('');
                    setBStyle('#c0c0c0');
                    setClassName('');
                    inputRef.current.focus();
                }}
            ></button>
            <button 
                className="btnD"
                onClick={() => {
                    setRStyle('');
                    setBStyle('#403939');
                    setClassName('Dark');
                    inputRef.current.focus();
                }}
            ></button>
            <button 
                className="btnR"
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
