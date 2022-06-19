import { Sentense, WordleStoryDetails, WordleType } from 'lib/wordle';
import Link from 'next/link';
import Blockquote from './Blockquote';
import WordleGrid from './Grid';

export default function WordleStory(details: WordleStoryDetails) {
    return (
        <div className="wordle-story mx-auto flex flex-col items-center md:items-start md:flex-row justify-between">
            <div>
                <h2 id="nuisance" className="font-logo text-4xl my-5">
                    <Link href={'/wordle-stories/' + details.number}>
                        <a>
                            <span className="text-3xl text-pink-700">#</span>
                            {WordleType[details.type].toLowerCase()}
                            <span className="text-pink-700"></span>
                            {details.number}
                        </a>
                    </Link>
                </h2>
                <div className="mt-5">
                    <Blockquote {...details} />
                </div>
            </div>
            <div className="mt-5 md:mt-14 ">
                <WordleGrid {...details} />
            </div>
        </div>
    );
}
