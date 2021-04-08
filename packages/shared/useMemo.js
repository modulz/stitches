var { stringify } = JSON
var { create } = Object

export function useMemo() {
	var memo = create(null)

	return /** @type {<D,T>(data: D, make: (data?: D, json?: string) => T) => T} */ ((data, make) => {
		var json = stringify(data)

		if (json in memo) return memo[json]

		return (memo[json] = make(data, json))
	})
}
