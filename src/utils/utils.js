export const nameShortner = (name,length) => {
    return name?.length > length ? name.slice(0,length)+"..." : name
}