/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, SafeAreaView } from 'react-native';
import TaskInputPopup from './TaskInputPopUp';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isTaskModalVisible, setTaskModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  // ... Other state variables for task details

  // Add task function
  // In this code, after creating the new task object, we use the setTasks function to update the tasks state array. Then, we set the modal visibility to false to close the task input popup. Finally, we reset the input fields to clear them for the next task.
  function addTask(taskDetails) {
    const newTask = {
      id: tasks.length + 1,
      ...taskDetails
    };
    setTasks([...tasks, newTask]);
    setTaskModalVisible(false);
  
    // Reset the input fields
    setTaskTitle('');
    setDopamineRequirement('low');
    setStartTime('');
    setDeadline('');
    setReminder(false);
  }
  

  // Render task item
const  renderTaskItem =({ item }) => {
    // Implement rendering task items
    return <TaskItem task={item} />
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Date and Navigation */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        <TouchableOpacity onPress={() => handlePrevDay()}><Text>prev</Text></TouchableOpacity>
        <Text>{selectedDate.toDateString()}</Text>
        <TouchableOpacity onPress={() => handleNextDay()}><Text>Next</Text></TouchableOpacity>
        {/* Calendar Popup Button */}
        <TouchableOpacity onPress={() => setCalendarVisible(true)}>
          <Text>Open Calendar</Text>
        </TouchableOpacity>
      </View>
  
      
  
      {/* Task List */}
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
        style={{backgroundColor:'rgba(265,165,0,0.3)'}}
      />

      {/* Add Task Button */}
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 20, marginRight: 20, backgroundColor: 'blue' }}>
        <TouchableOpacity
          onPress={() => setTaskModalVisible(true)}
          style={{
            backgroundColor: 'red',
            borderRadius: 30, // Half of the width and height to make it circular
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 30 }}>+</Text>
        </TouchableOpacity>
      </View>
  
      {/* Task Input Popup */}
      <TaskInputPopup
      isVisible={isTaskModalVisible}
      onClose={() => setTaskModalVisible(false)}
      onAddTask={addTask} />
    </SafeAreaView>
  );
  
};

export default App;
