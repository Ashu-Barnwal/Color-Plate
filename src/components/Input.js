const Input = ({handleChange, inputRef, cName}) => {
    return (
        <div>
            <input 
                className={`inputBox${cName}`}
                autoFocus
                ref={inputRef}
                type="text"
                placeholder="Color Name/ #HexCode"
                onChange={(e) => {
                    handleChange(e);
                }}
            />
        </div>
    )
}

export default Input