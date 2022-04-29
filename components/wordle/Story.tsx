import { Sentense, WordleStoryDetails, WordleType } from 'lib/types';
import Link from 'next/link';
import ExternalLink from '../ExternalLink';

// https://www.youtube.com/watch?v=PNGgQzw6PQg

export default function WordleStory(details: WordleStoryDetails) {
    const storyLines = parseStory(details.story, details.guesses);
    return (
        <div className={'mx-auto flex flex-col md:flex-row justify-between'}>
            <div>
                <h2 id="nuisance" className="font-logo text-4xl my-5">
                    <Link href={details.link}>
                        <a>
                            <span className="text-3xl text-pink-700">#</span>
                            {WordleType[details.type].toLowerCase()}
                            <span className="text-pink-700"></span>
                            {details.day}
                        </a>
                    </Link>
                </h2>
                <div className="mt-5">
                    <blockquote className=" max-w-sm" title="twitter/010Shivam">
                        {storyLines.map((line, i) => (
                            <p key={i}>
                                {line.map((item, j) => {
                                    return (
                                        <span
                                            key={j}
                                            className={
                                                ' font-bold' +
                                                (item.isGuess
                                                    ? ' text-pink-700'
                                                    : '')
                                            }
                                        >
                                            {item.text}{' '}
                                        </span>
                                    );
                                })}
                            </p>
                        ))}
                        <ExternalLink
                            aria-hidden
                            href={details.link}
                            aria-aria-details={
                                'Tweet link for the Wordle ' + details.day
                            }
                            title={'Tweet link for the Wordle ' + details.day}
                            className=" text-sm text-rang-400 "
                        >
                            Tweet
                        </ExternalLink>
                    </blockquote>
                </div>
            </div>
            <div className={'md:mt-14 '}>
                <div className="w-72 h-[21rem] grid grid-rows-6 gap-[5px] p-2 box-border">
                    {[...Array(6)].map((_, i) => {
                        const guess = details.guesses[i];
                        const word = (guess ? guess : ' '.repeat(5)).split('');
                        return (
                            <div
                                key={i}
                                className={'grid grid-cols-5 gap-[5px]'}
                            >
                                {word.map((letter, j) => {
                                    let x = i * j;
                                    if (i >= 4) x = 2;
                                    return (
                                        <div
                                            key={j}
                                            className={
                                                (x % 3 === 0
                                                    ? ' bg-[#b59f3b] '
                                                    : x % 3 === 1
                                                    ? ' bg-[#538d4e] '
                                                    : ' border-2 border-[#3a3a3c]  ') +
                                                ' w-full inline-flex items-center justify-center ' +
                                                ' text-2xl font-bold uppercase select-none ' + //  text-[1.75rem] leading-7
                                                ' align-middle box-border animate-swing ' +
                                                (guess
                                                    ? 'text-white'
                                                    : 'text-pink-700')
                                            }
                                        >
                                            {letter}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function parseStory(story: string, guesses: string[]): Sentense[] {
    const checkGuess = checkGuessWordFunc(guesses);
    const sentences: Sentense[] = [];
    story.split('\n').forEach((line, ind) => {
        line = line.trim();
        if (line === '') return;
        const currentLine: Sentense = [];
        line.split(' ').forEach((word) => {
            if (word === '') return;
            let isGuess = false;
            if (checkGuess(word)) isGuess = true;
            currentLine.push({
                text: word,
                isGuess: isGuess,
            });
        });
        if (currentLine.length > 0) sentences.push(currentLine);
    });
    console.log('sentences', sentences);
    return sentences;
}

function checkGuessWordFunc(guesses: string[]): (word: string) => boolean {
    const guessMap: { [key: string]: boolean } = {};
    guesses.forEach((guess) => (guessMap[guess.toLowerCase()] = true));
    return (word: string): boolean => {
        word = getLogicalWord(word);
        return guessMap[word.toLowerCase()];
    };
}

function getLogicalWord(word: string): string {
    let i = 0;
    for (; i < word.length; i++) {
        const lt = word[i];
        if (lt >= 'a' && lt <= 'z') break;
        if (lt >= 'A' && lt <= 'Z') break;
    }
    let finalWord = '';
    for (; i < word.length; i++) {
        const lt = word[i];
        if ((lt >= 'a' && lt <= 'z') || (lt >= 'A' && lt <= 'Z')) {
            finalWord += lt;
        } else {
            break;
        }
    }
    return finalWord;
}
