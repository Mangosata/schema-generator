export const defaultCommonSettings = {
  $id: {
    title: 'ID',
    type: 'string',
    'ui:widget': 'idInput',
  },
  title: {
    title: 'Title',
    type: 'string',
  },
  description: {
    title: 'Description',
    type: 'string',
  },
  'ui:width': {
    title: 'Element Width',
    type: 'string',
    'ui:widget': 'percentSlider',
  },
  'ui:labelWidth': {
    title: 'Label Width',
    description: 'Default 120',
    type: 'number',
    'ui:widget': 'slider',
    max: 400,
    'ui:options': {
      hideNumber: true,
    },
  },
  default: {
    title: 'Default Value',
    type: 'string',
  },
  'ui:readonly': {
    title: 'Read Only',
    type: 'boolean',
  },
};

// widget 用于schema中每个元素对应的右侧配置知道用哪个setting
export const elements = [
  {
    text: 'Single Input',
    name: 'input',
    widget: 'input',
    schema: {
      title: 'Input',
      type: 'string',
    },
    setting: {
      'ui:options': {
        title: 'Options',
        type: 'object',
        'ui:labelWidth': 80,
        properties: {
          allowClear: {
            title: 'Clear Button',
            type: 'boolean',
          },
          addonBefore: {
            title: 'Addon Before',
            type: 'string',
          },
          addonAfter: {
            title: 'Addon After',
            type: 'string',
          },
          prefix: {
            title: 'Prefix',
            type: 'string',
          },
          suffix: {
            title: 'Suffix',
            type: 'string',
          },
        },
      },
      minLength: {
        title: 'Min Length',
        type: 'number',
      },
      maxLength: {
        title: 'Max Length',
        type: 'number',
      },
      pattern: {
        title: 'Regex Pattern',
        type: 'string',
        'ui:options': {
          placeholder: 'Please fill regex',
        },
      },
    },
  },
  {
    text: 'Multiple Input',
    name: 'textarea',
    widget: 'textarea',
    schema: {
      title: 'TextArea',
      type: 'string',
      format: 'textarea',
    },
    setting: {
      'ui:options': {
        title: 'Options',
        type: 'object',
        'ui:labelWidth': 80,
        properties: {
          autoSize: {
            title: 'Auto Size',
            type: 'boolean',
          },
          row: {
            title: 'Rows',
            type: 'number',
          },
        },
      },
      minLength: {
        title: 'Min Length',
        type: 'number',
      },
      maxLength: {
        title: 'Max Length',
        type: 'number',
      },
      pattern: {
        title: 'Regex Pattern',
        type: 'string',
        'ui:options': {
          placeholder: 'Please fill regex',
        },
      },
    },
  },

  {
    text: 'Date',
    name: 'date',
    widget: 'date',
    schema: {
      title: 'Date',
      type: 'string',
      format: 'date',
    },
    setting: {
      format: {
        title: 'Format',
        type: 'string',
        enum: ['dateTime', 'date', 'time'],
        enumNames: ['Date Time', 'Date', 'Time'],
      },
    },
  },
  {
    text: 'Number Input',
    name: 'number',
    widget: 'number',
    schema: {
      title: 'Number Input',
      type: 'number',
    },
    setting: {},
  },
  {
    text: 'Checkbox',
    name: 'checkbox',
    widget: 'checkbox',
    schema: {
      title: 'Checkbox',
      type: 'boolean',
    },
    setting: {
      default: {
        title: 'Default Check',
        type: 'boolean',
      },
    },
  },
  {
    text: 'Switch',
    name: 'switch',
    widget: 'switch',
    schema: {
      title: 'Switch',
      type: 'boolean',
      'ui:widget': 'switch',
    },
    setting: {
      default: {
        title: 'Default Open',
        type: 'boolean',
      },
    },
  },
  {
    text: 'Select',
    name: 'select',
    widget: 'select',
    schema: {
      title: 'Select',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['A', 'B', 'C'],
    },
    setting: {
      enum: {
        title: 'Options',
        type: 'array',
        enum: [],
        'ui:widget': 'select',
        'ui:options': {
          mode: 'tags',
        },
      },
      enumNames: {
        title: 'Option Name',
        type: 'array',
        enum: [],
        'ui:widget': 'select',
        'ui:options': {
          mode: 'tags',
        },
      },
    },
  },
  {
    text: 'Radio',
    name: 'radio',
    widget: 'radio',
    schema: {
      title: 'Radio',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['A', 'B', 'C'],
      'ui:widget': 'radio',
    },
    setting: {
      enum: {
        title: 'Options',
        type: 'array',
        enum: [],
        'ui:widget': 'select',
        'ui:options': {
          mode: 'tags',
        },
      },
      enumNames: {
        title: 'Option Name',
        type: 'array',
        enum: [],
        'ui:widget': 'select',
        'ui:options': {
          mode: 'tags',
        },
      },
    },
  },
  {
    text: 'MultiSelect',
    name: 'multiSelect',
    widget: 'multiSelect',
    schema: {
      title: 'MultiSelect',
      description: 'MultiSelect',
      type: 'array',
      items: {
        type: 'string',
      },
      enum: ['A', 'B', 'C', 'D'],
      enumNames: ['A', 'B', 'C', 'D'],
      'ui:widget': 'multiSelect',
    },
    setting: {
      enum: {
        title: 'Options',
        type: 'array',
        enum: [],
        'ui:widget': 'select',
        'ui:options': {
          mode: 'tags',
        },
      },
      enumNames: {
        title: 'Option Name',
        type: 'array',
        enum: [],
        'ui:widget': 'select',
        'ui:options': {
          mode: 'tags',
        },
      },
    },
  },
  {
    text: 'Checkboxes',
    name: 'checkboxes',
    widget: 'checkboxes',
    schema: {
      title: 'Checkboxes',
      description: 'Click to choose multiple',
      type: 'array',
      items: {
        type: 'string',
      },
      enum: ['A', 'B', 'C', 'D'],
      enumNames: ['A', 'B', 'C', 'D'],
    },
    setting: {
      enum: {
        title: 'Options',
        type: 'array',
        enum: [],
        'ui:widget': 'select',
        'ui:options': {
          mode: 'tags',
        },
      },
      enumNames: {
        title: 'Option Name',
        type: 'array',
        enum: [],
        'ui:widget': 'select',
        'ui:options': {
          mode: 'tags',
        },
      },
    },
  },
];

