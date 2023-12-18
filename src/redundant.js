import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [fullName,setFullName] = useState({
        firstName: '',
        lastName: '',
    });

    // const fullName = firstName + ' ' + lastName;

    // function handleInputChange(e) {
    //     const {name,value} = e.target;
    //     setFullName(prevFullName =>({
    //         ...prevFullName,
    //         [name]: value
    //         })
    //     );
    // }

    function handleFirstNameChange(e) {
        setFullName({
            ...fullName,
            firstName: e.target.value,
        });
    }
    function handleLastNameChange(e) {
        setFullName({
            ...fullName,
            lastName: e.target.value,
        });
    }

    return (
        <div className="card">
            <div className="card-header">
                <h2>Let’s check you in</h2>
            </div>
            <div className="card-body">
                <form>
                    <label>
                        First name:{' '}
                        <input
                            value={fullName.firstName}
                            className={fullName.firstName === '' ? 'form-control border-danger' : 'form-control' }
                            onChange={handleFirstNameChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Last name:{' '}
                        <input

                            className={fullName.lastName === '' ? 'form-control border-danger' : 'form-control' }

                            value={fullName.lastName}
                            onChange={handleLastNameChange}
                        />
                    </label>
                    <p>
                        Your ticket will be issued to: <b>{fullName.firstName + ' ' + fullName.lastName}</b>
                    </p>
                </form>
            </div>

        </div>
    );
}
