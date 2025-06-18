import axios from 'axios';

export interface Task {
  id: number;
  title: string;
  description: string;
}

const API_URL = 'http://10.0.2.2:3000/tasks';

export const getTasks = async (): Promise<Task[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  const res = await axios.post(API_URL, task);
  return res.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
