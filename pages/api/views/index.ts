import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const row = await prisma.stats.aggregate({
            _sum: { views: true },
        });

        return res.status(200).json({
            views:
                row && row._sum && row._sum.views
                    ? row._sum.views.toString()
                    : '0',
        });
    } catch (e) {
        return res.status(500).json({ message: e });
    }
}
