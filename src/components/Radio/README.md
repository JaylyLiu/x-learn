# Radio 单选框

## 使用
- 引用
```` jsx
import Radio, { RadioGroup } from '../italki-ui/Radio';
````

## Radio 用法
```` jsx
<Radio iistyle="success">Success</Radio>
````

## RadioGroup 用法
```` jsx
<RadioGroup name="radio" defaultValue="c">
  <Radio value="a">A</Radio>
  <Radio value="b">B</Radio>
  <Radio value="c">C</Radio>
  <Radio value="d">D</Radio>
</RadioGroup>
````
## API

### Radio 单选框

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| iistyle | italki组件样式 | string | primary |
| autoFocus | 自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| value | 根据 value 进行比较，判断是否选中 | any | 无 |

### RadioGroup 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的value值 | string | primary |

## Functions

### Radio

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |

### RadioGroup
| 名称 | 描述 |
| --- | --- |
| onChange() | 改变选中值 |
