const scopedClassMaker = (prefix: string) => {
    return function (className: string) {
        return [prefix, className].filter(Boolean).join('-');
    };
};

const sc = scopedClassMaker('lab');


export default sc
