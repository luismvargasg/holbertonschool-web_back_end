export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](cast) {
    if (cast === 'string') return this._location;
   return this._size;
  }
}
