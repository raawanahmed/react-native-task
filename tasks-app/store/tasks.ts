import { create } from 'zustand';

export const emptyTask = {
    id: '',
    name: '',
    description: ''
}

type TTaskStore = {
    tasks: TTask[];
    selectedTask: TTask;
    setTasks: (tasks: TTask[]) => void;
    setSelectedTask: (task: TTask) => void;
};

const useTasksStore = create<TTaskStore>((set) => ({
    tasks: [],
    setTasks: (tasks) => set({ tasks }),
    selectedTask: emptyTask,
    setSelectedTask: (task) => set({ selectedTask: task }),
}));

export default useTasksStore;
