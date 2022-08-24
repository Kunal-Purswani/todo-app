import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'

function signIn({ providers }) {
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(() => {
        if (session) {
            router.push('/')
        }
    }, [session])
    return (
        <>
            <Head>
                <title>Sign In</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='flex flex-col bg-gray-50 items-center justify-center min-h-screen px-4 text-center'>
                <div className='text-3xl sm:text-5xl'>Sign in to<br /><span className='text-teal-400 font-semibold'>TODO App</span></div>
                <div className='mt-20 mb-20'>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className='p-3 bg-blue-500 text-white rounded-lg font-semibold' onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
}

export default signIn
