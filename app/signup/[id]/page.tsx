import { FormEvent } from "react";
import { signIn } from "next-auth/react";

export default function SignUpPage(params : {id : string}) {
    const handleSignUp = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
 
        const formData = new FormData(event.currentTarget);
        const pw = formData.get('signup-password');
 
        const result = await signIn('credentials', {
            redirect: true,
            callbackUrl: '/',
            email: atob(params.id),
            password : pw,
        });

        if (result.error) {
            console.log(result.error);
        } else {
            console.log(result);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <input
                    type="password"
                    placeholder="Password"
                    name="signup-password"
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}