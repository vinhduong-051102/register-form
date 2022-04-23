import Form from "../../components/form/Form";
import Input from "../../components/input-fields/Input";
import Field from "../../components/input-fields/Field";

const EditForm = () => {
  return (
    <Form formName="edit">
      <Field nameField='Name' numberCol={2}>
        <Input labelContent='First name' />
        <Input labelContent='Last name' />
      </Field>
      <Field nameField='Email' numberCol={1}>
        <Input type="email" />
      </Field>
      <Field nameField='User name' numberCol={1}>
        <Input type="text" />
      </Field>
      <Field nameField='Birth date' numberCol={1}>
        <Input type="date" />
      </Field>
      <Field nameField='Gender' numberCol={1}>
        <Input type="select" options={['male', 'female', 'another']} />
      </Field>
      <Field nameField='Password' numberCol={2}>
        <Input type="password" show={{isShow: false}} labelContent='new password' />
        <Input type="password" show={{isShow: false}} labelContent='confirm password'/>
      </Field>
      <Input type="button" labelContent='Submit change' />
    </Form>
  );
};

export default EditForm;
