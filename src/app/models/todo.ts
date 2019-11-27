export class Todo { 

    constructor (
        private _id?:String,
        private _description?:String,
        private _dateAjout?:String,
        private _dateFin?:String,
        private _idUser?:String){}
      
get id (){
    return  this._id

}
set id(value) {
    this._id = value
}

get description (){
    return  this._description

}
set description(value) {
    this._description = value
}
get dateAjout (){
    return  this._dateAjout

}
set dateAjout(value) {
    this._dateAjout = value
}
get dateFin (){
    return  this._dateFin

}
set dateFin(value) {
    this._dateFin = value
}
get idUser (){
    return  this._idUser

}
set idUser(value) {
    this._idUser = value
}





}
