export interface Trainee {
    name: string
    imgUrl: string
    desc: string
    skills: SkillRating[]
}

export interface SkillRating {
    title: string
    rating: number
}

export interface FileData {
    name: string;
    path: string;
    size: number;
    type: string;
    lastModified: number;
}