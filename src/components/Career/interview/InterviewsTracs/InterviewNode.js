import InterviewAside from '../InterviewAside'
import { LinearGradient } from 'react-text-gradients'
import Accordion from 'react-bootstrap/Accordion';
import InterviewData from "../InterviewData";
import { Link } from 'react-router-dom';

const InterviewNode = () => {
    return (
        <div className='container-fluid interviewContainer'>
            <div className='row'>
                <InterviewAside />

                <div className='col-auto col-lg-10 col-md-10'>
                    <div className='interviewInfo'>
                        <div className='interviewInfoHeader'>
                            <h2 className='interviewHeader1 interviewTrackHeader text-center '>
                                <LinearGradient gradient={['to right', '#018883 ,#1B3F6B']}>
                                    Node Interview Questions
                                </LinearGradient>
                            </h2>
                            <div className='trackContent'>
                                <Accordion defaultActiveKey="0" className='interviewTrack mx-auto'>
                                    {InterviewData.nodeQ.map((questionData, index) => (
                                        <Accordion.Item key={questionData.id} eventKey={index.toString()}>
                                            <Accordion.Header className='accordinationHeader'>{questionData.question}</Accordion.Header>
                                            <Accordion.Body className='accordinationBody'>{questionData.answer}</Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                            <div className='testMe d-flex justify-content-between mt-2 '>
                            <Link to='https://interviewmeai.com/question-1/' target='_blank'><button className='mx-auto text-center btn  interviewBtn'>Test Interview 1 </button></Link>
                            <Link to='https://grow.google/certificates/interview-warmup/category/' target='_blank'> <button className='mx-auto text-center btn  interviewBtn'>Test Interview 2</button></Link>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InterviewNode