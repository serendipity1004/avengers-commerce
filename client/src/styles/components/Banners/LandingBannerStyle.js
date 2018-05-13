export default theme => ({
    root: {},
    paperRoot:{
        marginTop:32,
        paddingLeft:20,
        backgroundImage: `url(${require('../../../resources/img/captain-america.jpg')})`,
        backgroundPosition:'center top',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%',
        height:355
    },
    titleContainer:{
        height:'100%',
    },
    title:{
        color:'#FFFFFF'
    },
    titleBtn:{
        display:'inline-block',
        backgroundColor:theme.palette.secondary.main,
        color:'#FFFFFF',
        '&:hover':{
            backgroundColor:theme.palette.secondary.light
        }
    }
});