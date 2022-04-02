import Image, { ImageProps } from 'next/image';

export default function ImageWithDescription({
    description,
    ...imageProps
}: { description: string } & Omit<ImageProps, 'className'>) {
    const fillProps = (desc: string) => {
        if (!description) description = desc;
        if (!imageProps.alt) imageProps.alt = desc;
        if (!imageProps.title) imageProps.title = desc;
    };
    fillProps(description);
    fillProps(imageProps.alt);
    fillProps(imageProps.title);
    return (
        <>
            <Image alt="" {...imageProps} />
            <div className="px-8 mx-auto my-2 text-center italic text-rang-400 text-[0.7rem] leading-[1rem]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="inline mb-0.5"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"></path>
                </svg>{' '}
                {description}
            </div>
        </>
    );
}
