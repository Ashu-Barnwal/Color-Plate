const Input = ({handleChange, inputRef}) => {
    return (
        <div>
            <input 
                autoFocus
                ref={inputRef}
                type="text"
                placeholder="Color Name/ #HexCode"
                style={{
                    borderRadius:'5px',
                    marginTop: '20px',
                    width: '14rem',
                    height: '25px',
                    fontSize: '20px',
                    padding: '5px',
                    boxShadow: '1px 5px 7px #161514',
                    backgroundColor: "transparent",
                    color: '867575'
                }}
                onChange={(e) => {
                    handleChange(e);
                }}
            />
        </div>
    )
}

export default Input