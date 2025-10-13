const nombres = new Set(['Juan','Ana','Pedro']);
nombres.add('Maria');
console.log(nombres.has('Juan'));
console.log(nombres.has('Ana'));
nombres.delete('Ana');
console.log(nombres.has('Juan'));
console.log(nombres.has('Ana'));