const coffeeShop = {
    beans: 40,
    money: 100,
    drinkRequirements: {
        latte: { beanRequirement: 10, price: 5 },
        americano: { beanRequirement: 5, price: 2.5 },
        doubleShot: { beanRequirement: 15, price: 7.5 },
        frenchPress: { beanRequirement: 12, price: 6 }
    },

    makeDrink: function (drinkType) {
        if (drinkType in this.drinkRequirements) {
            if (this.beans - this.drinkRequirements[drinkType].beanRequirement > 0)
                this.beans -= this.drinkRequirements[drinkType].beanRequirement
            else
                console.log("Sorry, we're all out of beans");
        }
        else {
            console.log("Sorry, we don't make filtered");
        }
    },
    buyDrink: function (drinkType) {
        this.money += this.drinkRequirements[drinkType].price
        makeDrink(drinkType)
    },

    buyBeans: function (moneyy) {
        const price = 2
        this.beans = moneyy * price
        this.money -= moneyy
    }

}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
