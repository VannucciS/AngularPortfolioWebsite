import { Tag } from "./tags";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;    
    tags: Tag[];
    pictures: string[];
    
}