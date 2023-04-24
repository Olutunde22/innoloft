import { useField } from "formik";
import { classNames } from "../utilities/functions";
import { useState } from "react";
import { capitalize } from "lodash";

type FormProps = {
	noFormik?: boolean;
	name: string;
	id?: string;
};

type FormInputProps = FormProps &
	React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>;
type FormSelectProps = FormProps &
	React.DetailedHTMLProps<
		React.SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	>;

export const ErrorLabel = ({ error }: { error: string }) => {
	return error ? (
		<div className="text-sm text-red-600 mb-1">{error}</div>
	) : null;
};

export const TextInput = ({
	name,
	id,
	className,
	noFormik,
	...props
}: FormInputProps) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [field, meta] = noFormik ? [] : useField(name);
	return (
		<div className="flex mb-2 w-full flex-col space-y-2">
			<div>
				<input
					className={classNames(
						meta?.error && meta?.touched
							? "border-red-300 focus:ring-red-500 focus:border-red-500"
							: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
						`block w-full mb-2 border rounded text-sm disabled:opacity-50 ${className}`
					)}
					{...field}
					{...props}
					id={id ?? field?.name}
				/>
				{meta?.touched && meta?.error && <ErrorLabel error={meta.error} />}
			</div>
		</div>
	);
};

export const Select = ({
	noFormik,
	id,
	className,
	listItem,
	...props
}: FormSelectProps & { listItem?: boolean }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [field, meta] = noFormik ? [] : useField(props);
	const onChange = noFormik ? props.onChange : field?.onChange;
	const [selected, setSelected] = useState<string[]>([]);
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = capitalize(e.target.value);
		if (!selected.includes(value)) {
			setSelected([...selected, value]);
		}
		if (onChange) {
			onChange(e);
		}
	};
	return (
		<div className="flex mb-2 w-full flex-col space-y-2">
			<div>
				<select
					className={classNames(
						meta?.error && meta?.touched
							? "border-red-400 focus:ring-red-500 focus:border-red-500"
							: "border-gray-400 focus:border-blue-500 focus:ring-blue-500",
						`block w-full mb-2 border rounded text-sm disabled:opacity-50 ${className}`
					)}
					{...field}
					{...props}
					id={id ?? field?.name}
					onChange={listItem ? handleChange : onChange}
				/>
				{meta?.touched && meta?.error && <ErrorLabel error={meta.error} />}
			</div>
			<div className="flex gap-2">
				{listItem &&
					selected.map((sel, index) => (
						<span
							key={index}
							onClick={() =>
								setSelected(selected.filter((item) => item !== sel))
							}
							className="flex justify-center items-center px-2 bg-gray-100 border border-gray-300 shadow hover:shadow-none rounded-md text-sm hover:cursor-pointer"
						>
							{sel}
						</span>
					))}
			</div>
		</div>
	);
};
