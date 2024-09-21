import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './Review.css';
import { useNavigate } from 'react-router-dom';



const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [showReviewModal, setReviewModal] = useState(false);
    const [newReview, setNewReview] = useState({})
    const handleReviewModelClose = () => setReviewModal(false);
    const handleReviewModelShow = () => setReviewModal(true);
    const navigate= useNavigate()
    const handelAddReview = data => {

        reset();
        setNewReview(data)
        handleReviewModelShow()
    };
    const handleReviewsToServer = () => {
        handleReviewModelClose()
        console.log(newReview)
        axios.post('https://cctv-camera-api.onrender.com/reviews', newReview)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Congrats Your review has been added successfully.")
                    navigate("/")
                }
            })
    }
    return (
        <Container className="py-5 review-part ">
           
            <Row className="g-0 d-flex justify-content-center">
                <Col md={4}>
                <h4 className=" text-primary  user-review">Add a Review </h4>
                    <form onSubmit={handleSubmit(handelAddReview)} className="review-form  ms-3">
                    {/* dashboard-from ms-3 */}

                        <input defaultValue={user.displayName} type="text" {...register("name")}  className='input-field mb-3'/> 
                      
                        <input defaultValue={user.email} type="text" {...register("email")} className='input-field mb-3'/> 
                        <input placeholder="Photo (optional) img link" type="text"{...register("img", {  })} className='input-field mb-3'/> 
                        <input placeholder="Rating" type="number"{...register("rating", { required: true, min: "0", max: "5" })} className='input-field mb-3'/>
                        

                        <textarea placeholder=" Write Comment" type="text" {...register("description", { required: true })} className='input-field mb-3'/>
                        
                        <Button type="submit"  className='review-btn'>Add Review</Button>
                    </form>
                </Col>
            </Row>
            <Modal show={showReviewModal} onHide={handleReviewModelClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Hello {user?.displayName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to add <span className="fw-bold">"{newReview?.description}"</span> in Reviews  ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleReviewModelClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleReviewsToServer}> Yes </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Review;