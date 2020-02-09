import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList'
import AddTodo from './Components/AddTodo'
import { connect } from 'react-redux';
import * as actions from './Store/actions'
function App(props) {
  const [course,setCourse] = useState('');

  const AddCourse = () => {
    const CourseObj = {
      id: Math.random(),
      course: course,
      creditHour: 3,
      day: 'Mon'
    }
    //calling the dispatch funtion in line 36
    props.AddCourse(CourseObj);

    setCourse('');
  }
  return (
    <div className="App">
     <TodoList />
     <AddTodo
      name="course"
      value={course}
      onChange={(e) => setCourse(e.target.value)}  //taking care of the input value and set in state
      addCourse={AddCourse} //calling AddCourse funtion from AddTodo Component
     />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return{
    AddCourse: (CourseObj) => dispatch(actions.addCourse(CourseObj)) //calling addCourse action and passing CourseObj to it
  }
}

const connectedComponent = connect(null,mapDispatchToProps);

export default connectedComponent(App);
