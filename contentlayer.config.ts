import {
    ComputedFields,
    defineDocumentType,
    makeSource,
} from 'contentlayer/source-files';

const WordleStory = defineDocumentType(() => ({
    name: 'WordleStory',
    filePathPattern: 'wordle-stories/*.mdx',
    bodyType: 'mdx',
    fields: {
        link: { type: 'string', required: false },
        date: { type: 'string', required: true },
        guesses: { type: 'list', required: true, of: { type: 'string' } },
        answer: { type: 'string', required: true },
    },
    computedFields: {
        number: {
            type: 'number',
            resolve: (doc) =>
                Number(doc._raw.sourceFileName.replace(/\.mdx$/, '')),
        },
    },
}));

export default makeSource({
    contentDirPath: 'data',
    documentTypes: [WordleStory],
});
