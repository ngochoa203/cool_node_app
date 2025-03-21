const calc = (a, b, p) => {
    if (!a || !b || !p) {
        return "Please provide all parameters";
    }
    switch (p) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return "Invalid operation";
    }
};

exports.calc = calc;
