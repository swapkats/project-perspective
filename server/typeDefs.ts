export default `
type Map {
    root: String
    nodes: [Node] @relation(name: "IS", direction: "OUT")
}
type Node {
    text: String
    nodes: [Node] @relation(name: "IS", direction: "OUT")
}
`;
