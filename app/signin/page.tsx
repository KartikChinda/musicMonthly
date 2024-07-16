import { getProviders, signIn } from "next-auth/react";


const SignIn = async ({ providers }: { providers: any }) => {
    <>
        {Object.values(providers).map((provider: any) => {
            <div key={provider.name}>
                <button onClick={() => signIn(provider.id)}>
                    Sign in With Spotify.
                </button>
            </div>

        })}
    </>
}

export default SignIn;

export async function getServerSideProps() {
    const providers = await getProviders();
    return { props: { providers } }
}