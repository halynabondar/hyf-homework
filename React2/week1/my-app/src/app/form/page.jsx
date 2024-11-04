"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

export default function SignUpForm() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    // Focus the next input field
    const focusNextField = (currentField) => {
        if (currentField === firstNameRef.current) lastNameRef.current.focus();
        else if (currentField === lastNameRef.current) phoneRef.current.focus();
        else if (currentField === phoneRef.current) emailRef.current.focus();
    };

    // Validate fields
    const validateFields = () => {
        const newErrors = {};
        if (!firstNameRef.current.value) newErrors.firstName = "First name is required";
        if (!lastNameRef.current.value) newErrors.lastName = "Last name is required";
        if (!/^\d+$/.test(phoneRef.current.value)) newErrors.phone = "Phone number is invalid";
        if (!/^\S+@\S+\.\S+$/.test(emailRef.current.value)) newErrors.email = "Email is invalid";
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            router.push("/");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: 300,
                mx: "auto",
                mt: 5,
            }}
        >
            <Typography variant="h4" align="center">
                Sign Up
            </Typography>

            <TextField
                inputRef={firstNameRef}
                label="First Name"
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors.firstName}
                onBlur={() => focusNextField(firstNameRef.current)}
                fullWidth
            />

            <TextField
                inputRef={lastNameRef}
                label="Last Name"
                variant="outlined"
                error={!!errors.lastName}
                helperText={errors.lastName}
                onBlur={() => focusNextField(lastNameRef.current)}
                fullWidth
            />

            <TextField
                inputRef={phoneRef}
                label="Phone Number"
                variant="outlined"
                error={!!errors.phone}
                helperText={errors.phone}
                onBlur={() => focusNextField(phoneRef.current)}
                fullWidth
            />

            <TextField
                inputRef={emailRef}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email}
                onBlur={() => focusNextField(emailRef.current)}
                fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
}