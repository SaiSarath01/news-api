async function fetchLatest(){
        let response = await fetch('https://lobste.rs/hottest.json');
        return await response.json()
}

module.exports = {fetchLatest}