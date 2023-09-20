// https://leetcode.com/problems/compact-object

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    /*
    if (Array.isArray(obj)) {
        let idx = 0
        let r = []
        for(let i in obj) {
            if(Boolean(obj[i])) {
                if (Array.isArray(obj[i])) {
                    r = [...r, compactObject(obj[i])]
                } else {
                    r[idx] = obj[i]
                }
                idx++
            }
        }
        return r
    }
    
    const compacted = {};
    for (const key in obj) {
        if (Boolean(obj[key])) {
            compacted[key] = compactObject(obj[key])
        }
    }
    return compacted
    */
    

    if (obj === null) return null;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== "object") return obj;

    const compacted = {};
    for (const key in obj) {
        let value = compactObject(obj[key]);
        if (Boolean(value)) compacted[key] = value;
    }

    return compacted;
};
