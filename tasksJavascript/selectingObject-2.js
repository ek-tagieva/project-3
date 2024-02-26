const workers = [
    {"name": "John", "salary": 500},
    {"name": "Mike", "salary": 1300},
    {"name": "Linda", "salary": 1500}
];

function getWorthyWorkers(workers) {
    const worthyWorkers = workers.filter(worker => worker.salary > 1000);
    return worthyWorkers.map(worker => worker.name);
}

console.log(getWorthyWorkers(workers)); 