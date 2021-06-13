import React, {useState, useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';
import {Pagination, PaginationItem} from '@material-ui/lab';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Paginate = ({ data, RenderComponent, dataLimit }) => {
    const classes = useStyles();
    const numberOfPages = Math.ceil(data.length / dataLimit);
    const location = useLocation();
    const query = useQuery();
    const page = query.get('page') || 1;
    const [currentPage, setCurrentPage] = useState(page);

    useEffect(() => {
        setCurrentPage(page);
    }, [page]);

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    return (
        <div>
            <Grid container direction="column" justify="flex-start">
                {getPaginatedData().map((data) => (
                    <RenderComponent key={data._id} data={data}/>
                ))}
            </Grid>

            {Boolean(data.length) &&
            <Container component="main" maxWidth="lg" className={classes.paginationContainer}>

                <Pagination
                    classes={{ ul: classes.ul }}
                    color='primary'
                    size='medium'
                    count={numberOfPages}
                    page={Number(page)}
                    variant="outlined"
                    shape='rounded'
                    renderItem={(item) => (
                        <PaginationItem {...item}  component={Link} to={`${location.pathname}?page=${item.page}`}/>
                    )}
                />
            </Container>
            }
        </div>
    );
};
export default Paginate;
