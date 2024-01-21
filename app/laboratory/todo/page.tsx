import config from '@/amplifyconfiguration.json';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';

const cookiesClient = generateServerClientUsingCookies({
	config,
	cookies,
});

// 2. Create a new Server Action
async function createTodo(formData: FormData) {
	'use server';
	const { data } = await cookiesClient.graphql({
		query: mutations.createTodo,
		variables: {
			input: {
				name: formData.get('name')?.toString() ?? '',
			},
		},
	});

	console.log('Created Todo: ', data?.createTodo);

	revalidatePath('/laboratory/todo');
}

export default async function TodoPage() {
	// 2. Fetch additional todos
	const { data, errors } = await cookiesClient.graphql({
		query: queries.listTodos,
	});

	const todos = data.listTodos.items;

	return (
		<div>
			<form action={createTodo}>
				<input name='name' placeholder='Add a todo' />
				<button type='submit'>Add</button>
			</form>
			{/* 3. Handle edge cases & zero state & error states*/}
			{(!todos || todos.length === 0 || errors) && (
				<div>
					<p>No todos, please add one.</p>
				</div>
			)}

			{/* 4. Display todos*/}
			<ul>
				{todos.map((todo, idx) => {
					return <li key={`${todo}${idx}`}>{todo.name}</li>;
				})}
			</ul>
		</div>
	);
}
