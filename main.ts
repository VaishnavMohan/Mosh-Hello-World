// function log(message) {
//     console.log(message);
// }

// var message = 'Hello World';

// log(message);




// var number = 1;
// let count = 2;




// function doSomething(){
//     for (var i=0; i<5; i++){
//         console.log(i);
//     }

//     console.log('Finally: ' + i);
// }

// doSomething();



// var count = 5;
// count = 'a';




// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as String).endsWith('c');





// let log = function(message) {
//     console.log(message);
// }

// let doLog =() => console.log();




interface Point{
    x: number;
    y: number;

    constructor(
        private x?: number,private y?: number{
            // this.x = x;
            // this.y = y:
        }
    )
    draw() {
        console.log('X: ' + this.x + ', Y: '+ this.y);
    }

    get X() {
        return this.x;
    }

    set X(value){
        if(value < 0)
        throw new Error('value cannot be less than 0.');
        this.x = value;
    }

    // getDistance(another: Point){

    // }
}

// let drawPoint = (point: Point) => {

// }

// let getDistance = (pointA: Point, pointB: Point) =>{
    
// }

// drawPoint({
//     x: 1,
//     y: 2

// })
let point = new Point(1, 2);
point.x = point.X();
point.X = 10;
// point.x = 1;
// point.y = 2;
point.draw();

