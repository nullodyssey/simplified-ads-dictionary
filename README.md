# Simplified Ads Dictionary

A bilingual (English/French) Google Ads dictionary documentation site that provides a searchable, user-friendly reference for advertising terminology.

## Description

The Simplified Ads Dictionary is a comprehensive documentation site designed to help marketers, advertisers, and digital professionals understand Google Ads terminology across both English and French languages. Built with Astro and Starlight, this project transforms a CSV data source of advertising terms into an accessible, searchable web interface.

### Features

- **Bilingual Support**: Complete English and French localization
- **Searchable Interface**: Powered by Starlight's built-in search functionality
- **Structured Content**: Organized advertising terms with categories, definitions, and examples
- **Modern Design**: Enhanced styling with starlight-theme-obsidian
- **Responsive Layout**: Optimized for desktop and mobile viewing
- **Static Site Generation**: Fast loading times with Astro's optimized builds

## Project Structure

```
simplified-ads-dictionary/
├── public/                          # Static assets (favicon, etc.)
├── src/
│   ├── assets/                      # Images and media files
│   ├── content/
│   │   └── docs/                    # Documentation content
│   │       ├── en/                  # English content
│   │       └── fr/                  # French content
│   └── content.config.ts            # Content collections configuration
├── astro.config.mjs                 # Astro configuration with Starlight integration
├── package.json                     # Dependencies and scripts
└── tsconfig.json                    # TypeScript configuration
```

### Key Architecture Components

- **Framework**: Astro + Starlight documentation framework
- **Theme**: `starlight-theme-obsidian` for enhanced styling
- **Internationalization**: Configured for English (default) and French locales
- **Content Management**: Markdown/MDX files with locale-specific organization
- **Data Source**: Structured CSV containing advertising terminology

## Setup

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nullodyssey/simplified-ads-dictionary.git
cd simplified-ads-dictionary
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Development Commands

| Command           | Description                              |
|-------------------|------------------------------------------|
| `bun run dev`     | Start development server at localhost:4321 |
| `bun run build`   | Build production site to ./dist/        |
| `bun run preview` | Preview production build locally         |
| `bun run astro`   | Run Astro CLI commands                   |

### Configuration

- **Site Configuration**: Modify `astro.config.mjs` for site settings, sidebar navigation, and social links
- **Content Collections**: Configure content schema in `src/content.config.ts`
- **Styling**: Customize theme settings and styles within the Starlight configuration

## Contribute

We welcome contributions to improve the Simplified Ads Dictionary! Here's how you can help:

### Contributing Guidelines

1. **Fork the repository** and create your feature branch from `main`
2. **Make your changes** following the existing code style and conventions
3. **Test your changes** by running the development server and verifying functionality
4. **Update documentation** if your changes affect the user experience or setup process
5. **Submit a pull request** with a clear description of your improvements

### Types of Contributions

- **Content**: Add new advertising terms, improve definitions, or enhance translations
- **Features**: Implement new functionality or improve existing features
- **Bug Fixes**: Identify and resolve issues with the site or documentation
- **Documentation**: Improve setup instructions, add examples, or clarify usage
- **Translations**: Enhance French translations or add support for additional languages

### Development Best Practices

- Follow the existing file structure and naming conventions
- Ensure bilingual content is properly synchronized
- Test changes across both English and French versions
- Maintain responsive design principles
- Write clear commit messages

## Contributors

This project is maintained by the community. We appreciate all contributions, whether they're code improvements, content additions, or bug reports.

Special thanks to all contributors who have helped make this resource valuable for the advertising community.

## License

This project is open source and available under the [MIT License](LICENSE).