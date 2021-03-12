/**
 * 
 * @param {String} S 
 * @param {Array} P 
 * @param {Array} Q 
 */
function solution (S, P, Q) {
//solution('CAGCCTA', [2,5,0], [4,5,6])

    if (S.length < 1 || S.length > 10e5) {
        throw new Error('The string must be between [1...100000]');
    }

    if (P.length < 1 || P.length > 10e5) {
        throw new Error('The string must be between [1...100000]');
    }

    if (Q.length < 1 || Q.length > 10e5) {
        throw new Error('The string must be between [1...100000]');
    }

    if (Q.length !== P.length) {
        throw new Error('They must have the same size.');
    }

    // const miniImpact = {
    //     A:1,
    //     C:2,
    //     G:3,
    //     T:4
    // }

    //let arr = new Array(4);

    let result = [];

    for (let i = 0; i < P.length; i++) {
        const text = S.substr(P[i], Q[i] + 1);
        if (text.indexOf('A') !== -1) {
            result[i] = 1;
            continue;
        } else if (text.indexOf('C') !== -1) {
            result[i] = 2;
            continue;
        } else if (text.indexOf('G') !== -1) {
            result[i] = 3;
            continue;
        } 
        result[i] = 4;
    }

    return result;

}
// /solution('CAGCCTA', [2,5,0], [4,5,6])