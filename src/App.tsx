import FormRender, { useForm, Schema } from 'form-render';

// TODO
// - フォントサイズはどのように調整するのか
// - selectの値を変更しても、onChangeが呼ばれない

const App = () => {
  const form = useForm();

  const schema: Schema = {
    type: 'object',
    column: 2,
    properties: {
      type: {
        title: 'Type',
        type: 'string',
        widget: 'select',
        props: {
          options: [
            { label: 'Option1', value: 'Option1' },
            { label: 'Option2', value: 'Option2' },
            { label: 'Option3', value: 'Option3' }
          ]
        },
      },
      name: {
        title: 'Name',
        type: 'string',
        widget: 'input',
      },
      align: {
        title: 'Align',
        type: 'string',
        widget: 'button',
        cellSpan: 2,
      },
      x: {
        title: 'X',
        type: 'number',
        widget: 'inputNumber',
      },
      y: {
        title: 'Y',
        type: 'number',
        widget: 'inputNumber',
      },
      width: {
        title: 'Width',
        type: 'number',
        widget: 'inputNumber',
      },
      height: {
        title: 'Height',
        type: 'number',
        widget: 'inputNumber',
      },
      fontname: {
        title: 'Font Name',
        type: 'string',
        widget: 'select',
        props: {
          options: [
            { label: 'Arial', value: 'Arial' },
            { label: 'Helvetica', value: 'Helvetica' },
            { label: 'Times New Roman', value: 'TimesNewRoman' }
          ]
        },
        span: 8,
      },
      horizontalAlign: {
        title: 'Horizontal Align',
        type: 'string',
        widget: 'select',
        props: {
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' }
          ]
        },
        span: 8,
      },
      verticalAlign: {
        title: 'Vertical Align',
        type: 'string',
        widget: 'select',
        props: {
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Middle', value: 'middle' },
            { label: 'Bottom', value: 'bottom' }
          ]
        },
        span: 8,
      },
      fontSize: {
        title: 'Font Size',
        type: 'number',
        widget: 'inputNumber',
        span: 8
      },
      lineHeight: {
        title: 'Line Height',
        type: 'number',
        widget: 'inputNumber',
        span: 8
      },
      characterSpacing: {
        title: 'Character Spacing',
        type: 'number',
        widget: 'inputNumber',
        span: 8
      },
      useDynamicFontSize: {
        title: 'Use Dynamic Font Size',
        type: 'boolean',
        widget: 'checkbox',
        cellSpan: 2,
      },
      fontSizeMin: {
        title: 'Font Size Min',
        type: 'number',
        widget: 'inputNumber',
        span: 8,
      },
      fontSizeMax: {
        title: 'Font Size Max',
        type: 'number',
        widget: 'inputNumber',
        span: 8,
      },
      fit: {
        title: 'Fit',
        type: 'string',
        widget: 'select',
        props: {
          options: [
            { label: 'Fit1', value: 'Fit1' },
            { label: 'Fit2', value: 'Fit2' },
            { label: 'Fit3', value: 'Fit3' }
          ]
        },
        span: 8,
      }
    }
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onChange={event => {
          console.log('form.getValues();', form.getValues());
          console.log('onChange data:', event);
        }}
        onSelect={event => {
          console.log('form.getValues();', form.getValues());
          console.log('onSelect data:', event);
        }}

      />
    </div>
  );
};

export default App;
