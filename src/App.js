import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react';


function App() {
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
    const id = Math.floor(Math.random() * 10000 + 1)

    const newTask = { id, ...task }
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
      <Header />
      <AddTask onAdd={addTask} />
      {/* if no tasks in state, render message instead */}
      {tasks.length > 0 ? (<Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder} />) : ("No tasks to show yet!")}
    </div>
  );
}

export default App;
