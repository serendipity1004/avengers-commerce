export default theme => ({
    root: {},
    navTitle: {
        ...theme.mixins.gutters({
            paddingTop: 15,
            paddingBottom: 15,
            marginTop: theme.spacing.unit * 3,
        }),
        backgroundColor:'#E21A20',
        color:'#FFFFFF'
    },
    navLinks:{
        ...theme.mixins.gutters({
            paddingTop:12,
            paddingBottom:12,
        }),
        textDecoration:'none',
        verticalAlign:'baseline'
    },
    divider:{
        width:'90%',
        margin:'auto'
    },
    icon: {
        verticalAlign:'middle'
    },
    categoryTitle: {
        backgroundColor: '#455a64'
    }
});