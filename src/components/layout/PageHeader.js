import React from 'react'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import { useNavigate } from 'react-router';
import Controls from '../controls/Controls';

const useStyles = makeStyles(theme =>({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        padding: theme.spacing(4),

    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    },
    pageButton: {
        display: 'flex'
    }
}))

const PageHeader = (props) => {
    const classes = useStyles();
    const {title, subTitle, buttonText, url} = props;
    const navigate = useNavigate();

    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h4"
                        component="div"
                        >{title}
                    </Typography>     
                    <Typography
                        variant="h6"
                        component="div"
                        >{subTitle}
                    </Typography> 
                </div>
                { url 
                  ?
                    <div>
                        <Controls.Button
                         text= {buttonText}
                         onClick={() => navigate(url)} />
                  </div>
                   :
                   null
                }
                
            </div>
        </Paper>
    )
}

export default PageHeader
