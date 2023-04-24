import { Product } from "../interfaces";
import { TextInput } from "./Input";

export default function ProductVideo({
	product,
	isEdit = false,
}: {
	product: Product;
	isEdit?: boolean;
}) {
	return (
		<section className="bg-white flex flex-col w-full border p-4 border-gray-200 rounded-lg">
			<p className="items-start mb-4">Video</p>
			<div className="flex justify-center items-center w-full">
				{isEdit ? (
					<TextInput
						name="video"
						type="text"
						placeholder="Add a youtube or vimeo link"
						className="p-3"
					/>
				) : (
					<iframe
						src={
							// Had to change watch to embed so as to be able to view and play on the html
							product.video.includes("youtube")
								? product.video.replace("watch?v=", "embed/")
								: product.video
						}
						title={product.name}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						className="h-40 md:h-80 w-auto md:w-[60%]"
					></iframe>
				)}
			</div>
		</section>
	);
}
