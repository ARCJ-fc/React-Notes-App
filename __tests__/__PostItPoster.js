//jest.dontMock("../src/components/PostItPoster.js");
//
//describe("PostItPoster", function(){
//    
//    var React       = require("react/addons");
//    var PostItPoster  = require("../src/components/PostItPoster.js");
//    var TestUtils   = React.addons.TestUtils;
//    
//    it("should render to the page", function(){
//        
//        var comBox = TestUtils.renderIntoDocument(
//            <PostItPoster />
//        );
//            
//        var form = TestUtils.findRenderedDOMComponentWithTag(comBox, "form");
//        
//        var text = TestUtils.findRenderedDOMComponentWithClass(comBox, "PostItPoster");
//        
//    });
//    
//    it("should have an initial state", function() {
//        var button = TestUtils.findRenderedDOMComponentWithClass(comBox, "commentButton");
//        
//        console.log(button.getDOMNode().class)
//        TestUtils.Simulate.onChange(button.getDOMNode());
//    })
//});
