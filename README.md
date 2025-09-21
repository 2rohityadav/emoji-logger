# Emoji Logger - VSCode Extension

Enhanced console logging with emojis and structured output for JavaScript/TypeScript development.

## 🚀 Features

- **30+ Console Log Snippets** - Quick access to common console logging patterns
- **Emoji Integration** - Beautiful emojis for different log types (errors, warnings, success, etc.)
- **Multiline Support** - Complex formatted console outputs with boxes and styling
- **Auto-completion** - Intelligent snippet suggestions as you type
- **Keyboard Shortcuts** - Quick access to help with `Ctrl+Shift+E` (or `Cmd+Shift+E` on Mac)
- **Customizable** - Enable/disable features through VS Code settings

## 📦 Installation

### From VS Code Marketplace

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Emoji Logger"
4. Click Install

### From Source

1. Clone this repository
2. Run `pnpm install`
3. Press F5 to run the extension in a new Extension Development Host window

## 🎯 Quick Start

1. Open any JavaScript or TypeScript file
2. Type any snippet prefix (e.g., `cl`, `ce`, `cw`)
3. Press `Tab` to expand the snippet
4. Fill in the placeholders and press `Tab` to navigate between them

## 📝 Available Snippets

### Basic Console Types

| Prefix | Description | Output |
|--------|-------------|--------|
| `cl` | Basic console.log | `console.log('message');` |
| `ce` | Console error with ❌ | `console.error('❌ Error message');` |
| `cw` | Console warning with ⚠️ | `console.warn('⚠️ Warning message');` |
| `cs` | Console success with ✅ | `console.log('✅ Success message');` |
| `ci` | Console info with ℹ️ | `console.log('ℹ️ Info message');` |
| `cd` | Console debug with 🐛 | `console.log('🐛 Debug message');` |

### Server/Application Console Types

| Prefix | Description | Output |
|--------|-------------|--------|
| `cr` | Console rocket (startup) | `console.log('🚀 Startup message');` |
| `ct` | Console target (app info) | `console.log('🎯 App info message');` |
| `cf` | Console folder (file info) | `console.log('📁 File/folder message');` |
| `cp` | Console refresh (proxy/API) | `console.log('🔄 Proxy/API message');` |
| `cc` | Console floppy (cache) | `console.log('💾 Cache message');` |
| `cz` | Console compress (gzip) | `console.log('🗜️ Compression message');` |
| `clight` | Console lightning (performance) | `console.log('⚡ Performance message');` |

### Documentation/Help Console Types

| Prefix | Description | Output |
|--------|-------------|--------|
| `cbook` | Console book (usage/docs) | `console.log('📖 Usage/Documentation message');` |
| `cclip` | Console clipboard (available options) | `console.log('📋 Available options message');` |
| `cwrench` | Console wrench (configuration) | `console.log('🔧 Configuration message');` |
| `chouse` | Console house (host app) | `console.log('🏠 Host app message');` |

### Multiline Console Types

| Prefix | Description | Output |
|--------|-------------|--------|
| `cebox` | Console error box (multiline) | Multiline error box with borders |
| `cwbox` | Console warning box (multiline) | Multiline warning box with borders |
| `cwlog` | Console warning log (styled) | Styled warning with yellow bold text |

### Complex Console Types

| Prefix | Description | Output |
|--------|-------------|--------|
| `cproc` | Console process info | App name, ID, process info, and port |
| `cserv` | Console server status | Static files, proxy, cache, compression info |
| `cinstr` | Console instructions | Setup instructions with port and commands |
| `ceusage` | Console error with usage | Error + usage + options + example |
| `ceopt` | Console error with options | Error + available options + host + micro-frontends |
| `cwork` | Console worker status | Master process starting workers |
| `cdeath` | Console worker death | Worker died and restarting |
| `cshut` | Console shutdown | Graceful shutdown message |

## ⚙️ Configuration

The extension provides several configuration options accessible through VS Code settings:

- `emoji-logger.enableAutoCompletion` - Enable/disable auto-completion for snippets (default: true)
- `emoji-logger.showWelcomeMessage` - Show welcome message on first activation (default: true)

## 🎹 Keyboard Shortcuts

- `Ctrl+Shift+E` (or `Cmd+Shift+E` on Mac) - Open Emoji Logger Help

## 💡 Usage Tips

1. **Tab Navigation**: Use `Tab` to move between placeholders in snippets
2. **Reverse Navigation**: Use `Shift+Tab` to go back to previous placeholders
3. **Post-Edit**: You can edit the snippet after it's inserted
4. **File Support**: Works in JavaScript, TypeScript, JSX, and TSX files
5. **Auto-completion**: Type 'c' to see available console snippets

## 🔧 Development

### Prerequisites

- Node.js (v16 or higher)
- pnpm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/2rohityadav/emoji-logger.git
cd vscode-extension

# Install dependencies
pnpm install

# Compile the extension
pnpm run compile

# Run in development mode
pnpm run watch
```

### Testing

```bash
# Run tests
pnpm test

# Lint code
pnpm run lint
```

### Building

```bash
# Compile TypeScript
pnpm run compile

# Package extension
npx vsce package
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues

If you find a bug or have a feature request, please open an issue on [GitHub](https://github.com/emoji-logger/vscode-extension/issues).

## 📞 Support

- GitHub Issues: [emoji-logger/vscode-extension/issues](https://github.com/emoji-logger/vscode-extension/issues)
- Documentation: [GitHub Wiki](https://github.com/emoji-logger/vscode-extension/wiki)

## 🙏 Acknowledgments

- Inspired by the need for better console logging in JavaScript/TypeScript development
- Thanks to the VS Code team for the excellent extension API
- Community feedback and contributions

---

**Happy Logging! 🚀**
