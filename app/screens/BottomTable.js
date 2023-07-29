import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';

const BottomTable = () =>{
    const [tableData, setTableData] = React.useState([
        [500, 'Important', ''],
        [500, 'Important', ''],
    ]);

    return (
      <View className="flex w-full h-30 p-4 pt-6">
        <View className="flex justify-center rounded-sm overflow-hidden">
            <Table style={{backgroundColor: '#303030'}} borderStyle={{borderWidth: 1, borderColor: '#BBBBBB'}}>
                <Rows data={tableData} style={{}} textStyle={{margin: 6, color: '#BBBBBB'}}/>
            </Table>
        </View>
      </View>
    )
}

export default BottomTable;