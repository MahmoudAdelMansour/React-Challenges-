import { useState } from 'react';
import {foods, filterItems} from './Components/foods';

export default function FilterableList()
{


    return (
        <>
            <SearchBar />
            <hr />
            <List items={foods}/>
        </>
    );
}

function SearchBar()
{
    const [query, setQuery] = useState('');
    function handleChange(e)
    {
        setQuery(e.target.value);
    }
    return (
     <label>
            Search: {' '}
            <input type="text" value={query}
                   onChange={handleChange} />
     </label>
    );
}

function List({items})
{
    return (
        <table>
            <tbody>
            {items.map(food => (
                <tr key={food.id}>
                    <td>{food.name}</td>
                    <td>{food.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}



