function create (taskData) {
    if (!taskData.title) {
        throw new Error(`The tittle required`)
    }
}

const newTask = {
    id: Date.now(),
    title: taskData.title,
    status: 'ok'
};

const createdTask = taskRepository.save(newTask);

return createdTask;

module.exports = {
    create
};