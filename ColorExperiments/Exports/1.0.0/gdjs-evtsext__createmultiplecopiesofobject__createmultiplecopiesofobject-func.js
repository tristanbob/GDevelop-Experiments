gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject = {};
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.stopDoWhile2 = false;

gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects1= [];
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2= [];
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects3= [];
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects4= [];

gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.conditionTrue_0 = {val:false};
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.mapOfGDgdjs_46evtsExt_95_95CreateMultipleCopiesOfObject_95_95CreateMultipleCopiesOfObject_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects1});gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.mapOfGDgdjs_46evtsExt_95_95CreateMultipleCopiesOfObject_95_95CreateMultipleCopiesOfObject_46GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2});gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("y")) > (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NumberOfRows")) || 0 : 0);
}if (gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("y").setNumber(-(1));
}{runtimeScene.getVariables().get("x").setNumber(-(1));
}}

}


};gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("x")) > (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NumberOfColumns")) || 0 : 0);
}if (gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("x").setNumber(1);
}{runtimeScene.getVariables().get("y").add(1);
}
{ //Subevents
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.mapOfGDgdjs_46evtsExt_95_95CreateMultipleCopiesOfObject_95_95CreateMultipleCopiesOfObject_46GDObjectObjects1Objects, 0, 0, "");
}{runtimeScene.getVariables().get("ObjectWidth").setNumber((( gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects1[0].getWidth()));
}{runtimeScene.getVariables().get("ObjectHeight").setNumber((( gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects1[0].getHeight()));
}{for(var i = 0, len = gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


{
{runtimeScene.getVariables().get("x").setNumber(1);
}{runtimeScene.getVariables().get("y").setNumber(1);
}{runtimeScene.getVariables().get("CreationID").setNumber(1);
}}

}


{



}


{


gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.stopDoWhile2 = false;
do {gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2.length = 0;

gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition0IsTrue_0.val = false;
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("x")) > 0;
}if ( gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("y")) > 0;
}}
if (gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.condition1IsTrue_0.val) {
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.mapOfGDgdjs_46evtsExt_95_95CreateMultipleCopiesOfObject_95_95CreateMultipleCopiesOfObject_46GDObjectObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StartingPositionX")) || 0 : 0) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("x")) - 1) * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ObjectWidth")) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ColumnSpacing")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StartingPositionY")) || 0 : 0) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("y")) - 1) * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ObjectHeight")) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RowSpacing")) || 0 : 0)), "");
}{for(var i = 0, len = gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2[i].getVariables().get("RowID")).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("y")));
}
}{for(var i = 0, len = gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2[i].getVariables().get("ColumnID")).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("x")));
}
}{for(var i = 0, len = gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2[i].getVariables().get("CreationID")).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CreationID")));
}
}{for(var i = 0, len = gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2[i].getVariables().get("BatchID")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("BatchID") : ""));
}
}{runtimeScene.getVariables().get("x").add(1);
}{runtimeScene.getVariables().get("CreationID").add(1);
}
{ //Subevents: 
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.stopDoWhile2 = true; 
} while ( !gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.stopDoWhile2 );

}


};

gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.func = function(runtimeScene, Object, NumberOfRows, NumberOfColumns, StartingPositionX, StartingPositionY, RowSpacing, ColumnSpacing, BatchID, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "NumberOfRows") return NumberOfRows;
if (argName === "NumberOfColumns") return NumberOfColumns;
if (argName === "StartingPositionX") return StartingPositionX;
if (argName === "StartingPositionY") return StartingPositionY;
if (argName === "RowSpacing") return RowSpacing;
if (argName === "ColumnSpacing") return ColumnSpacing;
if (argName === "BatchID") return BatchID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects1.length = 0;
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects2.length = 0;
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects3.length = 0;
gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.GDObjectObjects4.length = 0;

gdjs.evtsExt__CreateMultipleCopiesOfObject__CreateMultipleCopiesOfObject.eventsList2(runtimeScene, eventsFunctionContext);
return;
}

