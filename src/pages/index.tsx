import Axios from 'axios'
import React, { useEffect, useState } from "react"
import { FileData } from "../utils/types"
import { RenderFiles } from "../components/file"

export default function Home(): JSX.Element {
    const [files, setFiles] = useState<FileData[]>([])
    const [path, setPath] = useState<string>('/')
    const [startFrom, setStartFrom] = useState<number>(0)
    const [amountOfFiles, setAmountOfFiles] = useState<number>(0)

    
    useEffect(() => {
        Axios.get(`/api/files/getFiles?path=${path}&startFrom=${startFrom}`)
            .then(res => setFiles(res.data))
            .catch(err => console.error(err))
        Axios.get(`/api/files/getAmount?path=${path}`)
            .then(res => setAmountOfFiles(res.data))
            .catch(err => console.error(err))
        }, [path, startFrom])


    return (
        <div className='flex container flex-col'>
            <h1 className="mb-0-5">Files</h1>
            <section className="flex flex-center flex-col">
                <input type="text" value={path} onChange={e => setPath(e.target.value)} />
                    <RenderFiles files={files} path={path} setPath={setPath} />
                <div className="flex">
                    <button onClick={() => setStartFrom(startFrom - 10)} disabled={startFrom === 0}>Previous</button>
                    <button onClick={() => setStartFrom(startFrom + 10)} disabled={amountOfFiles <= startFrom + 10}>Next</button>
                </div>
            </section>
        </div>
    )
}