function clone<X>(data:X):X{        //data是啥类型，返回值就是啥类型
    return JSON.parse(JSON.stringify(data));
}

export default clone;