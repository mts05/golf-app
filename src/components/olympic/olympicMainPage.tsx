import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface OlympicMainPageProps {
  min: number;
  max: number;
}

const OlympicMainPage: React.FC<OlympicMainPageProps> = ({ min, max }) => {
  // 数値選択用の状態
  const [numPickers, setNumPickers] = useState(2)

  // Pickerの選択肢を生成する関数
  const generatePickerItems = (min: number, max: number) => {
    let items = []
    for (let i = min; i <= max; i++) {
      items.push(<Picker.Item key={i} label={`${i}`} value={i} />)
    }
    return items;
  };

  // 指定された数のPickerを横に並べる
  const renderPickers = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <View key={index} style={styles.pickerContainer}>
        <Picker
          selectedValue={min}
          style={styles.picker}
          itemStyle={styles.pickerItem}
          // 選択した値に基づいて何らかのアクションをする場合はここに追加
        >
          {generatePickerItems(min, max)}
        </Picker>
      </View>
    ))
  }

  return (
    <View style={styles.container}>
      {/* 2~8を選択するPicker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={numPickers}
          onValueChange={(itemValue) => setNumPickers(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          {generatePickerItems(2, 8)}
        </Picker>
      </View>

      {/* 指定された数のPickerを横に並べる */}
      <ScrollView horizontal={true} style={styles.scrollView}>
        {renderPickers(numPickers)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  pickerContainer: {
    padding: 10,
  },
  picker: {
    width: 100,
    height: 180,
  },
  pickerItem: {
    height: 180, // AndroidのPicker高さ調整
  },
  scrollView: {
    flexDirection: 'row',
  },
});

export default OlympicMainPage;

// import React, { useState } from 'react'
// import { View, StyleSheet, Text } from 'react-native'
// import { Picker } from '@react-native-picker/picker'

// interface NumberPickerProps {
//   min: number
//   max: number
//   initialNumber?: number
//   onValueChange?: (value: number) => void
// }

// const OlympicMainPage: React.FC<NumberPickerProps> = ({
//   min,
//   max,
//   initialNumber = min,
//   onValueChange
// }) => {
//   const [selectedValue, setSelectedValue] = useState<number>(initialNumber);

//   const handleValueChange = (itemValue: number) => {
//     setSelectedValue(itemValue)
//     onValueChange?.(itemValue)
//   }

//   return (
//     <View style={styles.container}>
//       <Picker
//         selectedValue={selectedValue}
//         onValueChange={handleValueChange}
//         style={styles.picker}
//         itemStyle={styles.pickerItem}
//       >
//         {Array.from({ length: max - min + 1 }, (_, i) => min + i).map((value) => (
//           <Picker.Item key={value} label={value.toString()} value={value} />
//         ))}
//       </Picker>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     // コンテナスタイルをここに配置
//   },
//   picker: {
//     // ピッカースタイルをここに配置
//     width: 100, // 例
//     height: 150 // 例
//   },
//   pickerItem: {
//     // ピッカーアイテムスタイルをここに配置
//   }
// })

// export default OlympicMainPage
