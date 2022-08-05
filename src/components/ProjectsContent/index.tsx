import { useEffect, useMemo, useState, useContext } from 'react';
import { Card } from '../Card'
import { Container, Content } from './styles';
import api from '../../services/api'
import { IRepos } from './interfaces'
import { useRepository } from '../../hooks/useRepository';

export const ProjectsContent = () => {

    const { repositories, findImage } = useRepository()
    
    return (
        <Container>
            <Content>
                {
                    repositories && repositories.map(repo => (
                        <Card title={repo.name} description={repo.description} image={findImage(repo.id) || ''} key={repo.id} />        
                    ))
                }
            </Content>
        </Container>
    )

}