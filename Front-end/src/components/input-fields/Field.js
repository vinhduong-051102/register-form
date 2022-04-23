const Field = (props) => {
  const { nameField, numberCol = 1, children } = props;
  if(numberCol === 1) {
    const field_1 = (
    <div className="form-row">
      <div className="name">{nameField}</div>
      <div className="value">
        {children}
      </div>
    </div>
  )
    return field_1
  }
  else {
    const field_2 = (
      <div className="form-row m-b-55">
        <div className="name">{nameField}</div>
        <div className="value">
          <div className="row row-space">
              {children.map((child, index) => {
                return (
                  <div className="col-2" key={index}>
                    {child}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    )
    return field_2
  }
}

export default Field