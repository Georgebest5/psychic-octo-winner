
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BQYsOTvwL/model.json', modelReady);
}

function modelReady() {
    console.log('model is ready');
    classifier.classify(gotResults);
}

dog=0
cat=0
cow=0
lion=0

function gotResults(error,results) {
    if(error){
        console.error(error);
    }else{
        console.log(results) 
        random_number_r =Math.floor(Math.random() * 225) +1;
        random_number_g =Math.floor(Math.random() * 225) +1;
        random_number_b =Math.floor(Math.random() * 225) +1;

        document.getElementById("result_label").innerHTML = 'Detected dog -  Detected cat-  Detected cow-  Detected lion- '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = ' Deteceted voice is of  -'+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb(" +random_number_r+","+ random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+","+ random_number_g+","+random_number_b+")";

img = document.getElementById('dog');
        img1 = document.getElementById('cow');
        img2 = document.getElementById('lion');
        img3 = document.getElementById('cat');

        if(results[0].label == "clap") {
            img.src= 'dog.gif';
            img1.src='cow.jpg';
            img2.src='lion.jpg';
            img3.src='cat.png';
        }else if(results[0].label == "bell"){
            img.src= 'dog.jpg';
            img1.src='cute-cow.gif';
            img2.src='lion.jpg';
            img3.src='cat.png'; 
        }else if(results[0].label == "snap"){
            img.src= 'dog.jpg';
            img1.src='cow.jpg';
            img2.src='simba-walk.gif';
            img3.src='cat.png'; 
        }else{
            img.src= 'dog.jpg';
            img1.src='cow.jpg';
            img2.src='lion.jpg';
            img3.src='cat-couple-cute-cats.gif';  
        }
    }
}