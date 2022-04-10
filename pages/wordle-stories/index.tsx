import Layout from 'components/Layout';

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
                <>
                    <span className="text-4xl">#</span>wordle
                    <span className="text-pink-700">stories</span>
                </>
            }
        ></Layout>
    );
}
