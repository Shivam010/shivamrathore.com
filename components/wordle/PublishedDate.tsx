export default function PublishedDate({ date }) {
    return (
        <>
            <div className="text-sm hidden 2xs:block text-rang-300">{date}</div>
            <div className="text-sm block 2xs:hidden text-rang-300">
                {date.slice(0, date.length - 6)}
            </div>
        </>
    );
}
