import { FileData } from "../utils/types";

export function RenderFile({fileData}: {fileData: FileData}): JSX.Element {
    return (
        <tr>
            <td>{fileData.name}</td>
            <td>{fileData.path}</td>
            <td>{convertBytestoReadable(fileData.size)}</td>
            <td>{fileData.type}</td>
            <td>{unixTimestampToDate(fileData.lastModified)}</td>
        </tr>
    )
}

export function RenderFiles({files}: {files: FileData[]}): JSX.Element {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Path</th>
                    <th>Size</th>
                    <th>Type</th>
                    <th>Last Modified</th>
                </tr>
            </thead>
            <tbody>
                {files.map((file, index) => (
                    <RenderFile key={index} fileData={file} />
                ))}
            </tbody>
        </table>
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