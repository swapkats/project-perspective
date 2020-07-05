export default `
type Map {
    root: String
    nodes: [NODE] @relation(name: "HAS_NODE", direction: "OUT")
}
type NODE {
    text: String
    nodes: [NODE] @relation(name: "HAS_NODE", direction: "OUT")
}
`;
