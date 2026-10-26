const heading = React.createElement(
  "h1",
  {id:"heading"},
  "Hello world from Charith and Akhila",
);

const parent=React.createElement(
  "div",
  {id:"parent"},
  [React.createElement(
    "div",
    {id:"child"},
    [
      React.createElement("h1",{},"Hello there this is 1st H1 tag of child 1"),
      React.createElement("h1",{},"Hello there this is 2nd H1 tag of child 2")
    ]
    
  ),
  React.createElement(
    "div",
    {id:"child2"},
    [
      React.createElement("h1",{},"Hello there this is 1st H1 tag of child 2"),
      React.createElement("h1",{},"Hello there this is 2nd H1 tag of child 2")
    ]
  )
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);