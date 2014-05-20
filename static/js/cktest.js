function preview(){
    var h=document.getElementById("test").contentDocument.getElementsByTagName('html')[0];
    var b=CKEDITOR.instances.editor1.document.getDocumentElement().getHtml();
    h.innerHTML = b;
    document.getElementById("editor2").innerHTML = b;
}