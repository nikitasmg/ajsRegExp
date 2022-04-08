export const destructionAttacks = (obj) => {
    const {special} = obj;
    special.map(el => {
        if(!el.description) {
            el.description = 'Описание недоступно'
        }
    })

    return special
}