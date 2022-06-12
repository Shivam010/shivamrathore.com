import ExternalLink from '../ExternalLink';
import Link from 'next/link';
import WordleIntro from '../wordle/Intro';
import WordleStory from 'components/wordle/Story';
import { WordleStoryDetails, WordleType } from 'lib/wordle';

export default function HomeNuisance({
    wordleStory,
}: {
    wordleStory?: WordleStoryDetails;
}) {
    return (
        <div className="w-full mb-5">
            <h2
                id="nuisance"
                className="w-full font-logo text-3xl sm:text-4xl mt-10 mb-7"
            >
                <Link href={'#nuisance'}>
                    <a>
                        my <span className="text-pink-700">utter</span>{' '}
                        Nuisances...
                    </a>
                </Link>
            </h2>
            <WordleIntro />
            {wordleStory && (
                <>
                    <h3 className="my-5 font-bold w-full">
                        Here's the one from the last day and checkout others at
                        the{' '}
                        <Link href="/wordle-stories">
                            <a className="text-pink-700 align-text-top hover:underline hover:underline-offset-4">
                                stories page
                            </a>
                        </Link>
                        .
                    </h3>
                    <div className="mt-5">
                        <WordleStory {...wordleStory} />
                    </div>
                </>
            )}
        </div>
    );
}
