// import me from 'public/me.png';
import Link from 'next/link';
import { Container } from 'components/Container';
import ExternalLink from 'components/ExternalLink';
import Image from 'next/image';
import rubiks from 'public/images/Rubiks_cube.png';
import HomeNuisance from 'components/home/Nuisance';
import MySpaces, { MySpaceEntry } from 'components/home/MySpaces';
import Canva from 'components/patterns/Canva';
import Planes from 'components/patterns/Planes';
import { getLatestWordleStory } from 'lib/wordle';

export default function Home({ wordleStory }) {
    const spaces: MySpaceEntry[] = [
        {
            title: '9works',
            endpoint: 'https://9works.tk',
            isExternal: true,
            children: (
                <>
                    9wor<span className="text-pink-700">k</span>s
                </>
            ),
        },
        {
            title: 'open source?',
            endpoint: '/why-open-source',
            children: (
                <>
                    open <span className="text-pink-700"> source </span>?
                </>
            ),
        },
        {
            title: '#WordleStories',
            endpoint: '/wordle-stories',
            children: (
                <>
                    <span className="text-xl">#</span>wordle
                    <span className="text-pink-700">stories</span>
                </>
            ),
        },
    ];
    return (
        <Container hideLogo hideThemeButton showPlanes>
            <div className="mx-auto mb-16 max-w-3xl flex flex-col justify-center items-center">
                <h1 className="font-logo text-[2.5rem] 2xs:text-5xl xs:text-6xl sm:text-7xl my-2 mx-auto">
                    {/* <h1 className="font-logo text-[2.75rem] xs:text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-8xl mb-2 mx-auto"> */}
                    <Link href="/">
                        <a>
                            <span className="text-pink-700 leading-relaxed">
                                Shivam
                            </span>{' '}
                            Rathore
                        </a>
                    </Link>
                </h1>
                <h2 className="text-center mb-14 italic">
                    "Software Developer • Free Time Doodler • Paper Plane Pilot
                    • Rubik's Cuber"
                </h2>
                <div>
                    <p className="mb-6">
                        <span className="text-5xl -ml-2 -mt-6 pr-2 float-left animate-hi">
                            👋
                        </span>{' '}
                        Hello, my name is Shivam Rathore, and I go by the
                        username{' '}
                        {hyperlink(
                            "'Shivam010'",
                            'https://github.com/Shivam010',
                        )}
                        , on most of the platforms. By the day, I work as a lead
                        Software Developer at{' '}
                        {hyperlink(
                            'Appointy IT Pvt Ltd',
                            'https://appointy.com',
                            true,
                        )}{' '}
                        but as the night gathers, my watch begins either as an{' '}
                        {hyperlink(
                            'Open-Source Developer',
                            'https://github.com/Shivam010',
                            true,
                        )}{' '}
                        or as a <i>serial binge - watcher</i>.
                    </p>
                    <blockquote className="mb-6" title="Shivam010">
                        <div title="Belief" className="cursor-default">
                            I believe in{' '}
                            <span className="text-pink-700 font-bold">
                                Loyalty.
                            </span>{' '}
                            For me, Loyalty is a two-way street. If I'm asking
                            for it from you then you're getting it from me.
                            <br />I also, believe in{' '}
                            <span className="text-pink-700 font-bold">
                                Equality
                            </span>{' '}
                            because Even the smallest creatures like Ants can
                            kill, so we can not underestimate anyone. We all are
                            equal.
                        </div>
                    </blockquote>
                    <p className="mb-5">
                        I love to experiment with different: ideas,
                        technologies, and paper planes. Also, I doodle nuisance,
                        sometimes, mostly when I am borred and/or in some long
                        meetings :P
                    </p>
                    <p className="mb-5">
                        You can find me Flying different-different kinds of{' '}
                        {hyperlink(
                            'Paper Planes',
                            'https://en.wikipedia.org/wiki/Paper_plane',
                            true,
                        )}{' '}
                        a lot. At any point of time, I'll have at least one
                        paper plane ready to fly at my desk.
                    </p>
                    <p className="">
                        <span className="-ml-2 -mb-2 pr-2 float-left">
                            <Image
                                alt="Shuffled Rubiks cube"
                                src={rubiks}
                                placeholder="blur"
                                height={'50%'}
                                width={'50%'}
                            ></Image>
                        </span>
                        Also, I can solve{' '}
                        {hyperlink(
                            "2x2, 3x3, 4x4 and even 5x5 Rubik's Cube,",
                            "https://en.wikipedia.org/wiki/Rubik's_Cube",
                            true,
                        )}{' '}
                        with the 3x3 cube, on an average, in roughly{' '}
                        <i>~2 minutes.</i>
                    </p>
                </div>
                <HomeNuisance wordleStory={wordleStory} />
                <MySpaces spaces={spaces} />
            </div>
            <Planes />
            <Canva />
        </Container>
    );
}

const hyperlink = (
    text: string,
    href: string,
    noitalic?: boolean,
    nobold?: boolean,
) => {
    const fontStyle =
        (noitalic ? ' not-italic ' : '') + (nobold ? '' : ' font-bold ');
    return (
        <ExternalLink href={href}>
            <span
                className={
                    'text-pink-700 hover:underline underline-offset-4 italic ' +
                    fontStyle
                }
            >
                {text}
            </span>
        </ExternalLink>
    );
};

export async function getStaticProps() {
    return {
        props: {
            strictDarkMode: true,
            wordleStory: await getLatestWordleStory(),
        },
    };
}
