/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

 //i18n dependencies, i18n is the main module, sprintf allows us to include with '%s'.
 const i18n=require('i18next');
 const sprintf = require('i18next-sprintf-postprocessor');

const languageStrings = {
    en:{
        translation: {
          WELCOME_MESSAGE: 'Welcome victor, you can say Hello or Help. Which would you like to try?',
          HELLO_MESSAGE: 'Hello World victor!',
          HELP_MESSAGE: 'You can say hello to me! How can I help?',
          GOODBYE_MESSAGE: 'Goodbye victor!',
          REFLECTOR_MESSAGE: 'You just triggered  victor %s',
          FALLBACK_MESSAGE: 'Sorry victor, I don\'t know about that. Please try again.',
          ERROR_MESSAGE: 'Sorry victor, there was an error. Please try again.'
        }
    },
    es:{
        translation: {
          WELCOME_MESSAGE: 'Bienvenido victor, puedes decir Hola o Ayuda. Cual prefieres?',
          HELLO_MESSAGE: 'Hola Mundo victor!',
          HELP_MESSAGE: 'Puedes decirme hola victor. Cómo te puedo ayudar?',
          GOODBYE_MESSAGE: 'Adiós victor!',
          REFLECTOR_MESSAGE: 'Victor Acabas de activar %s',
          FALLBACK_MESSAGE: 'Lo siento victor, no se nada sobre eso. Por favor inténtalo otra vez.',
          ERROR_MESSAGE: 'Lo siento victor, ha habido un problema. Por favor inténtalo otra vez.'
        }
    }
}
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('WELCOME_MESSAGE');
        
        //const speakOutput = 'Hola esta es mi skill Calculadora Victor';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('HELLO_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('HELP_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('GOODBYE_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const SumaIntentHendler= {
  canHandle(handlerInput){
      return Alexa.getRequestType(handlerInput.requestEnvelope)==='IntentRequest'
          && Alexa.getIntentName(handlerInput.requestEnvelope)==='SumaIntent'; 
  },
  handle(handlerInput){
      const requestAtributes = handlerInput.attributesManager.getRequestAttributes();
      const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
      const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;
      var numero1 = Number(cantidad)
      var numero2 = Number(cantidadd)
      if(isNaN(numero1)|| isNaN(numero2)){
          return handlerInput.responseBuilder
            .speak('lo siento, no pude entender los numeros. Por favor, intentalo de nuevo.')
            .reprompt('Deseas realizar otra acción?')
            .getResponse();
      }
      let resultado= 0;
      resultado = numero1 + numero2;
      const speakOutput = `Calculadora VFRH... El resultado de la suma de ${numero1} mas ${numero2} es igual a ${resultado}.`;
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('Deseas realizar otra acción?')
        .getResponse();
  }
  
};
const RestaIntentHendler= {
  canHandle(handlerInput){
      return Alexa.getRequestType(handlerInput.requestEnvelope)==='IntentRequest'
          && Alexa.getIntentName(handlerInput.requestEnvelope)==='RestaIntent'; 
  },
  handle(handlerInput){
      const requestAtributes = handlerInput.attributesManager.getRequestAttributes();
      const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
      const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;
      var numero1 = Number(cantidad)
      var numero2 = Number(cantidadd)
      if(isNaN(numero1)|| isNaN(numero2)){
          return handlerInput.responseBuilder
            .speak('lo siento, no pude entender los numeros. Por favor, intentalo de nuevo.')
            .reprompt('Deseas realizar otra acción?')
            .getResponse();
      }
      let resultado= 0;
      resultado = numero1 - numero2;
      const speakOutput = `Calculadora VFRH... El resultado de la resta de ${numero1} menos ${numero2} es igual a ${resultado}.`;
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('Deseas realizar otra acción?')
        .getResponse();
  }
  
};
const MultiplicacionIntentHendler= {
  canHandle(handlerInput){
      return Alexa.getRequestType(handlerInput.requestEnvelope)==='IntentRequest'
          && Alexa.getIntentName(handlerInput.requestEnvelope)==='MultiplicacionIntent'; 
  },
  handle(handlerInput){
      const requestAtributes = handlerInput.attributesManager.getRequestAttributes();
      const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
      const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;
      var numero1 = Number(cantidad)
      var numero2 = Number(cantidadd)
      if(isNaN(numero1)|| isNaN(numero2)){
          return handlerInput.responseBuilder
            .speak('lo siento, no pude entender los numeros. Por favor, intentalo de nuevo.')
            .reprompt('Deseas realizar otra acción?')
            .getResponse();
      }
      let resultado= 0;
      resultado = numero1 * numero2;
      const speakOutput = `Calculadora VFRH... El resultado de la multiplicacion de ${numero1} por ${numero2} es igual a ${resultado}.`;
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('Deseas realizar otra acción?')
        .getResponse();
  }
  
};
const DivisionIntentHendler= {
  canHandle(handlerInput){
      return Alexa.getRequestType(handlerInput.requestEnvelope)==='IntentRequest'
          && Alexa.getIntentName(handlerInput.requestEnvelope)==='DivisionIntent'; 
  },
  handle(handlerInput){
      const requestAtributes = handlerInput.attributesManager.getRequestAttributes();
      const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
      const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;
      var numero1 = Number(cantidad)
      var numero2 = Number(cantidadd)
      if(isNaN(numero1)|| isNaN(numero2)){
          return handlerInput.responseBuilder
            .speak('lo siento, no pude entender los numeros. Por favor, intentalo de nuevo.')
            .reprompt('Deseas realizar otra acción?')
            .getResponse();
      }
      let resultado= 0;
      resultado = numero1 / numero2;
      const speakOutput = `Calculadora VFRH... El resultado de la division de ${numero1} entre ${numero2} es igual a ${resultado}.`;
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('Deseas realizar otra acción?')
        .getResponse();
  }
  
};

