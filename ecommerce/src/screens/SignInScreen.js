import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'



export default function SigninScreen(){
    return(
        <Container className="small-container">
            <p><title>Sign in</title></p>            
            
            <Form>
                <h1 className='mb-5'>Sign In</h1>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required></Form.Control>
                </Form.Group>
                <div className="mb-3">
                    <Button type="submit" style={{background:"rgba(232, 28, 101, 0.83)",borderColor:"white"}}>Sign In</Button>
                </div>
                <div className='mb-3'>
                    New Customer?{' '}
                    <Link to={'/signup'}>Sign Up</Link>
                </div>
            </Form>

        </Container>
    )
}