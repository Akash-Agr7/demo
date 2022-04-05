import { Text, View, StyleSheet, SectionList, FlatList, Image } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      newData: []
    }

  }
  /*       newData:[
            {
              title: "Main dishes",
              data: ["Pizza", "Burger", "Risotto"]
            },
            {
              title: "Sides",
              data: ["French Fries", "Onion Rings", "Fried Shrimps"]
            },
            {
              title: "Drinks",
              data: ["Water", "Coke", "Beer"]
            },
            {
              title: "Desserts",
              data: ["Cheese Cake", "Ice Cream"]
            }
          ]
    }
}
*/

  componentDidMount() {
    console.log('api call')

    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f8b2b7ab123e45c38f75adb16bb79680').then((response) => {

      //  this.setState({newData:response.data.articles})
      this.setState({
        newData: response.data.articles.sort(function (a, b) {
          let keyA = new String(a.author),
            keyB = new String(b.author);
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        }).reduce((prev, curr) => {
          let newObj = prev.find(x => x.author === curr.author)
          if (!newObj) {
            newObj = { title: JSON.stringify(curr.source), data: [] }
            prev.push(newObj)
          }
          newObj.data.push(curr)
          return prev
        }, [])
      })
      
    })

    console.log('after api')
  }
  render() {
    console.log(this.state.newData)
    return (
      <View style={styles.main}>
        {/*             <FlatList

                data={this.state.newData}
                
                renderItem={({ item }) => {

                    return(
                        
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.data}</Text>
                    </View>
                    )
                }}

/> */}
        <SectionList
          sections={this.state.newData}

          renderItem={({ item }) => {
            return (
              <View style={styles.section}>
                <Image style={{ width: '100%', height: 200, }} source={{ uri: item.urlToImage }} />
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            )
          }}
          renderSectionHeader={({ section: { title } }) => {

            return (<Text style={styles.header} >{title}</Text>)

          }}

        />


      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 40,
  },
  header: {
    borderWidth: 1,
    backgroundColor: 'aqua',
    fontSize: 20,

  },
  section: {
    borderWidth: 1,
    backgroundColor: 'red',
  }
})