import { doTask1, doTask2, doTask3 } from './tasks.js';

export function runCode() {
  const strings = [];
  return doTask1()
    .then(res => {
      strings.push(res)
      return doTask2();
    })
    .then(res => {
      strings.push(res)
      return doTask3();
    })
    .then(res => {
      strings.push(res)
      return strings
    })
    .catch(error => {
      console.log(error)
    });
}