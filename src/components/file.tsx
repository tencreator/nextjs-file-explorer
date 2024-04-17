import { FileData } from "../utils/types";

interface RenderFileProps {
    onClick: () => void;
    fileData: FileData;
}

interface RenderFilesProps {
    files: FileData[];
    path: string;
    setPath: (path: string) => void;
}

export const RenderFile: React.FC<RenderFileProps> = ({fileData, onClick}) => {
    return (
        <div className="tr" onClick={() => onClick()}>
            <div className="td">{fileData.name}</div>
            <div className="td">{fileData.path}</div>
            <div className="td">{convertBytestoReadable(fileData.size)}</div>
            <div className="td">{fileData.type}</div>
            <div className="td">{unixTimestampToDate(fileData.lastModified)}</div>
        </div>
    )
}

export function RenderFiles({ files, path, setPath }: RenderFilesProps): JSX.Element {
    const backPath = ()=>{
        let pathArray = path.split('/')
        if (pathArray.length === 1) return '/'
        pathArray.pop()
        return pathArray.join('/')
    }

    return (
        <div className="table">
            <div className="thead">
                <div className="tr">
                    <span className="th">Name</span>
                    <span className="th">Path</span>
                    <span className="th">Size</span>
                    <span className="th">Type</span>
                    <span className="th">Last Modified</span>
                </div>
            </div>
            <div className="tbody">
                
                <div className="tr" onClick={() => setPath(backPath())}>
                    <div className="td">../</div>
                    <div className="td">{backPath()}</div>
                    <div className="td"></div>
                    <div className="td"></div>
                    <div className="td"></div>
                </div>

                {files.map((file, index) => (
                    <RenderFile key={index} fileData={file} onClick={() => setPath(`${file.path}/${file.name}`)} />
                ))}
            </div>
        </div>
    );
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