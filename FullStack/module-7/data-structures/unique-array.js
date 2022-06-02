class UniqueArray {

    constructor(){
        this.uniqueArray = []
    }

    add(item){
        if(!this.exists(item)){
             this.uniqueArray.push(item)   
        }
    }

    exists(item){
        return this.uniqueArray.includes(item)
    }
    showAll(){
        this.uniqueArray.forEach(i => console.log(i))
    }
    get(index){
        return this.uniqueArray[index]
    }

}




const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log( uniqueStuff.exists("toy")); //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"