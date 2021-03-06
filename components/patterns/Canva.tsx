import Image from 'next/image';
import circle from 'public/images/circle.png';
import canva from 'public/images/canva.png';

export default function Planes() {
    return (
        <>
            <span
                className={
                    ' absolute overflow-hidden ' +
                    ' top-[105rem] -right-[5.5rem] ' +
                    ' vxs:top-[102rem] ' +
                    ' 2xs:top-[94rem] ' +
                    ' md:top-[72rem] ' // md:right-20 md:rotate-90
                }
            >
                {/* Triangular sketch in between pages on the right */}
                <Image
                    alt="Triangular sketch on right"
                    placeholder="blur"
                    src={canva}
                ></Image>
            </span>
            <span
                className={
                    ' absolute overflow-hidden -left-8 ' +
                    ' hidden md:block ' +
                    ' md:top-[74rem] ' +
                    ' lg:top-[70rem] '
                }
            >
                {/* Circular sketch in between pages on the left hidden on small screens */}
                <Image
                    alt="Circular sketch on left"
                    placeholder="blur"
                    src={circle}
                    height={'100%'}
                    width={'100%'}
                ></Image>
            </span>
        </>
    );
}
