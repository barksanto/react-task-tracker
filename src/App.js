import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  // tasks are part of app level state
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "doctors",
        day: 'Tuesday',
        reminder: true,
      },
      {
        id: 2,
        text: "grocery",
        day: 'thursday',
        reminder: false,
      }, {
        id: 3,
        text: "school",
        day: 'saturday',
        reminder: true,
      }
    ])

  // Add Task
  const addTask = (task) => {
    // generate random id to add to task
    const id = Math.floor(Math.random() * 10000 + 1)

    // first key of new object is the id, the rest are whatever was in the inputs
    const newTask = { id, ...task }
    // call on setTasks to add new task to state
    setTasks([...tasks, newTask])
  }

  // delete task- takes the id, which we pass up through props
  // setState of tasks to filter any task whose id does not match our id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder:
            !task.reminder
        } : task
      )
    )
  }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* if no tasks in state, render message instead */}
      {tasks.length > 0 ? (<Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder} />) : ("No tasks to show yet!")}
    </div>
  );
}

export default App;
