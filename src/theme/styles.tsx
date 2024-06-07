import { StyleSheet } from "react-native"
export const styles=StyleSheet.create({
    root:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        backgroundColor: '#000'
    },
    inputs:{
        width:"90%"
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#05E5D8'
    },
    textTotal:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000'
    },
    button:{
        width:"90%",
        backgroundColor: '#05e5d8'
    },
    totalContainer: {
        padding: 16,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
      },
    textRedirect:{
        marginTop:20,
        fontSize:17,
        fontWeight:'bold',
        color:'white'
    },
    routeHome:{
        flex:1,
        marginVertical:55,
        marginHorizontal:25,
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        gap:15
    },
    iconEnd:{
        flex:1,
        alignItems:'flex-end',
        backgroundColor:'blac',
        
    },
    modal:{
        paddingHorizontal:20,
        paddingVertical:20,
        marginHorizontal:20,
        borderRadius:10,
        backgroundColor:'white',
        gap:10,
        color:'#05E5D8'
    },
    routeMessage:{
        borderRadius:20,
        flexDirection:'row',
        paddingHorizontal:15,
        paddingVertical:20,
        alignItems:'center'
    },
    fabMessage:{
        position:'absolute',
        bottom:20,
        right:15,
    },
    itemContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        
      },
})