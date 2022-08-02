import { useEffect, useMemo, useState } from 'react';
import { Card } from '../Card'
import { Container, Content } from './styles';
import api from '../../services/api'
import { IRepos } from './interfaces'

export const ProjectsContent = () => {

    const [repositories, setRepositories] = useState<IRepos[]>([])

    useEffect(() => {
        api.get<IRepos[]>('/users/rafaelborges26/repos')
        .then((response => setRepositories(response.data)))
    },[])

    console.log(repositories, 'test')

    return (
        <Container>
            <Content>
                {
                    repositories && repositories.map(repo => (
                        <Card title={repo.name} description={repo.description} image='teste22' key={repo.id} />        
                    ))
                }
            </Content>
        </Container>
    )

}