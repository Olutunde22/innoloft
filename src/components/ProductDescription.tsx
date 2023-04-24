import { MapPinIcon, StarIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Product } from "../interfaces";
import { Map, Marker } from "pigeon-maps";
import parse from "html-react-parser";
import { TextInput } from "./Input";
import MDEditor from "@uiw/react-md-editor";
import { useAppSelector } from "../Redux/hooks";

export default function ProductDescription({
	product,
	isEdit = false,
	setProductDescription,
	productDescription,
}: {
	product: Product;
	isEdit?: boolean;
	setProductDescription?: React.Dispatch<
		React.SetStateAction<string | undefined>
	>;
	productDescription?: string;
}) {
	const hasUserSection = useAppSelector(
		(state) => state.configurationReducer.hasUserSection
	);
	const mainColor = useAppSelector(
		(state) => state.configurationReducer.mainColor
	);

	return (
		<section className="bg-white flex flex-col lg:flex-row w-full border border-gray-200 rounded-lg">
			<div className="flex flex-col lg:border-r-[1px] lg:w-[70%] relative">
				<div className="flex absolute top-0 left-0 z-30">
					<div
						style={{
							backgroundColor: mainColor,
						}}
						className="flex justify-center items-center p-4 rounded-r-lg text-white"
					>
						<StarIcon className="h-4" />
					</div>
					<div className="flex justify-center items-center p-2 rounded-r-lg bg-white">
						{" "}
						{product.type.name}
					</div>
				</div>
				{isEdit && (
					<div className="flex absolute top-0 right-0 z-30">
						<div className="flex justify-center items-center p-4 bg-white rounded-l-lg text-gray-500">
							<TrashIcon className="h-4" />
						</div>
					</div>
				)}

				<img
					src={product.picture}
					alt={product.name}
					className="md:h-80 h-40 border-b brightness-75"
				/>
				<div data-color-mode="light" className="p-4 md:px-5 leading-loose">
					{isEdit ? (
						<TextInput
							name="productName"
							type="text"
							placeholder="Product Name"
							className="p-2"
						/>
					) : (
						<h3 className="mb-2">{product.name}</h3>
					)}
					{isEdit ? (
						<MDEditor
							value={productDescription}
							onChange={(value) => {
								setProductDescription && setProductDescription(value);
							}}
						/>
					) : (
						<p className="text-gray-500 text-sm">
							{" "}
							{parse(product.description)}
						</p>
					)}
				</div>
			</div>
			<div className="py-4 px-6">
				<p className="mb-4">Offered By</p>
				<img
					src={product.company.logo}
					alt={product.company.name}
					className="h-7 mb-4"
				/>
				{hasUserSection && (
					<div className="flex items-center">
						<img
							src={product.user.profilePicture}
							alt={product.user.firstName}
							className="h-14 rounded-full mr-2 border"
						/>
						<div className="space-y">
							<p className="text-gray-500 text-sm">
								{product.user.firstName} {product.user.lastName}
							</p>
							<p className="text-xs text-gray-500">{product.company.name}</p>
						</div>
					</div>
				)}

				<div className="mt-5 text-gray-500 text-sm">
					<p className="flex">
						<MapPinIcon className="h-4 mr-2" />{" "}
						<span className="whitespace-nowrap mr-4">
							{product.company.address.street}
						</span>{" "}
						<span className="mr-4">{product.company.address.house},</span>{" "}
					</p>
					<p className="ml-6">
						<span>{product.company.address.zipCode}</span>{" "}
						<span>{product.company.address.city.name},</span>{" "}
						<span>{product.company.address.country.name}</span>{" "}
					</p>
				</div>
				{!isEdit && (
					<div className="mt-2">
						<Map
							height={300}
							width={300}
							defaultCenter={[
								product.company.address.latitude,
								product.company.address.longitude,
							]}
							defaultZoom={6}
						>
							<Marker
								width={30}
								anchor={[
									product.company.address.latitude,
									product.company.address.longitude,
								]}
							/>
						</Map>
					</div>
				)}
			</div>
		</section>
	);
}
