$(function () {
    var fileName = "john_mutabazi_resume.pdf";
    $("#btnShow").click(function () {
        $("#dialog").dialog({
            modal: true,
            title: "Mutabazi's 2016 Resume",
            width: 600,
            height: 600,
            buttons: {
                Close: function () {
                    $(this).dialog('close');
                }
            },
            open: function () {
                var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"600px\" height=\"600px\">";
                object += "If you are unable to view file, you can download from <a href = \"{FileName}\">here</a>";
                object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
                object += "</object>";
                object = object.replace(/{FileName}/g, "Files/" + fileName);
                $("#dialog").html(object);
            }
        });
    });
});