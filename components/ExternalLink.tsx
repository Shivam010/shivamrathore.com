import { PropsWithChildren } from 'react';

export default function ExternalLink({
    href,
    children,
    className,
}: PropsWithChildren<{ href: string; className?: string }>) {
    return (
        <a
            href={href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
