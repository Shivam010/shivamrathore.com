import Layout from 'components/Layout';
import WordleIntro from 'components/wordle/Intro';
import WordleStory from 'components/wordle/Story';
import { allWordleStories } from 'contentlayer/generated';
import { WordleStoryDetails, WordleType } from 'lib/wordle';
import Link from 'next/link';

export default function WordleHome({
    stories,
}: {
    stories: WordleStoryDetails[];
}) {
    return (
        <Layout
            metadata={{
                title: '#WordleStories',
                description:
                    'Stories of my Wordle guesses – Shivam Rathore (Shivam010)',
            }}
            hideLogo
            hideThemeButton
            // showPlanes
            heading={
                <Link href={'wordle-stories'}>
                    <a className="-mt-5">
                        <span className="text-4xl">#</span>wordle
                        <span className="text-pink-700">stories</span>
                    </a>
                </Link>
            }
        >
            <div className="w-full">
                <WordleIntro />
                <h3 className="mt-5 mb-10 font-bold w-full">
                    Here're all the stories . . .
                </h3>
                {stories.map((story, i) => (
                    <div className="mt-5" key={i}>
                        <WordleStory {...story} />
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            stories: allWordleStories
                .filter((st) => st.number)
                .sort((a, b) => {
                    return Number(b.number) - Number(a.number);
                })
                .map((story) => WordleStoryDetails(story)),
        },
    };
}
