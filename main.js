Webcam.set({
    width:360,
    height:250,
    image_format : 'jpg',
    png_quality:90
});
camera = document.getElementById("camera");

webcam.attach('#camera');

console.log('ml5 version:', ml5.version);

function take_snapshot1()
{
    Webcam.snap(function(data_uri) {
        
        document.getElementById("result").innerHTML = '<img id="captured_image"  src= "'+data_uri+'">';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jk5-T-Ahc/model,json', modelLoaded);
