const TaskItem = ({ task }) => {
    return (
      <View style={{ padding: 10, borderBottomWidth: 1, borderColor: 'gray' }}>
        <Text>Title: {task.title}</Text>
        <Text>Dopamine Requirement: {task.dopamineRequirement}</Text>
        {/* Display other task details here */}
      </View>
    );
  };
  