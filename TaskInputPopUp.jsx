import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';

const TaskInputPopup = ({ isVisible, onClose, onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [dopamineRequirement, setDopamineRequirement] = useState('low');
  // ... Other state variables for task details

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="Task Title"
          value={taskTitle}
          onChangeText={text => setTaskTitle(text)}
        />
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => setDopamineRequirement('high')}
            style={{
              backgroundColor: dopamineRequirement === 'high' ? 'red' : 'gray',
              padding: 10,
              borderRadius: 5,
              marginRight: 10,
            }}
          >
            <Text>High</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDopamineRequirement('medium')}
            style={{
              backgroundColor: dopamineRequirement === 'medium' ? 'orange' : 'gray',
              padding: 10,
              borderRadius: 5,
              marginRight: 10,
            }}
          >
            <Text>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDopamineRequirement('low')}
            style={{
              backgroundColor: dopamineRequirement === 'low' ? 'yellow' : 'gray',
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text>Low</Text>
          </TouchableOpacity>
        </View>
        {/* Other input fields and buttons */}
        <TouchableOpacity onPress={() => onAddTask({
          title: taskTitle,
          dopamineRequirement,
          startTime,
          deadline,
          reminder,
        })}>
          <Text>Add Task</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default TaskInputPopup;
