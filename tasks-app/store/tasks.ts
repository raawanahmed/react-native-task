import { create } from 'zustand';

const emptyTask = {
    id: '',
    name: '',
    description: ''
}

type TTaskStore = {
    tasks: TTask[];
    selectedTask: TTask;
    isLoading: boolean;
    setTasks: (tasks: TTask[]) => void;
    setSelectedTask: (task: TTask) => void;
    setLoading: (loading: boolean) => void;
};

const useTasksStore = create<TTaskStore>((set) => ({
    tasks: [],
    isLoading: false,
    isTaskAdded: false,
    setTasks: (tasks) => set({ tasks }),
    setLoading: (isLoading) => set({ isLoading }),
    selectedTask: emptyTask,
    setSelectedTask: (task) => set({ selectedTask: task }),
}));

export default useTasksStore;
