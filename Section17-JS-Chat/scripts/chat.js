class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message){
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        //save the chat document
        const response = await this.chats.add(chat);
        return response;
    } 
    getChats(callback){
        this.unsub = this.chats // the where method serves to get document from a colletcion when true
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    callback(change.doc.data());
                }
            })
        })
    }
    updateUsername(username){
        this.username = username;
        localStorage.setItem('username', username);
    }
    updateRoom(room){
        this.room = room;
        if(this.unsub) this.unsub();
        console.log('room updated');
    }
}

