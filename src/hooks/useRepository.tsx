import { useContext } from 'react';
import { RepositoryContext } from '../contexts/RepositoryContext'

export function useRepository() {
    const value = useContext(RepositoryContext);

    return value;
}