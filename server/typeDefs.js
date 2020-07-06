"use strict";
exports.__esModule = true;
exports["default"] = "\ntype Map {\n    root: String\n    nodes: [NODE] @relation(name: \"HAS_NODE\", direction: \"OUT\")\n}\ntype NODE {\n    text: String\n    nodes: [NODE] @relation(name: \"HAS_NODE\", direction: \"OUT\")\n}\n";
