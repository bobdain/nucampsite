import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form } from 'formik';

const CommentForm = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText
        };

        console.log('Comment:', comment);
        setModalOpen(false);
    }

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)} >
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>

            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    AddComment
                </ModalHeader>

                <ModalBody>
                    <ModalBody>
                        <Formik initialValues={{
                            rating: undefined,
                            author: '',
                            commentText: ''
                        }} onSubmit={handleSubmit} >
                            <Form>

                                {/* Rating */}
                                <FormGroup>
                                    <Label htmlFor='rating'>
                                        Rating
                                    </Label>
                                    <Field
                                        name='rating'
                                        as='select'
                                        className='form-control'
                                    >
                                        <option>Select...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Field>
                                </FormGroup>

                                {/* Author */}
                                <FormGroup>
                                    <Label htmlFor='author'>
                                        Your Name
                                    </Label>
                                    <Field
                                        name='author'
                                        placeholder='Your Name'
                                        className='form-control'
                                    />
                                </FormGroup>

                                {/* Comment */}
                                <FormGroup>
                                    <Label htmlFor='commentText'>
                                        Comment
                                    </Label>
                                    <Field
                                        name='commentText'
                                        as='textarea'
                                        rows='12'
                                        className='form-control'
                                    />
                                </FormGroup>

                                <Button type='submit' color='primary'>
                                    Submit
                                </Button>
                            </Form>
                        </Formik>
                    </ModalBody>
                </ModalBody>
            </Modal>
        </>
    )
}

export default CommentForm;