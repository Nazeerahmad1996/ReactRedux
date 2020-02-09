import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../Store/actions'

const TodoList = (props) => {
    return (
        <ui>
            {/* <li>
                {JSON.stringify(props.Courses)}
            </li> */}

            {
                props.Courses.length && props.Courses.map(i =>
                    <div>
                        <li
                        style={{textDecoration:i.Reg ? 'line-through': null}}
                            key={i.id}
                            onClick={() => props.updateCourse(i.id)}>
                            {i.course}
                        </li>
                        <button onClick={() => props.deleteCourse(i.id)}>Delete</button>

                    </div>
                )
            }
        </ui>
    )
}

//State Which should be available to the component

const mapStateToProps = state => {
    return {
        Courses: state.Courses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCourse: (id) => dispatch(actions.deleteCourse(id)), //calling addCourse action and passing Course id to it
        updateCourse: (id) => dispatch(actions.UpdateCourse(id))
    }
}

//Connect the store

//takes two parameters first states, second dispatch the actions
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(TodoList);