"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { checkPW, checkPWMatch } from "./check";

// Sign in with email and password. Redirects to home page.
export async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const pw = formData.get('password');

    const result = await signIn('credentials', {
        username: email,
        password: pw,
        redirect: true,
        callbackUrl: "/",
    });
};

// Send email to reset password. Email contains a link to reset password. Email send by capstoneprojectprivate@gmail.
export async function handleForgot(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('forgot-password');

    const response = await fetch('/api/contact/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });
    const json = await response.json();
    if (json.status === 200) {
        console.log('Email sent');
        formData.delete('forgot-password');
    } else {
        formData.delete('forgot-password');
        console.log('Failed to send email');
    }
};

// Send email to sign up. Email contains a link to sign up. Email send by capstoneprojectprivate@gmail.
export async function handleEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('signup-email');

    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });
    const json = await response.json();
    if (json.status === 200) {
        console.log('Email sent');
        formData.delete('signup-email');
    } else {
        formData.delete('signup-email');
        console.log('Failed to send email');
    }
};

// Reset password. When Reset button is clicked, password is reset and user is signed in. Redirects to home page.
export async function handleReset(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const pw = formData.get('password');
    const pwCheck = formData.get('password-check');

    const pwResult = await checkPW(pw as string);
    if (pwResult !== "ok") {
        return console.log(pwResult);
    }
    const pwMatchResult = await checkPWMatch(pw as string, pwCheck as string);
    if (pwMatchResult !== "ok") {
        return console.log(pwMatchResult);
    }

    const result = await fetch(`/api/auth/user/reset`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: pw,
        }),
    });

    const user = await result.json();
    if (user) {
        await signIn('credentials', {
            username: email,
            password: pw,
            redirect: true,
            callbackUrl: "/",
        });
    }
    else {
        return console.log("Failed to sign up");
    }
};

// Sign up. When Sign Up button is clicked, user is signed up and signed in. Redirects to home page.
export async function handleSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const pw = formData.get('password');
    const pwCheck = formData.get('password-check');

    const pwResult = await checkPW(pw as string);
    if (pwResult !== "ok") {
        return console.log(pwResult);
    }
    const pwMatchResult = await checkPWMatch(pw as string, pwCheck as string);
    if (pwMatchResult !== "ok") {
        return console.log(pwMatchResult);
    }
    
    const result = await fetch(`/api/auth/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: formData.get('name'),
            email: email,
            password: pw,
            age: Number(formData.get('age')),
            gender: formData.get('gender')
        }),
    });

    const user = await result.json();
    if (user) {
        await signIn('credentials', {
            username: email,
            password: pw,
            redirect: true,
            callbackUrl: "/",
        });
    }
    else {
        return console.log("Failed to sign up");
    }
};