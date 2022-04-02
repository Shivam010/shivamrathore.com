import ExternalLink from 'components/ExternalLink';
import Layout from 'components/Layout';

export default function PlantsAndTrees() {
    const heading = (
        <>
            Fruits of <span className="text-pink-700">Plants</span>
        </>
    );
    return (
        <Layout
            metadata={{
                title: 'Fruits of Plants',
                description: 'Seed bearing structure in flowering plants',
            }}
            heading={heading}
            hideLogo
            // hideThemeButton
        >
            <div className="mt-5">
                <blockquote className="mb-5" title="wiki.org/fruit">
                    <ExternalLink href="https://en.wikipedia.org/wiki/Fruit">
                        <h2 className="inline font-bold text-pink-700">
                            In Botany,
                        </h2>
                    </ExternalLink>
                    <h3>
                        "Fruits are the seed-bearing structure in flowering
                        plants that is formed from the ovary after flowering.
                        And are the means by which flowering plants disseminate
                        their seeds."
                    </h3>
                </blockquote>
            </div>
        </Layout>
    );
}
