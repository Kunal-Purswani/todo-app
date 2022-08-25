import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter()
    const { data: session } = useSession();
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-5xl  lg:mx-auto p-3">
                {/* Left */}
                <div className="relative ml-2 sm:ml-0 lg:inline-grid w-40">
                    <div className='text-3xl font-semibold'>
                        <span className='text-teal-400 font-bold'>Todo </span>App
                    </div>
                </div>
                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    {session ? (
                        <>
                            <div className='hidden md:block text-xl font-semibold'>Hi, <span className='text-teal-400 font-bold'>{session.user.username}</span></div>
                            <img onClick={signOut} title='Sign Out?' src={session.user.image} alt='profile pic' className="h-8 w-8 rounded-full cursor-pointer" />
                        </>
                    ) : (
                        <button className={router.asPath == '/auth/signin' ? 'hidden' : ''} onClick={signIn}>Sign In</button>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Header
