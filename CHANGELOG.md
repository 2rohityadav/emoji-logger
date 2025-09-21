# Change Log

All notable changes to the "emoji-logger" extension will be documented in this file.

## [1.0.0] - 2024-01-XX

### Added

- Initial release of Emoji Logger extension
- 30+ console log snippets with emojis
- Support for JavaScript, TypeScript, JSX, and TSX files
- Auto-completion for console snippets
- Interactive help panel with keyboard shortcut (Ctrl+Shift+E / Cmd+Shift+E)
- Configuration options for auto-completion and welcome message
- Multiline console output support with styled boxes
- Comprehensive documentation and README

### Features

- Basic console types (log, error, warning, success, info, debug)
- Server/application console types (startup, app info, file operations, proxy/API, cache, compression, performance)
- Documentation/help console types (usage, options, configuration, host app)
- Multiline console types (error boxes, warning boxes, styled logs)
- Complex console types (process info, server status, instructions, error with usage/options, worker status, shutdown)

### Snippets Included

- `cl` - Basic console.log
- `ce` - Console error with ❌
- `cw` - Console warning with ⚠️
- `cs` - Console success with ✅
- `ci` - Console info with ℹ️
- `cd` - Console debug with 🐛
- `cr` - Console rocket (startup)
- `ct` - Console target (app info)
- `cf` - Console folder (file info)
- `cp` - Console refresh (proxy/API)
- `cc` - Console floppy (cache)
- `cz` - Console compress (gzip)
- `clight` - Console lightning (performance)
- `cbook` - Console book (usage/docs)
- `cclip` - Console clipboard (available options)
- `cwrench` - Console wrench (configuration)
- `chouse` - Console house (host app)
- `cebox` - Console error box (multiline)
- `cwbox` - Console warning box (multiline)
- `cwlog` - Console warning log (styled)
- `cproc` - Console process info
- `cserv` - Console server status
- `cinstr` - Console instructions
- `ceusage` - Console error with usage
- `ceopt` - Console error with options
- `cwork` - Console worker status
- `cdeath` - Console worker death
- `cshut` - Console shutdown

### Technical Details

- Built with TypeScript
- VS Code Extension API v1.74.0+
- Node.js v16+ support
- ESLint configuration for code quality
- Comprehensive test setup
- Development and build scripts
