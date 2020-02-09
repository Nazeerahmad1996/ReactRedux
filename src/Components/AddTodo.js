import React from 'react'

const AddTodo = (props) => {

    const submitTodo = (e) => {
        e.preventDefault();
        props.addCourse();
    }
    return (
        <div>
            <form onSubmit={submitTodo}>
                <input
                    type="text"
                    name={props.name}
                    onChange={props.onChange} />
            </form>
        </div>
    )
}

export default AddTodo