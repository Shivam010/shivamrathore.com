import { allWordleStories, WordleStory } from 'contentlayer/generated';

export enum WordleType {
    Wordle = 0,
    WordHurdle = 1,
}

export type WordleStoryDetails = {
    number: string;
    date: string;
    answer: string;
    guesses: string[];
    story: string;
    link?: string;
    type: WordleType;
};

// constructor for WordleStoryDetails
export function WordleStoryDetails(story: WordleStory): WordleStoryDetails {
    return {
        number: story.number.toString(),
        date: story.date,
        answer: story.answer,
        guesses: story.guesses,
        story: story.body.raw,
        link: story.link ? story.link : null,
        type: WordleType.Wordle,
    };
}

// allWordleStoriesDetails is an array of all the WordleStoryDetails
export const allWordleStoriesDetails = allWordleStories
    .filter((story) => story.number)
    .map((story) => WordleStoryDetails(story));

// getLatestWordleStoryDetails returns the latest WordleStoryDetails
export function getLatestWordleStory(): WordleStoryDetails {
    // Empty list meaning no story
    if (allWordleStoriesDetails.length == 0) {
        return null;
    }

    const reverseSorted = allWordleStoriesDetails.sort((a, b) => {
        return Number(b.number) - Number(a.number);
    });
    return reverseSorted[0];
}

export type Sentense = SentenseWord[];

export type SentenseWord = {
    text: string;
    isGuess: boolean;
};
