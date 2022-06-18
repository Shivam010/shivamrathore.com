import BigButton from 'components/BigButton';
import Layout from 'components/Layout';

export default function Empty() {
    return (
        <Layout
            showPlanes
            hideLogo
            hideThemeButton
            metadata={{
                title: 'why Open Source ?',
                description:
                    'Why I choose Open Source as a tool to learn? - Shivam Rathore (Shivam010)',
            }}
            heading={
                <>
                    <span className="text-pink-700">why</span> Open Source
                    <span className="text-pink-700">?</span>
                </>
            }
        >
            <p className="mb-5">
                Contributing to open source has taught me many things and is
                still teaching me. And that is the main reason, I am inclined to
                it. Today, I maintain three projects and contribute to a number
                of them.
            </p>
            <p className="mb-5">
                It has also, introduced me the world of freelancing, one of my
                first independent contract was due to the same. I also, work as
                a freelancer and ghost worker, helping individuals and
                organisations create and/or solve their problems {'&'}{' '}
                challenges.
                <br />
                <span className="text-xs text-rang-300 italic">
                    * professionally speaking, both type of jobs exist
                </span>
            </p>
            <BigButton href="/" className="w-48 mx-auto mt-5 -mb-5">
                Home
            </BigButton>
        </Layout>
    );
}
