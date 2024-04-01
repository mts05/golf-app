import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface OlympicMainPageProps {
  min: number
  max: number
}

const OlympicMainPage: React.FC<OlympicMainPageProps> = ({ min, max }) => {
  // 数値選択用の状態
  const [numPickers, setNumPickers] = useState(2)
  const [selectedValues, setSelectedValues] = useState<number[]>(Array(numPickers).fill(0))

  const handleValueChange = (itemValue: number, index: number) => {
    const newSelectedValues = [...selectedValues]
    newSelectedValues[index] = itemValue
    setSelectedValues(newSelectedValues)
  }

  // Pickerの選択肢を生成する関数
  const generatePickerItems = (min: number, max: number) => {
    let items = []
    for (let i = min; i <= max; i++) {
      items.push(<Picker.Item key={i} label={`${i}`} value={i} />)
    }
    return items
  }

  // 指定された数のPickerを横に並べる
  const renderPickers = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <View key={index} style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValues[index]}
          onValueChange={(itemValue) => handleValueChange(itemValue, index)}
          style={styles.picker}
        >
          {Array.from({ length: max + 1 }, (_, i) => i).map((value) => (
            <Picker.Item key={value} label={`${value}`} value={value} />
          ))}
        </Picker>
      </View>
    ));
  }

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={numPickers}
        onValueChange={(itemValue) => {
          setNumPickers(itemValue)
          // numPickersが変更されたときにselectedValuesのサイズも更新
        // setSelectedValues(Array(itemValue).fill(0))
        }}
        style={styles.picker}
      >
        {Array.from({ length: 7 }, (_, i) => i + 2).map((value) => (
          <Picker.Item key={value} label={`${value}`} value={value} />
        ))}
      </Picker>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {renderPickers(numPickers)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  pickerContainer: {
    padding: 10
  },
  picker: {
    width: 100,
    height: 180
  },
  pickerItem: {
    height: 180 // AndroidのPicker高さ調整
  },
  scrollView: {
    flexDirection: 'row'
  }
})

export default OlympicMainPage
