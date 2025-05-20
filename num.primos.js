function ehPrimo(n) {
    
    if (typeof n !== 'number') {
        throw new Error("Digite um número.");
    }
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = ehPrimo;
