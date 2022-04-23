

const Form = (props) => {
  const { formName, children } = props;
  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50 m-t-53">
      <div className="wrapper wrapper--w790">
        <div className="card card-5">
          <div className="card-heading">
            <h2 className="title">{formName}</h2>
          </div>
          <div className="card-body">
            <form>
              {children}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form