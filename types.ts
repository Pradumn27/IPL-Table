export type TableCol = {
    idx:number|undefined,
    team:String|undefined,
    matches:number|undefined,
    won:number|undefined,
    loss:number|undefined,
    pts:number|undefined,
    one:number|undefined,
    two:number|undefined,
    three:number|undefined,
    four:number|undefined,
    five:number|undefined,
}

export type Searchbar = {
    label:String,
    value:String
}

export type Team = {
    id:String,
    date:String,
    team1 : String,
    team2 : String,
    winner:String
}

export type GridCol = {
    img1 : String|undefined,
    img2 : String|undefined,
    date : String|undefined,
    num : number|undefined,
    winner : String|undefined,
}