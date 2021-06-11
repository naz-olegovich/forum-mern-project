import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        minWidth: "60%",
        // maxWidth: '70%',
        marginBottom: theme.spacing(2),
    },
    greenBackground: {
        backgroundColor: '#dfd',
    },
    media: {
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    commentsBtn: {
        marginRight: 'auto',
    },
    comments:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }

}));