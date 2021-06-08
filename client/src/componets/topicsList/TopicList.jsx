import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Grid, Modal, Fade, Backdrop, Button, Paper, Typography, Container} from "@material-ui/core";
import Topic from "./topic/Topic";
import useStyles from './styles'
import {getTopics} from '../../actions/topics'
import Input from "../authorization/Input";
import {createTopic} from "../../actions/topics";

const TopicList = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const formRef = useRef();
    const initialState = { title: '', description: '', text: '' };
    useEffect(() => {
        dispatch(getTopics())
    }, [dispatch])

    const { topics } = useSelector((state) => state.topics);
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState(initialState);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        if (!formRef.current.reportValidity()) {
            return
        }
        e.preventDefault();
        dispatch(createTopic(form))
        setOpen(false)
    };


    return (
        <div className={classes.root}>
            <div className={classes.addBtn}>
                <Button variant="contained" color="secondary" onClick={handleOpen}>
                    Create new topic
                </Button>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500, }}>
                <Fade in={open}>
                    <Container component="main" maxWidth="xs">
                        <Paper className={classes.paper} elevation={6}>

                            <Typography component="h1" variant="h5" className={classes.title}>Discussion
                                creation</Typography>
                            <form className={classes.form} ref={formRef}>
                                <Grid container spacing={1}>

                                    <Input name="title" label="Tittle" type="text" autoComplete={'off'}
                                           handleChange={handleChange}/>
                                    <Input name="description" label="Description" autoComplete={'off'}
                                           handleChange={handleChange}/>
                                    <Input name="text" label="Text" autoComplete={'off'} handleChange=
                                        {handleChange}/>

                                </Grid>
                                <Button onClick={handleSubmit} type="submit" fullWidth
                                        variant="contained" color="primary" className={classes.submit}>
                                    Create discussion
                                </Button>
                            </form>
                        </Paper>
                    </Container>
                </Fade>
            </Modal>

            <Grid container direction="column" alignItems="center" justify="flex-start">
                {topics?.map((topic) => (<Topic key={topic._id} topic={topic}/>))}
            </Grid>

        </div>
    );
};

export default TopicList;
