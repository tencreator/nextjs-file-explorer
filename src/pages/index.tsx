import React from "react"
import { FileData } from "../utils/types"
import { RenderFiles } from "../components/file"

export default function Home(): JSX.Element {
    const files: FileData[] = [
        {
            name: "example.txt",
            path: "/documents/",
            size: 1024, // in bytes
            type: "Text",
            lastModified: 1644362400000 // Unix timestamp in milliseconds
        },
        {
            name: "image.jpg",
            path: "/images/",
            size: 2048, // in bytes
            type: "JPEG",
            lastModified: 1644362600000 // Unix timestamp in milliseconds
        },
        {
            name: "document.pdf",
            path: "/documents/",
            size: 4096, // in bytes
            type: "PDF",
            lastModified: 1644362800000 // Unix timestamp in milliseconds
        },
        {
            name: "presentation.pptx",
            path: "/presentations/",
            size: 8192, // in bytes
            type: "PowerPoint Presentation",
            lastModified: 1644363000000 // Unix timestamp in milliseconds
        },
        {
            name: "spreadsheet.xlsx",
            path: "/documents/",
            size: 6144, // in bytes
            type: "Excel Spreadsheet",
            lastModified: 1644363200000 // Unix timestamp in milliseconds
        }
    ]


    return (
        <div className='flex container flex-col'>
            <h1 className="mb-0-5">Files</h1>
            <section>
                <RenderFiles files={files} />
            </section>
        </div>
    )
}