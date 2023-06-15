class Parafuso {
    constructor() {
        if (this.constructor === Parafuso) {
            throw new error("Não é possivel instanciar Parafuso, pois é uma classe abstrata");
        }
    }
    get tipo() {
        throw new error("O métodod tipo deve ser implementado")
    }
}
class Fenda extends Parafuso {
    constructor() {
        super()
    }
    get tipo() {
        return 'fenda'
    }
}
class Philips extends Parafuso {
    constructor() {
        super()
    }
    get tipo() {
        return 'philips'
    }
}
