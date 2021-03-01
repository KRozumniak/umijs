import { Form, Input, Button } from 'antd';
import { connect } from "umi";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function bookUpdate (props: any) {
  const [form] = Form.useForm();

  const id = props.id;

  const onFinish = (newName: any) => {
    const obj = {
      id,
      newName
    }
    props.updateBook(obj)
    console.log(id);
    console.log(newName);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="New name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={() => props.showModal(false)}>
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  updateBook: (obj: any) => dispatch({ type: "Book/updateBook", payload: obj }),
});

export default connect(null, mapDispatchToProps)(bookUpdate);
