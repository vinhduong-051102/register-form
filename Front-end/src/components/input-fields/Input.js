
const Input = (props) => {
  const {
    type = "text",
    labelContent,
    action = () => {},
    valueInput,
    placeholder = "",
    checked = false,
    show = {},
    options = [],
    inputName=''
  } = props;
  const { isShow, isShowPassword, handleChangeShow, inputValue } = show;
  if (type === "select") {
    return (
      <div className="input-group">
        <div className="rs-select2 js-select-simple select--no-search">
          <select onChange={action} name={inputName} >
            {options.map((option, index) => {
              return <option key={index} selected={option === valueInput} >{option}</option>;
            })}
          </select>
          <div className="select-dropdown"></div>
        </div>
      </div>
    );
  } 
  else if ((type === "button")) {
    return (
      <div>
        <button className="btn btn--radius-2 btn--red" onClick={action}>
          {labelContent}
        </button>
      </div>
    );
  } 
  else {
    return (
      <div className="input-group-desc">
        <input
          className="input--style-5"
          type={type}
          onChange={action}
          value={valueInput}
          placeholder={placeholder}
          checked={checked}
          name={inputName}
        />
        {isShow && (
          <button
            className={
              isShowPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
            }
            onClick={handleChangeShow}
            style={inputValue ? {} : { display: "none" }}
          />
        )}
        {labelContent && <label className="label--desc">{labelContent}</label>}
      </div>
    );
  }
};
export default Input;
