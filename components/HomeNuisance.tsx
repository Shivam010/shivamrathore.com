import ExternalLink from './ExternalLink';
import Link from 'next/link';
import WordleIntro from './WordleIntro';

export default function HomeNuisance() {
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
            <WordleIntro showExample />
        </div>
    );
}
