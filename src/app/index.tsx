import React, { useState } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import OlympicMainPage from '../components/olympic/olympicMainPage'

const Index = (): JSX.Element => {
  const [showNumberPicker, setShowNumberPicker] = useState<boolean>(false)

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <Text>
                Header
            </Text>
        </View>

        {showNumberPicker && (
            <View style={styles.gameArea}>
                <OlympicMainPage min={0} max={20} />
            </View>
        )}

        <View style={styles.naviContainer}>
        <TouchableOpacity style={styles.naviButton}>
            <Ionicons name="ios-home" size={24} color="white" />
            <Text style={styles.naviText}>Score</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.naviButton}>
            <Ionicons name="ios-search" size={24} color="white" />
            <Text style={styles.naviText}>LasVegas</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.naviButton}
        onPress={() => { setShowNumberPicker(true) }}
        >
            <Ionicons name="ios-notifications" size={24} color="white" />
            <Text style={styles.naviText}>Olympic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.naviButton}>
            <Ionicons name="ios-person" size={24} color="white" />
            <Text style={styles.naviText}>Profile</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'gray'
  },
  headerContainer: {
    // ここで必要なスタイルを定義します
  },
  gameArea: {
    flex: 1
  },
  naviContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  naviButton: {
    alignItems: 'center'
  },
  naviText: {
    color: 'white',
    fontSize: 12
  }
})

export default Index
