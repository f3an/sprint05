class StrFrequency {
    constructor(str) {
        this.string = str;
    }
    letterFrequency(x) {
        let count = 0;
        x = x.split(' ');
        for (let i = 0; i < x.length; i++) {
            if (x[i] == "a") {
                count++;
            }
        }
        return count;
    }
    wordFrequency() {

    }
    reverseFrequency() {

    }
}