import { ConfigProvider } from 'antd';
import FormRender, { useForm, Schema } from 'form-render';

// TODO
// - alignのようなenumはどのように扱うのか -> widgetを作って
//   https://xrender.fun/form-render/advanced-widget#%E4%BB%80%E4%B9%88%E6%98%AF-widget
// - ラベルのフォントサイズはどのように調整するのか -> labelを変えつつ、design-tokenをカスタマイズする
//   https://ant.design/docs/react/customize-theme#customize-design-token

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
      position: {
        type: 'object',
        widget: 'card',
        column: 2,
        properties: {
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
        }
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
        title: 'H-Align',
        className: 'pdfme-test',
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
        title: 'V-Align',
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
        title: 'Char Spc',
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
        title: 'Size Min',
        type: 'number',
        widget: 'inputNumber',
        span: 8,
      },
      fontSizeMax: {
        title: 'Size Max',
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

  form.setValues({
    type: 'Option2',
    name: 'Name',
    align: 'Align',
    position: { x: 0, y: 0 },
    width: 0,
    height: 0,
    fontname: 'Arial',
    horizontalAlign: 'left',
    verticalAlign: 'top',
    fontSize: 0,
    lineHeight: 0,
    characterSpacing: 0,
    useDynamicFontSize: false,
    fontSizeMin: 0,
    fontSizeMax: 0,
    fit: 'Fit1'
  });

  return (
    <ConfigProvider theme={{ token: { fontSize: 13 } }}>
      <div>
        <FormRender
          form={form}
          schema={schema}
          watch={{
            '#': (allValues) => {
              console.log('watch all:', allValues);
            }
          }}
          locale='en-US'
        />
      </div>
    </ConfigProvider>
  );
};

export default App;
