import { getGithubIssues } from './github';

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

let _allStories: WordleStoryDetails[] = [];

// allWordleStoriesDetails is an array of all the WordleStoryDetails
export async function getAllWordleStoryDetails(): Promise<
    WordleStoryDetails[]
> {
    if (_allStories.length !== 0) {
        return _allStories;
    }
    console.log('API called for stories');

    let issues = await getGithubIssues(['wordle_stories']);
    const stories = issues
        .map((issue): WordleStoryDetails => {
            const story: WordleStoryDetails = {
                number: '',
                date: '',
                answer: '',
                guesses: [],
                story: '',
                link: '',
                type: WordleType.Wordle,
            };
            if (!issue.title || !issue.title.startsWith('Wordle ')) {
                throw new Error(
                    'Invalid issue title ' +
                        issue.title +
                        ' for issue ' +
                        issue.url,
                );
            }
            story.number = issue.title.substring(7); // remove 'Wordle '
            if (!issue.body) {
                throw new Error('Invalid issue body for issue ' + issue.url);
            }

            const lines = issue.body.split('\n');
            if (lines.length < 5) {
                throw new Error('Invalid issue body for issue ' + issue.url);
            }

            // zeroth line is date with prefix - 'Date: '
            story.date = lines[0].substring(6).trim();
            // first line is link with prefix - 'Link: '
            story.link = lines[1].substring(6).trim();
            // second line is answer with prefix - 'Answer: '
            story.answer = lines[2].substring(7).trim();
            // third line is guesses with prefix - 'Guesses: '
            story.guesses = lines[3]
                .substring(9)
                .split(', ')
                .map((guess) => guess.trim())
                .filter((guess) => guess !== '');
            // remaining lines are story
            story.story = lines
                .slice(4)
                .map((ln) => ln.trim())
                .filter((ln) => ln !== '')
                .join('\n')
                .trim();
            return story;
        })
        .filter((st) => st);

    _allStories = stories;
    return _allStories;
}

// getLatestWordleStoryDetails returns the latest WordleStoryDetails
export async function getLatestWordleStory(): Promise<WordleStoryDetails> {
    const allStories = await getAllWordleStoryDetails();
    // Empty list meaning no story
    if (allStories.length == 0) {
        return null;
    }

    const reverseSorted = allStories.sort((a, b) => {
        return Number(b.number) - Number(a.number);
    });
    return reverseSorted[0];
}

export type Sentense = SentenseWord[];

export type SentenseWord = {
    text: string;
    isGuess: boolean;
};
