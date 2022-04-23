const InputText = (props) => {
  const { type, labelContent, action = () => {}, valueInput, placeholder = '' } = props;
  return (
    <div className="input-group-desc">
      <input
        className="input--style-5"
        type={type}
        onChange={action}
        value={valueInput}
        placeholder={placeholder}
      />
      {labelContent && <label className="label--desc">{labelContent}</label>}

    </div>
  );
};
export default InputText;
