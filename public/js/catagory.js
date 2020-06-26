$(document).on('ready', function() {
    let url = new URL(window.location.href);
    let catagory = url.searchParams.get("cat");
    let title;
    let totalImages;
    switch (catagory) {
        case "chairs":
            {
                title = "Chairs";
                totalImages = 10;
                break;
            }
        case "cots":
            {
                title = "Cot";
                totalImages = 10;
                break;
            }
        case "diningtables":
            {
                title = "Dining Table";
                totalImages = 6;
                break;
            }
        case "diwans":
            {
                title = "Diwnas";
                totalImages = 10;
                break;
            }
        case "royalchairs":
            {
                title = "Royal Chair";
                totalImages = 6;
                break;
            }
        case "teapoys":
            {
                title = "Teapoy";
                totalImages = 10;
                break;
            }
        case "cornerstands":
            {
                title = "Corner Stand";
                totalImages = 6;
                break;
            }
        case "dressingtables":
            {
                title = "Dressing Table";
                totalImages = 6;
                break;
            }
        case "showcase":
            {
                title = "Showcase";
                totalImages = 6;
                break;
            }
        case "cupboards":
            {
                title = "CupBoard";
                totalImages = 4;
                break;
            }
        case "sofas":
            {
                title = "Sofa";
                totalImages = 10;
                break;
            }
        case "mirrorframes":
            {
                title = "Mirror Frame";
                totalImages = 6;
                break;
            }
        case "swings":
            {
                title = "Swing";
                totalImages = 6;
                break;
            }
        default:
            {
                alert("oops Something went wrong")
            }
    }
    $(".cat-ttl").text(title);

    for (i = 1; i <= totalImages; i++) {
        $(".cat-container").append(`<div class="each-img">
                            <img src="./gallery/${catagory}/${catagory}-0${i}.jpg" alt="">
                       </div>`)
    }

})