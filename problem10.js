const Hamilton = {
  writesLikeHesRunningOutOfTime: true,
  frenemy: 'Aaron Burr',
  greeting() {
    console.log(`Pardon me, are you ${this.frenemy},
sir?`)
  },
}

setTimeout(() => {
  Hamilton.greeting(), 5000
})
setTimeout(Hamilton.greeting.bind(Hamilton), 1000);
