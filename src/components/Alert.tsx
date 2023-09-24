type AlertProps = {
	children: React.ReactNode
	type: 'error' | 'success' | 'info'
}

const Alert = (props: AlertProps) => {
return <div className="border-black p-4">
	{props.children}
</div>;
};
export default Alert;