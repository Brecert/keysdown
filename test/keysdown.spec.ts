import Keysdown from '../src/keyspressed'

describe('Keysdown', () => {
	let keysdown: Keysdown
	
	it('should be created with the window as a target', () => {
		keysdown = new Keysdown(window)
		expect(keysdown).toBeDefined
		expect(keysdown.target).toEqual(window)
	})

	it('should hold the "k" key', () => {
		let k_down_event = new KeyboardEvent('keydown', {
			key: 'k'
		})
		window.dispatchEvent(k_down_event)

		expect(keysdown.has('k')).toBe(true)
	})

	it('should release the "k" key', () => {
		let k_up_event = new KeyboardEvent('keyup', {
			key: 'k'
		})
		window.dispatchEvent(k_up_event)

		expect(keysdown.has('k')).toBe(false)
	})
})