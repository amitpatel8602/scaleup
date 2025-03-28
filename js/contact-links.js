$.getJSON(CONTACT_LINKS, function (data) {
    var links = data;
    var sub_links = $(".contact-links").eq(0);
    var position = $("#profile-description");
    var posData = links[0];
    position.text(posData.title);
    
    for (let index = 1; index < links.length; index++) {
        var linkData = links[index]; // Assuming each item has 'path' and 'title'
        
        // Construct the HTML string using the data from the response
        var linkHtml = '<a href="' + linkData.path + '" target="_blank" class="links">' + linkData.title + '</a>';
        
        // Append the constructed HTML to the timeline
        sub_links.append(linkHtml);
    }
});
