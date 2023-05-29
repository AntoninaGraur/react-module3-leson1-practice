import React from 'react'

const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {
	return (
		<li>
			<div>
				<div>
					<input
						
						type='checkbox'
						checked={todo.completed}
						onChange={() => handleCheckCompleted(todo.id)}
					/>
					{todo.title}
				</div>
				<div>
					<button
						disabled={!todo.completed}
						type='button'
						aria-label='Close'
						onClick={() => handleDelete(todo.id)}
					></button>
				</div>
			</div>
		</li>
	)
}

export default ToDo