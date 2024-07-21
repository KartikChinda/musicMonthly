// app/signin/page.tsx
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProviders, signIn } from 'next-auth/react'; // Import signIn function from next-auth/react

const SignInPage = () => {
    const router = useRouter();
    const [providers, setProviders] = useState<any>(null); // Initialize providers state

    useEffect(() => {
        const fetchProviders = async () => {
            const providersData = await getProviders(); // Fetch authentication providers
            setProviders(providersData); // Set providers state
        };

        fetchProviders();
    }, []);

    const handleSignIn = async (providerId: string) => {
        try {
            await signIn(providerId); // Sign in with selected provider
            router.push('/wegotauser'); // Redirect to dashboard or another page after sign-in
        } catch (error) {
            console.error('Sign-in error:', error);
            // Handle sign-in error (e.g., show error message)
        }
    };

    if (!providers) {
        return <p>Loading...</p>; // Render loading indicator while fetching providers
    }

    return (
        <div>
            {Object.values(providers).map((provider: any) => (
                <div key={provider.id}>
                    <button onClick={() => handleSignIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SignInPage;
