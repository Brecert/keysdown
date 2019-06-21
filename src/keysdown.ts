export default class Keysdown extends Map {
	public constructor(public target: EventTarget) {
		super()
	
		target.addEventListener('keydown', (event): void => {
			this.set((event as KeyboardEvent).key, event)
		})
	
		target.addEventListener('keyup', (event): void => {
			this.delete((event as KeyboardEvent).key)
		})
	}
}