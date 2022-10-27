export class MessagePresenter{
    showMessage(message){
        document.getElementById('message').innerText = `${message} at ${this._createTimeString()}`
    }

    clear(){
         document.getElementById('message').innerText = "";
    }

    _createTimeString(){
        const d = new Date();
        let h = this._addZero(d.getHours());
        let m = this._addZero(d.getMinutes());
        let s = this._addZero(d.getSeconds());
        let time = h + ":" + m + ":" + s;

        return time;
    }

     
    _addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
    }

}