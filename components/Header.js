import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";



const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Toda App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        justifyContent: "center", 
        backgroundColor: '#778899',
    },
    title: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default Header;
