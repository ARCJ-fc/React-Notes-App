jest.dontMock("../src/components/CommentBox.js");

describe("CommentBox", function(){
    
    var React       = require("react/addons");
    var CommentBox  = require("../src/components/CommentBox.js");
    var TestUtils   = React.addons.TestUtils;
    
    it("should render to the page", function(){
        
        var comBox = TestUtils.renderIntoDocument(
            <CommentBox />
        );
            
        var form = TestUtils.findRenderedDOMComponentWithTag(comBox, "form");
        
        var text = TestUtils.findRenderedDOMComponentWithClass(comBox, "commentBox");
        
    });
    
    it("should have an initial state", function() {
        var button = TestUtils.findRenderedDOMComponentWithClass(comBox, "commentButton");
        
        console.log(button.getDOMNode().class)
        TestUtils.Simulate.onChange(button.getDOMNode());
    })
});