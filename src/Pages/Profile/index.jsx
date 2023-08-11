import React from 'react'
import Container from '../../components/Container';
import { useAuthContext } from '../../context/authContext';
import './style.css'

const Profie = () => {
    const { user } = useAuthContext();


    if (!user) {
        return <div>Loading user data...</div>;
    }

    return (
        <Container>
            <h3> Details about {user.name}  </h3>

            <table border="1">
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Row 1, Cell 1</td>
                        <td>Row 1, Cell 2</td>
                        <td>Row 1, Cell 3</td>
                    </tr>
                    <tr>
                        <td>Row 2, Cell 1</td>
                        <td>Row 2, Cell 2</td>
                        <td>Row 2, Cell 3</td>
                    </tr>
                    <tr>
                        <td>Row 3, Cell 1</td>
                        <td>Row 3, Cell 2</td>
                        <td>Row 3, Cell 3</td>
                    </tr>
                </tbody>
            </table>







            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>

        </Container>
    );
}

export default Profie
