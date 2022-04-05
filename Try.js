import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity } from "react-native";

// DATA = [
//     {
//         title: { key: '1', value: 'test1', description: 'test demo testing1' },
//         data: ["Pizza", "Burger", "Risotto"]
//     },
//     {
//         title: { key: '1', value: "Sides", description: 'test demo testing2' },
//         data: ["French Fries", "Onion Rings", "Fried Shrimps"]
//     },
//     {
//         title: { key: '1', value: "Drinks", description: 'test demo testing3' },
//         data: ["Water", "Coke", "Beer"]
//     },
//     {
//         title: { key: '1', value: "Desserts", description: 'test demo testing4' },
//         data: ["Cheese Cake", "Ice Cream"]
//     }
// ];

// const addData = {
//     title: { key: '1', value: "Breads", description: 'test demo testing5' },
//     data: ["Indian Naan", "Kulcha"]
// };

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title.key}</Text>
    </View>
);
const renderSectionHeader = ({ section }) => {
    return (
        <View>
            <Text style={{ backgroundColor: 'aqua', textAlign: 'center', padding: 20 }}>
                {section.title.value}
            </Text>
        </View>
    )
}
const renderItem = ({ item }) => {
    return (
        <View>
            <Text style={{ padding: 20, fontWeight: '700' }}>
                {item}
            </Text>
        </View>
    )
}

// const addItem = (DATA) =>{
//     console.log( 'hello', addData);
//     DATA = DATA.push(addData);
//     return DATA
// }

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DATA: [
                {
                    title: { key: '1', value: 'test1', description: 'test demo testing1' },
                    data: ["Pizza", "Burger", "Risotto"]
                },
                {
                    title: { key: '1', value: "Sides", description: 'test demo testing2' },
                    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
                },
                {
                    title: { key: '1', value: "Drinks", description: 'test demo testing3' },
                    data: ["Water", "Coke", "Beer"]
                },
                {
                    title: { key: '1', value: "Desserts", description: 'test demo testing4' },
                    data: ["Cheese Cake", "Ice Cream"]
                }
            ]

            // addData : {
            //     title: { key: '1', value: "Breads", description: 'test demo testing5' },
            //     data: ["Indian Naan", "Kulcha"]
            // }

        }
        // const Item = ({ title }) => (
        //     <View style={styles.item}>
        //         <Text style={styles.title}>{title.key}</Text>
        //     </View>
        // );
        // renderSectionHeader = ({ section }) => {
        //     return (
        //         <View>
        //             <Text style={{ backgroundColor: 'aqua', textAlign: 'center', padding: 20 }}>
        //                 {section.title.value}
        //             </Text>
        //         </View>
        //     )
        // }
        // const renderItem = ({ item }) => {
        //     return (
        //         <View>
        //             <Text style={{ padding: 20, fontWeight: '700' }}>
        //                 {item}
        //             </Text>
        //         </View>
        //     )
        // }

    }

    addItem = () => {
        console.log('hello', this.state);
        return this.setState({
            DATA: [...this.state.DATA, {
                title: { key: '1', value: "Breads", description: 'test demo testing5' },
                data: ["Indian Naan", "Kulcha"]
            }
            ]
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.button} onPress={ this.addItem}>
                        <Text>Hello</Text>
                    </TouchableOpacity>

                    <SectionList
                        sections={this.state.DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={renderItem}
                        renderSectionHeader={renderSectionHeader}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
})

export default App;