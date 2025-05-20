function ehPrimo(n) {
    if (typeof n !== 'number') {
        throw new Error("O parâmetro deve ser um número.");
    }
    
    if (n <= 1) {
        return false;
    }
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

module.exports = ehPrimo;
