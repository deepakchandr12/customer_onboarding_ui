import React, { useRef, useState } from 'react';
import NavbarTool from '../NavbarTool';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@mui/material';

const MAX_FILE_SIZE = 102400; //100KB
const validTypes = [
    "rtf",
    "pdf",
    "jpeg",
    "png",
    "jpg",
    "svg+xml"

];

const initialValues = {
    adhaar: "",
    pan: "",
};

function EkycVerification() {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object().shape({
            adhaar: Yup.mixed().required("*Please choose a file")
                .test("File-Type", "*File must be jpeg or pdf",
                    () => {
                        let valid = true;
                        const type = adhaarRef?.current?.files[0].type.split("/")[1]
                        if (!validTypes.includes(type)) {
                            valid = false
                        }
                        return valid
                    })
                .test("File-Size", "*Max file size must be 100KB",
                    () => {
                        let valid = true;
                        const adhaar = adhaarRef?.current?.files[0]
                        if (adhaar) {
                            const size = adhaar.size;
                            if (size >= MAX_FILE_SIZE) {
                                valid = false;
                            }
                        }
                        return valid
                    }),
            pan: Yup.mixed().required("*Please choose a file")
                .test("File Type", "*File must be jpeg or pdf",
                    () => {
                        let valid = true;
                        const type = fileRef?.current?.files[0].type.split("/")[1]
                        if (!validTypes.includes(type)) {
                            valid = false
                        }
                        return valid
                    })
                .test("File-Size", "*Max file size must be 100KB",
                    () => {
                        let valid = true;
                        const pan = fileRef?.current?.files[0]
                        if (pan) {
                            if (pan.size >= MAX_FILE_SIZE) {
                                valid = false;
                            }
                        }
                        return valid
                    })
        }),
        onSubmit: (values) => {
            alert("Validated Succesfully");
        }
    })
    const fileRef = useRef(null)
    const adhaarRef = useRef(null)

    return (
        <>
            <NavbarTool />
            <form className='mb-3 border border-secondary rounded container content-align-center' style={{ marginTop: '100px', height: '80vh', width:'50%', borderWidth: '5px', backgroundColor: '#0e3680' }} onSubmit={handleSubmit}>
                    <h1 style={{ textAlign: 'center' }}><u>E-KYC</u></h1>
                    <div className='m-5'>
                        <label className='text-white'>Upload Adhaar</label>
                        <input className='form-control' name='adhaar' type='file'
                            ref={adhaarRef} onChange={handleChange} onBlur={handleBlur} />
                        {errors.adhaar && touched.adhaar ? <text className='text-danger'>{errors.adhaar}</text> : null}

                    </div>
                    <div className='m-5'>
                        <label className='text-white'>Upload PAN</label>
                        <input className='form-control' name='pan' type='file'
                            value={values.pan} ref={fileRef} onChange={handleChange} onBlur={handleBlur} />
                        {errors.pan && touched.pan ? <text className='text-danger'>{errors.pan}</text> : null}
                    </div>
                    <div className='m-5'>
                        <button type="submit" className=" form-control btn btn-success btn-lg">Upload</button>
                    </div>

            </form>
        </>
    )
}
export default EkycVerification;








