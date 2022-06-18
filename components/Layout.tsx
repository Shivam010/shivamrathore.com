import { PropsWithChildren, ReactNode } from 'react';
import { Container, Metadata } from './Container';

export default function Layout({
    heading,
    metadata,
    children,
    hideLogo,
    showPlanes,
    hideThemeButton,
}: PropsWithChildren<{
    metadata?: Metadata;
    heading?: ReactNode;
    hideLogo?: boolean;
    showPlanes?: boolean;
    hideThemeButton?: boolean;
}>) {
    return (
        <Container
            metadata={metadata}
            hideLogo={hideLogo}
            showPlanes={showPlanes}
            hideThemeButton={hideThemeButton}
        >
            <div className="pb-8 mx-auto mb-16 max-w-3xl flex flex-col justify-center items-center w-full">
                {Heading(heading)}
                {children}
            </div>
        </Container>
    );
}

function Heading(children: ReactNode) {
    return (
        children && (
            <h1 className="font-logo text-5xl leading-relaxed mx-auto mb-12">
                {children}
            </h1>
        )
    );
}
