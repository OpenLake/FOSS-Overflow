export function Card({ icon: Icon, title, children }) {
	return (
		// <div className="card">
		// 	<div className="flex gap-4 items-center">
		// 		{icon} <span className="text-2xl">{title}</span>
		// 	</div>
		// 	<span className="text-lg text-gray-700">{children}</span>
		// </div>
		<div>
			<div>
				<span className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800">
					<Icon className="text-white w-6" />
				</span>
			</div>
			<div className="mt-6">
				<h3 className="text-lg font-medium text-white-near">{title}</h3>
				<p className="mt-2 text-base text-white-50">{children}</p>
			</div>
		</div>
	);
}
