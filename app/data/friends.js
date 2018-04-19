var path = require("path");
module.exports = function (app) {

    var friends = [
        {
            "name": "Jennifer Aniston",
            "photo": "https://www.google.com/search?q=jennifer+aniston&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiUlY36hMPaAhVKxlQKHdWNCd4Q_AUICygC&biw=1600&bih=677#imgrc=gVMQzs1cjtXTFM:",
            "scores": [
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                4
            ]
        },
        {
            "name": "Katy Perry",
            "photo": "https://www.google.com/search?q=pictures+of+celebrities&tbm=isch&source=iu&ictx=1&fir=0F_Vixr8JSU7DM%253A%252Cpb7I80kI6QTMQM%252C_&usg=__GpccS3dnfhUG84EdW85DoRKaATc%3D&sa=X&ved=0ahUKEwjQldzF6sTaAhVV4mMKHXj3BJMQ9QEINTAF#imgrc=duDUasx6PSBS0M:",
            "scores": [
                1,
                5,
                6,
                4,
                5,
                1,
                2,
                5,
                4,
                5
            ]
        },
        {
            "name": "Shakhira",
            "photo": "https://www.google.com/search?q=pictures+of+celebrities&tbm=isch&source=iu&ictx=1&fir=0F_Vixr8JSU7DM%253A%252Cpb7I80kI6QTMQM%252C_&usg=__GpccS3dnfhUG84EdW85DoRKaATc%3D&sa=X&ved=0ahUKEwjQldzF6sTaAhVV4mMKHXj3BJMQ9QEINTAF#imgrc=XIrz5zc68ptrzM:",
            "scores": [
                5,
                2,
                4,
                3,
                5,
                1,
                2,
                5,
                4,
                5
            ]
        },
        {
            "name": "Beyonce",
            "photo": "https://www.google.com/search?q=pictures+of+celebrities&tbm=isch&source=iu&ictx=1&fir=0F_Vixr8JSU7DM%253A%252Cpb7I80kI6QTMQM%252C_&usg=__GpccS3dnfhUG84EdW85DoRKaATc%3D&sa=X&ved=0ahUKEwjQldzF6sTaAhVV4mMKHXj3BJMQ9QEINTAF#imgrc=oPccbyDtkVsMLM:",
            "scores": [
                5,
                2,
                1,
                3,
                5,
                4,
                2,
                4,
                4,
                3
            ]
        }

        
    ];
    return friends;
}
