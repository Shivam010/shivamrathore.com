import useOnScreen from 'lib/on-screen';
import { WordleStoryDetails, WordleType } from 'lib/types';
import { useEffect, useRef, useState } from 'react';

export default function WordleGrid({
    guesses,
    answer,
    type: typ,
}: WordleStoryDetails) {
    const [isVisible, ref] = useOnScreen<HTMLDivElement>();
    return (
        <div className="w-72 h-[21rem] grid grid-rows-6 gap-[5px] p-2 box-border">
            {[...Array(6)].map((_, i) => {
                let guess = guesses[i];
                if (!guess) guess = ' '.repeat(answer.length);
                const colorsCodes = getColorCSSOfGuess(guess, answer);
                return (
                    <div
                        ref={ref}
                        key={i}
                        className={'grid grid-cols-5 gap-[5px]'}
                    >
                        {guess.split('').map((letter, j) => {
                            // set timeout delay for animation
                            const [show, setShow] = useState(false);
                            useEffect(() => {
                                if (letter !== ' ' && isVisible) {
                                    setTimeout(() => {
                                        setShow(true);
                                    }, j * 100);
                                }
                            });

                            return (
                                <div
                                    key={j}
                                    className={
                                        ' border-2 border-[#3a3a3c] ' +
                                        ' w-full inline-flex items-center justify-center ' +
                                        ' text-[1.75rem] leading-7 font-bold uppercase select-none ' +
                                        ' align-middle box-border ' +
                                        (show
                                            ? colorsCodes[j] + ' animate-swing '
                                            : '')
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
    );
}

function getColorCSSOfGuess(guess: string, answer: string): string[] {
    let occurrences = Array(26).fill(0);
    for (let i = 0; i < answer.length; i++) {
        const el = answer[i].toLowerCase();
        occurrences[el.charCodeAt(0) - 97]++;
    }

    const classes = Array(answer.length).fill('');
    for (let i = 0; i < answer.length; i++) {
        let letter = guess[i] ? guess[i] : '';
        if (letter === answer[i]) {
            classes[i] = ' border-none bg-[#538d4e] '; // green
            continue;
        }
        const code = letter.toLowerCase().charCodeAt(0) - 97;
        if (occurrences[code] > 0) {
            classes[i] = ' border-none bg-[#b59f3b] '; // yellow
            occurrences[code]--;
            continue;
        }
        if (letter !== ' ') {
            classes[i] = ' bg-[#3a3a3c] ';
        }
    }
    return classes;
}
