//Crear la variable date - (fecha).
var date = new Date()
let display_date= "Fecha:" + date.toLocaleDateString()

//Cargar HTML DOM.
$(document).ready(function () {
    $("#display_date").html(display_date)
})

//Definir la variable para almacenar la emoción predecida.
let predicted_emotion;


//HTML-->JavaScript--->Flask.
//Flask--->JavaScript--->HTML.
//Selector jQuery y la acción click.
$(function () {
    $("#predict_button").click(function () {
        let input_data = {
            "text": $("#text").val()
        }
        console.log(input_data)
        $.ajax({
            type: 'POST',
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: 'application/json',
            success: function (result) {
                
                // Resultado recibido de Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                
                // Mostrar resultado usando JavaScript----->HTML
                $("#").html(predicted_emotion)
                $('#').css("display", "block");

                $("#").attr('src', emo_url);
                $('#').css("display", "block");
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }


        })

    }
    )
})


