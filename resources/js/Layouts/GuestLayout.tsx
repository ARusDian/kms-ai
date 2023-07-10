import ApplicationLogo from '@/Components/ApplicationLogo';
import { asset } from '@/Helper/document_file';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 flex flex-col gap-10 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <Link href="/" className='self-center mt-4'>
                    <img src={asset('root', 'assets/logo-anset.png')} className='w-48' />
                </Link>
                {children}
            </div>
        </div>
    );
}
