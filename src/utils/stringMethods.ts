export const setStringPrototypes = function(): void {
	String.prototype.endsWith = function(substr: string): boolean {
		const substrlen = substr.length;
		const strlen = this.length;

		if(strlen < substrlen) return false;

		for(let i: number = substrlen; i>=0; i--) {
			if(this[strlen-substrlen+i] !== substr[i]) return false;
		}

		return true;
	}
}

