import fetcher from 'lib/fetcher';
import { useEffect } from 'react';
import useSWR from 'swr';

type ViewsProps = {
    slug: string;
};

export default function Views({ slug }: ViewsProps) {
    const { data } = useSWR<{ views: string }>(
        `/api/views/wordle-${slug}`,
        fetcher,
    );
    const views = data?.views && data?.views !== 'NaN' ? data?.views : '1';

    useEffect(() => {
        fetch(`/api/views/wordle-${slug}`, {
            method: 'POST',
        });
    }, [slug]);

    return (
        <>
            <div className="text-sm text-rang-300">{views} views</div>
        </>
    );
}
