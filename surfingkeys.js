//E:\ProgramFiles\ProgramWork\OneDriveFiles\OneDrive\配置文件\个人配置文件\surfingkeys\surfingkeys.js
// an example to create a new mapping `ctrl-y`

// mapkey('<Ctrl-y>', 'Show me the money', function() {
//     Front.showPopup('a well-known phrase uttered by characters in Tthe 1996 film Jerry Maguire (Escape to close).');
// });

// an example to replace `u` with `?`, click `Default mappings` to see how `u` works.
//map('?', 'u');

// an example to remove mapkey `Ctrl-i`??
// unmap('<Ctrl-i>');
// unmap('<Ctrl-j>');
// unmap('<Ctrl-h>');
// unmap('<Alt-s>');
// unmap('<shift-N>');
// unmap('n');
// unmap('f');
api.unmap('f');
api.unmap('p');
api.unmap('<Ctrl-h>');


// click `Save` button to make above settings to take effect.
// set theme
settings.theme = `
.sk_theme {
    background: #ffffff;
    color: #000;
}
.sk_theme tbody {
    color: #000;
}
.sk_theme input {
    color: #000;
}
.sk_theme .url {
    color: #3399ff;
}
.sk_theme .annotation {
    color: #000;
}

.sk_theme .focused {
    background: #aaa;
}`;



