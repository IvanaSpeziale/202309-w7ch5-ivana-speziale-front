/* eslint-disable no-unused-vars */
export class Storage<T> {
  // eslint-disable-next-line no-useless-constructor
  constructor(private storeName: string) {}

  get() {
    const initialData = localStorage.getItem(this.storeName);
    if (!initialData) throw new Error('Invalid store name');
    return JSON.parse(initialData) as T;
  }

  set(data: T) {
    const finalData = JSON.stringify(data);
    localStorage.setItem(this.storeName, finalData);
  }

  remove() {
    localStorage.removeItem(this.storeName);
  }
}

/* Export class Storage<T> {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(private storeName: string) {}

  get() {
    const initialData = localStorage.getItem(this.storeName);
    if (!initialData) throw new Error('Invalid store name');

    return JSON.parse(initialData) as T;
  }

  set(data: T) {
    // Guarda los datos.para hacerlo tengo que stringificar los datos. Es un void
    const finalData = JSON.stringify(data);
    localStorage.setItem(this.storeName, finalData);
  }

  remove() {
    localStorage.removeItem(this.storeName);
  }
} // Si anado un ambiente de privacidad implicitamente la declaro y la llamo con .this.storeName
 */
