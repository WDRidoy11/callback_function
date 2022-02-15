const taskOne = (callbak) => {
    setTimeout(() => {
        console.log('task1');
        callbak();
    }, 5000);
}
const taskTwo = (callbak) => {
    setTimeout(() => {
        console.log('task2');
        callbak();
    }, 3000);
}
const taskThree = (callbak) => {
    setTimeout(() => {
        console.log('task3');
        callbak();
    }, 2000);
}
const taskFoue = () => {
    setTimeout(() => {
        console.log('task4');
    }, 1000);
}
taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFoue();
        });
    });
});