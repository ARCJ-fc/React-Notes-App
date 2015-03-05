jest.dontMock("../src/components/WhiteBoardApp.js");

describe("WhiteBoardApp", function(){
    
        var React         = require("react/addons");
        var WhiteBoardApp = require("../src/components/WhiteBoardApp.js");
        var WhiteBoard    = require("../src/components/WhiteBoard.js");
    
        var TestUtils = React.addons.TestUtils;
    
    it("should render into the page", function(){
        
        // It should successfully render onto the page
        var boardApp = TestUtils.renderIntoDocument(
            <WhiteBoardApp />
        );
        
        // It should render a <div> root node with the class commentFactory.
        var board = TestUtils.findRenderedDOMComponentWithClass(boardApp, "whiteBoardApp");
        
        // It should render an instance of WhiteBoard
        var crackerboard = TestUtils.findRenderedComponentWithType(boardApp, WhiteBoard);

    });
});

