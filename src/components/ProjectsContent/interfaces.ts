export interface IRepos {
    id: number;
    src: string;
    name: string;
    description: string;
    visibility: 'public' | 'private';
}