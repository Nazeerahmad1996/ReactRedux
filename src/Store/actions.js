

export const addCourse = (Course) => {
    return(dispatch) => {
        dispatch({
            type: 'Add_Course',
            course:Course,
        });
    }
}

export const deleteCourse = (id) => {
    return(dispatch) => {
        dispatch({
            type: 'Delete_Course',
            id:id,
        });
    }
}


export const UpdateCourse = (id) => {
    return(dispatch) => {
        dispatch({
            type: 'Update_Course',
            id:id,
        });
    }
}