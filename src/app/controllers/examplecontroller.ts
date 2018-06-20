import { ExamleModelClass } from "../../Models/examplemodel";

require('../../Models/examplemodel')
var logic = require('../../BLL/examplelogic')

module.exports.getentry = function (req: any, res: any) {

    logic.ExampleBLL(5, 3).then((data: number) => {
        if (!data) {

            console.log('Error')
            res.status(503)
            res.json('fuck')
        }
        res.status(200);
        res.json(data);
    })
}

module.exports.getModelitem = function (req: any, res: any) {

    let tmp :ExamleModelClass = {item1: 6, item2: 'Awesome'}


    // var tmp: ExamleModelClass {
    //     item1 = 6,
    //     item2 = 'Cool'
    // };
    // tmp.item1 = 6;
    // tmp.item2 = 'Cool'

    logic.ExampleBLLUsingModel(tmp).then((data: ExamleModelClass) => {

        res.status(200);
        res.json(data);
    })
}