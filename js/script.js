var speed = 350; // pixels/second

window.addEventListener("load", function() {
    new SpawnSheeple();
});

SpawnSheeple = function() {
    this.div = document.createElement( "div" ) ;
    document.body.appendChild( this.div ) ;
    this.div.className = "panel" ;
    this.div.style.top = parseInt( 100 * Math.random() ) + "%" ;
    var pos = 0 // -32 
    this.div.style.left = pos + 'px';
}
