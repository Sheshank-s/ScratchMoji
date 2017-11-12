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
        "sunglasses": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/sweat-smile.png" alt="_sweat-smile_" title="_sweat-smile_" class="emoji">',
        "sweat-smile": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/faceemoji/surprised.png" alt="_surprised_" title="_surprised_" class="emoji">',
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
      "weasel": '<img style="vertical-align: bottom; display: inline; height: 21px; width: 21px;" src="https://greenbayrules.github.io/host/emojis/animals/weasel.png" alt="_weasel_" title="_weasel_" class="emoji">'
    };
    Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(animalemojisdash).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)_" + emoji + "_", "g"), `$1${animalemojisdash[emoji]}`)));
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
