// Transforms JavaScript representation into JavaScript text.

function lispEmit(jr) {
    var emitFunction = lispEmitFunctionsMap[jr.jrt];
    if (emitFunction) return emitFunction(jr);
    else throw "unknown JR " + uneval(jr);
}

var lispEmitFunctionsMap = {
    "funapp": lispEmitFunapp,
    "function": lispEmitFunction,
    "string": lispEmitString
}

function lispEmitFunapp(jr) {
    return "(" + lispEmit(jr.fun) + "(" + jr.args.map(lispEmit) + "))"; // fixme
}

function lispEmitFunction(jr) {
    return "(function(" + jr.params + ") { return " + lispEmit(jr.body) + "})";
}

function lispEmitString(jr) {
    return "(" + jr.s.toSource() + ")";
}
