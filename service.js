async function fetchLatest(){
    try {
        let response = await fetch('https://lobste.rs/hottest.json');
        return await response.json()
    } catch (error) {
        throw error;
    }
}

module.exports = {fetchLatest}