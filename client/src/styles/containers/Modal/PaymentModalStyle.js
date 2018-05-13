export default theme => ({
    root: {},
    textField:{
        width:50,
        margin:10
    },
    modalDiv:{
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    },
    title:{
        display:'inline-block',
        borderBottom:`2px solid ${theme.palette.secondary.main}`,
        marginBottom:20
    },
    titleNoBottm:{
        display:'inline-block',
        borderBottom:`2px solid ${theme.palette.secondary.main}`,
    },
    topPadding:{
        paddingTop:20
    },
    payBtn:{
        marginTop:20,
        backgroundColor:theme.palette.secondary.main,
        color:'#FFFFFF',
        fontWeight:'bold',
        '&:hover':{
            color:'#000000',
            backgroundColor:theme.palette.secondary.light
        }
    },
    doneIcon:{
        height:200,
        width:200,
        fill:theme.palette.secondary.main
    }
});