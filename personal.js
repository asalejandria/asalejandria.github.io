
function makePost(text) {
	var outerDiv = document.createElement("div");
	outerDiv.className = "col offset-l3 l6 offset-m2 m8 s12"
	var cardDiv = document.createElement("div");
	cardDiv.className = "card";
	var cardContentDiv = document.createElement("div");
	cardContentDiv.className = "card-content";
	var textNode = document.createTextNode(text);
	cardContentDiv.appendChild(textNode);
	cardDiv.appendChild(cardContentDiv);
	outerDiv.appendChild(cardDiv);
	return outerDiv
}

$(document).ready(function () {
	$(".button-collapse").sideNav();

	$("#makePostButton").click(function () {
		var newText = $(".materialize-textarea").val();
		$(".materialize-textarea").val(""); 
		var newPost = makePost(newText);
		var postRow = document.getElementById("post-row")
		postRow.insertBefore(newPost, postRow.firstChild);

	});
});
