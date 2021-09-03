export const getFetch = (url) => {
    return fetch(url)
    .then(res => res.json())
}
