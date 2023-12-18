function getImageUrl(person,size ='s')
{
    return (
      'https://i.imgur.com/' + person.imageId + size + '.jpg'
    );
}
function Avatar({person
    = {  name:"Ahmed Adel",
        imageId : 'OKS67lh'}
                    ,size = 100}) {
    return (
        <img

            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Propsy() {
    return (
        <div>
            <Avatar

               person={{
                   name:"Mahmoud Adel",
                   imageId : 'YfeOqp2'
                            }}
            />
            <Avatar

               person={{
                   name:"Ahmed Adel",
                   imageId : 'OKS67lh'
                            }}
            />
            <Avatar

               person={{
                   name:"Hosam Adel",
                   imageId : '1bX5QH6'
                            }}
            />
        </div>

    );
}