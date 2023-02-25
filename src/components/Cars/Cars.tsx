import React, { useState } from 'react';
import { useGetData }from '../../custom-hooks';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Theme,
    useTheme,
    makeStyles,
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import clsx from 'clsx';
import {  RouteComponentProps, withRouter, Switch, Route } from 'react-router-dom';
import { DataTable } from '../DataTable';
import { VehicleForm } from '../VehicleForm'; 

   
interface carInventoryProps {
    history: RouteComponentProps['history'];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Georgia, Times New Roman, Times, serif",
    },
    h3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        color: '#4ef3b4',
        textDecoration: 'none',
        backgroundColor: 'white',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        margin: '0 0 0 0.45em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_a: {
        color: '#4ef3b4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none',
    },
    cool: {
        display: 'flex',
    },
    root: {
        display:'flex',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'],{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'],{
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menubutton: {
        marginRight: theme.spacing(3),
    },
    hide: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader:{
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0,1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin',{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin',{
            easing: theme.transitions.easing.easeOut,
            duration:theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    toolbar: {
        display: 'flex',
        backgroundColor: '#62a69f',
        color: 'white',
        fontFamily: "Georgia, Times New Roman, Times, serif",
    },
    toolbar_button: {
        marginLeft: 'auto',
        color: 'white',
        fontFamily: "Georgia, Times New Roman, Times, serif",
    },
    margin_top: {
        marginTop: '50px',
    },
    font: {
        fontFamily: "Georgia, Times New Roman, Times, serif",
    },
    leftMargin: {
        marginLeft: '240px',
    },
}))


export const Cars = withRouter( (props: carInventoryProps) => {

    console.log(props);
    const {history} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () =>{
        setOpen(false);
    };

    const handleDiaglogClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDiaglogClickclose = () => {
        setDialogOpen(false);
    };

    const itemsList = [
        {
            text: 'Home', 
            onclick: () => history.push('/')
        },
        {
            text: 'SignIn', 
            onclick: () => history.push('/signin')
        },
        {
            text: 'About', 
            onclick: () => history.push('/about')
        },
    ];

  return (
    <div className={ `${classes.root} ${classes.column}`}>
        <CssBaseline />
        <AppBar position="fixed" className= {clsx(classes.appBar, {[classes.appBarShift]: open})}>
            <Toolbar className= {classes.toolbar}>
                <IconButton color="inherit" aria-label='open-drawer' onClick={handleDrawerOpen} edge="start" className= {clsx(classes.menubutton,open && classes.hide)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' className= {classes.font} noWrap>
                    Auto Inventory
                </Typography>
                <Button className= {classes.toolbar_button} onClick= {handleDiaglogClickOpen}>Sell your car</Button>

                <Dialog open= {dialogOpen} onClose={handleDiaglogClickclose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Enter Vehilce infomation</DialogTitle>
                    <DialogContent>
                        <DialogContentText></DialogContentText>
                        <VehicleForm/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDiaglogClickclose} color="primary">Cancel</Button>
                        <Button onClick={handleDiaglogClickOpen} color="primary">Done</Button>
                    </DialogActions>
                </Dialog>
            </Toolbar>
        </AppBar>
        <MUIDrawer className= {classes.drawer} variant="persistent" anchor='left' open={open} classes= {{paper: classes.drawerPaper,}}>
            <div className= {classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {itemsList.map((item, index) => {
                    const { text, onclick } = item;
                    return (
                        <ListItem button key={text} onClick={onclick}>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                })}
            </List>
        </MUIDrawer>
        <main className= {`${clsx(classes.content, {[classes.contentShift]: open,})} ${classes.leftMargin}`}>
                <div className={classes.drawerHeader}/>
                <DataTable/>
        </main>
    </div>
  )
})
