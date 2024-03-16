class hero{
    typeOfAttack = ""
 
    constructor(heroName, heroAge, heroClass){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroClass = heroClass
    }

    attack(){
        if (this.heroClass === "Guerreiro"){
            this.typeOfAttack = "espada"
            console.log(`O ${this.heroClass} atacou usando ${this.typeOfAttack}`)
        } else if (this.heroClass === "Mago"){
            this.typeOfAttack = "magia"
            console.log(`O ${this.heroClass} atacou usando ${this.typeOfAttack}`)
        } else if (this.heroClass === "Monge"){
            this.typeOfAttack = "artes marciais"
            console.log(`O ${this.heroClass} atacou usando ${this.typeOfAttack}`)
        } else if (this.heroClass === "Ninja"){
            this.typeOfAttack = "shuriken"
            console.log(`O ${this.heroClass} atacou usando ${this.typeOfAttack}`)
        } else{
            console.log("Classe e ataque inexistentes.")
        }
    }
}

let hero1 = new hero("Bertilak", 25, "Mago")

hero1.attack()