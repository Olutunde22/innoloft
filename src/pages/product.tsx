/* eslint-disable no-console */
import { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading";
import Layout from "../Layouts";
import {
	useEditProductMutation,
	useGetProductQuery,
} from "../Redux/api/productApiSlice";
import ProductDescription from "../components/ProductDescription";
import ProductVideo from "../components/ProductVideo";
import ProductOfferDetails from "../components/ProductOfferDetails";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ProductSchema } from "../utilities/schemas";
import { Formik, Form, FormikHelpers } from "formik";
import { Asserts } from "yup";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "../Redux/hooks";

type ProductData = Asserts<typeof ProductSchema>;

function Product(): JSX.Element {
	const { data: product, isFetching } = useGetProductQuery(6781);
	const [productDescription, setProductDescription] = useState<
		string | undefined
	>();
	const location = useLocation().pathname.split("/")[2] ?? "/";
	const [editProduct] = useEditProductMutation();
	const mainColor = useAppSelector(
		(state) => state.configurationReducer.mainColor
	);

	const handleSubmit = async (
		values: ProductData,
		{ setSubmitting }: FormikHelpers<ProductData>
	): Promise<void> => {
		try {
			setSubmitting(true);
			await editProduct({
				id: product?.id,
				...values,
			}).unwrap();
			setSubmitting(false);
		} catch (err) {
			setSubmitting(false);
		}
	};

	useEffect(() => {
		if (!isFetching && product?.description)
			setProductDescription(product?.description);
	}, [isFetching, product?.description]);

	return (
		<Layout>
			<Helmet>
				<title>{product ? product.name : "Product"} - Innoloft</title>
			</Helmet>
			<Suspense fallback={<Loading />}>
				{isFetching && <Loading />}
				{!isFetching && product && (
					<div className="space-y-5 mb-10">
						<div className="flex md:flex-row-reverse">
							<Link
								to={location === "/" ? "edit" : "/product"}
								style={{
									backgroundColor: mainColor,
								}}
								className="py-1 px-4 rounded-lg text-white"
							>
								{location === "/" ? "Edit" : "View Offer"}
							</Link>
						</div>
						<Formik
							initialValues={
								{
									video: product.video,
									productName: product.name,
									productTrl: product.trl.id,
									productCategories: product.categories.map(
										(category) => category.name
									),
									productBusinessModels: product.businessModels.map(
										(models) => models.name
									),
								} as ProductData
							}
							validationSchema={ProductSchema}
							onSubmit={handleSubmit}
						>
							{({ resetForm }) => (
								<Form className="space-y-5">
									<ProductDescription
										product={product}
										isEdit={location === "edit"}
										productDescription={productDescription}
										setProductDescription={setProductDescription}
									/>
									<ProductVideo
										product={product}
										isEdit={location === "edit"}
									/>
									<ProductOfferDetails
										product={product}
										isEdit={location === "edit"}
									/>
									{location === "edit" && (
										<div className="mt-5 flex flex-row-reverse text-lg">
											<button
												style={{
													backgroundColor: mainColor,
												}}
												type="submit"
												className="px-2 text-white rounded-md flex justify-center items-center"
											>
												<CheckIcon className="h-4 mr-2" />
												Save
											</button>
											<button
												style={{
													color: mainColor,
													borderColor: mainColor,
												}}
												type="button"
												className="mr-4 border px-2 rounded-md"
												onClick={() => {
													resetForm();
													setProductDescription(product.description);
												}}
											>
												Cancel
											</button>
										</div>
									)}
								</Form>
							)}
						</Formik>
					</div>
				)}
				{!isFetching && !product && <>Product may not exist</>}
			</Suspense>
		</Layout>
	);
}

export default Product;
