import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input: {
      title: '输入框',
      type: 'string',
      widget: 'input',
    },
    select: {
      title: '下拉框',
      type: 'string',
      widget: 'select',
      props: {
        options: [
          { label: '早', value: 'a' },
          { label: '中', value: 'b' },
          { label: '晚', value: 'c' },
        ],
      },
    },
  },
};

export default () => {
  const form = useForm();

  const onFinish = (formData) => {
    console.log('formData:', formData);
  };

  return (
    <FormRender
      form={form}
      schema={schema}
      onFinish={onFinish}
      maxWidth={360}
      footer={true}
    />
  );
};
