async function fetchData(url, options) {
    const response = await fetch(url, options);
    if (!response.ok){
        throw new Error('Ei saatu hajettua');
    }
    const json = await response.json();
    return json;
}