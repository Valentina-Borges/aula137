
objects = [];
status = "";

function modelLoaded() {
    console.log("ModelLoaded Carregado!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

video = "";

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
}

function draw() {
    Image(video, 0, 0, 480, 380);
    if(status != "")
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementByld("status").innerHTML = "Status: Objetos Detectados";
            document.getElementByld("numberOfObjects").innerHTML = "Quantidade de Objetos Detectados: "+ objects.legth;

            Fill("#FF0000");
            percent = floor(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            Reflect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function star()
{
    objectDetector = ml5.objectDetector('cocssd', modelLoaded);
    document.getElementByld("status").innerHTML = "Status: Detectando Objetos";
}