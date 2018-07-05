export function getGridData(data=[],count) {
  var outPut=[]
  var maxLength = Math.ceil(data.length /count)
  for (var i = 0; i < maxLength; i++) {
    var itemData=[]
    for (var j = 0; j < count; j++){
      itemData.push(data[i*count+j])
    }
    outPut.push({"data":itemData})
  }
  return outPut
}
