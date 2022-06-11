import { Sentense, WordleStoryDetails } from 'lib/types';
import ExternalLink from '../ExternalLink';

export default function Blockquote(details: WordleStoryDetails) {
    const storyLines = parseStory(details.story, details.guesses);
    return (
        <blockquote className=" max-w-sm" title="twitter/010Shivam">
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
            <div className=" mt-1 flex justify-start items-stretch gap-2">
                <div className="text-sm hidden 2xs:block text-rang-300">
                    {details.date}
                </div>
                <div className="text-sm block 2xs:hidden text-rang-300">
                    {details.date.slice(0, details.date.length - 6)}
                </div>
                <div className="text-sm text-rang-300">{' • '}</div>
                <div className="text-sm text-rang-300">
                    {details.views ? details.views : '1'} views
                </div>
                <div className="text-sm text-rang-300">{' • '}</div>
                <button className="group flex justify-center" title="Like">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        aria-label="Heart Beat"
                        className="mt-1 h-4 w-4 fill-red-600 scale-150 animate-[spin_1s_ease_infinite] duration-700 "
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986C4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45c.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246c-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115c.16-.479.212-1.051-.076-1.629c-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135c-.237.463-.36 1.08-.202 1.85c.055.27.467.197.527-.071c.285-1.256 1.177-2.462 2.989-2.528c.234-.008.348-.278.14-.386Z"
                        ></path>
                    </svg>
                    <span
                        title="Like"
                        className="pl-1 italic text-sm text-rang-300"
                    >
                        {details.likes ? details.likes : '0'}
                    </span>
                </button>
                {details.link ? (
                    <>
                        <div className="text-sm text-rang-300">{' • '}</div>
                        <ExternalLink
                            href={details.link}
                            className="group flex justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                aria-label="Twitter"
                                className="fill-blue-400 h-5 w-5 group-hover:scale-125 group-hover:-rotate-12 group-hover:animate-spin duration-[900ms]"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"></path>
                            </svg>
                            <span className="pl-1 italic text-sm text-rang-300">
                                Tweet
                            </span>
                        </ExternalLink>
                    </>
                ) : (
                    <></>
                )}
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
