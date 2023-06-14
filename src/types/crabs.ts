export interface Crab {
	name: String;
	isExtinct: Boolean;
	id: String;
	isTaxon: String;
	photo: String;
	flavorText: String;
	order: String;
	family: String;
	infraOrder: String;
	firstAppearance: String;
	photoCopyright: String;
}

export type Query = {
	crabs: [Crab];
};
