import Image from 'next/image';
import plane from 'public/images/plane.png';

export default function Planes() {
    return (
        <>
            <span
                className={
                    'absolute overflow-hidden ' +
                    ' top-[45rem] -right-8 ' +
                    ' vxs:top-[44rem] 2xs:top-[39rem] ' +
                    ' xs:top-[35rem] sm:top-[30rem] ' +
                    ' xl:top-[28rem] lg:-right-8 xl:right-8 '
                }
            >
                <Image src={plane} height={'150%'} width={'150%'}></Image>
            </span>
            <span
                className={
                    ' hidden xl:block absolute overflow-hidden ' +
                    ' xl:top-[10rem] xl:left-8 scale-x-[-1]  '
                }
            >
                <Image src={plane} height={'150%'} width={'150%'}></Image>
            </span>
        </>
    );
}
