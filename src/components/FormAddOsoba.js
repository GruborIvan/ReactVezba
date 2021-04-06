import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

const validationSheme = yup.object().shape({
    ime: yup.string().min(3,'Too short').max(8,'Too long').required('Required'),
    prezime: yup.string().min(3,'Too short').max(8,'Too long').required('Required'),
    godiste: yup.number().min(1920,'Prerano').max(2022,'Prekasno').required('Required'),
    pol: yup.string().required('Required'),
});

const FormAddOsoba = ({onFormSubmit}) => {

    const onFormSubmitted = (values,{resetForm}) => {
        
        resetForm();
        onFormSubmit(values);
    };

    return (
        <div style={{marginLeft: 40}}>
            <h5> Forma za dodavanje osobe u tabelu </h5>

            <Formik 
                initialValues={{ ime: '', prezime: '', godiste: 0, pol: '' }}
                onSubmit={onFormSubmitted}
                validationSchema={validationSheme}>
                <Form className="ui form">

                    <div className="field">
                        <label htmlFor="ime"> Ime: </label>
                        <Field type="text" id="ime" name="ime" placeholder="ime.."/>
                        <ErrorMessage name="ime"/>
                    </div>

                    <div className="field">
                        <label htmlFor="prezime"> Prezime: </label>
                        <Field type="text" name="prezime" placeholder="prezime.."/>
                        <ErrorMessage name="prezime"/>
                    </div>

                    <div className="field">
                        <label htmlFor="godiste"> Godiste: </label>
                        <Field type="number" name="godiste" placeholder="ime.."/>
                        <ErrorMessage name="godiste"/>
                    </div>

                    <div className="field">
                        <label htmlFor="pol"> Pol: </label>
                        <Field list="lst" name="pol" placeholder="Pol.." />
                        <datalist id="lst">
                            <option> Muski </option>
                            <option> Zenski </option>
                            <option> Muski </option>
                        </datalist>
                        <ErrorMessage name="pol"/>
                       
                    </div>

                    <button type="submit" className="ui primary button"> Add </button>
                    <button type="reset" id="rstBtn" className="ui secondary button"> Reset </button>
                    
                </Form>
            </Formik>

        </div>
       


    );
};

export default FormAddOsoba;