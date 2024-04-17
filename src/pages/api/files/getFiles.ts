// 'use server'
import { NextApiRequest, NextApiResponse } from 'next'
import { FileData } from '@/utils/types'
import fileTypesJSON from '@/utils/filesTypes.json'
import fs from 'node:fs'

interface FileType {
  descriptions: string[];
}

interface FileTypes {
  [key: string]: FileType;
}

const fileTypes: FileTypes = fileTypesJSON;

export default async function getFiles(req: NextApiRequest, res: NextApiResponse) {
    const path: string = req.query.path as string ?? '/'
    const startFrom: number = Number(req.query.startFrom ?? 0)
    
    try {
        // Check if the directory exists
        if (!fs.existsSync(path)) {
            throw new Error(`Directory '${path}' does not exist.`)
        }
        
        const files: FileData[] = fs.readdirSync(path).slice(startFrom, startFrom + 10)
            .map(file => {
                const fLoc = () => {
                    if (path == '/') {
                        return `/${file}`
                    } else {
                        return `${path}/${file}`
                    }
                }

                if (fs.existsSync(fLoc())) {
                    if (fs.statSync(fLoc()).isDirectory()) {
                        return {
                            name: file,
                            path: path,
                            size: 0,
                            type: 'Directory',
                            lastModified: fs.statSync(fLoc()).mtimeMs
                        }
                    } else {
                        const ext = file.split('.').pop()
                        const getFileType = (ext: string) => {
                            if (fileTypes[ext]) {
                                return fileTypes[ext].descriptions[0]
                            } else {
                                return 'Unknown'
                            }
                        }

                        return {
                            name: file,
                            path: path,
                            size: fs.statSync(fLoc()).size,
                            type: getFileType(ext?.toLocaleUpperCase() ?? ''),
                            lastModified: fs.statSync(fLoc()).mtimeMs
                        }
                    }
                } else {
                    return {
                        name: file,
                        path: path,
                        size: 0,
                        type: 'Unknown',
                        lastModified: 0
                    }
                }

            })
        res.status(200).json(files)
    } catch (error: any) {
        res.status(404).json({ message: 'An error occurred while trying to get the files.', errorMessage: error.message, error: error })
    }
}
