jest.dontMock("../src/components/CommentBox.js");

describe("CommentBox", function(){
   
    var CommentBox  = require("../src/components/CommentBox.js");
    var React       = require("react/addons");
    var TestUtils   = React.addons.TestUtils;
    
    it("should render on the page", function(){
        
        var data = {text: "dog"};
        
        // It should successfully render onto the page
        var comment = TestUtils.renderIntoDocument(
            <CommentBox data={data}/>
        );
            
        // It should render a <div>.
        var commentwrapper = TestUtils.findRenderedDOMComponentWithTag(comment, "div");
        
        // It should render a <p>.
        var commenttext = TestUtils.findRenderedDOMComponentWithTag(comment, "p");
        
        // It should render a <button>.
        var buttoner = TestUtils.findRenderedDOMComponentWithTag(comment, "button");
        
        // It should contain the text you give it
        expect(commenttext.getDOMNode().textContent).toEqual(data.text);

    });
});



