function showDiscussions(cat_id){
  var html_id = "#cat_discussions_" + cat_id;
  // jquery
  if ($(html_id).css("display") == "block"){
    $(html_id).css("display", "none");
  } else{
    $(html_id).css("display", "block");
  }

}


function startDiscussions(cat_id){
  var html_id = "#cat_new_discussion_" + cat_id;
  var button_id = "#startDiscussionButton_" + cat_id;
  // jquery
  if ($(html_id).css("display") == "block"){
    $(html_id).css("display", "none");
    // Change Button Text
    $(button_id).text("Start Discussion");
  } else{
    $(html_id).css("display", "block");
    // Change Button Text
    $(button_id).text("Cancel");
  }
}
