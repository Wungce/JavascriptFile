const regFun = () =>{
    console.log("Hello World")
    let reg = document.getElementById('content').value
    let regs = /re/
    const str = "Hello wanghs what's up I'm fine also that and you"
    
    const result = regs.exec(str)
    console.log(result) 
}