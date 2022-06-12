import { allWordleStories, WordleStory } from 'contentlayer/generated';

export enum WordleType {
    Wordle = 0,
    WordHurdle = 1,
}

export type WordleStoryDetails = {
    number: number;
    date: string;
    answer: string;
    guesses: string[];
    story: string;
    link?: string;
    type: WordleType;
    likes?: number;
    views?: number;
};

// constructor for WordleStoryDetails
export function WordleStoryDetails(story: WordleStory): WordleStoryDetails {
    return {
        number: story.number,
        date: story.date,
        answer: story.answer,
        guesses: story.guesses,
        story: story.body.raw,
        link: story.link ? story.link : null,
        type: WordleType.Wordle,
        likes: 1,
        views: 1,
    };
}

export type Sentense = SentenseWord[];

export type SentenseWord = {
    text: string;
    isGuess: boolean;
};

export function getLatestWordleStory(): WordleStoryDetails {
    if (allWordleStories.length == 0) return null;
    const latest = allWordleStories.sort((a, b) => {
        return Number(b.number) - Number(a.number);
    })[0];
    console.log(
        allWordleStories.sort((a, b) => {
            return Number(b.number) - Number(a.number);
        }),
    );
    console.log(WordleStoryDetails(latest));
    return WordleStoryDetails(latest);
}
