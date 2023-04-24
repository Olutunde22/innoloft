import {
	BanknotesIcon,
	BriefcaseIcon,
	ClockIcon,
	Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import { Product } from "../interfaces";
import { useGetTRLQuery } from "../Redux/api/trlApiSlice";
import { Select, TextInput } from "./Input";

export default function ProductOfferDetails({
	product,
	isEdit = false,
}: {
	product: Product;
	isEdit?: boolean;
}) {
	const { data: trls } = useGetTRLQuery(undefined, {
		skip: !isEdit,
	});

	return (
		<section className="bg-white border border-gray-200 rounded-lg w-full py-4 px-6">
			<p className="items-start mb-4">Offer Details</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-10 max-w-[90%]">
				<div>
					<p className="flex">
						<Cog8ToothIcon className="mr-2 h-6" /> Technology
					</p>
					{!isEdit ? (
						<div className="mt-4 flex">
							{product.categories.map((category) => (
								<p
									key={category.id}
									className="rounded-full mr-3 bg-gray-100 py-[1px] px-4"
								>
									{category.name}
								</p>
							))}
						</div>
					) : (
						<TextInput
							name="productCategories"
							type="text"
							placeholder="Product Categories"
							className="p-2 mt-4"
						/>
					)}
				</div>
				<div>
					<p className="flex">
						<BriefcaseIcon className="mr-2 h-6" /> Business Model
					</p>
					{!isEdit ? (
						<div className="mt-4 flex flex-wrap">
							{product.businessModels.map((model) => (
								<p
									key={model.id}
									className="rounded-full mr-3 bg-gray-100 py-[1px] my-1 px-4 whitespace-nowrap"
								>
									{model.name}
								</p>
							))}
						</div>
					) : (
						<TextInput
							name="productBusinessModels"
							type="text"
							placeholder="Product Business Models"
							className="p-2 mt-4"
						/>
					)}
				</div>
				<div>
					<p className="flex">
						<ClockIcon className="mr-2 h-6" /> TRL
					</p>
					<div className="mt-4 flex">
						{!isEdit ? (
							<p className="rounded-full mr-3 bg-gray-100 py-[1px] px-4">
								{product.trl.name}
							</p>
						) : (
							<Select name="productTrl" placeholder="TRL" className="p-3">
								<option value=""></option>
								{trls &&
									trls.map((trl) => (
										<option key={trl.id} value={trl.id}>
											{trl.name}
										</option>
									))}
							</Select>
						)}
					</div>
				</div>
				<div>
					<p className="flex">
						<BanknotesIcon className="mr-2 h-6" /> Costs
					</p>
					<div className="mt-4 flex">
						<p className="rounded-full mr-3 bg-gray-100 py-[1px] px-4 whitespace-nowrap">
							{product.investmentEffort}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
