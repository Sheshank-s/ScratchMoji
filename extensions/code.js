handleEmojis();
let emojis = {
    ":D": '<img src="/assets/emojis/faceemoji/grinning.png" alt="_:D_" title="_:D_" class="emoji">',
    ":P": '<img src="/assets/emojis/faceemoji/stuck-out-toungue.png" alt="_:P_" title="_:P_" class="emoji">',
    "xD": '<img src="/assets/emojis/faceemoji/laughing.png" alt="_xD_" title="_xD_" class="emoji">',
    "xP": '<img src="/assets/emojis/faceemoji/stuck-out-toungue-winking-eyes.png" alt="_xP_" title="_xP_" class="emoji">'
};
let comments = document.getElementById("comments");
let handleEmojis = () => {
  Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(emojis).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)_" + emoji + "_", "g"), `$1${emojis[emoji]}`)));
}
if(records.filter(record => record.target.tagName === "UL" && (record.target.className === "comments" || record.target.className === "replies") && record.addedNodes).length){
        handleEmojis();
}
if(comments) {
    let listenToComments = new MutationObserver(domChange);

    listenToComments.observe(comments, {subtree: true, childList: true});

    handleEmojis();
}
