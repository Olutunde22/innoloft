function Loading({ height }: { height?: string }): JSX.Element {
	return (
		<div
			className={`flex items-center flex-col
        ${height} justify-center`}
		>
			<span className="text-gray-500 text-2xl mt-4">Loading...</span>
		</div>
	);
}

Loading.defaultProps = {
	height: "min-h-screen",
};

export default Loading;
