let getAnonymous = (name, alias, affiliation) => {
  class Anonym {
    #private = "this is private";
    constructor(name, alias, affiliation) {
      this.name = name;
      this.alias = alias;
      this.affiliation = affiliation;
    }
    #privateMethod() {
      return this.#private;
    }
  }
  return new Anonym(name, alias, affiliation);
};
module.exports.getAnonymous = getAnonymous;