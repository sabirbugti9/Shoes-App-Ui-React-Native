import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import shoes from '../assets/shoe';
import TopProduct from '../components/TopProduct';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const primaryColor = "#000000";

const HomeScreen = () => {


    return (
        <FlatList
            data={shoes}
            ListHeaderComponent={
                <View >
                    <Text style={styles.textDiscover}>Discover</Text>
                    <View style={styles.row}>
                        <Text style={styles.shortprice}>SHORT BY PRICE</Text>
                        <MaterialCommunityIcons name="filter" color="black" size={35} style={{ marginRight: 34, marginBottom: 12.0 }} />
                    </View>
                </View>
            }
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.productName}
            renderItem={(item) => {
                return (
                    <TopProduct item={item.item} />
                )
            }}
        />

    );
}

const styles = StyleSheet.create({

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textDiscover: {
        color: primaryColor,
        fontSize: 32,
        fontWeight: "bold",
        marginLeft: 17.0,
        marginTop: 30.0,
        marginBottom: 16.0,
    },
    shortprice: {
        color: primaryColor,
        fontSize: 14,
        marginLeft: 17.0,
        marginTop: 12.0,
    }


});

export default HomeScreen;
