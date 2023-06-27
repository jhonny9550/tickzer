import { Account, Client as Appwrite } from 'appwrite';

const server = {
	endpoint: import.meta.env.APPWRITE_ENDPOINT,
	project: import.meta.env.APPWRITE_PROJECT_ID
};

const client = new Appwrite();
const account = new Account(client);
client.setEndpoint(server.endpoint).setProject(server.project);
const sdk = { account };

export { sdk, server };
