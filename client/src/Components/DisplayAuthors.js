import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_AUTHORS } from '../Queries/queries'

export const DisplayAuthors = () => {
    const { loading, error, data } = useQuery(GET_AUTHORS)
    if (loading) return <option disabled>Loading Authors...</option>
    if (error) return 'Error :('
    return (
        data.authors.map(({id, name}) => (
            <option key={id} value={id} >{name}</option>
        ))
    )
}