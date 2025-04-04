
let sales: number = 12_34_56_789;
let c: string = 'ts'
let isPublished = true
let lvl;
lvl = 1
lvl = '1'

function render(doc: any) {
    console.log(doc);
    // arreys
    let numbers: number[] = []
    numbers.forEach(e => {
        e.toPrecision
    });

    // tuples /** not same as python more like a pair of key value and thats it**/

    let tuples: [number,string] = [1,'one']
    tuples.push(50) // this works for some reason but it shouldn't
    // we can make dictionary of this tuple
    let dict: object[] = [tuples]
    dict =[[1,'one'],[2,'two']]

}

