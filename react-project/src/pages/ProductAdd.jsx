import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import { Button, FormField, Label } from 'semantic-ui-react';
import KbrTextInput from '../utilities/customFormControls/KbrTextInput';

export default function ProductAdd() {
    const initialValues = { name: "", price: 10 }

    const schema = Yup.object({
        name: Yup.string().required("Product name required."),
        price: Yup.number().required("Product price required.")
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form className='ui form'>
                <KbrTextInput name="name" placeholder="Product Name"/>
                <KbrTextInput name="price" placeholder="Product Price"/>
                <Button color='green' type='submit'>Add</Button>
            </Form>
        </Formik>
    )
}
