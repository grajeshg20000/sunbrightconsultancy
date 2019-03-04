    function SendReview(e) { $(e).hide(); var a = !0, t = $("#rUname"), r = $("#rComment"); if (t.val() || (a = !1, t.attr("style", "border:1px solid red !important")), r.val() || (a = !1, r.css("border", "red 1px solid")), userRating < 1 && (a = !1, alert("please select rating")), !a) return $(e).show(), !1; var n = t.val(), c = r.val(); n = n.replace("'", "&#39;"), c = c.replace("'", "&#39;"), console.log("{'urlName':'" + window.location.pathname + "','reviewerName':'" + n + "','comment':'" + c + "','rating':'" + userRating + "'}"), $.ajax({ type: "POST", url: "../MyRating.aspx/SaveRating", data: "{'urlName':'" + window.location.pathname + "','reviewerName':'" + n + "','comment':'" + c + "','rating':'" + userRating + "'}", contentType: "application/json; charset=utf-8", dataType: "json", async: !0, error: function (e, a, t) { $(this).show(), alert("review failed") }, success: function (e) { 1 == e.d ? ($(this).show(), alert("successfullly saved."), t.val(""), t.removeAttr("style"), r.val(""), r.css("border", "solid 1px black"), userRating = 0) : alert("review failed") } }) } function LoadqCImg1() { document.getElementById("qCImage1").src = "/Handler.ashx?captchaType=queryCaptcha&query=" + Math.random() } function LoadqCImg2() { document.getElementById("qCImage2").src = "/Handler.ashx?captchaType=queryCaptcha1&query=" + Math.random() } function rateCaptcha() { document.getElementById("rCImage1").src = "/Handler.ashx?captchaType=rateCaptcha&query=" + Math.random() } setTimeout(function () { $(".box").fadeOut("very slow") }, 5e3); var ratingElement = document.querySelector(".c-rating"), currentRating = void 0, maxRating = 5, userRating = 0, callback = function (e) { userRating = e }, r = rating(ratingElement, currentRating, maxRating, callback);
    for (var paths = window.location.pathname.split("/"), html = "", i = 0; i < paths.length; i++) 0 == i ? html += "<span itemscope itemtype='http://data-vocabulary.org/Breadcrumb'><a href='/' itemprop='url'> <span itemprop='title'>home</span></a>&nbsp;?</span>" : i == paths.length - 1 ? html += "<span itemscope itemtype='http://data-vocabulary.org/Breadcrumb'><a href='/" + paths[i] + "' onclick='return false;' itemprop='url' class='active'> <span itemprop='title'>" + paths[i] + "</span></a></span>" : html += "<span itemscope itemtype='http://data-vocabulary.org/Breadcrumb'><a href='/" + paths[i] + "' itemprop='url'> <span itemprop='title'>" + paths[i] + "</span></a>&nbsp;?</span>"; $(".breadcrumb").html(html);
    
//<![CDATA[
var Page_Validators =  new Array(document.getElementById("Reqtxtname"), document.getElementById("Reqtxtphoneno"), document.getElementById("Regtxtphoneno"), document.getElementById("Reqddllocation"), document.getElementById("Reqddltechnology"), document.getElementById("Reqtxtemail"), document.getElementById("Regtxtemail"), document.getElementById("Reqtxtmsg"), document.getElementById("RequiredFieldValidator2"), document.getElementById("Reqtxtname1"), document.getElementById("Reqtxtphoneno1"), document.getElementById("Regulartxtphoneno1"), document.getElementById("Reqtxtemail1"), document.getElementById("Regulartxtemail1"), document.getElementById("Reqddltechnology1"), document.getElementById("Reqddllocation1"), document.getElementById("Reqmsg1"), document.getElementById("RequiredFieldValidator1"));
//]]>

