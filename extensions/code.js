setTimeout(function(){

  var emojis = {
      ":D": '<img style="height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grinning.png" alt="_:D_" title="_:D_" class="emoji">',
      ":P": '<img style="height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue.png" alt="_:P_" title="_:P_" class="emoji">',
      "xD": '<img style="height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/laughing.png" alt="_xD_" title="_xD_" class="emoji">',
      "xP": '<img style="height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue-winking-eyes.png" alt="_xP_" title="_xP_" class="emoji">'
  };
  console.log("test");
  Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(emojis).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)" + emoji, "g"), `$1${emojis[emoji]}`)));
  Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(emojis).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)_" + emoji + "_", "g"), `$1${emojis[emoji]}`)));
  console.log("worked");

}, 30);
