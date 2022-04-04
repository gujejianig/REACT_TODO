// const removeHandler = (id) => {
//
// 	if(!editing) {
// 		setTodos(
// 			todos.filter((todo) => {
// 				return todo.id !== id;
// 			})
// 		)
// 	} else {
// 		const arr =  todos.map((todo) => {
//
// 			if(todo.id === id) {
// 				todo.editMode = false
// 				setEditing(false)
// 			}
// 			return todo
// 		})
// 		setTodos(arr)
// 	}
//
// 	// // Reduce pagination by one when the last item is deleted from the last page
// 	if ((todos.length - 1) % 5 === 0 && activePage === lastBtnPagination) {
// 		setActivePage(activePage - 1);
// 	}
// };
//
// export default removeHandler
//
