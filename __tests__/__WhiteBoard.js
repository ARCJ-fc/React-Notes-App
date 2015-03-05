jest.dontMock("../src/components/WhiteBoard.js");

describe("WhiteBoard", function(){
    
    var React        = require("react/addons");
    var WhiteBoard   = require("../src/components/WhiteBoard.js");
    var CommentBox   = require("../src/components/CommentBox.js");
    var TestUtils    = React.addons.TestUtils;
    
    it("should render into the page", function(){
        
        var data = [{text: "hello"}, {text: "goodbye"}, {text: "toodle-pip"}];
        
        // It should successfully render onto the page
        var whiteboard = TestUtils.renderIntoDocument(
            <WhiteBoard data={data} />
        );
        
        // It should render a <div> root node with the class commentFactory.
         var divi = TestUtils.findRenderedDOMComponentWithClass(whiteboard, "commentFactory");
        
        // It should render an instance of CommentBox for each data element
        var comboxes = TestUtils.scryRenderedComponentsWithType(whiteboard, CommentBox);
        
        // The number of divs should equal the number of data elements
        expect(comboxes.length).toEqual(data.length);
    });
});