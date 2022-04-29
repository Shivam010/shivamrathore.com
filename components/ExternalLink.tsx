import { PropsWithChildren } from 'react';

export default function ExternalLink({
    href,
    title,
    children,
    className,
}: PropsWithChildren<{ href: string; className?: string; title?: string }>) {
    return (
        <a
            title={title}
            href={href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
