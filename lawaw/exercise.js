var exercise = {};

// Adds markers to the map and into array
exercise.addMarkers = function(data){
    data.photos.photo.forEach(function(photo){
        exercise.addMarker(photo);
    });
};

exercise.addMarker = function(photo){
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(photo.latitude,photo.longitude),
        icon: {
            path:google.maps.SymbolPath.CIRCLE,
            fillColor: 'red',
            fillOpacity: 0.5,
            scale:7,
            strokeWeight:1
        },
        map: map,
        title: photo.title
    });
    markers.push(marker);
};

exercise.addPhotos = function(data){
    var html = exercise.buildHtmlForImages(data);
    document.getElementById('images').innerHTML = html;
};

exercise.buildHtmlForImages = function(data){
    
    // ------------------------------------------------
    //   YOUR CODE
    //     use forEach to construct html to
    //     display every image in flickr data
    // ------------------------------------------------

    // console.log(data);
    // console.log(data.photos.photo[0].url_s);
    var url = [];
    data.photos.photo.forEach(getUrl);
    var urlString = url.reduce(longString, '');
    return urlString;

    function getUrl(item, counter, array) {
        var imgtag = '<img src="' + item.url_s + '">';
        url.push(imgtag);
    }

    function longString(previous, current) {
        return previous + current;
    }

    /* Alternate method

    var imageTags = '';
    data.photos.photo.forEach(getUrl);

    function getUrl(item, counter, array) {
        imageTags += '<img src="' + item.url_s + '">';
    }

    return imageTags;

    */

};