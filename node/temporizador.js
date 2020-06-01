const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 0', function () {
  console.log('Executando tarefa 1!', new Date().getSeconds())
})

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)

setTimeout(function () {
  tarefa1.cancel()
  console.log('Cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 4)]
regra.hour = 19
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log('Executando tarefa 2!', new Date().getSeconds())
})
