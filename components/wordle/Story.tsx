import { Sentense, WordleStoryDetails, WordleType } from 'lib/types';
import Link from 'next/link';
import ExternalLink from '../ExternalLink';
import WordleGrid from './Grid';

// https://www.youtube.com/watch?v=PNGgQzw6PQg

export default function WordleStory(details: WordleStoryDetails) {
    const storyLines = parseStory(details.story, details.guesses);
    return (
        <div className="mx-auto flex flex-col items-center md:items-start md:flex-row justify-between">
            <div>
                <h2 id="nuisance" className="font-logo text-4xl my-5">
                    <Link href={'/wordle-stories/'}>
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
                            aria-details={
                                'Tweet link for the Wordle ' + details.day
                            }
                            title={'Tweet link for the Wordle ' + details.day}
                            className=" text-sm text-rang-400 underline underline-offset-2 hover:text-rang-300 "
                        >
                            Tweet
                        </ExternalLink>
                    </blockquote>
                </div>
            </div>
            <div className="mt-5 md:mt-14 ">
                <WordleGrid {...details} />
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
    // console.log('sentences', sentences);
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
