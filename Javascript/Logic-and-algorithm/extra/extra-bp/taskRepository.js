const tasks = [];

function save(task) {
    //db.collection('tasks').insertOne(task);

    tasks.push(task);
    return task;
}

MediaSourceHandle.export = {
    save
}