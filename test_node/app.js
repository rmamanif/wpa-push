const webpush = require('web-push');
const express = require('express');
const notif = require("./notificaciones.js");
const app = express();


webpush.setVapidDetails(
    'mailto:example',
    "BPdDzMmfVl7rWJ-lZwt1Y_w4_wIPxfQWUQuVqAyE_Yq8TSiFMKYrPKXWvxI7rctXHy03svJ3zapZsdTVr8VmHeo",
    "pkADeFzHPFqsS82t4Tba5NNwCmb3kkAFjtNiUiafTjg"
);

const jsonNotif = notif.getNotifInitCancelPost();

const sendPush = (req, res) => {
    webpush.sendNotification(
        {
            "endpoint": "https://wns2-bl2p.notify.windows.com/w/?token=BQYAAACSYvi%2bIfROES8DaDn7IOQoIfriZB9f%2b7ZsXaHDtlH4RQylLrXlEHZL8wbSa0wSqiI3eui%2fTvQqyTXapJwvcSwC8ngyN4D2OuvBm2lI7Mgyw15%2bVx5TAwty9OPt6k%2bRs7nHLpEcVnyTIUYzw9cX0f9e80oID5emwhgA9W%2bxVBrloTPyf%2bCOT7RPVaGad5ATJXYgiQ1HqYNlcRLZwdbiloKzNSTo9VEfKNJXInZwfEWyGl3xjvH%2bOP6TT0WgnyLyxrlf8jkAn%2bEq6xTcNdkBzLxByAsM7UGCVgjaTQgXu4FbA9XjJd8WKFy%2b%2fWkcU9mUt3Q%3d",
            "expirationTime": null,
            "keys": {
              "p256dh": "BA2_mSudzERPqsbw5pMGcjd6zGpYLgmZezspX4qg_0_R6NhZmtyqw4PFDNFgcwj58p2_eeAWjpekODBFBz0w_KY",
              "auth": "Kzwnx0cSoDyin2yQebVmLg"
            }
          },
        JSON.stringify(jsonNotif)
    )
    .then(response =>{
        console.log("enviado");
    }).catch((err) =>{
        console.log("error");
    });
    res.json({
        success: true,
        message: 'Se realizaron las notificaciones.'
    });
}

app.get('/', (req, res) => res.send('Hello World!'));

app.route('/send').post(sendPush);

const httpServer = app.listen(4320, () => {
    console.log("HTTP Server running at ..."+ httpServer.address().port);
})