import React from 'react';
import { Form } from "react-bootstrap";


function PostPage({userData}) {

    return (
        <div className={'post-page'}>
            <div className="greetings-section">
                <h1>`Hello ${userData.name}`</h1>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    );
}

export default PostPage;