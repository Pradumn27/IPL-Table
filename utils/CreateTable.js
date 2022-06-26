export const create = (teams) => {
    let a = new Map([
        ["Chennai Super Kings", 0],
        ["Kolkata Knight Riders", 0],
        ["Mumbai Indians", 0],
        ["Delhi Capitals", 0],
        ["Royal Challengers Bangalore", 0],
        ["Punjab Kings", 0],
        ["Lucknow Super Giants", 0],
        ["Gujarat Titans", 0],
        ["Rajasthan Royals", 0],
        ["Sunrisers Hyderabad", 0],
    ])
    let b = new Map([
        ["Chennai Super Kings", []],
        ["Kolkata Knight Riders", []],
        ["Mumbai Indians", []],
        ["Delhi Capitals", []],
        ["Royal Challengers Bangalore", []],
        ["Punjab Kings", []],
        ["Lucknow Super Giants", []],
        ["Gujarat Titans", []],
        ["Rajasthan Royals", []],
        ["Sunrisers Hyderabad", []],
    ])

    for (let i = 0; i < teams.length; i++) {
        if (teams[i].winner != null) {
            let win = teams[i].winner
            a.set(win.toString(), a.get(win) + 1)
            if (teams[i].team1 === win) {
                b.get(win).push(1)
                b.get(teams[i].team2).push(0)
            }
            else {
                b.get(win).push(1)
                b.get(teams[i].team1).push(0)
            }
        }
    }
    let c = new Map([...b.entries()].sort((c, d) => a.get(d[0]) - a.get(c[0])))
    let obj = Object.fromEntries(c);
    return [obj, a];
}