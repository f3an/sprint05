exports.checkDivision = (beginRange = 1, endRange = 60) => {
    if (beginRange === " " ||
        endRange === " " ||
        beginRange === null ||
        endRange === null ||
        beginRange >= endRange) {
        for (let i = beginRange; i < endRange; i++) {
            let result = i;
            if (!(i % 2) && !(i % 3) && !(i % 10)) {
                result = "The Number " + result + " is divisible by 2, is divisible by 3, is divisible by 10";
            } else if (!(i % 3) && !(i % 10)) {
                result = "The Number " + result + " is divisible by 3, is divisible by 10";
            } else if (!(i % 10) && !(i % 2)) {
                result = "The Number " + result + " is divisible by 2, is divisible by 10";
            } else if (!(i % 3) && !(i % 2)) {
                result = "The Number " + result + " is divisible by 2, is divisible by 3";
            } else if (!(i % 3)) {
                result = "The Number " + result + " is devisible of 3";
            } else if (!(i % 10)) {
                result = "The Number " + result + " is devisible of 10";
            } else {
                result = "The Number " + result + " -";
            }
            console.log(String(result));
        }
    } else {
        for (let i = beginRange; i < endRange; i++) {
            let result = i;
            if (!(i % 2) && !(i % 3) && !(i % 10)) {
                result = "The Number " + result + " is divisible by 2, is divisible by 3, is divisible by 10";
            } else if (!(i % 3) && !(i % 10)) {
                result = "The Number " + result + " is divisible by 3, is divisible by 10";
            } else if (!(i % 10) && !(i % 2)) {
                result = "The Number " + result + " is divisible by 2, is divisible by 10";
            } else if (!(i % 3) && !(i % 2)) {
                result = "The Number " + result + " is divisible by 2, is divisible by 3";
            } else if (!(i % 3)) {
                result = "The Number " + result + " is devisible of 3";
            } else if (!(i % 10)) {
                result = "The Number " + result + " is devisible of 10";
            } else {
                result = "The Number " + result + " -";
            }
            console.log(String(result));
        }
    }
}