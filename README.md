# QML Local LSP

A Visual Studio Code extension that provides local Language Server Protocol (LSP) support for QML (Qt Modeling Language) files by wrapping the `qml-language-server` binary.

## Features

- **Syntax Highlighting**: Enhanced syntax highlighting for QML files
- **Error Detection**: Real-time error checking and diagnostics
- **Code Completion**: Intelligent code completion suggestions
- **Go to Definition**: Navigate to symbol definitions
- **Hover Information**: Display documentation and type information on hover
- **Local Server**: Uses a locally installed QML language server for better performance and privacy

## Requirements

- **Visual Studio Code**: Version 1.116.0 or later
- **QML Language Server**: The `qml-language-server` binary must be installed on your system
  - On Arch Linux: Install via `pacman -S qml-language-server`
  - On other distributions: Check your package manager or build from source

## Installation

### Extension Installation

1. Open Visual Studio Code
2. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac)
3. Search for "qml-local-lsp"
4. Click Install

### Manual Installation

1. Download the `.vsix` file from the [releases page](https://github.com/egerardoqd/qml-local-lsp/releases)
2. In VS Code, open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac)
3. Run `Extensions: Install from VSIX...`
4. Select the downloaded `.vsix` file

## Usage

Once installed, the extension will automatically activate when you open QML files (`.qml` extension). The language server will provide:

- Syntax highlighting
- Error and warning diagnostics
- Code completion
- Hover information
- Go to definition
- Find references

## Configuration

The extension currently uses a hardcoded path for the QML language server binary:

```
/usr/bin/qml-language-server
```

### Custom Server Path

To use a different path for the language server binary, you can modify the extension source code:

1. Open `src/extension.ts`
2. Update the `serverPath` variable on line 12
3. Recompile the extension: `npm run compile`
4. Reload VS Code window

Future versions may include configuration options for custom server paths.

## Development

### Prerequisites

- Node.js (version 16 or later)
- npm
- TypeScript

### Building from Source

1. Clone the repository:
   ```bash
   git clone https://github.com/egerardoqd/qml-local-lsp.git
   cd qml-local-lsp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile the extension:
   ```bash
   npm run compile
   ```

4. Run tests:
   ```bash
   npm test
   ```

### Running in Development

1. Open the project in VS Code
2. Press `F5` to launch the Extension Development Host
3. Test the extension with QML files

### Packaging

To create a `.vsix` package:

```bash
npm run vscode:prepublish
```

## Troubleshooting

### Server Not Found

If you see errors about the language server not being found:

1. Verify that `qml-language-server` is installed:
   ```bash
   which qml-language-server
   ```

2. Check that the path in `src/extension.ts` matches your installation

3. Ensure the binary has execute permissions

### Extension Not Activating

The extension activates automatically when opening QML files. If it's not working:

1. Check the VS Code output panel for errors (View → Output → Log (Window))
2. Verify the file has a `.qml` extension
3. Try reloading the VS Code window (`Ctrl+Shift+P` → "Developer: Reload Window")

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

## Acknowledgments

- Built using the [VS Code Language Server Protocol](https://microsoft.github.io/language-server-protocol/)
- Uses the [qml-language-server](https://github.com/cushycush/qml-language-server) from cushycush.