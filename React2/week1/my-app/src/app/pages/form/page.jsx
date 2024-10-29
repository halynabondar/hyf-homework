"use client"

import {useRef, useState} from "react";
import {useRouter} from "next/navigation";
import Navbar from "@/app/pages/components/navbar";

export default function FormPage() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    // Function to handle focus on the next input field
    const focusNextField = (currentField) => {
        if (currentField === firstNameRef.current) lastNameRef.current.focus();
        else if (currentField === lastNameRef.current) phoneRef.current.focus();
        else if (currentField === phoneRef.current) emailRef.current.focus();
    };

    // Function to validate input fields
    const validateFields = () => {
        const newErrors = {};
        if (!firstNameRef.current.value) newErrors.firstName = "First name is required";
        if (!lastNameRef.current.value) newErrors.lastName = "Last name is required";
        if (!phoneRef.current.value.match(/^\d+$/)) newErrors.phone = "Phone number is invalid";
        if (!emailRef.current.value.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Email is invalid";
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            // Redirect to home page on successful submission
            router.push("/");
        }
    };

    return (
        <>
            <Navbar />
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="labelForm" htmlFor="firstname">Enter your first name:</label>
                    <input
                        ref={firstNameRef}
                        className={`inputForm ${errors.firstName ? "error" : ""}`}
                        type="text"
                        name="firstname"
                        id="firstname"
                        onBlur={() => focusNextField(firstNameRef.current)}
                        required
                    />
                    {errors.firstName && <p className="errorText">{errors.firstName}</p>}
                </div>

                <div className="form-group">
                    <label className="labelForm" htmlFor="lastname">Enter your last name:</label>
                    <input
                        ref={lastNameRef}
                        className={`inputForm ${errors.lastName ? "error" : ""}`}
                        type="text"
                        name="lastname"
                        id="lastname"
                        onBlur={()  => focusNextField(lastNameRef.current)}
                        required
                    />
                    {errors.lastName && <p className="errorText">{errors.lastName}</p>}
                </div>

                <div className="form-group">
                    <label className="labelForm" htmlFor="phone">Enter your phone number:</label>
                    <input
                        ref={phoneRef}
                        className={`inputForm ${errors.phone ? "error" : ""}`}
                        type="text"
                        name="phone"
                        id="phone"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        onBlur={() => focusNextField(phoneRef.current)}
                        required
                    />
                    {errors.phone && <p className="errorText">{errors.phone}</p>}
                </div>

                <div className="form-group">
                    <label className="labelForm" htmlFor="email">Enter your email:</label>
                    <input
                        ref={emailRef}
                        className={`inputForm ${errors.email ? "error" : ""}`}
                        type="email"
                        name="email"
                        id="email"
                        onBlur={() => focusNextField(emailRef.current)}
                        required
                    />
                    {errors.email && <p className="errorText">{errors.email}</p>}
                </div>

                <div>
                    <button className="formButton" type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}