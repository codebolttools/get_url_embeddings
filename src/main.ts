import axios from 'axios';
import { ToolCore } from '@codebolt/toolcore';

async function getWebUrl(url: string): Promise<string> {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch URL: ${(error as Error).message}`);
    }
}

async function run(): Promise<void> {
    const url = ToolCore.getInput('url');

    if (!url) {
        throw new Error("URL is required in the configuration file");
    }

    try {
        console.log(`Fetching content from: ${url}`);
        const result = await getWebUrl(url);
        ToolCore.setOutput('content', result);
        console.log("Content fetched successfully.");
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
}

run();