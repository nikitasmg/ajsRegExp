export const orderByProps = (obj, props) => {
    const result = [];

    for (let key in obj) {
        result.push({'key': key, 'value': obj[key]})
    }
    ;

    const withProps = [];
    props.forEach(el => {
        withProps.push(result.find(e => e.key === el))
    } )
    const withoutProps = sort(result.filter(el => !props.find(e => el.key === e)));
    return [...withProps, ... withoutProps]
}

const sort = (obj) => {
    return obj.sort((a, b) => {
        if (a.key > b.key) {
            return 1;
        }
        if (a.key < b.key) {
            return -1;
        }
        return 0;
    })
}


