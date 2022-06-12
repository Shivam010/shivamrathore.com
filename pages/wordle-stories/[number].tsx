import Layout from 'components/Layout';
import WordleIntro from 'components/wordle/Intro';
import WordleStory from 'components/wordle/Story';
import { allWordleStories } from 'contentlayer/generated';
import { WordleStoryDetails } from 'lib/wordle';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SingleStory({ story }: { story: WordleStoryDetails }) {
    return (
        <Layout
            metadata={{
                title: '#WordleStories' + story.number,
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
        paths: allWordleStories.map((st) => ({
            params: { number: st.number.toString() },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const story = allWordleStories
        .map((story) => WordleStoryDetails(story))
        .find((story) => story.number == params.number);
    return { props: { story } };
}
