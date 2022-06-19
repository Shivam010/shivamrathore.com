import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        // get slug from req
        const slug = req.query.slug.toString();

        // if post request, increase a likes count in stats for that slug
        if (req.method === 'POST') {
            const row = await prisma.stats.upsert({
                where: { slug },
                create: {
                    slug: slug,
                    views: 1,
                    likes: 1,
                },
                update: {
                    likes: { increment: 1 },
                },
                select: { likes: true },
            });

            return res
                .status(200)
                .json({ likes: row ? row.likes.toString() : '0' });
        }

        // if get request, get the likes count for that slug
        if (req.method === 'GET') {
            const row = await prisma.stats.findUnique({
                where: { slug },
                select: { likes: true },
            });

            return res
                .status(200)
                .json({ likes: row && row.likes ? row.likes.toString() : '0' });
        }

        return res.status(405).json({ message: 'Method not allowed' });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}
