const Background = ({setBStyle, setRStyle, inputRef}) => {
    return (
        <div>
            <button 
                className="btnW"
                onClick={() => {
                    setRStyle('');
                    setBStyle('white');
                    inputRef.current.focus();
                }}
            ></button>
            <button 
                className="btnD"
                onClick={() => {
                    setRStyle('');
                    setBStyle('#403939');
                    inputRef.current.focus();
                }}
            ></button>
            <button 
                className="btnR"
                onClick={() => {
                    setRStyle('fade 20s infinite');
                    setBStyle('lightgreen');
                    inputRef.current.focus();
                }}
            ></button>
        </div>
    )
}

export default Background
