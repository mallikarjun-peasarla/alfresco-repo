//    document variables is a root object that is available when script is executed against a document
var contentType = "whitepaper";
var contentName = "wp-";
var timestamp = new Date().getTime();
var extension = document.name.substr(document.name.lastIndexOf('.') + 1);

document.specializeType("sc:" + contentType);       // <type name="sc:whitepaper">
document.addAspect("sc:webable");                   // <aspect name="sc:webable">

document.properties["cm:name"] = contentName + " (" + timestamp + ")." + extension;
document.properties["sc:isActive"] = true;
document.properties["sc:published"] = new Date("07/31/2016");
document.save();