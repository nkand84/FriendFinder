var path = require("path");
module.exports = function (app) {

    var friends = [
        {
            "name": "Taylor Swift",
            "photo": "https://abovethelaw.com/wp-content/uploads/2017/08/taylor-swift.jpg",
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
            "name": "Jennifer Aniston",
            "photo": "http://cdn2.stylecraze.com/wp-content/uploads/2014/01/161-8-Famous-Bob-Hairstyles-Of-Jennifer-Aniston.jpg",
            "scores": [
                1,
                5,
                5,
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
            "name": "Shakira",
            "photo": "https://www.billboard.com/files/media/shakira-la-la-la-2016-billboard-1548.jpg",
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
            "photo": "https://fortunedotcom.files.wordpress.com/2016/04/gettyimages-88628374.jpg",
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
