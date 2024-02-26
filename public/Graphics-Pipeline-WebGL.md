the GRAPHICS PIPELINE is the set of stages that turn vertices into triangles into pixels

vertices 					3D output of vertices
vertex processor 				2D output - 2d output of 
clipping & primitive assembler 			clipping & assembly into points, lines triangles (2D + INSIDE)
rasterizer					geometric primitives turn into framents (output) (1D)
fragment processor				calculate texture, shade, lighting, etc. / pixels output (0D output of a pixel.)
pixel

=======================================================================

webGL: (HTML)
```
<!DOCTYPE html>
<html>
<head>
<script id="vertex-shader" type="x-shader/x-vertex">
attribute vec4 vPosition;
void main(){
  gl_Position = vPosition;
}
</script>
<script id="fragment-shader" type="x-shader/x-fragment">
precision mediump float;
void main(){
    gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
</script>
<script type="text/javascript" src="../Common/webgl-utils.js"></script>
<script type="text/javascript" src="../Common/initShaders.js"></script>
<script type="text/javascript" src="../Common/MV.js"></script>
<script type="text/javascript" src="triangle.js"></script>
</head>
<body>
<canvas id="gl-canvas" width="512" height="512">
Oops ... your browser doesn't support the HTML5 canvas element
</canvas>
</body>
</html>
```
=======================================================================
```
var gl;
var points;

window.onload = function init(){
    var canvas = document.getElementById( "gl-canvas" );
     gl = WebGLUtils.setupWebGL( canvas );    
     if ( !gl ) { alert( "WebGL isn't available" ); 
}        

// Three Vertices        

var vertices = [
        vec2( -1, -1 ),
        vec2(  0,  1 ),
        vec2(  1, -1 )    
];
//  Configure WebGL   
//    
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );   
     
//  Load shaders and initialize attribute buffers

    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );        

// Load the data into the GPU        

    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );    
// Associate shader variables with data buffer

      var vPosition = gl.getAttribLocation( program, "vPosition" );
      gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
      gl.enableVertexAttribArray( vPosition );    
      render();
};

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT ); 
   gl.drawArrays( gl.TRIANGLES, 0, 3 );
}
```
// EXAMPLES
// http://www.cs.uakron.edu/~xiao/graphics/WebGL-Examples.zip
// https://www.cs.unm.edu/~angel/WebGL/
