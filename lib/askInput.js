import readline from 'readline-promise'

async function askInput(prompt) {
  const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


  return await readInterface.questionAsync(`${prompt} \n`, async(name) => name)
}

export default askInput
