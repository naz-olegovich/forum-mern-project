import React, {useRef, useState} from 'react';
import Comment from "./comment/Comment";
import useStyles from './styles';
import {Grid, TextField, Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {createComment} from "../../actions/topics";
import Pagination from "../utils/pagination/Pagination";

const Comments = ({ topicId, comments }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const formRef = useRef();
    const inputRef = useRef();
    const [inputValue, setInputValue] = useState({ text: '' });

    const handleSubmit = (e) => {
        console.log(e.target)

        e.preventDefault();
        if (!formRef.current.reportValidity()) {
            alert(1111)
            return
        }
        setInputValue({ text: '' })
        dispatch(createComment(topicId, inputValue))
    };
    const handleChange = (e) => {
        setInputValue({ text: e.target.value });
    };

    return (
        <div>
            <form className={classes.form} ref={formRef}>
                <Grid container direction="row" justify="center">
                    <TextField value={inputValue.text} name="text" label="Text" variant="outlined"
                               autoComplete='off'
                               onChange={handleChange} inputRef={inputRef}/>
                    <Button onClick={handleSubmit} type="submit"
                            variant="contained" color="primary" className={classes.submit}>
                        Add comment
                    </Button>
                </Grid>
            </form>

            {comments &&
            <Pagination
                data={comments}
                dataLimit={2}
                RenderComponent={Comment}
            />}
        </div>
    );
};

export default Comments;
