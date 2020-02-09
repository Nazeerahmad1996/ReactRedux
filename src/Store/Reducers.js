//create the reducer


const initState = {
    name: 'Nazeer Ahmed',
    Courses: [
        { id: '1', course: 'English', creditHour: 3, day: 'Mon', Reg: false },
        { id: '2', course: 'ReactJs', creditHour: 3, day: 'Tues', Reg: false },
        { id: '3', course: 'Cloud Computing', creditHour: 3, day: 'Wed', Reg: false },
        { id: '4', course: 'Maths', creditHour: 3, day: 'Wed', Reg: false },
        { id: '5', course: 'Game Dev', creditHour: 3, day: 'Mon', Reg: false },
        { id: '6', course: 'AI', creditHour: 3, day: 'Fri', Reg: false }
    ]
}

const rootReducer = (state = initState, actions) => {
    switch (actions.type) {
        case 'Add_Course':
            state = {
                ...state,
                Courses: [...state.Courses, actions.course]
            }
            break;

        case 'Delete_Course':
            const course = state.Courses
            const updated = course.filter(i => i.id !== actions.id);
            state = {
                ...state,
                Courses: updated
            }
            break;

        case 'Update_Course':
            const courses = state.Courses
            const updatedState = courses.map(i =>
                i.id === actions.id ? { ...i, Reg: !i.Reg } : i
            )
            state = {
                ...state,
                Courses: updatedState
            }
            break;
    }
    return state;
}

export default rootReducer;