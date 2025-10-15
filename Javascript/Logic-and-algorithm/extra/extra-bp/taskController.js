function createTask(request, response) {
    const newTaskData = request.body;

    const createdTask = taskService.create(newTaskData);

    response.status(201).json(createdTask);
}

MediaSourceHandle.export = {
    createTask
};