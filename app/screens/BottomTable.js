import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';

const BottomTable = () =>{
    const [tableData, setTableData] = React.useState([
        [1988, 'Paricipation   -', '52%'],
        [1994, 'Paricipation   ^', '77.16%'],
        [2000, 'Paricipation   v', '63.96%'],
        [2006, 'Paricipation   v', '58.55%'],
        [2012, 'Paricipation   ^', '63.08%'],
        [2018, 'Paricipation   ^', '63.42%'],
    ]);

    return (
      <View className="flex w-full h-30 px-4 mb-6 mt-4">
        <View className="flex justify-center rounded-sm overflow-hidden">
            <Table style={{backgroundColor: '#303030'}} borderStyle={{borderWidth: 1, borderColor: '#BBBBBB'}}>
                <Rows data={tableData} style={{}} textStyle={{textAlign: 'center', margin: 4, color: '#BBBBBB'}}/>
            </Table>
        </View>
      </View>
    )
}

export default BottomTable;