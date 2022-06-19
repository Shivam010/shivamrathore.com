import Layout from 'components/Layout';
import WordleIntro from 'components/wordle/Intro';
import WordleStory from 'components/wordle/Story';
import { allWordleStoriesDetails, WordleStoryDetails } from 'lib/wordle';
import Link from 'next/link';

export default function WordleHome({
    stories,
}: {
    stories: WordleStoryDetails[];
}) {
    return (
        <Layout
            metadata={{
                title: '#WordleStories by Shivam',
                description:
                    "Initially, every story is just a set of random words that don't make sense, until you club them together and add some sense to it. Hence, here's the stories of my Wordle guesses – Shivam's #Wordle stories.",
                image: 'https://shivamrathore.com/images/wordle-stories.png',
                ogType: 'article',
            }}
            hideLogo
            hideThemeButton
            // showPlanes
            heading={
                <Link href={'/wordle-stories'}>
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
            stories: allWordleStoriesDetails.sort((a, b) => {
                return Number(b.number) - Number(a.number);
            }),
        },
    };
}
