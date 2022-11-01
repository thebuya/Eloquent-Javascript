let collectorList = [];

function addCollector(Collector, artSize, artStyles, Agent){
    collectorList.push({Collector,artSize,artStyles, Agent});
}

addCollector("Harriet Kabura",["A2","A3","A4+"],["Painting", "Pencil", "Collage"],false);
addCollector("Elizabeth Nabagerekka","A2","Painting",false)
addCollector("Elizabeth Nabagerekka","A3","Pencil",true)
addCollector("Shivan Ninsiima","A3","Painting",false)

console.log(collectorList);



//Computing Correlation
function tableFor(collector, collectorList) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < collectorList.length; i++) {
      let entry = collectorList[i], index = 0;
      if (entry.Collector.includes(collector)) index += 1;
      if (entry.Agent) index += 2;
      table[index] += 1;
 }
    return table;
  }
 console.log(tableFor("Harriet Kabura", collectorList));

