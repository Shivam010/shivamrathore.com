import { Sentense, WordleStoryDetails } from 'lib/wordle';
import ExternalLink from '../ExternalLink';
import Likes from './Likes';
import PublishedDate from './PublishedDate';
import TweetLink from './TweetLink';
import Views from './Views';

export default function Blockquote(details: WordleStoryDetails) {
    const storyLines = parseStory(details.story, details.guesses);
    return (
        <blockquote className=" max-w-sm" title="twitter/010Shivam">
            {/* Story lines */}
            {storyLines.map((line, i) => (
                <p key={i}>
                    {line.map((item, j) => {
                        return (
                            <span
                                key={j}
                                className={
                                    ' font-bold' +
                                    (item.isGuess ? ' text-pink-700' : '')
                                }
                            >
                                {item.text}{' '}
                            </span>
                        );
                    })}
                </p>
            ))}
            {/* Meta information */}
            <div className="not-italic mt-1 flex justify-start items-stretch gap-2">
                {/* Published Dates */}
                <PublishedDate date={details.date} />

                {/* Number of Views */}
                <BulletPoint />
                <Views slug={details.number} />

                {/* Like Button */}
                <BulletPoint />
                <Likes slug={details.number} />

                {/* Twitter Tweet Link */}
                {details.link && <BulletPoint />}
                <TweetLink link={details.link} />
            </div>
            {/* Author */}
            <div className="mt-2 text-sm font-logo not-italic text-rang-300 ">
                by shivam rathore
            </div>
        </blockquote>
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

function BulletPoint() {
    return (
        <>
            <div className="text-sm text-rang-300">{' • '}</div>
        </>
    );
}
