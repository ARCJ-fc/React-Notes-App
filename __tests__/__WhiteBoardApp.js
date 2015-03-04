jest.dontMock("../src/components/WhiteBoardApp.js");

describe("WhiteBoardApp", function(){
    it("should render into the page", function(){
        var React        = require("react/addons");
        var WhiteBoardApp   = require("../src/components/WhiteBoardApp.js");

        var TestUtils = React.addons.TestUtils;
        var boardApp = TestUtils.renderIntoDocument(
            <WhiteBoardApp />
        );
        
        var header = TestUtils.findRenderedDOMComponentWithTag(boardApp, "div");

    });
});

