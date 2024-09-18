"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const toolcore_1 = require("@codebolt/toolcore");
async function getWebUrl(url) {
    try {
        const response = await axios_1.default.get(url);
        return response.data;
    }
    catch (error) {
        throw new Error(`Failed to fetch URL: ${error.message}`);
    }
}
async function run() {
    const url = toolcore_1.ToolCore.getInput('url');
    if (!url) {
        throw new Error("URL is required in the configuration file");
    }
    try {
        console.log(`Fetching content from: ${url}`);
        const result = await getWebUrl(url);
        toolcore_1.ToolCore.setOutput('content', result);
        console.log("Content fetched successfully.");
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
run();
