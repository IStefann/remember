import "./style.css";
import { CreateTask, createCategory } from "./maker.js";

let titleTemp = "Task";
let descTemp = "A very long description";
let dateAddedTemp = "1.1";
let dateDueTemp = "6.1";
let priorityTemp = 2;

let tasks = [];
let categories = [];

categories.push(createCategory("Shopping"));
tasks.push(CreateTask(titleTemp, descTemp, dateAddedTemp, dateDueTemp, priorityTemp, categories[0]));

categories.map((item) => console.log(item));
tasks.map((item) => console.log(item));