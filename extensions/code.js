var i = 0;
function handleEmojis() {
    var emojis = {
        '<img src="//cdn.scratch.mit.edu/scratchr2/static/__edeeb9742280669f2eae661e72ce5d5d__/images/easter_eggs/aww-cat.png" class="easter-egg">': '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grinning.png" alt="_:D_" title="_:D_" class="emoji">',
        '<img src="//cdn.scratch.mit.edu/scratchr2/static/__edeeb9742280669f2eae661e72ce5d5d__/images/easter_eggs/tongue-out-cat.png" class="easter-egg">': '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue.png" alt="_:P_" title="_:P_" class="emoji">',
        ":D": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grinning.png" alt=":D_" title=":D" class="emoji">',
        ":O": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/surprised.png" alt="_:O_" title="_:O_" class="emoji">',
        "D:": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/frowning.png" alt="_D:_" title="_D:_" class="emoji">',
        "O:": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/surprised.png" alt="_O:_" title="_O:_" class="emoji">',
        "0:": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/surprised.png" alt="_0:_" title="_0:_" class="emoji">',
        ":0": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/surprised.png" alt="_:0_" title="_:0_" class="emoji">',
        ":d": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grinning.png" alt=":D_" title=":D" class="emoji">',
        ":o": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/surprised.png" alt="_:O_" title="_:O_" class="emoji">',
        "d:": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/frowning.png" alt="_D:_" title="_D:_" class="emoji">',
        "o:": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/surprised.png" alt="_O:_" title="_O:_" class="emoji">',
        "-_-": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/expressionless.png" alt="-_-" title="-_-" class="emoji">',
        ":P": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue.png" alt=":P" title=":P" class="emoji">',
        "xD": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/laughing.png" alt="xD" title="xD" class="emoji">',
        "xd": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/laughing.png" alt="xD" title="xD" class="emoji">',
        "xP": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue-winking-eyes.png" alt="xP" title="xP" class="emoji">',
        "xp": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue-winking-eyes.png" alt="xP" title="xP" class="emoji">',
        "XP": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue-winking-eyes.png" alt="xP" title="xP" class="emoji">',
        "XD": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue-winking-eyes.png" alt="xP" title="xP" class="emoji">',
        ":\\)": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/smiley.png" alt=":)" title=":)" class="emoji">',
        ":\\|": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/neutral-face.png" alt=":|" title=":|" class="emoji">',
        ";\\)": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/wink.png" alt=";)" title=";)" class="emoji">',
        ";\\D": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/wink.png" alt=";D" title=";D" class="emoji">',
        ";\\(": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/sob.png" alt=";(" title=";(" class="emoji">',
        "D;": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/sob.png" alt="D;" title="D;" class="emoji">',
        ":\\(": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/very-sad.png" alt=":(" title=":(" class="emoji">',
        '<img src="//cdn.scratch.mit.edu/scratchr2/static/__edeeb9742280669f2eae661e72ce5d5d__/images/easter_eggs/love-it-cat.png" class="easter-egg">': '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/heart.png" alt="_<3_" title="_<3_" class="emoji">',
        ">:\\(": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/angry.png" alt=">:(" title=">:(" class="emoji">'
    };
    try {
      Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(emojis).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)" + emoji, "g"), `$1${emojis[emoji]}`)));
    }
    catch (e){
      return;
    }
    var emojisdash = {
        '<img src="//cdn.scratch.mit.edu/scratchr2/static/__edeeb9742280669f2eae661e72ce5d5d__/images/easter_eggs/aww-cat.png" class="easter-egg">': '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grinning.png" alt="_:D_" title="_:D_" class="emoji">',
        '<img src="//cdn.scratch.mit.edu/scratchr2/static/__edeeb9742280669f2eae661e72ce5d5d__/images/easter_eggs/tongue-out-cat.png" class="easter-egg">': '<img style="vertical-align: bottom; display: inline; height: 24px; width: 24px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue.png" alt="_:P_" title="_:P_" class="emoji">',
        ":D": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grinning.png" alt="_:D_" title="_:D_" class="emoji">',
        "-_-": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/expressionless.png" alt="_-_-_" title="_-_-_" class="emoji">',
        ":P": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue.png" alt="_:P_" title="_:P_" class="emoji">',
        "xD": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/laughing.png" alt="_xD_" title="_xD_" class="emoji">',
        "xd": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/laughing.png" alt="_xD_" title="_xD_" class="emoji">',
        "xP": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue-winking-eyes.png" alt="_xP_" title="_xP_" class="emoji">',
        "xp": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue-winking-eyes.png" alt="_xP_" title="_xP_" class="emoji">',
        ":\\)": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/smiley.png" alt="_:)_" title="_:)_" class="emoji">',
        ";\\)": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/wink.png" alt="_;)_" title="_;)_" class="emoji">',
        ";\\(": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/sob.png" alt="_;(_" title="_;(_" class="emoji">',
        ":\\(": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/very-sad.png" alt="_:(_" title="_:(_" class="emoji">',
        ":O": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/surprised.png" alt="_:O_" title="_:O_" class="emoji">',
        ">:\\(": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/angry.png" alt="_>:(_" title="_>:(_" class="emoji">',
        "sad": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/very-sad.png" alt="_sad_" title="_sad_" class="emoji">',
        "disappointed": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/disappointed.png" alt="_disappointed_" title="_disappointed_" class="emoji">',
        "dissappointed": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/disappointed.png" alt="_dissappointed_" title="_dissappointed_" class="emoji">',
        "angry": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/angry.png" alt="_angry_" title="_angry_" class="emoji">',
        "rage": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/rage.png" alt="_rage_" title="_rage_" class="emoji">',
        "poop": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/poop.png" alt="_poop_" title="_poop_" class="emoji">',
        "hugging": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/hugging.png" alt="_hugging_" title="_hugging_" class="emoji">',
        "hug": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/hugging.png" alt="_hug_" title="_hug_" class="emoji">',
        "hugs": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/hugging.png" alt="_hugs_" title="_hugs_" class="emoji">',
        "joy": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/joy.png" alt="_joy_" title="_joy_" class="emoji">',
        "heart": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/heart-eyes.png" alt="_heart-eyes_" title="_heart-eyes_" class="emoji">',
        "heart-eyes": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/heart-eyes.png" alt="_:(_" title="_:(_" class="emoji">',
        "nerd": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/nerd.png" alt="_nerd_" title="_nerd_" class="emoji">',
        "weary": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/weary.png" alt="_weary_" title="_weary_" class="emoji">',
        "alien": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/alien.png" alt="_alien_" title="_alien_" class="emoji">',
        "kissing": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/kissing.png" alt="_kissing_" title="_kissing_" class="emoji">',
        "fearful": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/fearful.png" alt="_fearful_" title="_fearful_" class="emoji">',
        "anguished": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/anguished.png" alt="_anguished_" title="_anguished_" class="emoji">',
        "astonished": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/astonished.png" alt="_astonished_" title="_astonished_" class="emoji">',
        "frowning": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/frowning.png" alt="_frowning_" title="_frowning_" class="emoji">',
        "kissing-heart": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/kissing-heart.png" alt="_kissing-heart_" title="_kissing-heart_" class="emoji">',
        "mask": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/mask.png" alt="_mask_" title="_mask_" class="emoji">',
        "ghost": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/ghost.png" alt="_ghost_" title="_ghost_" class="emoji">',
        "smirk": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/smirk.png" alt="_smirk_" title="_smirk_" class="emoji">',
        "blush": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/blush.png" alt="_blush_" title="_blush_" class="emoji">',
        "blush2": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/blush2.png" alt="_blush2_" title="_blush2_" class="emoji">',
        "cold-sweat": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/cold-sweat.png" alt="_cold-sweat_" title="_cold-sweat_" class="emoji">',
        "confused": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/confused.png" alt="_confused_" title="_confused_" class="emoji">',
        "cry": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/cry.png" alt="_cry_" title="_cry_" class="emoji">',
        "disappointed-relieved": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/disappointed-relieved.png" alt="_disappointed-relieved_" title="_disappointed-relieved_" class="emoji">',
        "dizzy-face": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/dizzy-face.png" alt="_dizzy-face_" title="_dizzy-face_" class="emoji">',
        "flushed": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/flushed.png" alt="_flushed_" title="_flushed_" class="emoji">',
        "grimacing": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grimacing.png" alt="_grimacing_" title="_grimacing_" class="emoji">',
        "grinning": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/grinning.png" alt="_grinning_" title="_grinning_" class="emoji">',
        "head-bandage": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/head-bandage.png" alt="_head-bandage_" title="_head-bandage_" class="emoji">',
        "hushed": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/hushed.png" alt="_hushed_" title="_hushed_" class="emoji">',
        "imp": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/imp.png" alt="_imp_" title="_imp_" class="emoji">',
        "expressionless": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/expressionless.png" alt="_expressionless_" title="_expressionless_" class="emoji">',
        "innocent": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/innocent.png" alt="_innocent_" title="_innocent_" class="emoji">',
        "kissing-closed-eyes": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/kissing-closed-eyes.png" alt="_kissing-closed-eyes_" title="_kissing-closed-eyes_" class="emoji">',
        "kissing-smiling-eyes": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/kissing-smiling-eyes.png" alt="_kissing-smiling-eyes_" title="_kissing-smiling-eyes_" class="emoji">',
        "laughing": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/laughing.png" alt="_laughing_" title="_laughing_" class="emoji">',
        "money-mouth": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/money-mouth.png" alt="_money-mouth_" title="_money-mouth_" class="emoji">',
        "neutral-face": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/neutral-face.png" alt="_neutral-face_" title="_neutral-face_" class="emoji">',
        "no-mouth": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/no-mouth.png" alt="_no-mouth_" title="_no-mouth_" class="emoji">',
        "perservere": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/perservere.png" alt="_perservere_" title="_perservere_" class="emoji">',
        "relieved": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/relieved.png" alt="_relieved_" title="_relieved_" class="emoji">',
        "rofl": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/rofl.png" alt="_rofl_" title="_rofl_" class="emoji">',
        "rolling-eyes": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/rolling-eyes.png" alt="_rolling-eyes_" title="_rolling-eyes_" class="emoji">',
        "scream": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/scream.png" alt="_scream_" title="_scream_" class="emoji">',
        "sleeping": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/no-mouth.png" alt="_no-mouth_" title="_no-mouth_" class="emoji">',
        "sleepy": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/sleepy.png" alt="_sleepy_" title="_sleepy_" class="emoji">',
        "slight-smile": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/slight-smile.png" alt="_slight-smile_" title="_slight-smile_" class="emoji">',
        "smile": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/smile.png" alt="_smile_" title="_smile_" class="emoji">',
        "smiley": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/smiley.png" alt="_smiley_" title="_smiley_" class="emoji">',
        "smiling-imp": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/smiling-imp.png" alt="_smiling-imp_" title="_smiling-imp_" class="emoji">',
        "sob": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/sob.png" alt="_sob_" title="_sob_" class="emoji">',
        "stuck-out-toungue-winking-eye": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue-winking-eye.png" alt="_stuck-out-toungue-winking-eye_" title="_stuck-out-toungue-winking-eye_" class="emoji">',
        "thinking": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/thinking.png" alt="_thinking_" title="_thinking_" class="emoji">',
        "stuck-out-toungue-winking-eyes": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue-winking-eyes.png" alt="_stuck-out-toungue-winking-eyes_" title="_stuck-out-toungue-winking-eyes_" class="emoji">',
        "stuck-out-toungue": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/stuck-out-toungue.png" alt="_stuck-out-toungue_" title="_stuck-out-tounguesunglasses_" class="emoji">',
        "sunglasses": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/sunglasses.png" alt="_sunglasses_" title="_sunglasses_" class="emoji">',
        "sweat-smile": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/sweat-smile.png" alt="_sweat-smile_" title="_sweat-smile_" class="emoji">',
        "sweat": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/sweat.png" alt="_sweat_" title="_sweat_" class="emoji">',
        "thermometer-face": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/thermometer-face.png" alt="_thermometer-face_" title="_thermometer-face_" class="emoji">',
        "surprised": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/surprised.png" alt="_surprised_" title="_surprised_" class="emoji">',
        "tired": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/tired.png" alt="_tired_" title="_tired_" class="emoji">',
        "triumph": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/triumph.png" alt="_triumph_" title="_triumph_" class="emoji">',
        "unamused": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/unamused.png" alt="_unamused_" title="_unamused_" class="emoji">',
        "very-sad": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/very-sad.png" alt="_very-sad_" title="_very-sad_" class="emoji">',
        "wink": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/wink.png" alt="_wink_" title="_wink_" class="emoji">',
        "worried": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/worried.png" alt="_worried_" title="_worried_" class="emoji">',
        "yum": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/yum.png" alt="_yum_" title="_yum_" class="emoji">',
        "zipper-mouth": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/zipper-mouth.png" alt="_zipper-mouth_" title="_zipper-mouth_" class="emoji">',
        "confounded": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/confounded.png" alt="_confounded_" title="_confounded_" class="emoji">'
    };
    Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(emojisdash).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)_" + emoji + "_", "g"), `$1${emojisdash[emoji]}`)));
    console.log("worked");
    //Animals
    var animalemojisdash = {
      "ant": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/ant.png" alt="_ant_" title="_ant_" class="emoji">',
      "baby-chick": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/baby-chick.png" alt="_baby-chick_" title="_baby-chick_" class="emoji">',
      "baby-chick2": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/baby-chick2.png" alt="_baby-chick2_" title="_baby-chick2_" class="emoji">',
      "bear": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/bear.png" alt="_bear_" title="_bear_" class="emoji">',
      "bee": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/bee.png" alt="_bee_" title="_bee_" class="emoji">',
      "boar": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/boar.png" alt="_boar_" title="_boar_" class="emoji">',
      "camel": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/camel.png" alt="_camel_" title="_camel_" class="emoji">',
      "cat": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/cat.png" alt="_cat_" title="_cat_" class="emoji">',
      "caterpillar": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/caterpillar.png" alt="_caterpillar_" title="_caterpillar_" class="emoji">',
      "chestnut": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/chestnut.png" alt="_chestnut_" title="_chestnut_" class="emoji">',
      "chicken": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/chicken.png" alt="_chicken_" title="_chicken_" class="emoji">',
      "cow": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/cow.png" alt="_cow_" title="_cow_" class="emoji">',
      "dog": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/dog.png" alt="_dog_" title="_dog_" class="emoji">',
      "dog2": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/dog2.png" alt="_dog2_" title="_dog2_" class="emoji">',
      "dolphin": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/dolphin.png" alt="_dolphin_" title="_dolphin_" class="emoji">',
      "elephant": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/elephant.png" alt="_elephant_" title="_elephant_" class="emoji">',
      "fish": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/fish.png" alt="_fish_" title="_fish_" class="emoji">',
      "frog": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/frog.png" alt="_frog_" title="_frog_" class="emoji">',
      "gray-bird": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/cow.png" alt="_gray-bird_" title="_gray-bird_" class="emoji">',
      "hatching-chick": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/hatching-chick.png" alt="_hatching-chick_" title="_hatching-chick_" class="emoji">',
      "hear-no-evil": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/hear-no-evil.png" alt="_hear-no-evil_" title="_hear-no-evil_" class="emoji">',
      "horse-running": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/horse-running.png" alt="_horse-running_" title="_horse-running_" class="emoji">',
      "horse": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/horse.png" alt="_horse_" title="_horse_" class="emoji">',
      "koala": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/koala.png" alt="_koala_" title="_koala_" class="emoji">',
      "ladybug": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/ladybug.png" alt="_ladybug_" title="_ladybug_" class="emoji">',
      "monkey-face": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/monkey-face.png" alt="_monkey-face_" title="_monkey-face_" class="emoji">',
      "monkey": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/monkey.png" alt="_monkey_" title="_monkey_" class="emoji">',
      "mushroom": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/mushroom.png" alt="_mushroom_" title="_mushroom_" class="emoji">',
      "octopus": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/octopus.png" alt="_octopus_" title="_octopus_" class="emoji">',
      "panda-face": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/panda-face.png" alt="_panda-face_" title="_panda-face_" class="emoji">',
      "penguin": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/penguin.png" alt="_penguin_" title="_penguin_" class="emoji">',
      "pig-nose": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/pig-nose.png" alt="_pig-nose_" title="_pig-nose_" class="emoji">',
      "pig": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/pig.png" alt="_pig_" title="_pig_" class="emoji">',
      "poodle": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/poodle.png" alt="_poodle_" title="_poodle_" class="emoji">',
      "rabbit": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/rabbit.png" alt="_rabbit_" title="_rabbit_" class="emoji">',
      "see-no-evil": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/see-no-evil.png" alt="_see-no-evil_" title="_see-no-evil_" class="emoji">',
      "sheep": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/sheep.png" alt="_sheep_" title="_sheep_" class="emoji">',
      "shell": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/shell.png" alt="_shell_" title="_shell_" class="emoji">',
      "snake": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/snake.png" alt="_snake_" title="_snake_" class="emoji">',
      "speak-no-evil": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/speak-no-evil.png" alt="_speak-no-evil_" title="_speak-no-evil_" class="emoji">',
      "tiger": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/tiger.png" alt="_tiger_" title="_tiger_" class="emoji">',
      "tropical-fish": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/tropical-fish.png" alt="_tropical-fish_" title="_tropical-fish_" class="emoji">',
      "turtle": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/turtle.png" alt="_turtle_" title="_turtle_" class="emoji">',
      "unicorn": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/unicorn.png" alt="_unicorn_" title="_unicorn_" class="emoji">',
      "whale": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/whale.png" alt="_whale_" title="_whale_" class="emoji">',
      "wolf": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/wolf.png" alt="_wolf_" title="_wolf_" class="emoji">',
      "weasel": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/weasel.png" alt="_weasel_" title="_weasel_" class="emoji">'
    };
    Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(animalemojisdash).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)_" + emoji + "_", "g"), `$1${animalemojisdash[emoji]}`)));
    console.log("worked");

    //People
    var peopleemojisdash = {
      "Massage": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/Massage.png" alt="_Massage_" title="_Massage_" class="emoji">',
      "angel": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/angle.png" alt="_angel_" title="_angel_" class="emoji">',
      "baby": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/baby.png" alt="_baby_" title="_baby_" class="emoji">',
      "back-pointing-hand": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/back-pointing-hand.png" alt="_back-pointing-hand_" title="_back-pointing-hand_" class="emoji">',
      "beating-heart": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/beating-heart.png" alt="_beating-heart_" title="_beating-heart_" class="emoji">',
      "bride": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/bride.png" alt="_bride_" title="_bride_" class="emoji">',
      "clapping": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/clapping.png" alt="_clapping_" title="_clapping_" class="emoji">',
      "dancer": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/dancer.png" alt="_dancer_" title="_dancer_" class="emoji">',
      "dancers": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/dancers.png" alt="_dancers_" title="_dancers_" class="emoji">',
      "ear": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/ear.png" alt="_ear_" title="_ear_" class="emoji">',
      "eyes": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/eyes.png" alt="_eyes_" title="_eyes_" class="emoji">',
      "fist": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/fist.png" alt="_fist_" title="_fist_" class="emoji">',
      "flexing": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/flexing.png" alt="_flexing_" title="_flexing_" class="emoji">',
      "front-pointing-hand": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/front-pointing-hand.png" alt="_front-pointing-hand_" title="_front-pointing-hand_" class="emoji">',
      "grandma": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/grandma.png" alt="_grandma_" title="_grandma_" class="emoji">',
      "grandpa": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/grandpa.png" alt="_grandpa_" title="_grandpa_" class="emoji">',
      "growing-heart": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/growing-heart.png" alt="_growing-heart_" title="_growing-heart_" class="emoji">',
      "haircut": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/haircut.png" alt="_haircut_" title="_haircut_" class="emoji">',
      "heart-with-arrow": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/heart-with-arrow.png" alt="_heart-with-arrow_" title="_heart-with-arrow_" class="emoji">',
      "heart-with-ribbon": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/heart-with-ribbon.png" alt="_heart-with-ribbon_" title="_heart-with-ribbon_" class="emoji">',
      "high-five": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/high-five.png" alt="_high-five_" title="_high-five_" class="emoji">',
      "idea": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/idea.png" alt="_idea_" title="_idea_" class="emoji">',
      "information-desk-person": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/information-desk-person.png" alt="_information-desk-person_" title="_information-desk-person_" class="emoji">',
      "live-long-and-prosper": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/live-long-and-prosper.png" alt="_live-long-and-prosper_" title="_live-long-and-prosper_" class="emoji">',
      "nail-polish": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/nail-polish.png" alt="_nail-polish_" title="_nail-polish_" class="emoji">',
      "no-good": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/no-good.png" alt="_no-good_" title="_no-good_" class="emoji">',
      "nose": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/nose.png" alt="_nose_" title="_nose_" class="emoji">',
      "ok-hand": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/ok-hand.png" alt="_ok-hand_" title="_ok-hand_" class="emoji">',
      "ok-woman": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/ok-woman.png" alt="_ok-woman_" title="_ok-woman_" class="emoji">',
      "broken-heart": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/omg-its-over.png" alt="_broken-heart_" title="_broken-heart_" class="emoji">',
      "open-hands-sign": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/open-hands-sign.png" alt="_open-hands-sign_" title="_open-hands-sign_" class="emoji">',
      "palm": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/palm.png" alt="_palm_" title="_palm_" class="emoji">',
      "peace-hand": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/peace-hand.png" alt="_peace-hand_" title="_peace-hand_" class="emoji">',
      "person-frowning": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/person-frowning.png" alt="_person-frowning_" title="_person-frowning_" class="emoji">',
      "person-with-pouting-face": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/person-with-pouting-face.png" alt="_person-with-pouting-face_" title="_person-with-pouting-face_" class="emoji">',
      "praying": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/praying.png" alt="_praying_" title="_praying_" class="emoji">',
      "raised-fist": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/raised-fist.png" alt="_raised-fist_" title="_raised-fist_" class="emoji">',
      "raising-hand": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/raising-hand.png" alt="_raising-hand_" title="_raising-hand_" class="emoji">',
      "revolving-hearts": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/revolving-hearts.png" alt="_revolving-hearts_" title="_revolving-hearts_" class="emoji">',
      "rowing": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/rowing.png" alt="_rowing_" title="_rowing_" class="emoji">',
      "run": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/run.png" alt="_run_" title="_run_" class="emoji">',
      "santa": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/santa.png" alt="_santa_" title="_santa_" class="emoji">',
      "sign-of-the-horns": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/sign-of-the-horns.png" alt="_sign-of-the-horns_" title="_sign-of-the-horns_" class="emoji">',
      "space-invader": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/space-invader.png" alt="_space-invader_" title="_space-invader_" class="emoji">',
      "sparkling-heart": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/sparkling-heart.png" alt="_sparkling-heart_" title="_sparkling-heart_" class="emoji">',
      "thumbs-down": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/thumbs-down.png" alt="thumbs-down__" title="__thumbs-down" class="emoji">',
      "thumbs-up": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/thumbs-up.png" alt="_thumbs-up_" title="_thumbs-up_" class="emoji">',
      "tongue": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/tongue.png" alt="_tongue_" title="_tongue_" class="emoji">',
      "two-pink-hearts": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/two-pink-hearts.png" alt="_two-pink-hearts_" title="_two-pink-hearts_" class="emoji">',
      "unknown": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/unknown.png" alt="_unknown_" title="_unknown_" class="emoji">',
      "walk": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/walk.png" alt="_walk_" title="_walk_" class="emoji">',
      "waving-hand": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/people/waving-hand.png" alt="_waving-hand_" title="_waving-hand_" class="emoji">'
    };
    Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(peopleemojisdash).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)_" + emoji + "_", "g"), `$1${peopleemojisdash[emoji]}`)));
    console.log("worked");


    //Potato
    var customemojisdash = {
      "fajtv": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://cdn2.scratch.mit.edu/get_image/user/4291425_60x60.png" alt="_fajtv_" title="_fajtv_" class="emoji">',
      "josh": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://cdn2.scratch.mit.edu/get_image/user/16015216_350x350.png" alt="_josh_" title="_josh_" class="emoji">',
      "potato": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://images.emojiterra.com/emojione/v2/512px/1f954.png" alt="_potato_" title="_potato_" class="emoji">',
      "quirt": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://cdn2.scratch.mit.edu/get_image/user/14638446_60x60.png" alt="_quirt_" title="_quirt_" class="emoji">',
      "wazzo": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://cdn2.scratch.mit.edu/get_image/user/708436_60x60.png" alt="_wazzo_" title="_wazzo_" class="emoji">',
      "will": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://cdn2.scratch.mit.edu/get_image/user/3051823_350x350.png" alt="_will_" title="_will_" class="emoji">'
    };

    Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(customemojisdash).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)_" + emoji + "_", "g"), `$1${customemojisdash[emoji]}`)));
    console.log("worked");

    i++;
    if (i == 5) {
       clearInterval(x);
    }

    if (i == 1 && (document.getElementById("bio").innerHTML.toLowerCase().includes("scratchmoji.tk") || document.getElementById("status").innerHTML.toLowerCase().includes("scratchmoji.tk"))) {
        document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].innerHTML += ' <a href="https://scratch.mit.edu/users/scratchmoji" target="_blank" title="ScratchMoji User" style="text-decoration: none;"><img style="width:25px; vertical-align: text-bottom; height:25px;" src="http://cdn2.scratch.mit.edu/get_image/user/27260179_60x60.png"></img></a>';
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
