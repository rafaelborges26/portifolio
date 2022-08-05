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

    console.log(repositories, 'test')
    const getRepositories = useCallback(() => {
        api.get<IRepos[]>('/users/rafaelborges26/repos?per_page=100')
        .then((response => setRepositories(response.data)))
    },[])

    console.log(repositories, 'testing2')

    const findImage = (repoId: number): string => {
        const imageFound = initialImagesUrl.find(img => img.id === repoId)
        if(imageFound) return imageFound.url;
        
        return 'https://raw.githubusercontent.com/rafaelborges26/gerenciamentoCompras-web/master/src/assets/github/listClients.jpeg'
        
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