import React from 'react'
import Container from '../../components/Container';
import Image from '../../components/Image';
import Row from '../../components/Row';
import { IMAGES } from '../../constent/loginpage';
import { useAuthContext } from '../../context/authContext';
import './style.css'

const Profie = () => {
    const { user } = useAuthContext();


    if (!user) {
        return <div>Loading user data...</div>;
    }

    return (
        <Container>
            <Row>

                {console.log(user)}


                <div className='user_img'>
                    <Image src={IMAGES[1].src} />
                </div>


                <div className='info_section'>
                    <h2 className='info'>Information</h2>
                    <div className='info-row'>
                        <h3>ID:</h3>
                        <h4>{user._id}</h4>
                    </div>
                    <div className='info-row'>
                        <h3>NAME:</h3>
                        <h4>{user.name}</h4>
                    </div>
                    <div className='info-row'>
                        <h3>EMAIL:</h3>
                        <h4>{user.email}</h4>
                    </div>

                </div>


            </Row>
        </Container>
    );
}

export default Profie
