import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        maxWidth: '70%',
        minWidth: '70%',
        marginLeft: theme.spacing(15),
        marginBottom: theme.spacing(2),
        backgroundColor: 'white',
        borderRadius: 15,

    },
    title: {
        textDecoration: 'none',
        color: '#d2601a',
        fontWeight: 'bold',
        overflowWrap: 'break-word'
    },
    description: {
        fontSize: 'bold'

    },
    greenBackground: {
        backgroundColor: '#ECFFDC',
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

    commentsDiv: {
        marginLeft: theme.spacing(1),
    },
    comment: {
        borderRadius: 15,
        marginBottom: theme.spacing(1),
        padding: '8px 10px 10px 20px',
        overflow: 'hidden',
    },
    commentText: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 2, /* number of lines to show */
        '-webkit-box-orient': 'vertical',
    },

}));
