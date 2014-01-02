/**
 * Created by oleg on 02/01/14.
 */

function highlightWord(root,word, newClass) {

    var highlightWords = function(n) {
        for (var i; (i=n.nodeValue.indexOf(word,i)) > -1; n=after){
            var after = n.splitText(i+word.length);
            var highlighted = n.splitText(i);
            var span = document.createElement('span');
            span.className = newClass;
            span.appendChild(highlighted);
            after.parentNode.insertBefore(span,after);
        }
    };

    var textNodesUnder = function(root) {
        var walk=document.createTreeWalker(root, NodeFilter.SHOW_TEXT,
            null, false);
        var text=[], node;
        while(node=walk.nextNode()) text.push(node);
        return text;
    };

    textNodesUnder(root).forEach(highlightWords);
}

function removeHighlights(root, className) {
    [].forEach.call(root.querySelectorAll('span.' + className),
        function(el){
          el.parentNode.replaceChild(el.firstChild, el);
    });

}