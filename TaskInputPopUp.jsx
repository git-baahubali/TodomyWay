import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';

const TaskInputPopup = ({ isVisible, onClose, onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  // ... Other state variables and functions for task details

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <TextInput
          placeholder="Task Title"
          value={taskTitle}
          onChangeText={text => setTaskTitle(text)}
          style={{ fontSize: 40 }}
           />
        {/* Other input fields and buttons */}
        <TouchableOpacity TouchableOpacity 
        onPress={() => onAddTask({
          title: taskTitle,
          dopamineRequirement,
          startTime,
          deadline,
          reminder,
        })}>
          <Text style={{ fontSize: 30 }}>Add Task</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onClose()}>
          <Text style={{ fontSize: 40 }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default TaskInputPopup;
