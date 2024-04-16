import { FileData } from "../utils/types";

export function RenderFile({fileData}: {fileData: FileData}): JSX.Element {
    return (
        <div className="file-container flex flex-row w-full gap-2">
            <div className="file-name">{fileData.name}</div>
            <div className="file-path">{fileData.path}</div>
            <div className="file-size">{convertBytestoReadable(fileData.size)}</div>
            <div className="file-type">{fileData.type}</div>
            <div className="file-last-modified">{unixTimestampToDate(fileData.lastModified)}</div>
        </div>
    )
}

export function RenderFiles({files}: {files: FileData[]}): JSX.Element {
    return (
        <section>
            {files.map((file, index) => (
                <RenderFile key={index} fileData={file} />
            ))}
        </section>
    )
}

function convertBytestoReadable(size: number): string {
    const units = ['B', 'KB', 'MB', 'GB', 'TB']
    let unitIndex = 0
    while (size >= 1024) {
        size /= 1024
        unitIndex++
    }
    return `${size.toFixed(2)} ${units[unitIndex]}`
}

function unixTimestampToDate(timestamp: number): string {
    const date = new Date(timestamp)
    return date.toDateString()
}