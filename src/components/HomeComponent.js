import React,{useState} from 'react';
import TableOsobeComponent from './TableOsobeComponent';
import FormAddOsoba from './FormAddOsoba';

const osobeBase = [
    { id: 1, ime: 'John', prezime: 'Smith', godiste: 1993, pol: 'Muski' },
    { id: 2, ime: 'Eric', prezime: 'Adams', godiste: 1999, pol: 'Muski' },
    { id: 3, ime: 'Bob', prezime: 'James', godiste: 2004, pol: 'Zenski' },
];

const HomeComponent = () => {

    const [osobe,setOsobe] = useState(osobeBase);

    const onOsobaAddSubmit = (osoba) => {
        osoba.id = Math.round(Math.random() * 1000);
        setOsobe([...osobe,osoba]);
    };

    return (
        <div>
            <h1 style={{marginLeft: 400,marginTop: 30}}> Formik Forme i Yup validacija.. </h1>

            <div style={{overflow: 'hidden', marginLeft: 100, marginTop: 55}}>

                <div style={{float: 'left'}}>
                    <TableOsobeComponent osobe={osobe} />
                </div>

                <div style={{float: 'left', marginLeft: 250}}>
                    <FormAddOsoba onFormSubmit={onOsobaAddSubmit}/>
                </div>

            </div>

        </div>
    );
};

export default HomeComponent;