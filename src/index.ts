// 1.获取webgl
var canvas = <HTMLCanvasElement>document.getElementById("webgl");
var gl = canvas.getContext("webgl");

// 2.清空屏幕
gl.clearColor(0, 0, 0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

// 3.初始化着色器
let vs_source = `
void main(){
    gl_Position=vec4(0.0,0.0,0.0,1.0);
    gl_PointSize=100.0;
}
`;
let fs_source = `
void main(){
    gl_FragColor=vec4(1.0,1.0,0.0,1.0);
}`;

// 创建顶点着色器对象
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
// 绑定资源
gl.shaderSource(vertexShader, vs_source);
// 编译着色器
gl.compileShader(vertexShader);

var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fs_source);
gl.compileShader(fragmentShader);

// 创建一个着色器程序
var glProgram = gl.createProgram();

// 把前面创建的二个着色器对象添加到着色器程序中
gl.attachShader(glProgram, vertexShader);
gl.attachShader(glProgram, fragmentShader);

// 把着色器程序链接成一个完整的程序
gl.linkProgram(glProgram);

// 使用这个完整的程序
gl.useProgram(glProgram);

// 4.绘制一个点
gl.drawArrays(gl.POINTS, 0, 1);
