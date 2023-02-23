export function isNull(item) {
    return item === undefined || item === null || item === '' || item.length <= 0 || Object.keys(item).length === 0;
}
