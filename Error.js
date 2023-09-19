class SuperError extends Error {
	constructor(args, name) {
		super(args.red);
		this.name = name.cyan;
	}
}

module.exports.SuperError = SuperError;