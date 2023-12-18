import {getImageUrl} from "./utils";

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
}];

// function Item({name , isPacked , person}) {
//
//         // return <li className="item">
//         //     {isPacked ? (
//         //         <del>
//         //             {name + ' ✔'}
//         //         </del>
//         //
//         //     ) : name}
//         // </li>;
//         return (
//             <ul>
//                 {people.map((person) => <li>{person}</li>)}
//
//             </ul>
//             );
//
// }
function double(number) {
    return 2* number;
}
function Items() {

    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );
    const listItems = chemists.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;

}

export default function PackingList()
{
    return (
      <section>
          <h1> Mahmoud Ride's Packing List</h1>
          <ul>
              <Items
                isPacked={true}
                name="Space Suit"
              />


          </ul>
      </section>
    );
}