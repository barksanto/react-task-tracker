import Header from './components/Header'
import Tasks from './components/Tasks'
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
