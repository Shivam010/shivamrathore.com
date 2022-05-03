export enum WordleType {
    Wordle = 0,
    WordHurdle = 1,
}

export type WordleStoryDetails = {
    day: number;
    date: string;
    answer: string;
    guesses: string[];
    link: string;
    story: string;
    type: WordleType;
    likes?: number;
    views?: number;
};

export type Sentense = SentenseWord[];

export type SentenseWord = {
    text: string;
    isGuess: boolean;
};
