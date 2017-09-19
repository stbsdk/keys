/**
 * Global list of non-printable control key codes.
 *
 * At the moment `keypress` and `keydown` events are emitted for the same keys (for both printable and non-printable characters).
 *
 * WARNING!!! All codes in this file (except 'volumeUp' and 'volumeDown')
 * are used in window 'keydown' handler to prevent wrong 'keypress' firings.
 * If you add new code to this file 'keypress' event with this code will never fire.
 *
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

var keys = require('spa-keys');


// extend with additional codes
keys.back         = keys.backspace;
keys.channelNext  = keys.tab;        // Tab
keys.channelPrev  = keys.tab + 's';  // Shift+Tab
keys.ok           = keys.enter;      // Enter
keys.exit         = keys.escape;     // Esc
keys.volumeUp     = 107;             // NUMPAD +
keys.volumeDown   = 109;             // NUMPAD -
keys.f1           = 112 + 'c';       // Ctrl+F1
keys.f2           = 113 + 'c';       // Ctrl+F2
keys.f3           = 114 + 'c';       // Ctrl+F3
keys.f4           = 115 + 'c';       // Ctrl+F4
keys.refresh      = 116 + 'c';       // Ctrl+F5
keys.frame        = 117 + 'c';       // Ctrl+F6
keys.phone        = 119 + 'c';       // Ctrl+F8
keys.set          = 120 + 'c';       // Ctrl+F9
keys.tv           = 121 + 'c';       // Ctrl+F10
keys.menu         = 122 + 'c';       // Ctrl+F11
keys.app          = 123 + 'c';       // Ctrl+F12
keys.rewind       = 66  + 'a';       // Alt+B
keys.forward      = 70  + 'a';       // Alt+F
keys.audio        = 71  + 'a';       // Alt+G
keys.standby      = 74  + 'a';       // Alt+J
keys.keyboard     = 76  + 'a';       // Alt+L
keys.usbMounted   = 80  + 'a';       // Alt+P
keys.usbUnmounted = 81  + 'a';       // Alt+Q
keys.playPause    = 82  + 'a';       // Alt+R
keys.play         = 82  + 'a';       // Alt+R
keys.pause        = 82  + 'a';       // Alt+R
keys.stop         = 83  + 'a';       // Alt+S
keys.power        = 85  + 'a';       // Alt+U
keys.record       = 87  + 'a';       // Alt+W
keys.info         = 89  + 'a';       // Alt+Y
keys.mute         = 192 + 'a';
keys.digit0       = 48;
keys.digit1       = 49;
keys.digit2       = 50;
keys.digit3       = 51;
keys.digit4       = 52;
keys.digit5       = 53;
keys.digit6       = 54;
keys.digit7       = 55;
keys.digit8       = 56;
keys.digit9       = 57;


// public
module.exports = keys;

// public
// module.exports = {
//     getCode: function ( event ) {
//         var code = event.keyCode;
//
//         // apply key modifiers
//         if ( event.shiftKey ) { code += 1000; }
//         if ( event.altKey )   { code += 2000; }
//
//         return code;
//     },
//
//     codes: {
//         back:         8,    // Backspace
//         channelPrev:  1009, // Shift+Tab
//         channelNext:  9,    // Tab
//         ok:           13,   // Enter
//         exit:         27,   // Esc
//         pageUp:       33,
//         pageDown:     34,
//         end:          35,
//         home:         36,
//         left:         37,
//         up:           38,
//         right:        39,
//         down:         40,
//         'delete':     46,
//         volumeUp:     107,  // NUMPAD +
//         volumeDown:   109,  // NUMPAD -
//         f1:           112,  // F1
//         f2:           113,  // F2
//         f3:           114,  // F3
//         f4:           115,  // F4
//         refresh:      116,  // F5
//         frame:        117,  // F6
//         phone:        119,  // F8
//         set:          120,  // F9
//         tv:           121,  // F10
//         menu:         122,  // F11
//         app:          123,  // F12
//         rewind:       2066, // Alt+B
//         forward:      2070, // Alt+F
//         audio:        2071, // Alt+G
//         standby:      2074, // Alt+J
//         keyboard:     2076, // Alt+L
//         usbMounted:   2080, // Alt+P
//         usbUnmounted: 2081, // Alt+Q
//         playPause:    2082, // Alt+R
//         stop:         2083, // Alt+S
//         power:        2085, // Alt+U
//         record:       2087, // Alt+W
//         info:         2089, // Alt+Y
//         mute:         2192
//     }
// };
