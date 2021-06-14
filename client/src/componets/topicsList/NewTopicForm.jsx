import React, { useRef, useState } from 'react';
import { Backdrop, Button, Container, Grid, Modal, Paper, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Input from '../utils/input/Input';
import { useDispatch } from 'react-redux';
import { createTopic } from '../../actions/topics';
import useStyles from './styles';
import JoditEditor from 'jodit-react';

const NewTopicForm = () => {
    const formRef = useRef();
    const dispatch = useDispatch();
    const classes = useStyles();
    const editor = useRef(null);

    const initialState = { title: '', description: '', text: '' };
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState(initialState);
    const config = {
        placeholder: 'Content',
        processPasteHTML: false,
        spellcheck: false,
        toolbarButtonSize: 'small',
        toolbarAdaptive: false,
        askBeforePasteHTML: false,
        askBeforePasteFromWord: false,
        buttons: 'bold,italic,underline,strikethrough,superscript,' +
            'subscript,|,ul,ol,|,indent,outdent,left,font,fontsize,paragraph,|'
    };

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
        e.preventDefault();
        if (!formRef.current.reportValidity()) {
            return;
        }

        dispatch(createTopic(form));
        setOpen(false);
    };

    return (
        <div>
            <div className={classes.addBtnDiv}>
                <Fab aria-label="add" onClick={handleOpen} className={classes.fabBtn}>
                    <AddIcon style={{ color: 'white', fontSize: 'xx-large' }}/>
                </Fab>
            </div>


            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500, }}>
                <Container component="main" maxWidth="md" style={{ outline: 'none' }}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h5" className={classes.title}>Discussion
                            creation</Typography>
                        <form className={classes.form} ref={formRef}>
                            <Grid container spacing={2}>

                                <Input name="title" label="Tittle" type="text" autoComplete={'off'}
                                    handleChange={handleChange}/>
                                <Input name="description" label="Description" type="text" autoComplete={'off'}
                                    multiline={true} required={false} handleChange={handleChange}/>
                                <div style={{ width: '100%', padding: 8 }} className=':root'>
                                    <JoditEditor
                                        ref={editor}
                                        placeholder="qqq"
                                        value={form.text}
                                        config={config}
                                        tabIndex={1}
                                        onBlur={(newContent) => setForm({
                                            ...form,
                                            text: newContent
                                        })}
                                    />
                                </div>
                            </Grid>
                            <Button onClick={handleSubmit} type="submit" fullWidth
                                variant="contained" color="primary" className={classes.submit}>
                                Create discussion
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </Modal>
        </div>
    );
};

export default NewTopicForm;
