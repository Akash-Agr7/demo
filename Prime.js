import { SafeAreaView, Text, View, Image, FlatList, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React, { Component } from 'react'

const data = [
    {
        url: 'https://i.ytimg.com/vi/56evm-ai7DI/maxresdefault.jpg',
    },
    {
        url: 'https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_326/post_26215020/full.jpg',
    },
    {
        url: 'https://www.koimoi.com/wp-content/new-galleries/2021/05/amazon-prime-videos-the-family-man-season-2-trailer-gets-a-phenomenal-response-5-million-views-in-just-5-hours-001.jpg',
    },
    {
        url: 'https://images-na.ssl-images-amazon.com/images/I/91j9NqPez3L._RI_.jpg',
    },
]

export default class Pure extends Component {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
                <View>
                    <Image
                        style={{ width: 100, height: 50, alignSelf: 'center', resizeMode: 'contain' }}
                        source={{
                            uri: 'https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png'
                        }}
                    />
                </View>
                <View style={styles.header}>

                    <Pressable
                        style={({ pressed }) => [{
                            backgroundColor: pressed
                                ? '#111111'
                                : 'black',
                            borderBottomColor: pressed
                                ? '#ffffff'
                                : '#000000'
                        },
                        styles.headerButton]}>
                        {({ pressed }) => (
                            <Text style={styles.text}>
                                {pressed ? 'Home' : 'Home'}
                            </Text>
                        )}
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [{
                            backgroundColor: pressed
                                ? '#111111'
                                : 'black',
                            borderBottomColor: pressed
                                ? '#ffffff'
                                : '#000000'
                        },
                        styles.headerButton]}>
                        {({ pressed }) => (
                            <Text style={styles.text}>
                                {pressed ? 'TV Shows' : 'TV Shows'}
                            </Text>
                        )}
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [{
                            backgroundColor: pressed
                                ? '#111111'
                                : 'black',
                            borderBottomColor: pressed
                                ? '#ffffff'
                                : '#000000'
                        },
                        styles.headerButton]}>
                        {({ pressed }) => (
                            <Text style={styles.text}>
                                {pressed ? 'Movies' : 'Movies'}
                            </Text>
                        )}
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [{
                            backgroundColor: pressed
                                ? '#111111'
                                : 'black',
                            borderBottomColor: pressed
                                ? '#ffffff'
                                : '#000000'
                        },
                        styles.headerButton]}>
                        {({ pressed }) => (
                            <Text style={styles.text}>
                                {pressed ? 'Kids' : 'Kids'}
                            </Text>
                        )}
                    </Pressable>

                </View>

                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        data={data}
                        renderItem={({ item }) => (
                            <Image
                                style={{ width: 390, height: 195, alignSelf: 'center' }}
                                source={{
                                    uri: item.url
                                }}
                            />
                        )}
                    />
                    {/* <FlatList
                        horizontal
                        data={data}
                        renderItem={({ item }) => (
                            <Image
                                style={{ width: 400, height: 200, alignSelf: 'center' }}
                                source={{
                                    uri: item.url
                                }}
                            />
                        )}
                    />
                    <FlatList
                        horizontal
                        data={data}
                        renderItem={({ item }) => (
                            <Image
                                style={{ width: 400, height: 200, alignSelf: 'center' }}
                                source={{
                                    uri: item.url
                                }}
                            />
                        )}
                    /> */}
                </View>
                <View style={styles.footer}>

                    <Pressable
                        style={({ pressed }) => [{
                            backgroundColor: pressed
                                ? '#111111'
                                : 'black',
                            borderTopColor: pressed
                                ? '#ffffff'
                                : '#000000'
                        },
                        styles.footerButton]}>
                        {({ pressed }) => (
                            <Text style={styles.footerText}>
                                {pressed ? 'Home' : 'Home'}
                            </Text>
                        )}
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [{
                            backgroundColor: pressed
                                ? '#111111'
                                : 'black',
                            borderTopColor: pressed
                                ? '#ffffff'
                                : '#000000'
                        },
                        styles.footerButton]}>
                        {({ pressed }) => (
                            <Text style={styles.footerText}>
                                {pressed ? 'Channels' : 'Channels'}
                            </Text>
                        )}
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [{
                            backgroundColor: pressed
                                ? '#111111'
                                : 'black',
                            borderTopColor: pressed
                                ? '#ffffff'
                                : '#000000'
                        },
                        styles.footerButton]}>
                        {({ pressed }) => (
                            <Text style={styles.footerText}>
                                {pressed ? 'Find' : 'Find'}
                            </Text>
                        )}
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [{
                            backgroundColor: pressed
                                ? '#111111'
                                : 'black',
                            borderTopColor: pressed
                                ? '#ffffff'
                                : '#000000'
                        },
                        styles.footerButton]}>
                        {({ pressed }) => (
                            <Text style={styles.footerText}>
                                {pressed ? 'Downloads' : 'Downloads'}
                            </Text>
                        )}
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [{
                            backgroundColor: pressed
                                ? '#111111'
                                : 'black',
                            borderTopColor: pressed
                                ? '#ffffff'
                                : '#000000'
                        },
                        styles.footerButton]}>
                        {({ pressed }) => (
                            <Text style={styles.footerText}>
                                {pressed ? 'My Stuff' : 'My Stuff'}
                            </Text>
                        )}
                    </Pressable>


                    {/* <View style={{ padding: 10 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Home</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Channels</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Find</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Downloads</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>My Stuff</Text>
                    </View> */}
                </View>

            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    header: {
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    headerButton: {
        alignItems: 'center',
        padding: 5,
        flex: 0.25,
        borderBottomWidth: 2,
    },
    text: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 0,
        height: 50,
    },
    footerButton: {
        alignItems: 'center',
        padding: 5,
        flex: 0.20,
        borderTopWidth: 2,
    },
    footerText: {
        color: '#ffffff',
        fontSize: 13,

    },
})