jest.dontMock("../src/components/CommentBox.js");

describe("CommentBox", function(){
   
    var CommentBox  = require("../src/components/CommentBox.js");
    var React       = require("react/addons");
    var TestUtils   = React.addons.TestUtils;
    
    it("should render on the page", function(){
        
        var data = {text: "dog", votes: '1'};
        
        // It should successfully render onto the page
        var comment = TestUtils.renderIntoDocument(
            <CommentBox data={data}/>
        );
            
        // It should render a <div>
        var commentwrapper = TestUtils.findRenderedDOMComponentWithTag(comment, "div");
        
        // It should render two <p>s
        var commenttext = TestUtils.scryRenderedDOMComponentsWithTag(comment, "p");
        
        // It should render two <button>s
        var buttoner = TestUtils.scryRenderedDOMComponentsWithTag(comment, "button");
        
        // The first <p> should contain the text you give it
        expect(commenttext[0].getDOMNode().textContent).toEqual('' + data.text);

        // The second <p> should display the number of votes you give it
        expect(commenttext[1].getDOMNode().textContent).toEqual('' + data.votes);
        
        // On clicking the upvote button, the number of votes is incremented
        TestUtils.Simulate.click(comment.refs.upvote.getDOMNode());
        expect(commenttext[1].getDOMNode().textContent).toEqual('' + data.votes+1);

    });
});



