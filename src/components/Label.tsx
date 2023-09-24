type LabelProps = JSX.IntrinsicElements['label']

const Label = (props: LabelProps)=> {
return <label {...props} className="">{props.children}</label>;
};
export default Label;