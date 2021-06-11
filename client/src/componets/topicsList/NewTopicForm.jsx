import React, { useRef, useState } from 'react';
import { Backdrop, Button, Container, Fade, Grid, Modal, Paper, Typography } from '@material-ui/core';
import Input from '../utils/input/Input';
import { useDispatch } from 'react-redux';
import { createTopic } from '../../actions/topics';
import useStyles from './styles';

const NewTopicForm = () => {
    const formRef = useRef();
    const dispatch = useDispatch();
    const classes = useStyles();

    const initialState = { title: '', description: '', text: '' };
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
            return;
        }
        e.preventDefault();
        dispatch(createTopic(form));
        setOpen(false);
    };


    return (
        <div>
            <div className={classes.addBtn}>
                <Button variant="contained" color="secondary" onClick={handleOpen}>
                    Create new topic
                </Button>
            </div>


            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500, }}>
                <Fade in={open}>
                    <Container component="main" maxWidth="sm">
                        <Paper className={classes.paper} elevation={6}>
                            <Typography component="h1" variant="h5" className={classes.title}>Discussion
                                creation</Typography>
                            <form className={classes.form} ref={formRef}>
                                <Grid container spacing={1}>

                                    <Input name="title" label="Tittle" type="text" autoComplete={'off'}
                                        handleChange={handleChange}/>
                                    <Input name="description" label="Description" type="text" autoComplete={'off'}
                                        required={false} handleChange={handleChange}/>

                                    <Input name="text" label="Text" autoComplete={'off'} multiline={true}
                                        handleChange={handleChange}/>
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
        </div>
    );
};

export default NewTopicForm;
