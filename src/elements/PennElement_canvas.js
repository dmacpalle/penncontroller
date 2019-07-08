// CANVAS element
/* $AC$ PennController.newCanvas(name,width,height) Creates a new Canvas element $AC$ */
/* $AC$ PennController.getCanvas(name) Retrieves an existing Canvas element $AC$ */
window.PennController._AddElementType("Canvas", function(PennEngine) {

    this.immediate = function(id, width, height){
        if (typeof(id)=="number" && typeof(width)=="number" && height===undefined){
            height = width;
            width = id;
            this.id = PennEngine.utils.guidGenerator();
        }
        this.width = width;
        this.height = height;
    };

    this.uponCreation = function(resolve){
        this.jQueryElement = $("<div>").css({
            width: this.width, height: this.height,
            overflow: "visible", position: "relative", display: "inline-block"
        });
        this.elementCommands = [];
        this.showElement = (elementCommand, x, y, z)=>new Promise(resolve=>{
            let afterPrint = ()=>{
                let element = elementCommand._element;
                let jQueryElement = element.jQueryElement;
                let coordinates = PennEngine.utils.parseCoordinates(x,y,element.jQueryContainer);
                x = coordinates.x;
                y = coordinates.y;
                if (element.jQueryContainer){
                    element.jQueryContainer.css({position: "absolute", left: x, top: y});
                    if (Number(z)>0||Number(z)>0)
                        element.jQueryContainer.css("z-index", z);    // Only if number (i.e. not NaN)
                }
                else{
                    jQueryElement.css({position: "absolute", left: x, top: y});
                    if (Number(z)>0||Number(z)>0)
                        jQueryElement.css("z-index", z);    // Only if number (i.e. not NaN)
                }
                resolve();
            }
            elementCommand.print( this.jQueryElement )._runPromises().then(afterPrint);
        });
        resolve();
    };

    this.end = function(){
        if (this.log){
            if (!this.printTime)
                PennEngine.controllers.running.save(this.type, this.id, "Print", "NA", "Never", "NULL");
            else
                PennEngine.controllers.running.save(this.type, this.id, "Print", "NA", this.printTime, "NULL");
        }
    };

    this.value = function(){                                    // Value is how many elements it contains
        return this.elementCommands.length;
    };
    
    this.actions = {
        print: async function(resolve, ...where){
            let t=this, showElements = async function(){
                for (let e in t.elementCommands)
                    await t.showElement(...t.elementCommands[e]);
                resolve();
            };
            PennEngine.elements.standardCommands.actions.print.apply(this, [showElements, ...where]);
        }
    };

    this.settings = {
        add: function(resolve, x, y, elementCommand, z){    /* $AC$ Canvas PElement.settings.add(x,y,element) Places an element at (X,Y) on the canvas $AC$ */
            if (elementCommand.hasOwnProperty("_element") && elementCommand._element.jQueryElement instanceof jQuery){
                this.elementCommands.push([elementCommand, x, y, z]);
                if (this.jQueryElement.parent().length)
                    this.showElement(elementCommand, x, y, z).then(resolve);
                else
                    resolve();
            }
            else{
                PennEngine.debug.error("Invalid element referenced to add to Canvas "+this.id);
                resolve();
            }
        }
        ,
        remove: async function(resolve, elementCommand){     // Since 1.2
            if (elementCommand.hasOwnProperty("_element")){
                let index = this.elementCommands.map(e=>e[0]._element).indexOf(elementCommand._element);
                if (index > -1){
                    this.elementCommands.splice(index,1);
                    await elementCommand.remove()._runPromises();
                }
                else
                    PennEngine.debug.error("Element referenced to remove from canvas not found in Canvas "+this.id);
            }
            else
                PennEngine.debug.error("Invalid element referenced to remove from Canvas "+this.id);
            resolve();
        }
    };

});