export const advancedElements = [
  {
    text: 'Date Range',
    name: 'dateRange',
    widget: 'dateRange',
    schema: {
      title: 'Date Range',
      type: 'range',
      format: 'dateTime',
      'ui:options': {
        placeholder: ['Start', 'End'],
      },
    },
    setting: {
      format: {
        title: 'Type',
        type: 'string',
        enum: ['dateTime', 'date'],
        enumNames: ['Date Time', 'Date'],
      },
    },
  },
  {
    text: 'Slider(Number)',
    name: 'slider',
    widget: 'slider',
    schema: {
      title: 'Slider',
      type: 'number',
      'ui:widget': 'slider',
    },
    setting: {},
  },
  {
    text: 'Image',
    name: 'image',
    // widget: 'input',
    schema: {
      title: 'Image',
      type: 'string',
      format: 'image',
    },
    setting: {},
  },
  {
    text: 'Color',
    name: 'color',
    widget: 'color',
    schema: {
      title: 'Color',
      type: 'string',
      format: 'color',
    },
    setting: {},
  },
];

export const layouts = [
  {
    text: 'Object',
    name: 'object',
    schema: {
      title: 'Object',
      type: 'object',
      properties: {},
    },
    widget: 'map',
    setting: {},
  },
  {
    text: 'List',
    name: 'list',
    widget: 'list',
    schema: {
      title: 'List',
      type: 'array',
      items: {
        type: 'object',
        properties: {},
      },
    },
    setting: {
      minItems: {
        title: 'Min Items',
        type: 'number',
      },
      maxItems: {
        title: 'Max Items',
        type: 'number',
      },
      'ui:options': {
        title: 'Options',
        type: 'object',
        properties: {
          foldable: {
            title: 'Foldable',
            type: 'boolean',
          },
        },
      },
    },
  },
];

// const saves = [
//   {
//     text: '复杂结构样例',
//     name: 'something',
//     schema: {
//       title: '对象',
//       description: '这是一个对象类型',
//       type: 'object',
//       properties: {
//         inputName: {
//           title: '简单输入框',
//           type: 'string',
//         },
//         selectName: {
//           title: '单选',
//           type: 'string',
//           enum: ['a', 'b', 'c'],
//           enumNames: ['早', '中', '晚'],
//         },
//         dateName: {
//           title: '时间选择',
//           type: 'string',
//           format: 'date',
//         },
//         listName: {
//           title: '对象数组',
//           description: '对象数组嵌套功能',
//           type: 'array',
//           items: {
//             type: 'object',
//             properties: {
//               rangeName: {
//                 title: '日期/时间范围',
//                 type: 'range',
//                 format: 'date',
//                 'ui:options': {
//                   placeholder: ['开始日期', '结束日期'],
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// ];

export const defaultSettings = [
  {
    title: 'Basic',
    widgets: elements,
    show: true,
    useCommon: true, // TODO: 是否将common
  },
  {
    title: 'Advance',
    widgets: advancedElements,
  },
  {
    title: 'Layouts',
    widgets: layouts,
  },
  // {
  //   title: 'Templates',
  //   widgets: saves,
  // },
];

export const defaultGlobalSettings = {
  type: 'object',
  properties: {
    column: {
      title: 'Overall Layout',
      type: 'string',
      enum: [1, 2, 3],
      enumNames: ['One Column', 'Two Columns', 'Three Columns'],
      'ui:options': {
        placeholder: 'Default is One Column',
      },
    },
    labelWidth: {
      title: 'Label Width',
      type: 'number',
      'ui:widget': 'slider',
      max: 300,
      'ui:options': {
        hideNumber: true,
      },
    },
    displayType: {
      title: 'Display Type',
      type: 'string',
      enum: ['row', 'column'],
      enumNames: ['Same Row', 'Individual Row'],
      'ui:widget': 'radio',
    },
  },
};
