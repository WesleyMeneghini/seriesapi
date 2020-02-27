const baseQuery = require('./baseQuery')

class Generos {

    findAll () {
        return baseQuery('SELECT * FROM generos')
    }

}

module.exports = Generos