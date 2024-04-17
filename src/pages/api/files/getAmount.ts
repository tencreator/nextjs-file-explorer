// 'use server'
import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'node:fs'

export default async function getAmount(req: NextApiRequest, res: NextApiResponse) {
    const path: string = req.query.path as string ?? '/'

    try {
        if (!fs.existsSync(path)) {
            throw new Error(`Directory '${path}' does not exist.`)
        }

        const files: string[] = fs.readdirSync(path)
        res.status(200).json(files.length)
    } catch (error: any) {
        res.status(500).json({ message: 'Sorry, we couldn\'t find out how many files are in this directory', errorMessage: error.message, error: error})
    }
}