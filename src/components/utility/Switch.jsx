
export const Switch = (props) => {
    let {
        label,
        isChecked,
        setIsChecked
    } = props


    return (
        <div className="view-switcher">
            <label htmlFor="switcher" className="switcher-label">{label}</label>
            <input 
                className="toggle" 
                type="checkbox"
                id="switcher"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} 
            />  
        </div>
    )
}
