import React from 'react'
import Logo from '../../components/Logo'
import Container from '../../components/Container';
import Row from '../../components/Row';
import Col from '../../components/Col';
import './style.css'
import Typography from '../../components/Typography';
import Image from '../../components/Image';
import { IMAGES, SOCIELLINKS } from '../../constent/loginpage'
import SoiclLink from '../../components/SoiclLink'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths'
import { useAuthContext } from '../../context/authContext';
import { ROLES } from '../../constent/roles';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const Login = () => {

    const savedRole = localStorage.getItem('role');


    const { setUser, setToken, setRole } = useAuthContext();
    const [isAuth, setIsAuth] = useState(false)


    const notify = () => toast("Invalid email or password", {
        hideProgressBar: true,
    });


    const schema = yup.object().shape({
        email: yup.string().required('Email is required'),
        password: yup.string().required('Password is required'),
    });


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });



    const onSubmit = async (data) => {
        console.log(savedRole)

        try {
            const res = await axios.post('https://react-tt-api.onrender.com/api/users/login', data);
            if (res.status === 200) {
                setIsAuth(true)
                setUser(res.data);
                setToken(res.data.token);
                localStorage.setItem('token', res.data.token);
                if (res.data.isAdmin === true) {
                    setRole(ROLES.ADMIN);
                    localStorage.setItem('role', ROLES.ADMIN);

                }
                else {
                    setRole(ROLES.USER);
                    localStorage.setItem('role', ROLES.USER);

                }
            }




        } catch (err) {
            console.log(err);
            setIsAuth(false)
            notify()
        }
    }



    return (

        <Container>
            <Row>
                <Col>

                    <div className='form-side'>
                        <div className='top-logo'>
                            <Logo vareint="blue-logo" />
                        </div>
                        <div className='p-text'>
                            <Typography variant={"body1"}>
                                <div>
                                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.9531 0.421875C23.0469 0.421875 23.5938 0.640625 23.5938 1.07812C23.5938 1.26562 23.4219 1.42187 23.0781 1.54688C20.2031 2.70313 18.7656 4.95313 18.7656 8.29688C19.2031 8.23438 19.5156 8.20312 19.7031 8.20312C23.4531 8.20312 25.3281 10.0781 25.3281 13.8281C25.3281 17.5469 23.4531 19.4062 19.7031 19.4062C15.3594 19.4062 13.1875 17.0156 13.1875 12.2344C13.1875 7.07812 15.2656 3.375 19.4219 1.125C20.2969 0.65625 21.1406 0.421875 21.9531 0.421875ZM9.71875 0.5625C10.8125 0.5625 11.3594 0.78125 11.3594 1.21875C11.3594 1.40625 11.1875 1.5625 10.8438 1.6875C7.96875 2.84375 6.53125 5.09375 6.53125 8.4375C6.96875 8.375 7.28125 8.34375 7.46875 8.34375C11.2188 8.34375 13.0938 10.2188 13.0938 13.9688C13.0938 17.6875 11.2188 19.5469 7.46875 19.5469C3.125 19.5469 0.953125 17.1562 0.953125 12.375C0.953125 7.21875 3.03125 3.51562 7.1875 1.26562C8.0625 0.796875 8.90625 0.5625 9.71875 0.5625Z" fill="#BABABA" />
                                    </svg>
                                </div>
                                I always observe the people who pass by when I ride an escalator.
                                I'll never see most of them again,
                                so I imagine a lot of things about their lives... about the day ahead of them.
                            </Typography>
                        </div>
                        <Typography variant={"body2"}>Hideo Kojima</Typography>



                    </div>
                    <div className='botom-img'>
                        <Image src={IMAGES[0].src} alt={IMAGES[0].alt} />
                    </div>
                </Col>
                <Col>
                    <div className='Form'>
                        <Typography variant={"h1"}>Join the game! </Typography>
                        <Typography variant={"span"}>Go inside the best gamers social network!</Typography>

                        <div className='soicl-links'>

                            {SOCIELLINKS.map(i => (
                                < SoiclLink key={i.id} iconcode={i.iconcode} iconlink={i.iconlink} />
                            ))}
                        </div>

                        <div className='or-line'>

                            <svg width="172" height="1" viewBox="0 0 172 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="4.37114e-08" y1="0.5" x2="172" y2="0.500015" stroke="#F5F5F5" />
                            </svg>
                            <span>Or</span>
                            <svg width="172" height="1" viewBox="0 0 172 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="4.37114e-08" y1="0.5" x2="172" y2="0.500015" stroke="#F5F5F5" />
                            </svg>

                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {isAuth ? <Navigate to={PATHS.HOME} replace={true} /> : <ToastContainer />}

                            <div className='input-div'>
                                <label htmlFor="email">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email')}
                                    placeholder="Enter your email "
                                />
                                {errors.email && <span className='errormasg'>{errors.email.message}</span>}
                            </div>
                            <div className='input-div'>
                                <label htmlFor="password">Your Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password')}
                                    placeholder="Enter your password"
                                />
                                {errors.password && <span className='errormasg'>{errors.password.message}</span>}
                            </div>


                            <button type="submit">Login</button>
                        </form>


                    </div>
                </Col>


            </Row>




        </Container>

    )

}


export default Login

