import React, { Component } from 'react';

import './App.css';
import Main from './Main.js';

class App extends Component {

	constructor(props) {
        super(props)
        this.state = {
            tasks: [
				{
					"id": "1",
					"title": "Exam",
					"description": "Examen d'Educació física",
					"group": "Estudis",
					"checked": "false",
					"dateTime": "2021-06-15",
					"subtasks": [
						{
							"id": "1",
							"title": "Saltar a corda",
							"description": "Aprendre a saltar a corda",
							"checked": "true"
						},
						{
							"id": "2",
							"title": "Malabars",
							"description": "Aprendre a fer malabars",
							"checked": "true"
						}
					]
				},
				{
					"id": "2",
					"title": "Entrega final",
					"description": "Treball de 200 pàgines de perquè Catalunya és millor que EspaNYa",
					"group": "Estudis",
					"checked": "false",
					"dateTime": "2021-06-20T08:00:00",
					"subtasks": [
						{
							"id": "3",
							"title": "Introducció",
							"description": "Fer la introducció",
							"checked": "true"
						},
						{
							"id": "4",
							"title": "Cos",
							"description": "Arguments 100% reals",
							"checked": "false"
						},
						{
							"id": "5",
							"title": "Part pràctica",
							"description": "Fer un video cremant la bandera d'EspaNYa",
							"checked": "false"
						},
						{
							"id": "6",
							"title": "Moreneta",
							"description": "Pujar a Montserrat a peu coixet i fer-li uns rezos a la moreneta",
							"checked": "false"
						}
					]
				},
				{
					"id": "3",
					"title": "Exam",
					"description": "Examen d'Educació física",
					"group": "Estudis",
					"checked": "false",
					"dateTime": "2021-06-15T13:00:00",
					"subtasks": [
						{
							"id": "7",
							"title": "Saltar a corda",
							"description": "Aprendre a saltar a corda",
							"checked": "false"
						},
						{
							"id": "8",
							"title": "Malabars",
							"description": "Aprendre a fer malabars",
							"checked": "false"
						}
					]
				},
				{
					"id": "4",
					"title": "Entrega final",
					"description": "Treball de 200 pàgines de perquè Catalunya és millor que EspaNYa",
					"group": "Estudis",
					"checked": "false",
					"dateTime": "2021-06-20T08:00:00",
					"subtasks": [
						{
							"id": "9",
							"title": "Introducció",
							"description": "Fer la introducció",
							"checked": "false"
						},
						{
							"id": "10",
							"title": "Cos",
							"description": "Arguments 100% reals",
							"checked": "false"
						},
						{
							"id": "11",
							"title": "Part pràctica",
							"description": "Fer un video cremant la bandera d'EspaNYa",
							"checked": "false"
						},
						{
							"id": "12",
							"title": "Moreneta",
							"description": "Pujar a Montserrat a peu coixet i fer-li uns rezos a la moreneta",
							"checked": "false"
						}
					]
				},
				{
					"id": "5",
					"title": "Entrega final",
					"description": "Treball de 200 pàgines de perquè Catalunya és millor que EspaNYa",
					"group": "Estudis",
					"checked": "false",
					"dateTime": "2021-06-20T08:00:00",
					"subtasks": [
						{
							"id": "9",
							"title": "Introducció",
							"description": "Fer la introducció",
							"checked": "false"
						},
						{
							"id": "10",
							"title": "Cos",
							"description": "Arguments 100% reals",
							"checked": "false"
						},
						{
							"id": "11",
							"title": "Part pràctica",
							"description": "Fer un video cremant la bandera d'EspaNYa",
							"checked": "false"
						},
						{
							"id": "12",
							"title": "Moreneta",
							"description": "Pujar a Montserrat a peu coixet i fer-li uns rezos a la moreneta",
							"checked": "false"
						}
					]
				}
			],
			addingTask: false,
			addingSubtask: false
		}
	}

	checkTask = (taskId) => {
		let tasks = [...this.state.tasks]
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].id === taskId) {
				if(tasks[i].checked === "false") tasks[i].checked = "true"
				else tasks[i].checked = "false"
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

	closeAddTask = () => {
		this.setState({addingTask: false})
	}

	addTask = () => {
		let newTask = {
			"id": "1",
			"title": "Exam",
			"description": "Examen d'Educació física",
			"group": "Estudis",
			"checked": "false",
			"dateTime": "2021-06-15T13:00:00",
			"subtasks": []
		}
		this.setState({
			tasks: [...this.state.tasks, newTask]
		})
	}

	openAddSubtask = () => {
		this.setState({addingSubtask: true})
	}

	closeAddSubtask = () => {
		this.setState({addingSubtask: false})
	}

	addSubtask = (taskId) => {
		let newSubTask = {
			"id": "1",
			"title": "Exam",
			"description": "Examen d'Educació física",
			"checked": "false"
		}
		this.setState({
			tasks: [...this.state.tasks, newSubTask]
		})
	}

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
			/>
		)
	}
}

export default App;