import ExternalLink from 'components/ExternalLink';
import Layout from 'components/Layout';
import WordleIntro from 'components/wordle/Intro';
import WordleStory from 'components/wordle/Story';
import { WordleType } from 'lib/types';
import Link from 'next/link';

export default function WordleHome() {
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
                <div className="-mt-5">
                    <span className="text-4xl">#</span>wordle
                    <span className="text-pink-700">stories</span>
                </div>
            }
        >
            <div>
                <WordleIntro />
                <div className="mt-5">
                    <WordleStory
                        day={295}
                        date={'April 12, 2022'}
                        likes={12}
                        views={12}
                        answer={'Black'}
                        guesses={['Dated', 'Plans', 'Claws', 'Black']}
                        link={'https://twitter.com/status/...'}
                        story={`
                    She Dated him with love.
                    He Plans a surprise for her above.
                    But the history swept it's Claws without glove.
                    The night is called Black, therefore...
                    `}
                        type={WordleType.Wordle}
                    />
                </div>
            </div>
        </Layout>
    );
}
