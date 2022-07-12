module.exports = {
    getNotifInitCancelPost: function() {
        const notifInitCancelPost = {
            "notification":{
                "title": "Notificacion Pausas Activas",
                "image": "https://antamina-global-media.s3.amazonaws.com/activebreak/Img_01.png",
                "body": "Tiene una pausa activa por ejecutar. Dar clic para Iniciar",
                "requireInteraction": true,
                "silent": false,
                "actions": [
                    {"action": "Posponer", "title": "Posponer"},
                    {"action": "Cancelar", "title": "Cancelar"}
                  ],
                  "data": {
                    "onActionClick": {
                      "default": {"operation": "navigateLastFocusedOrOpen", "url": "https://prd.antamina.com/activebreakpwa/stepper-activebreak/"},
                      "Posponer": {"operation": "navigateLastFocusedOrOpen", "url": "https://prd.antamina.com/activebreakpwa/activity/"},
                      "Cancelar": {"operation": "navigateLastFocusedOrOpen", "url": "https://prd.antamina.com/activebreakpwa/activity/"}
                    }
                  }
            }
        };
  
        return notifInitCancelPost;
    },
    getNotifInitCancel: function(name , date, URLStart, URLCancel) {
        const notifInitCancel = {
            "notification":{
                "title": "Notificacion Pausas Activas",
                "image": "https://antamina-global-media.s3.amazonaws.com/activebreak/Img_02.png",
                "body": "Tiene una pausa activa por ejecutar "+date+" "+name+". Dar clic para Iniciar",
                "requireInteraction": true,
                "silent": false,
                "actions": [
                    {"action": "Cancelar", "title": "Cancelar"}
                  ],
                  "data": {
                    "onActionClick": {
                      "default": {"operation": "navigateLastFocusedOrOpen", "url": "https://prd.antamina.com/activebreakpwa/stepper-activebreak/"+URLStart},
                      "Cancelar": {"operation": "navigateLastFocusedOrOpen", "url": "https://prd.antamina.com/activebreakpwa/activity/"+URLCancel}
                    }
                  }
            }
        };
        
        return notifInitCancel;
    }
  };