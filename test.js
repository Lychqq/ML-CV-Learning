try {
    var fileData = new ActiveXObject("Scripting.FileSystemObject").OpenTextFile("c:\\Users\\Lenovo\\Desktop\\ML-CV-Learning\\references.js", 1).ReadAll();
    eval("var window = {}; var document = {}; " + fileData);
    WScript.Echo("Syntax OK");
} catch(e) {
    WScript.Echo("Error: " + e.message);
}
