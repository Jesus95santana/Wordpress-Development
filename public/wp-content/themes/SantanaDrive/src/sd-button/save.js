export default function Save( props ) {
	return (
		<div className="ButtonWrapper">
			<a
				href={props.attributes.linkObject.url}
				className={`px-6 py-2 bg-blue-600 text-white rounded-2xl text-${props.attributes.size} `}
			>
				{props.attributes.text}
			</a>
		</div>
	);
}
