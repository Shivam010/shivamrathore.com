import ExternalLink from './ExternalLink';
import Link from 'next/link';

export default function WordleIntro({
    showExample,
}: {
    showExample?: boolean;
}) {
    return (
        <>
            <blockquote className="mb-5" title="twitter/010Shivam">
                <ExternalLink href="https://twitter.com/010Shivam/status/1516152508900835330">
                    <h3 className="inline font-bold text-pink-700">
                        I believe that,
                    </h3>
                </ExternalLink>
                <h3>
                    Initially, every story is just a set of random words that
                    don't make sense... Until you club them together and add
                    some sense to it
                </h3>
            </blockquote>
            <p className="mb-5">
                <span className="text-[3.5rem] leading-8 mt-2 pr-1 float-left">
                    S
                </span>
                torytelling is a strong notion, and I don't think my words are
                worth enough to level up. But I believe that practice can
                smoothen one's journey to it. And hence, everything else doesn't
                matter. So, I am starting a{' '}
                <ExternalLink href="https://www.nytimes.com/games/wordle/index.html">
                    <span className="text-pink-700 hover:underline underline-offset-4 italic font-bold">
                        #Wordle
                    </span>
                </ExternalLink>{' '}
                storytelling or snippet series, where I will be using all my
                guesses in that day's Wordle.
            </p>
            {showExample ? (
                <>
                    <h3 className="my-5 font-bold w-full">
                        Here's the one from the last day:
                    </h3>
                    <blockquote className="mb-5" title="Wordle253">
                        <ExternalLink href="https://twitter.com/010Shivam/status/1481720479442698241">
                            <h3 className="inline font-bold text-pink-700">
                                Wordle 253,
                            </h3>
                        </ExternalLink>
                        <p>
                            The thing that I liked the most in this multiverse
                            is 'the end', becase it is what marks the new
                            beginning.
                        </p>
                    </blockquote>
                    <Link href="/wordle-stories">
                        <a className="font-bold">
                            Check out others{' '}
                            <span className="underline underline-offset-4">
                                here
                            </span>
                            .
                        </a>
                    </Link>
                </>
            ) : (
                <></>
            )}
        </>
    );
}