//<![CDATA[
var Reqtxtname = document.all ? document.all["Reqtxtname"] : document.getElementById("Reqtxtname");
Reqtxtname.controltovalidate = "txtname";
Reqtxtname.errormessage = "*";
Reqtxtname.validationGroup = "g1";
Reqtxtname.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqtxtname.initialvalue = "";
var Reqtxtphoneno = document.all ? document.all["Reqtxtphoneno"] : document.getElementById("Reqtxtphoneno");
Reqtxtphoneno.controltovalidate = "txtphoneno";
Reqtxtphoneno.errormessage = "*";
Reqtxtphoneno.validationGroup = "g1";
Reqtxtphoneno.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqtxtphoneno.initialvalue = "";
var Regtxtphoneno = document.all ? document.all["Regtxtphoneno"] : document.getElementById("Regtxtphoneno");
Regtxtphoneno.controltovalidate = "txtphoneno";
Regtxtphoneno.errormessage = "*";
Regtxtphoneno.validationGroup = "g1";
Regtxtphoneno.evaluationfunction = "RegularExpressionValidatorEvaluateIsValid";
Regtxtphoneno.validationexpression = "[0-9]{10}";
var Reqddllocation = document.all ? document.all["Reqddllocation"] : document.getElementById("Reqddllocation");
Reqddllocation.controltovalidate = "ddllocation";
Reqddllocation.errormessage = "*";
Reqddllocation.validationGroup = "g1";
Reqddllocation.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqddllocation.initialvalue = "Select Branch";
var Reqddltechnology = document.all ? document.all["Reqddltechnology"] : document.getElementById("Reqddltechnology");
Reqddltechnology.controltovalidate = "ddltechnology";
Reqddltechnology.errormessage = "*";
Reqddltechnology.validationGroup = "g1";
Reqddltechnology.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqddltechnology.initialvalue = "Select Course";
var Reqtxtemail = document.all ? document.all["Reqtxtemail"] : document.getElementById("Reqtxtemail");
Reqtxtemail.controltovalidate = "txtemail";
Reqtxtemail.errormessage = "*";
Reqtxtemail.validationGroup = "g1";
Reqtxtemail.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqtxtemail.initialvalue = "";
var Regtxtemail = document.all ? document.all["Regtxtemail"] : document.getElementById("Regtxtemail");
Regtxtemail.controltovalidate = "txtemail";
Regtxtemail.errormessage = "Email Not Valid";
Regtxtemail.validationGroup = "g1";
Regtxtemail.evaluationfunction = "RegularExpressionValidatorEvaluateIsValid";
Regtxtemail.validationexpression = "\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
var Reqtxtmsg = document.all ? document.all["Reqtxtmsg"] : document.getElementById("Reqtxtmsg");
Reqtxtmsg.controltovalidate = "txtmsg";
Reqtxtmsg.errormessage = "*";
Reqtxtmsg.validationGroup = "g1";
Reqtxtmsg.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqtxtmsg.initialvalue = "";
var RequiredFieldValidator2 = document.all ? document.all["RequiredFieldValidator2"] : document.getElementById("RequiredFieldValidator2");
RequiredFieldValidator2.controltovalidate = "txtCode";
RequiredFieldValidator2.errormessage = "*";
RequiredFieldValidator2.validationGroup = "g1";
RequiredFieldValidator2.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
RequiredFieldValidator2.initialvalue = "";
var Reqtxtname1 = document.all ? document.all["Reqtxtname1"] : document.getElementById("Reqtxtname1");
Reqtxtname1.controltovalidate = "txtname1";
Reqtxtname1.errormessage = "*";
Reqtxtname1.validationGroup = "g2";
Reqtxtname1.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqtxtname1.initialvalue = "";
var Reqtxtphoneno1 = document.all ? document.all["Reqtxtphoneno1"] : document.getElementById("Reqtxtphoneno1");
Reqtxtphoneno1.controltovalidate = "txtphoneno1";
Reqtxtphoneno1.errormessage = "*";
Reqtxtphoneno1.validationGroup = "g2";
Reqtxtphoneno1.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqtxtphoneno1.initialvalue = "";
var Regulartxtphoneno1 = document.all ? document.all["Regulartxtphoneno1"] : document.getElementById("Regulartxtphoneno1");
Regulartxtphoneno1.controltovalidate = "txtphoneno1";
Regulartxtphoneno1.errormessage = "Mobile No. Not Valid";
Regulartxtphoneno1.validationGroup = "g2";
Regulartxtphoneno1.evaluationfunction = "RegularExpressionValidatorEvaluateIsValid";
Regulartxtphoneno1.validationexpression = "[0-9]{10}";
var Reqtxtemail1 = document.all ? document.all["Reqtxtemail1"] : document.getElementById("Reqtxtemail1");
Reqtxtemail1.controltovalidate = "txtemail1";
Reqtxtemail1.errormessage = "*";
Reqtxtemail1.validationGroup = "g2";
Reqtxtemail1.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqtxtemail1.initialvalue = "";
var Regulartxtemail1 = document.all ? document.all["Regulartxtemail1"] : document.getElementById("Regulartxtemail1");
Regulartxtemail1.controltovalidate = "txtemail1";
Regulartxtemail1.errormessage = "Email Not Valid";
Regulartxtemail1.validationGroup = "g2";
Regulartxtemail1.evaluationfunction = "RegularExpressionValidatorEvaluateIsValid";
Regulartxtemail1.validationexpression = "\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
var Reqddltechnology1 = document.all ? document.all["Reqddltechnology1"] : document.getElementById("Reqddltechnology1");
Reqddltechnology1.controltovalidate = "ddltechnology1";
Reqddltechnology1.errormessage = "*";
Reqddltechnology1.validationGroup = "g2";
Reqddltechnology1.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqddltechnology1.initialvalue = "Select Course";
var Reqddllocation1 = document.all ? document.all["Reqddllocation1"] : document.getElementById("Reqddllocation1");
Reqddllocation1.controltovalidate = "ddllocation1";
Reqddllocation1.errormessage = "*";
Reqddllocation1.validationGroup = "g2";
Reqddllocation1.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqddllocation1.initialvalue = "Select Branch";
var Reqmsg1 = document.all ? document.all["Reqmsg1"] : document.getElementById("Reqmsg1");
Reqmsg1.controltovalidate = "txtmsg1";
Reqmsg1.errormessage = "*";
Reqmsg1.validationGroup = "g2";
Reqmsg1.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
Reqmsg1.initialvalue = "";
var RequiredFieldValidator1 = document.all ? document.all["RequiredFieldValidator1"] : document.getElementById("RequiredFieldValidator1");
RequiredFieldValidator1.controltovalidate = "txtCode1";
RequiredFieldValidator1.errormessage = "*";
RequiredFieldValidator1.validationGroup = "g2";
RequiredFieldValidator1.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
RequiredFieldValidator1.initialvalue = "";
//]]>


//<![CDATA[

var Page_ValidationActive = false;
if (typeof(ValidatorOnLoad) == "function") {
    ValidatorOnLoad();
}

function ValidatorOnSubmit() {
    if (Page_ValidationActive) {
        return ValidatorCommonOnSubmit();
    }
    else {
        return true;
    }
}
        //]]>