//random color
function RandomColor(){
    //initial random color
    this.r = Math.floor(Math.random()*256);
    this.g = Math.floor(Math.random()*256);
    this.b = Math.floor(Math.random()*256);
    //get a different color
    this.randomize = function() {
        this.r = Math.floor(Math.random()*256);
        this.g = Math.floor(Math.random()*256);
        this.b = Math.floor(Math.random()*256);
    };
    //get the color as an rgb()
    this.rgbString = function() {
        return 'rgb('+this.r+', '+this.g+', '+this.b+')';
    };
    this.hexString = function() {
        let rHex = this.r.toString(16);
        let gHex = this.g.toString(16);
        let bHex = this.b.toString(16);
        return `#${ rHex.length < 2 ? "0"+rHex : rHex}`
               +`${ gHex.length < 2 ? "0"+gHex : gHex}`
               +`${ bHex.length < 2 ? "0"+bHex : bHex}`;
    };
    this.randomHexString = function() {
        let rHex = Math.floor(Math.random()*256).toString(16);
        let gHex = Math.floor(Math.random()*256).toString(16);
        let bHex = Math.floor(Math.random()*256).toString(16);
        return `#${ rHex.length < 2 ? "0"+rHex : rHex}`
               +`${ gHex.length < 2 ? "0"+gHex : gHex}`
               +`${ bHex.length < 2 ? "0"+bHex : bHex}`;
    };
    this.randomRgbString = function() {
        return 'rgb('
        +Math.floor(Math.random()*256)+', '
        +Math.floor(Math.random()*256)+', '
        +Math.floor(Math.random()*256)+')';
    };
};

//random background color for DOM element
function randomBackgroundColor(element) {
    let bgColor = new RandomColor();
    element.setAttribute('style', 'background-color: '+bgColor.hexString()+';');
};

module.exports = {RandomColor};