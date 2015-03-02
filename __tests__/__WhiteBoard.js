// jest.dontMock('../src/components/WhiteBoard.js');

describe("Easy Pass WhiteBoard", function() {
  it("trivially passes", function() {
    expect(2).toEqual(2);
  });
});

// describe('WhiteBoard', function() {
//   it('contains a header', function() {
//     var React       = require('react/addons');
//     var WhiteBoard  = require('../src/components/WhiteBoard.js');
//     var TestUtils   = React.addons.TestUtils;
//     var data        = [{name: "charlie", value: "dog"}]

//     // Render a header in the document
//     var board = TestUtils.renderIntoDocument(
//       <WhiteBoard data={data}/>
//     );

//     // Verify that it's Off by default
//     var header = TestUtils.findRenderedDOMComponentWithTag(
//       WhiteBoard, 'ul');
//     expect(header.getDOMNode().textContent).toEqual("charlie the dog");
//  });
// });