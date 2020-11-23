var canvas = document.createElement('canvas')
canvas.width = 400
canvas.height = 400
document.body.appendChild(canvas)

var gl = canvas.getContext('webgl')

gl.clearColor(1, 0, 1, 1)
gl.clear(gl.COLOR_BUFFER_BIT)

var vs = gl.createShader(gl.VERTEX_SHADER)
var fs = gl.createShader(gl.FRAGMENT_SHADER)

gl.shaderSource(vs, [
  'attribute vec2 position;',
  'void main() {',
    'gl_Position = vec4(position, 0.0, 1.0);',
  '}'
].join('\n'))

gl.shaderSource(fs, [
  'precision mediump float;',
  'uniform vec4 color;',
  'void main() {',
    'gl_FragColor = color;',
  '}'
].join('\n'))

gl.compileShader(vs)
gl.compileShader(fs)

var program = gl.createProgram()
gl.attachShader(program, vs)
gl.attachShader(program, fs)
gl.linkProgram(program)

var vertices = new Float32Array([
  -1.0,-1.0,
   3.0,-1.0,
  -1.0, 3.0
])

var buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

gl.useProgram(program)
program.color = gl.getUniformLocation(program, 'color')
gl.uniform4fv(program.color, [0, 1, 0, 1])

program.position = gl.getAttribLocation(program, 'position')
gl.enableVertexAttribArray(program.position)
gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0)

var i = 0

function step()
{
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.uniform4fv(program.color, [i, 0, 0, 1])
  gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 2)
  i = i + 0.005

  window.requestAnimationFrame(step)
}

window.requestAnimationFrame(step)
