type ButtonProps = JSX.IntrinsicElements['button']

const Button = (props: ButtonProps)=> {
return <button {...props} className="font-medium px-5 py-2 rounded-md hover:border-blue-400 bg-black">{props.children}</button>;
};
export default Button;