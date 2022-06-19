import Layout from 'components/Layout';
import WordleIntro from 'components/wordle/Intro';
import WordleStory from 'components/wordle/Story';
import { getAllWordleStoryDetails, WordleStoryDetails } from 'lib/wordle';
import {
    GetStaticPathsResult,
    GetStaticPropsContext,
    GetStaticPropsResult,
} from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NotFound from 'pages/404';

export default function SingleStory({ story }: { story: WordleStoryDetails }) {
    const router = useRouter();
    if (router.isFallback) {
        return <NotFound />;
    }
    return (
        <Layout
            metadata={{
                title: `#wordle${story.number} – #WordleStories by Shivam`,
                description: storyDescription(story),
                publishedOn: new Date(story.date),
                image: 'https://shivamrathore.com/images/wordle-stories.jpeg',
                ogType: 'article',
            }}
            hideLogo
            hideThemeButton
            heading={
                <Link href={'/wordle-stories'}>
                    <a className="-mt-5">
                        <span className="text-4xl">#</span>wordle
                        <span className="text-pink-700">stories</span>
                    </a>
                </Link>
            }
        >
            <div className="w-full mb-5">
                <WordleIntro />
                <div className="mt-5 mb-10 font-bold w-full">
                    Here's the story for {story.date} - {story.number}. Checkout
                    the others at the{' '}
                    <Link href="/wordle-stories">
                        <a className="text-pink-700 align-text-top hover:underline hover:underline-offset-4">
                            stories page
                        </a>
                    </Link>
                    .
                </div>
                <div className="mt-5">
                    <WordleStory {...story} />
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const allStories = await getAllWordleStoryDetails();
    return {
        paths: allStories.map((st) => ({
            params: { number: st.number.toString() },
        })),
        fallback: true,
    };
}

export async function getStaticProps({
    params,
}: GetStaticPropsContext): Promise<
    GetStaticPropsResult<{ story: WordleStoryDetails }>
> {
    const allStories = await getAllWordleStoryDetails();
    const story = allStories.find((story) => story.number === params.number);

    if (!story) return { notFound: true };
    return {
        props: { story },
        revalidate: 10, // revalidate every 10 seconds
    };
}

function storyDescription(details: WordleStoryDetails) {
    const descriptionLimit = 155 - 3; // 3 for the ellipsis
    let desc = `Wordle ${details.number} (${details.answer}) Story by Shivam – `;

    details.story
        .replaceAll('\n', ' ')
        .split(' ')
        .forEach((word) => {
            if (desc.length + word.length + 1 > descriptionLimit) return;
            desc += word + ' ';
        });

    return desc.trimEnd() + '...';
}
