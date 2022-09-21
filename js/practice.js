class Task {
    constructor() {
        this.name = "";
        this.sdate = "";
        this.edate = "";
        this.elements = [];

        this.cost = 0;
        this.objectIds = [];
    }
    collectNodes(node, cnodes){
        if(node.children != null){
            for(let ch of node.children){
                if(ch == null)
                continue;

                cnodes.push(ch.expressID);
                this.collectNodes(ch, cnodes);
            }
        }
    }
    load(json, map){
        this.sdate = new Date(json["sdate"]);
        this.edate = new Date(json["edate"]);
        this.elements = json["elements"];

        for(let elm of this.elements){
            this.cost += elm
        }
    }
}