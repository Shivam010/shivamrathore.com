import Layout from 'components/Layout';
import WordleIntro from 'components/wordle/Intro';
import WordleStory from 'components/wordle/Story';
import { allWordleStoriesDetails, WordleStoryDetails } from 'lib/wordle';
import Link from 'next/link';

export default function SingleStory({ story }: { story: WordleStoryDetails }) {
    return (
        <Layout
            metadata={{
                title: `#wordle${story.number} – #WordleStories by Shivam`,
                description:
                    story.number +
                    ' - Answer: ' +
                    story.answer +
                    ' Stories of my Wordle guesses – Shivam Rathore (Shivam010) ',
                publishedOn: new Date(story.date),
            }}
            hideLogo
            hideThemeButton
            heading={
                <Link href={'/wordle-stories' + story.number}>
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

export async function getStaticPaths() {
    return {
        paths: allWordleStoriesDetails.map((st) => ({
            params: { number: st.number.toString() },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const story = allWordleStoriesDetails.find(
        (story) => story.number === params.number,
    );
    return {
        props: {
            story,
        },
    };
}