const PotenciaIntentHandler= {
  canHandle(handlerInput){
      return Alexa.getRequestType(handlerInput.requestEnvelope)==='IntentRequest'
          && Alexa.getIntentName(handlerInput.requestEnvelope)==='PotenciaIntent'; 
  },
  handle(handlerInput){
      const requestAtributes = handlerInput.attributesManager.getRequestAttributes();
      const base = handlerInput.requestEnvelope.request.intent.slots.base.value;
      const exponente = handlerInput.requestEnvelope.request.intent.slots.exponente.value;
      var numeroBase = Number(base)
      var numeroExponente = Number(exponente)
      if(isNaN(numeroBase)|| isNaN(numeroExponente)){
          return handlerInput.responseBuilder
            .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
            .reprompt('Deseas realizar otra acción?')
            .getResponse();
      }
      let resultado = Math.pow(numeroBase, numeroExponente);
      const speakOutput = `Calculadora VFRH... El resultado de elevar ${numeroBase} a la potencia de ${numeroExponente} es igual a ${resultado}.`;
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('Deseas realizar otra acción?')
        .getResponse();
  }
};

const RaizCuadradaIntentHandler = {
  canHandle(handlerInput){
      return Alexa.getRequestType(handlerInput.requestEnvelope)==='IntentRequest'
          && Alexa.getIntentName(handlerInput.requestEnvelope)==='RaizCuadradaIntent'; 
  },
  handle(handlerInput){
      const requestAtributes = handlerInput.attributesManager.getRequestAttributes();
      const numero = handlerInput.requestEnvelope.request.intent.slots.numero.value;
      var numeroRaiz = Number(numero)
      if(isNaN(numeroRaiz)){
          return handlerInput.responseBuilder
            .speak('Lo siento, no pude entender el número. Por favor, inténtalo de nuevo.')
            .reprompt('Deseas realizar otra acción?')
            .getResponse();
      }
      let resultado = Math.sqrt(numeroRaiz);
      const speakOutput = `Calculadora VFRH... La raíz cuadrada de ${numeroRaiz} es igual a ${resultado}.`;
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('Deseas realizar otra acción?')
        .getResponse();
  }
};


/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('FALLBACK_MESSAGE');


        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        // const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        //const speakOutput = requestAttributes.t('Victor Acabas de activar %s '+ ${intentName});
        
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('ERROR_MESSAGE');
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// This request interceptor will log all incoming requests to this lambda
const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope.request)}`);
    }
};

// This response interceptor will log all outgoing responses of this lambda
const LoggingResponseInterceptor = {
    process(handlerInput, response) {
      console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};

// This request interceptor will bind a translation function 't' to the requestAttributes.
const LocalizationInterceptor = {
  process(handlerInput) {
    const localizationClient = i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      fallbackLng: 'en',
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: languageStrings,
      returnObjects: true
    });

    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function (...args) {
      return localizationClient.t(...args);
    }
  }
}

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SumaIntentHendler,
        RestaIntentHendler,
        MultiplicacionIntentHendler,
        DivisionIntentHendler,
        PotenciaIntentHandler,
        RaizCuadradaIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(LoggingRequestInterceptor, LocalizationInterceptor)
    .addResponseInterceptors(LoggingResponseInterceptor)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();