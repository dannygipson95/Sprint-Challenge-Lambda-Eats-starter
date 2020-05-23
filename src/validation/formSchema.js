import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
    .min(2, 'Name must be at least two characters')
    .required('Name is a required field'),
    sauce: yup.string().required('Sauce is required'),
    size: yup.string().required('Size is required'),
    toppings: yup.string(),
    specialInstructions: yup.string()
})

export default formSchema