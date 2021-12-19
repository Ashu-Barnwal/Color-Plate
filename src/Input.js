const Input = ({handleChange}) => {
    return (
        <div>
            <input 
                autoFocus
                type="text"
                placeholder="Color Name/ #HexCode"
                style={{
                    borderRadius:'5px',
                    marginTop: '20px',
                    width: '14rem',
                    height: '25px',
                    fontSize: '20px',
                    padding: '5px',
                    boxShadow: '1px 5px 7px #2E2926',
                    backgroundColor: "transparent"
                }}
                onChange={(e) => {
                    handleChange(e);
                }}
            />
        </div>
    )
}

export default Input