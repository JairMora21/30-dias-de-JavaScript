
export async function doTask1(callback) {
    return new Promise((resolve, reject) => {
  
      window.setTimeout(() => resolve('Task 1'), 300)
    })
  }
  
  export async function doTask2(callback) {
    return new Promise((resolve, reject) => {
  
      window.setTimeout(() => resolve('Task 2'), 300)
    })
  }
  
  export async function doTask3(callback) {
    return new Promise((resolve, reject) => {
  
      window.setTimeout(() => resolve('Task 3'), 300)
    })
  }