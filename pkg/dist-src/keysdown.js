export default class Keysdown extends Map {
    constructor(target) {
        super();
        this.target = target;
        target.addEventListener('keydown', (event) => {
            this.set(event.key, event);
        });
        target.addEventListener('keyup', (event) => {
            this.delete(event.key);
        });
    }
}
