import React, {useRef, useState} from 'react';
import Comment from './comment/Comment';
import useStyles from './styles';
import {TextField, Typography} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {createComment} from '../../actions/topics';
import Pagination from '../utils/pagination/Pagination';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';


const Comments = ({ topicId, comments }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const formRef = useRef();
    const inputRef = useRef();
    const [inputValue, setInputValue] = useState({ text: '' });

    const handleSubmit = (e) => {
        if (!formRef.current.reportValidity()) {
            return;
        }
        e.preventDefault();

        setInputValue({ text: '' });
        dispatch(createComment(topicId, inputValue));
    };
    const handleChange = (e) => {
        setInputValue({ text: e.target.value });
    };

    const SearchButton = () => (
        <IconButton type='submit' onClick={handleSubmit}>
            <SendIcon color='primary'/>
        </IconButton>
    )

    return (
        <div>

                <Typography variant='h6' color="textSecondary">
                    {comments?.length ? 'Comments:' : 'No comments yet'}
                </Typography>

            <form className={classes.form} ref={formRef}>
                <TextField
                    className={classes.NewCommentInput}
                    id="standard-name"
                    label="New comment"
                    value={inputValue.text}
                    multiline
                    autoComplete='off'
                    variant="outlined"
                    inputRef={inputRef}
                    onChange={handleChange}
                    InputProps={{ endAdornment: <SearchButton/> }}
                />
            </form>

            {comments &&
            <Pagination
                data={comments}
                dataLimit={20}
                RenderComponent={Comment}
            />}
        </div>
    );
};

export default Comments;
