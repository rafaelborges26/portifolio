export interface IRepos {
    id: string;
    src: string;
    name: string;
    description: string;
    visibility: 'public' | 'private';
}