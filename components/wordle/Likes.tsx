import fetcher from 'lib/fetcher';
import useSWR from 'swr';

type LikesProps = {
    slug: string;
};

export default function Likes({ slug }: LikesProps) {
    const { data, mutate } = useSWR<{ likes: string }>(
        `/api/likes/wordle-${slug}`,
        fetcher,
    );
    const likes = data?.likes && data?.likes !== 'NaN' ? data?.likes : '1';

    return (
        <>
            <button
                className="group flex justify-center"
                title="Like"
                onClick={async () => {
                    const res = await fetch(`/api/likes/wordle-${slug}`, {
                        method: 'POST',
                    }).then((res) => res.json());

                    mutate({ ...res });
                }}
            >
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
                    {likes !== '0' ? likes : '1'}
                </span>
            </button>
        </>
    );
}
