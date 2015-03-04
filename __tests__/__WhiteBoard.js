jest.dontMock("../src/components/WhiteBoard.js");

describe("WhiteBoard", function() {
  it("contains an ordered list", function() {
    var React       = require("react/addons");
    var WhiteBoard  = require("../src/components/WhiteBoard.js");
    var TestUtils   = React.addons.TestUtils;
    var data        = [{name: "charlie", value: "dog"}];

    // Render our whiteboard in the document
    var board = TestUtils.renderIntoDocument(
      <WhiteBoard data={data}/>
    );

    // Verify that it contains the data that we want
    var header = TestUtils.findRenderedDOMComponentWithTag(
      board, "ul");

    expect(header.getDOMNode().textContent).toEqual(data[0].name + " the " + data[0].value);
 });
});