export const GH_USERNAME = 'Shivam010';
export const GH_REPO = GH_USERNAME + '/issues-test'; // todo: change this to 'shivamrathore.com' repo
export const GH_REPO_URL = 'https://github.com/' + GH_REPO;

// fetch github issues of GH_REPO in batches of 100 and return all of them as an array of objects
export async function getGithubIssues(
    labels: string[],
): Promise<GithubIssue[]> {
    const perPageLimit = 100;
    const labelsString = labels.join(',');

    // issueState will all if it's development environment and closed if it's production
    const issueState =
        process.env.NODE_ENV === 'development' ? 'all' : 'closed';

    let url = `https://api.github.com/repos/${GH_REPO}/issues?state=${issueState}&creator=${GH_USERNAME}&labels=${labelsString}&per_page=${perPageLimit}`;

    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
        Authorization: process.env.GH_TOKEN
            ? 'token ' + process.env.GH_TOKEN
            : null,
        'User-Agent': GH_REPO,
    };

    let allIssues = [] as GithubIssue[];
    let limit = 0;
    do {
        console.log(`Fetching ${url}`);

        // fetch the data from the github api
        const res = await fetch(url, { headers });
        const issues = await res.json();

        // handle error
        if ('message' in issues && res.status !== 200) {
            throw new Error(
                res.statusText +
                    ' ' +
                    res.status +
                    ' ' +
                    (issues && issues.message),
            );
        }

        // add the issues to the array
        issues.forEach((issue: GithubIssue) => {
            issue.title = issue.title.trim();
            issue.body = issue.body.trim();
            allIssues.push(issue);
        });

        // get next page url
        // <https://api.github.com/...>; rel="next", <https://api.github.com/...>; rel="last"
        url = '';
        const linkHeader = res.headers.get('Link');
        if (linkHeader) {
            const sections = linkHeader.split(', ').filter((obj) => {
                return obj.includes('rel="next"');
            });
            if (sections.length > 0) {
                const nextSection = sections[0];
                const nextUrl = nextSection.split(';')[0];
                url = nextUrl.substring(1, nextUrl.length - 1);
            }
        }
        limit++;
    } while (url !== '' && limit < 100);

    return allIssues;
}

export type GithubIssue = {
    url: string;
    title: string;
    body: string;
    labels: {
        name: string;
    }[];
    created_at: Date;
    html_url: string;
    state: string;
};

// isGithubIssueClosed returns true if the issue is closed
export function isGithubIssueClosed(issue: GithubIssue): boolean {
    return issue && issue.state === 'closed';
}
