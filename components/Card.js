export function Card({ icon: Icon, title, children }) {
	return (
		<div>
			<div>
				<span className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800">
					<Icon className="text-white w-6" />
				</span>
			</div>
			<div className="mt-6">
				<dt className="text-lg font-medium">{title}</dt>
				<dd className="mt-2 text-base text-blue-900">{children}</dd>
			</div>
		</div>
	);
}
