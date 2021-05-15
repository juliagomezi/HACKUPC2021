import React, { Component } from 'react';

import './App.css';
import Main from './Main.js';

class App extends Component {

	constructor(props) {
        super(props)
        this.state = {
            tasks: [
				{
					"id": "0",
					"title": "Exam",
					"description": "Examen d'Educació física",
					"group": "Estudis",
					"checked": "false",
					"date": "2022-06-15",
					"subtasks": [
						{
							"id": "0",
							"title": "Saltar a corda",
							"description": "Aprendre a saltar a corda",
							"checked": "true"
						},
						{
							"id": "1",
							"title": "Malabars",
							"description": "Aprendre a fer malabars",
							"checked": "true"
						}
					]
				},
				{
					"id": "1",
					"title": "Entrega final",
					"description": "Treball de 200 pàgines de perquè Catalunya és millor que EspaNYa",
					"group": "Estudis",
					"checked": "false",
					"date": "2021-06-20",
					"subtasks": [
						{
							"id": "0",
							"title": "Introducció",
							"description": "Fer la introducció",
							"checked": "true"
						},
						{
							"id": "1",
							"title": "Cos",
							"description": "Arguments 100% reals",
							"checked": "false"
						},
						{
							"id": "2",
							"title": "Part pràctica",
							"description": "Fer un video cremant la bandera d'EspaNYa",
							"checked": "false"
						},
						{
							"id": "3",
							"title": "Moreneta",
							"description": "Pujar a Montserrat a peu coixet i fer-li uns rezos a la moreneta",
							"checked": "false"
						}
					]
				}
			],
			addingTask: false,
			addingSubtask: false,
			titleInput: "",
			descriptionInput: "",
			groupInput: "",
			dateInput: "",
			subtaskTitleInput: "",
			subtaskDescriptionInput: "",
			taskId: 0
		}
	}

	componentWillMount() {
		this.sortTasks()
	}

	sortTasks(){
        this.state.tasks = [...this.state.tasks]
        this.setState({
            tasks: this.state.tasks.sort((a, b) => a.date > b.date ? 1 : -1)
        })
    }

	checkTask = (taskId) => {
		let tasks = [...this.state.tasks]
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].id === taskId) {
				if(tasks[i].checked === "false") tasks[i].checked = "true"
				else tasks[i].checked = "false"
				for (let j = 0; j < tasks[i].subtasks.length; j++) {
					tasks[i].subtasks[j].checked = "true"
				}
				this.setState({ tasks })

				break;
			}
		}
	}

	checkSubtask = (taskId, subtaskId) => {
		let tasks = [...this.state.tasks]
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].id === taskId) {
				for (let j = 0; j < tasks[i].subtasks.length; j++) {
					if (tasks[i].subtasks[j].id === subtaskId) {
						if(tasks[i].subtasks[j].checked === "false") tasks[i].subtasks[j].checked = "true"
						else tasks[i].subtasks[j].checked = "false"
						this.setState({ tasks })
						break;
					}
				}
				break;
			}
		}
	}

	openAddTask = () => {
		this.setState({addingTask: true})
	}

	closeAddTask = (saving) => {
		this.setState({addingTask: false})
		if (saving) {
			this.addTask()
		}
	}

	addTask = () => {
		let newTask = {
			"id": this.state.tasks.length+1,
			"title": this.state.titleInput,
			"description": this.state.descriptionInput,
			"group": this.state.groupInput,
			"checked": "false",
			"date": this.state.dateInput,
			"subtasks": []
		}
		let tasks = [...this.state.tasks, newTask]
		this.setState({
			tasks: tasks.sort((a, b) => a.date > b.date ? 1 : -1)
		}) 
	}

	openAddSubtask = (taskId) => {
		this.setState({taskId})
		this.setState({addingSubtask: true})
	}

	closeAddSubtask = (saving, taskId) => {
		this.setState({addingSubtask: false})
		if (saving) {
			this.addSubtask(taskId)
		}
	}

	addSubtask = (taskId) => {
		console.log(this.state.taskId)
		let newSubtask = {
			"id": this.state.tasks[taskId].subtasks.length,
			"title": this.state.subtaskTitleInput,
			"description": this.state.subtaskDescriptionInput,
			"checked": this.state.tasks[taskId].checked
		}
		console.log(newSubtask.id)
		let tasks = [...this.state.tasks]
		for (let i = 0; i < tasks.length; i++) {
			
			if (tasks[i].id === taskId) {
				console.log(i)

				tasks[i].subtasks = [...tasks[i].subtasks, newSubtask]
				this.setState({ tasks })
				console.log(this.state.tasks)
				break;
			}
		}
	}

	titleInputChange = (e) => this.setState({titleInput: e.target.value})

	descriptionInputChange = (e) => this.setState({descriptionInput: e.target.value})

	groupInputChange = (e) => this.setState({groupInput: e.target.value})

	dateInputChange = (e) => this.setState({dateInput: e.target.value})

	subtaskTitleInputChange = (e) => this.setState({subtaskTitleInput: e.target.value})

	subtaskDescriptionInputChange = (e) => this.setState({subtaskDescriptionInput: e.target.value})

	render() {
		return (
			<Main
				tasks = {this.state.tasks}
				checkTask = {this.checkTask}
				checkSubtask = {this.checkSubtask}
				addingTask = {this.state.addingTask}
				openAddTask = {this.openAddTask}
				closeAddTask = {this.closeAddTask}
				addTask = {this.addTask}
				addingSubtask = {this.state.addingSubtask}
				openAddSubtask = {this.openAddSubtask}
				closeAddSubtask = {this.closeAddSubtask}
				addSubtask = {this.addSubtask}
				titleInputChange = {this.titleInputChange}
				descriptionInputChange = {this.descriptionInputChange}
				groupInputChange = {this.groupInputChange}
				dateInputChange = {this.dateInputChange}
				subtaskTitleInputChange = {this.subtaskTitleInputChange}
				subtaskDescriptionInputChange = {this.subtaskDescriptionInputChange}
				
			/>
		)
	}
}

export default App;