import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import classnames from 'classnames';

const PREFIX = 'RaTopToolbar';

const classes = {
    root: `${PREFIX}-root`,
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    [`&.${classes.root}`]: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(1),
        minHeight: theme.spacing(5),
        [theme.breakpoints.up('xs')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
        [theme.breakpoints.down('md')]: {
            paddingRight: theme.spacing(2),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.paper,
        },
    },
}));

const TopToolbar = props => {
    const { className, children, ...rest } = props;

    return (
        <StyledToolbar
            className={classnames(classes.root, className)}
            {...rest}
        >
            {children}
        </StyledToolbar>
    );
};

TopToolbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default TopToolbar;