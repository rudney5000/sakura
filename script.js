var chatContainer = $(".chat-content-msg");
var username = "";
var chatMsgCount =0;
var chatMsgAlert = $("#chat-header-msg-alert");


function send_message(message){
    if (chatContainer.html() !="") {
        chatContainer.append("<br/>");
    }

    chatContainer.append('<span class="curret_message"><span class="chat-bot"> Chatbot: </span>' + message + "</span>");
    $(".current_message").hide();
    $(".current_message").delay(1000).fadeIn();
    $(".current_message").removeClass("current_message");


    ++chatMsgCount;
}




function ai(message) {
    if (username.length == 0){
        username =message;
        send_message("Индекс чего?" + username+ ". Индекс Для безапасности ");
    }

    if (message.indexOf("Да") >=0 ) {
        send_message("уревень деградации дороги высок по сравнению с предыдушим полугодием. причины аварий")
    }

    if (message.indexOf("Время") >= 0) {
        var date = new Data();
        var h = date.getHours();
        var m = date.getMinutes();
        send_message( " " + (h + 2) + "h" + m)
    }
}

$(function() {
    var chat_replie_hauteur = 16,
        chat_etendu_hauteur = 250,
        chat_temps_ouverte = 500,
        chat_temps_fermeture = 1000;

        $(".chat-header-closer").click(function (){
            $(".chat").fadeOut(500);
        });

        send_message("Здравствуйте, я рад что вы консультироварились, чем могу помощь?");

        $(".chat-header").click(function (){
            var chat = $(".chat"),
                chat_hauteur_courante = chat.height();

            if (chat_hauteur_courante == chat_replie_hauteur) {
                chat.animate ({
                        height: chat_etendu_hauteur
                    },
                    chat_temps_ouverte
                );
            }else {
                chat.animate ({
                    height: chat_replie_hauteur
                },
                chat_temps_fermeture
                );
            }
        })
        
        $(".chat-content-input").Keypress(function (event) {
            chatMsgCount = 0;
            chatMsgAlert.fadeOut();

            if (event.which == 13) {
                event.preventDefault();
                varMyname = '<span class="chat-username>" я хочу узнать индекс для дороги: </span>';
                var userMessage = $(this).val();

                $(this).val("");

                if (chatContainer.html() !="") {
                    chatContainer.append("<br/>");
                }

                chatContainer.append(myname +userMessage);

                ai(userMessage);
            }
            
        })
});
