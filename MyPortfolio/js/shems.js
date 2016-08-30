function windowpop(url, width, height) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    //Open the window.
    window.open(url, "Window2", "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
}

$(window).on('load', function () {
    $(".loader").fadeOut("slow");
    $(function () {
        var fileName = "Mudassar_Khan.pdf";
        $("#btnShow").click(function () {
            $("#dialog").dialog({
                modal: true,
                title: fileName,
                width: 540,
                height: 450,
                buttons: {
                    Close: function () {
                        $(this).dialog('close');
                    }
                },
                open: function () {
                    var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"500px\" height=\"300px\">";
                    object += "If you are unable to view file, you can download from <a href = \"{FileName}\">here</a>";
                    object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
                    object += "</object>";
                    object = object.replace(/{FileName}/g, "Files/" + fileName);
                    $("#dialog").html(object);
                }
            });
        });
    });
});

function setContentFontSize() {
    document.getElementById("textWrap").style.fontSize = (12 + Math.max(0, (document.getElementById("footerImage").width - 620) / 55)) + "px";
}

var deferResizeHandler = false;

function resizeHandler() {
    if (!deferResizeHandler) {
        setContentFontSize();
        deferResizeHandler = true;
        window.setTimeout(function () { deferResizeHandler = false; setContentFontSize(); }, 300);
    }
}

window.addEventListener("resize", resizeHandler);
window.addEventListener("load", setContentFontSize);

