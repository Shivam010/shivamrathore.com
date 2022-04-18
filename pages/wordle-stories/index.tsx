import ExternalLink from 'components/ExternalLink';
import Layout from 'components/Layout';
import WordleIntro from 'components/WordleIntro';
import Link from 'next/link';

export default function WordleStories() {
    return (
        <Layout
            metadata={{
                title: '#WordleStories',
                description:
                    'Stories of my Wordle guesses – Shivam Rathore (Shivam010)',
            }}
            hideLogo
            hideThemeButton
            showPlanes
            heading={
                <div className="-mt-5">
                    <span className="text-4xl">#</span>wordle
                    <span className="text-pink-700">stories</span>
                </div>
            }
        >
            <div>
                <WordleIntro />
            </div>
        </Layout>
    );
}
