var i = 0;
function handleEmojis() {
    var emojis = {
        '<img src="//cdn.scratch.mit.edu/scratchr2/static/__edeeb9742280669f2eae661e72ce5d5d__/images/easter_eggs/aww-cat.png" class="easter-egg">': '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grinning.png" alt="_:D_" title="_:D_" class="emoji">',
        '<img src="//cdn.scratch.mit.edu/scratchr2/static/__edeeb9742280669f2eae661e72ce5d5d__/images/easter_eggs/tongue-out-cat.png" class="easter-egg">': '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue.png" alt="_:P_" title="_:P_" class="emoji">',
        ":D": '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grinning.png" alt="_:D_" title="_:D_" class="emoji">',
        ":P": '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue.png" alt="_:P_" title="_:P_" class="emoji">',
        "xD": '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/laughing.png" alt="_xD_" title="_xD_" class="emoji">',
        "xP": '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue-winking-eyes.png" alt="_xP_" title="_xP_" class="emoji">'
    };
    console.log("test");
    Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(emojis).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)" + emoji, "g"), `$1${emojis[emoji]}`)));
    var emojisdash = {
        '<img src="//cdn.scratch.mit.edu/scratchr2/static/__edeeb9742280669f2eae661e72ce5d5d__/images/easter_eggs/aww-cat.png" class="easter-egg">': '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grinning.png" alt="_:D_" title="_:D_" class="emoji">',
        '<img src="//cdn.scratch.mit.edu/scratchr2/static/__edeeb9742280669f2eae661e72ce5d5d__/images/easter_eggs/tongue-out-cat.png" class="easter-egg">': '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue.png" alt="_:P_" title="_:P_" class="emoji">',
        ":D": '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grinning.png" alt="_:D_" title="_:D_" class="emoji">',
        ":P": '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue.png" alt="_:P_" title="_:P_" class="emoji">',
        "xD": '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/laughing.png" alt="_xD_" title="_xD_" class="emoji">',
        "xP": '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue-winking-eyes.png" alt="_xP_" title="_xP_" class="emoji">'
    };
    Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(emojisdash).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)_" + emoji + "_", "g"), `$1${emojisdash[emoji]}`)));
    console.log("worked");
    i++;
    if (i == 5) {
       clearInterval(x);
    }
}
var x = setInterval(function(){
  handleEmojis();
}, 30);
  var domChange = function(records){
      if(records.filter(record => record.target.tagName === "UL" && (record.target.className === "comments" || record.target.className === "replies") && record.addedNodes).length){
          handleEmojis();
      }
  };
var comments = document.getElementById("comments");
  if(comments) {
      var listenToComments = new MutationObserver(domChange);
      console.log("Comment");
      listenToComments.observe(comments, {subtree: true, childList: true});

      handleEmojis();
  }
