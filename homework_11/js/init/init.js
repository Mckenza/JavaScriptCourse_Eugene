import {Controller} from '/homework_11/js/controller/secondController.js';
import {Model} from '/homework_11/js/model/secondModel.js';
import {ControllerSingle} from '/homework_11/js/controller/thirdController.js'
import {ModelSingle} from '/homework_11/js/model/thirdModel.js'

// <------- 10 users ---------> //
const secondController = new Controller();
const secondModel = new Model();

const func = secondModel.getDataFromServer;

secondController.listenEvent(func);


// <----------- single user -----------> //
const thirdController = new ControllerSingle();
const thirdModel = new ModelSingle();

const funcSingle = thirdModel.getDataFromServerId;
thirdController.eventListener(funcSingle);

const functionAddNewPerson = thirdModel.postDataFromServerId;

const data = thirdController.checkValid(functionAddNewPerson);
