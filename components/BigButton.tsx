import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function BigButton({
    href,
    title,
    children,
    className,
    isExternal,
}: PropsWithChildren<{
    href: string;
    title?: string;
    className?: string;
    isExternal?: boolean;
}>) {
    className = className ? className : 'w-64 mx-auto';
    return (
        <Link href={href}>
            <a
                title={title}
                className={
                    ' font-logo text-2xl text-center ' +
                    className +
                    ' p-6 rounded-md ' +
                    ' bg-rang-800 ' +
                    ' hover:text-rang-200 ' +
                    ' shadow-sm hover:shadow-inner ' +
                    ' shadow-rang-700' +
                    ' hover:bg-gradient-to-tl ' +
                    ' hover:from-rang-800 hover:via-rang-900 hover:to-rang-800 '
                }
                rel={isExternal ? 'noopener noreferrer' : null}
                target={isExternal ? '_blank' : null}
            >
                {children}
            </a>
        </Link>
    );
}
