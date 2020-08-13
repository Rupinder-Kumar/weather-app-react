var OAuth = require('oauth');
var header = {
    "X-Yahoo-App-Id": "2HXpScHm"
};
var request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9ZzdraHhlSWU3OEtTJmQ9WVdrOU1raFljRk5qU0cwbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTBh',
    '8efd27f09e883940d854c4693f22d51ce3e04ab6',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
// export default request.get(
//     'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
//     null,
//     null,
//     function (err, data, result) {
//         if (err) {
//             console.log(err);
//         } else {
//             // console.log(data)
//         }
//     }
// );

export const weather = async (city) => {
    let promise = new Promise((res, rej) => { 
    request.get(
        `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city},ca&format=json`,
        null,
        null,
        function (err, data, result) {
          if (err) {
                return err;
            } else {
                console.log(data)
                return data;
            }
        }
    );
});
    
let result = await promise;

return result;

};