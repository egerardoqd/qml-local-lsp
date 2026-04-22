import { workspace, ExtensionContext } from 'vscode';
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
    const serverPath = "/usr/bin/qml-language-server";

    const serverOptions: ServerOptions = {
        command: serverPath,
        args: [],
        options: { shell: true }
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'qml' }],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher('**/*.qml')
        }
    };

    client = new LanguageClient(
        'qmlLocalLsp',
        'Local QML Language Server',
        serverOptions,
        clientOptions
    );

    client.start();
    console.log('QML Language Server is now active.');
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}