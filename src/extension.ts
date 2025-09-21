import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('🚀 Emoji Logger extension is now active!');

    let helpCommand = vscode.commands.registerCommand('emoji-logger.showHelp', () => {
        const panel = vscode.window.createWebviewPanel(
            'emojiLoggerHelp',
            'Emoji Logger Help',
            vscode.ViewColumn.Two,
            {
                enableScripts: true,
                retainContextWhenHidden: true
            }
        );

        panel.webview.html = getHelpContent();
    });

    context.subscriptions.push(helpCommand);

    const config = vscode.workspace.getConfiguration('emoji-logger');
    if (config.get('showWelcomeMessage', true)) {
        vscode.window.showInformationMessage(
            'Welcome to Emoji Logger! Type "cl", "ce", "cw" and more for enhanced console logging.',
            'Show Help',
            'Don\'t show again'
        ).then(selection => {
            if (selection === 'Show Help') {
                vscode.commands.executeCommand('emoji-logger.showHelp');
            } else if (selection === 'Don\'t show again') {
                config.update('showWelcomeMessage', false, vscode.ConfigurationTarget.Global);
            }
        });
    }

    const completionProvider = vscode.languages.registerCompletionItemProvider(
        ['javascript', 'typescript', 'javascriptreact', 'typescriptreact'],
        {
            provideCompletionItems(_document: vscode.TextDocument, _position: vscode.Position) {
                const config = vscode.workspace.getConfiguration('emoji-logger');
                if (!config.get('enableAutoCompletion', true)) {
                    return [];
                }

                const completionItems: vscode.CompletionItem[] = [];
            
                const snippets = [
                    { label: 'cl', description: 'Basic console.log', insertText: "console.log('${1:message}');" },
                    { label: 'ce', description: 'Console error with ❌', insertText: "console.error('❌ ${1:Error message}');" },
                    { label: 'cw', description: 'Console warning with ⚠️', insertText: "console.warn('⚠️ ${1:Warning message}');" },
                    { label: 'cs', description: 'Console success with ✅', insertText: "console.log('✅ ${1:Success message}');" },
                    { label: 'ci', description: 'Console info with ℹ️', insertText: "console.log('ℹ️ ${1:Info message}');" },
                    { label: 'cd', description: 'Console debug with 🐛', insertText: "console.log('🐛 ${1:Debug message}');" },
                    { label: 'cr', description: 'Console rocket (startup)', insertText: "console.log('🚀 ${1:Startup message}');" },
                    { label: 'ct', description: 'Console target (app info)', insertText: "console.log('🎯 ${1:App info message}');" }
                ];

                snippets.forEach(snippet => {
                    const item = new vscode.CompletionItem(snippet.label, vscode.CompletionItemKind.Snippet);
                    item.detail = snippet.description;
                    item.insertText = new vscode.SnippetString(snippet.insertText);
                    item.sortText = snippet.label;
                    completionItems.push(item);
                });

                return completionItems;
            }
        },
        'c' // Trigger completion when typing 'c'
    );

    context.subscriptions.push(completionProvider);
}

