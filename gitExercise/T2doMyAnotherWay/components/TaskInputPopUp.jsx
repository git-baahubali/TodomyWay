import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Switch, } from 'react-native';
import { styles } from './styles/styles';
import {openDatabase} from 'react-native-sqlite-storage';
const TaskInputPopup = ({ isVisible, onClose, onAddTask }) => {
  //  const TaskInputPopup = () => {

  const [taskTitle, setTaskTitle] = useState('');
  const [dopamineRequirement, setDopamineRequirement] = useState('low');
  const [startTime, setStartTime] = useState('');
  const [deadline, setDeadline] = useState('');
  const [reminder, setReminder] = useState(null);
  // ... Other state variables for task details
  let db = openDatabase('Hit.db')

  function insertTask() {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO tasks (title, dopamineRequirement, createdDate, deadlineDate) VALUES (?, ?, ?, ?)',
        [title, dopamineRequirement, new Date().toISOString(), deadlineDate],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            // Task inserted successfully
            setTaskTitle('');
            setDopamineRequirement('low');
            setDeadline('null')
          } else {
            // Task insertion failed
          }
        },
        error => {
          console.error('Error inserting task:', error);
        }
      );
    });
    
  }

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT title FROM sqlite_master",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                dopamineRequirement TEXT,
                createdDate DATETIME,
                deadlineDate DATETIME NULL DEFAULT NULL
              )`,
              []
            );
          }
        }
      );
    });
  }, []);


  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="Task Title"
          value={taskTitle}
          onChangeText={text => setTaskTitle(text)}
          style={styles.textInput}
        />
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => setDopamineRequirement('high')}
            style={{...styles.button , ...{
              backgroundColor: 'rgba(255,0,0,0.6)',
              padding: 10,
              borderRadius: 5,
              // marginRight: 10,
              
            }}}
          >
            <Text>High</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setDopamineRequirement('medium')}
            style={{...styles.button, ...{
              backgroundColor: 'rgb(135, 206, 235)',
              padding: 10,
              borderRadius: 5,
              marginRight: 10,
            }}}
          >
            <Text>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDopamineRequirement('low')}
            style={{...styles.button, ...{
              backgroundColor: 'yellow',
              padding: 10,
              borderRadius: 5,
            }}}>
            <Text>Low</Text>
          </TouchableOpacity>
        </View>

        {/* Reminder Switch */}
        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Reminder:</Text>
          <Switch
            value={reminder}
            onValueChange={value => setReminder(value)}
          />
        </View> */}

        {/* Other input fields and buttons */}

        <View style={{
          flexDirection:'row',
          justifyContent:'space-between'
        }}>
        <TouchableOpacity 
        style={styles.button}
        onPress={() =>
            onAddTask({
              title: taskTitle,
              dopamineRequirement,
              startTime,
              deadline,
              reminder,
            })
          }>
          <Text style={styles.button}>Add Task</Text></TouchableOpacity>

        <TouchableOpacity 
        style={styles.button}
        onPress={onClose}>
          <Text style={styles.button}>Cancel</Text></TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
};

export default TaskInputPopup;
