export default theme => ({
    root: {
        width:300,
        padding:20
    },
    title: {
        display: 'inline-block',
        borderBottom: `2px solid ${theme.palette.secondary.main}`,
        paddingBottom: 5,
        margin: '0 auto 5px auto'
    },
    button:{
        backgroundColor:theme.palette.secondary.main,
        color:'#FFFFFF',
        width:'100%',
        fontWeight:'bold',
        '&:hover':{
            backgroundColor:theme.palette.secondary.light,
            color:'#000000'
        }
    }
});