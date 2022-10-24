
class ShortcutsListener{

    constructor(){
        this.shortcut = {};
    }
    
    start(){
        this.shortcut = {
        // (A) SET SHORTCUT KEYS TO LISTEN TO
        listen: null,
        set: (listen) => {
            // (A1) KEY SEQUENCE + FUNCTION TO RUN
            this.shortcut.listen = listen;

            // (A2) KEY PRESS LISTENERS
            window.addEventListener('keydown', (evt) => {
            if (evt.key){
                this.shortcut.track(evt.key.toLowerCase(), true);
            }
            });
            window.addEventListener('keyup', (evt) => {
            if (evt.key){
                this.shortcut.track(evt.key.toLowerCase(), false);
            }
            });
        },

        // (B) KEY PRESS SEQUENCE TRACKER
        sequence: [],
        track: (key, direction) => {
            // (B1) PREVENT AUTO CLEANING
            if (this.shortcut.junk != null) {
            clearTimeout(this.shortcut.junk);
            }

            // (B2) KEY DOWN
            if (direction) {
            if (!this.shortcut.sequence.includes(key)) {
                this.shortcut.sequence.push(key);
            }
            }

            // (B3) KEY UP
            else {
            let idx = this.shortcut.sequence.indexOf(key);
            if (idx != -1) {
                this.shortcut.sequence.splice(idx, 1);
            }
            }

            // (B4) HIT SHORTCUT?
            if (this.shortcut.sequence.length != 0) {
            let seq = this.shortcut.sequence.join('-');
            if (this.shortcut.listen[seq]) {
                this.shortcut.sequence = [];
                this.shortcut.listen[seq]();
            }

            // (B5) PREVENT "STUCK SEQUENCE" WHEN USER LEAVES PAGE
            // E.G. OPEN NEW TAB WHILE IN MIDDLE OF KEY PRESS SEQUENCE
            else {
                this.shortcut.junk = setTimeout(this.shortcut.clean, 600);
            }
            }
        },

        // (C) AUTO CLEANUP
        junk: null,
        clean: () => {
            this.shortcut.junk = null;
            this.shortcut.sequence = [];
        },
        };

    }

    loadShortcuts(shortsCutInfo){
        this.shortcut.set(shortsCutInfo);
    }

    
}


const shortcutsListenerInstance = new ShortcutsListener();

export { shortcutsListenerInstance as shortcutsListener};