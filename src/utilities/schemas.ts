import * as Yup from 'yup'

export const ProductSchema = Yup.object().shape({
    productName: Yup.string().required('Please provide a product name'),
    video: Yup.string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
        .required('Please enter a correct url'),
    productTrl: Yup.number().required('Please select a product TRL'),
    productCategories: Yup.array().required('Please enter product categories'),
    productBusinessModels: Yup.array().required('Please enter product business models'),
})