function getHelpContent(): string {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Emoji Logger Help</title>
        <style>
            body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                padding: 20px; 
                background: var(--vscode-editor-background);
                color: var(--vscode-editor-foreground);
                line-height: 1.6;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
            }
            h1 { 
                color: var(--vscode-textLink-foreground);
                border-bottom: 2px solid var(--vscode-textLink-foreground);
                padding-bottom: 10px;
            }
            h2 { 
                color: var(--vscode-textPreformat-foreground);
                margin-top: 30px;
                margin-bottom: 15px;
            }
            .snippet { 
                margin: 15px 0; 
                padding: 15px; 
                background: var(--vscode-editor-inactiveSelectionBackground);
                border-radius: 8px;
                border-left: 4px solid var(--vscode-textLink-foreground);
                transition: all 0.2s ease;
            }
            .snippet:hover {
                background: var(--vscode-editor-selectionBackground);
                transform: translateX(5px);
            }
            .prefix { 
                font-weight: bold; 
                color: var(--vscode-textLink-foreground);
                font-size: 1.1em;
                display: inline-block;
                min-width: 60px;
            }
            .description { 
                color: var(--vscode-descriptionForeground);
                margin-left: 10px;
            }
            .code {
                background: var(--vscode-textCodeBlock-background);
                padding: 10px;
                border-radius: 4px;
                font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
                margin: 10px 0;
                border: 1px solid var(--vscode-panel-border);
                overflow-x: auto;
            }
            .usage-section {
                background: var(--vscode-editor-background);
                padding: 20px;
                border-radius: 8px;
                border: 1px solid var(--vscode-panel-border);
                margin: 20px 0;
            }
            .keyboard-shortcut {
                background: var(--vscode-keybindingLabel-background);
                color: var(--vscode-keybindingLabel-foreground);
                padding: 2px 6px;
                border-radius: 3px;
                font-family: monospace;
                font-size: 0.9em;
            }
            .category {
                margin: 30px 0;
            }
            .category h3 {
                color: var(--vscode-textPreformat-foreground);
                margin-bottom: 15px;
                padding-bottom: 5px;
                border-bottom: 1px solid var(--vscode-panel-border);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🎯 Emoji Logger - Enhanced Console Logging</h1>
            
            <div class="usage-section">
                <h2>🚀 How to Use</h2>
                <p>Type any prefix (like <span class="keyboard-shortcut">cl</span>) and press <span class="keyboard-shortcut">Tab</span> to expand the snippet!</p>
                <p>Use <span class="keyboard-shortcut">Ctrl+Shift+E</span> (or <span class="keyboard-shortcut">Cmd+Shift+E</span> on Mac) to open this help panel anytime.</p>
            </div>

            <div class="category">
                <h3>📝 Basic Console Types</h3>
                
                <div class="snippet">
                    <span class="prefix">cl</span>
                    <span class="description">Basic console.log</span>
                    <div class="code">console.log('message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">ce</span>
                    <span class="description">Console error with ❌</span>
                    <div class="code">console.error('❌ Error message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cw</span>
                    <span class="description">Console warning with ⚠️</span>
                    <div class="code">console.warn('⚠️ Warning message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cs</span>
                    <span class="description">Console success with ✅</span>
                    <div class="code">console.log('✅ Success message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">ci</span>
                    <span class="description">Console info with ℹ️</span>
                    <div class="code">console.log('ℹ️ Info message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cd</span>
                    <span class="description">Console debug with 🐛</span>
                    <div class="code">console.log('🐛 Debug message');</div>
                </div>
            </div>

            <div class="category">
                <h3>🖥️ Server/Application Console Types</h3>
                
                <div class="snippet">
                    <span class="prefix">cr</span>
                    <span class="description">Console rocket (startup)</span>
                    <div class="code">console.log('🚀 Startup message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">ct</span>
                    <span class="description">Console target (app info)</span>
                    <div class="code">console.log('🎯 App info message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cf</span>
                    <span class="description">Console folder (file info)</span>
                    <div class="code">console.log('📁 File/folder message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cp</span>
                    <span class="description">Console refresh (proxy/API)</span>
                    <div class="code">console.log('🔄 Proxy/API message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cc</span>
                    <span class="description">Console floppy (cache)</span>
                    <div class="code">console.log('💾 Cache message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cz</span>
                    <span class="description">Console compress (gzip)</span>
                    <div class="code">console.log('🗜️ Compression message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">clight</span>
                    <span class="description">Console lightning (performance)</span>
                    <div class="code">console.log('⚡ Performance message');</div>
                </div>
            </div>

            <div class="category">
                <h3>📚 Documentation/Help Console Types</h3>
                
                <div class="snippet">
                    <span class="prefix">cbook</span>
                    <span class="description">Console book (usage/docs)</span>
                    <div class="code">console.log('📖 Usage/Documentation message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cclip</span>
                    <span class="description">Console clipboard (available options)</span>
                    <div class="code">console.log('📋 Available options message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cwrench</span>
                    <span class="description">Console wrench (configuration)</span>
                    <div class="code">console.log('🔧 Configuration message');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">chouse</span>
                    <span class="description">Console house (host app)</span>
                    <div class="code">console.log('🏠 Host app message');</div>
                </div>
            </div>

            <div class="category">
                <h3>📦 Multiline Console Types</h3>
                
                <div class="snippet">
                    <span class="prefix">cebox</span>
                    <span class="description">Console error box (multiline)</span>
                    <div class="code">console.error('\\n');
console.error('╔════════════════════════════════════════════════════════════════╗');
console.error('║                 ERROR TITLE                        ║');
console.error('╚════════════════════════════════════════════════════════════════╝');
console.error('\\n❌ Error message');
console.error('\\nError details\\n');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cwbox</span>
                    <span class="description">Console warning box (multiline)</span>
                    <div class="code">console.warn('\\n');
console.warn('╔════════════════════════════════════════════════════════════════╗');
console.warn('║               WARNING TITLE                        ║');
console.warn('╚════════════════════════════════════════════════════════════════╝');
console.warn('\\n⚠️ Warning message');
console.warn('\\nWarning details\\n');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cwlog</span>
                    <span class="description">Console warning log (styled)</span>
                    <div class="code">console.warn('\\x1b[1m\\x1b[33m%s\\x1b[0m', '⚠️  WARNING: Warning message');</div>
                </div>
            </div>

            <div class="category">
                <h3>⚙️ Complex Console Types</h3>
                
                <div class="snippet">
                    <span class="prefix">cproc</span>
                    <span class="description">Console process info</span>
                    <div class="code">console.log('\\n🎯 App Name (App ID)');
console.log('🚀 Process Info listening on http://localhost:Port');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cserv</span>
                    <span class="description">Console server status</span>
                    <div class="code">console.log('📁 Serving static files from Static Directory');
console.log('🔄 Proxying API calls to http://localhost:Mock Server Port');
console.log('💾 File cache enabled (Cache Size files max)');
console.log('🗜️  Gzip compression enabled');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cinstr</span>
                    <span class="description">Console instructions</span>
                    <div class="code">console.log('\\n⚠️  Make sure the mock server is running on port Port');
console.log('   Run: cd Directory && Command');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">ceusage</span>
                    <span class="description">Console error with usage</span>
                    <div class="code">console.error('❌ Error: Error message');
console.log('📖 Usage: Usage command');
console.log('📋 Available options: Available options');
console.log('🔧 Example: Example command');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">ceopt</span>
                    <span class="description">Console error with options</span>
                    <div class="code">console.error('❌ Error: Error message');
console.log('📋 Available options: Available options');
console.log('🏠 Host app: Host app name');
console.log('🔧 Micro-frontends: Micro frontends list');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cwork</span>
                    <span class="description">Console worker status</span>
                    <div class="code">console.log('🚀 Master process Process ID starting Worker Count workers for App Name...');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cdeath</span>
                    <span class="description">Console worker death</span>
                    <div class="code">console.log('Worker Worker ID died. Restarting...');</div>
                </div>
                
                <div class="snippet">
                    <span class="prefix">cshut</span>
                    <span class="description">Console shutdown</span>
                    <div class="code">console.log('Process type received SIGTERM, shutting down gracefully...');</div>
                </div>
            </div>

            <div class="usage-section">
                <h2>💡 Tips</h2>
                <ul>
                    <li>Use <span class="keyboard-shortcut">Tab</span> to move between placeholders in snippets</li>
                    <li>Use <span class="keyboard-shortcut">Shift+Tab</span> to go back to previous placeholders</li>
                    <li>You can edit the snippet after it's inserted</li>
                    <li>The snippets work in both JavaScript and TypeScript files</li>
                    <li>Enable/disable auto-completion in VS Code settings under "Emoji Logger"</li>
                </ul>
            </div>
        </div>
    </body>
    </html>
    `;
}

export function deactivate() {
    console.log('👋 Emoji Logger extension deactivated');
}
