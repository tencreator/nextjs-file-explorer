import { FileData } from "../utils/types";

export function RenderFile({fileData}: {fileData: FileData}): JSX.Element {
    return (
        <div className="file-container flex flex-row">
            <div className="file-name">{fileData.name}</div>
            <div className="file-path">{fileData.path}</div>
            <div className="file-size">{fileData.size}</div>
            <div className="file-type">{fileData.type}</div>
            <div className="file-last-modified">{fileData.lastModified}</div>
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