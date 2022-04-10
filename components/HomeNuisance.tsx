import ExternalLink from './ExternalLink';
import Link from 'next/link';

export default function HomeNuisance() {
    return (
        <div className="w-full mb-5">
            <h2
                id="nuisance"
                className="w-full font-logo text-3xl sm:text-4xl mt-14 mb-7"
            >
                my <span className="text-pink-700">utter</span> Nuisances...
            </h2>
            <blockquote className="mb-5" title="twitter/010Shivam">
                <ExternalLink href="https://twitter.com/010Shivam/status/1481720479442698241">
                    <h3 className="inline font-bold text-pink-700">Tweet,</h3>
                </ExternalLink>
                <h3>
                    The thing that I liked the most in this multiverse is 'the
                    end', becase it is what marks the new beginning.
                </h3>
            </blockquote>
            <p className="mb-5">
                Belief is a strong word, if you believe then the weirdiness and
                the nuisance will be just because everyone else is a way more
                normal. That's why I am starting a{' '}
                <ExternalLink href="https://www.nytimes.com/games/wordle/index.html">
                    <span className="text-pink-700 hover:underline underline-offset-4 italic font-bold">
                        #Wordle
                    </span>
                </ExternalLink>{' '}
                story telling or snippet series, where I will be using all my
                guesses in that day's Wordle.
            </p>
            <h3 className="my-5 font-bold w-full">
                Here's the one from last day:
            </h3>
            <blockquote className="mb-5" title="Wordle253">
                <ExternalLink href="https://twitter.com/010Shivam/status/1481720479442698241">
                    <h3 className="inline font-bold text-pink-700">
                        Wordle 253,
                    </h3>
                </ExternalLink>
                <p>
                    The thing that I liked the most in this multiverse is 'the
                    end', becase it is what marks the new beginning.
                </p>
            </blockquote>
            <Link href="/wordle-stories">
                <a className="font-bold">
                    Check out others{' '}
                    <span className="underline underline-offset-4">here</span>.
                </a>
            </Link>
        </div>
    );
}
