import { ReactNode, useContext, useEffect, useCallback, useState } from 'react'
import { createContext } from 'react'
import { IRepos } from '../components/ProjectsContent/interfaces';
import api from '../services/api';
import { initialImagesUrl } from '../components/Card/initialValuesImages'

interface IRepositoryContextData {
    repositories: IRepos[]
    findImage: (repoId: number) => string
}

interface RepositoryProviderProps {
    children: ReactNode;
}

export const RepositoryContext = createContext({} as IRepositoryContextData)

export function RepositoryProvider({children} :RepositoryProviderProps) {

    const [repositories, setRepositories] = useState<IRepos[]>([])


    const getRepositories = useCallback( async () => {
        const response = await api.get<IRepos[]>('/users/rafaelborges26/repos?per_page=100')
        
        const responseRepositories = response.data

        const publicRepositoriesOrdered = responseRepositories.sort((a: IRepos, b: IRepos) => {
            return b.id - a.id;
        });

        setRepositories(publicRepositoriesOrdered)
    },[])

    const findImage = (repoId: number): string => {
        const imageFound = initialImagesUrl.find(img => img.id === repoId)

        if(imageFound) return imageFound.url;
        
        return 'https://i.pinimg.com/564x/38/0c/76/380c76fc36121a67a87d1b5776420ca3.jpg'
        
    }

    const filterRepositories = () => {
        const publicRepositories = repositories.filter(repo => repo.visibility === 'public')
        setRepositories(publicRepositories)
    }
    
    useEffect(() => {
        getRepositories()
        filterRepositories()
    },[])

    return (
        <RepositoryContext.Provider value={{
            repositories,
            findImage,
        }}>
            {children}
        </RepositoryContext.Provider>
    )
}