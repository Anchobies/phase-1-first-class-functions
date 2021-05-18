var receivesAFunction = (callback) => callback();

var returnsANamedFunction = () => {
    const func = function() {};

    return func;
}

var returnsAnAnonymousFunction = () => function() {};