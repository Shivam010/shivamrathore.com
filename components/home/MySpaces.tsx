import ExternalLink from '../ExternalLink';
import Link from 'next/link';
import BigButton from '../BigButton';

export type MySpaceEntry = {
    title: string;
    endpoint: string;
    isExternal?: boolean;
    children?: React.ReactNode;
};

export default function MySpaces({ spaces }: { spaces: MySpaceEntry[] }) {
    return (
        <div className="w-full">
            <h2
                id="spaces"
                className="w-full font-logo text-3xl sm:text-4xl mt-10 mb-7"
            >
                <Link href={'#spaces'}>
                    <a>
                        my <span className="text-pink-700">other</span>{' '}
                        spaces...
                    </a>
                </Link>
            </h2>
            <p className="mb-5">
                ...for tinkering, experimenting and lots more
            </p>
            <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center w-full">
                {spaces.map((p) => (
                    <BigButton
                        key={p.title}
                        href={p.endpoint}
                        title={p.title}
                        isExternal={p.isExternal}
                        className="flex justify-center items-center min-h-[5rem] w-64 md:w-56 leading-10 overflow-auto"
                    >
                        {p.children ? p.children : p.title}
                    </BigButton>
                ))}
            </div>
        </div>
    );
}
