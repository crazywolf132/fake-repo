# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

**IMPORTANT**: This is a fake repository designed specifically for testing git wrapper applications. It intentionally contains:
- Fake commits with various patterns
- Fake branches simulating real development workflows
- Fake changes to test file operations
- Fake tags (both annotated and lightweight)
- Intentional merge conflicts
- Complex git history scenarios

The repository mimics a real-life codebase to allow comprehensive manual testing of git-related tools and features.

## Common Commands

### Running the Application
```bash
npm install          # Install dependencies
npm start           # Run the application (starts on port 3000)
npm run dev         # Run with auto-reload for development
```

### Testing
```bash
npm test            # Run Jest test suite
```

Note: The test in `tests/app.test.js` expects "Hello World!" but the app returns "Welcome to our API!" - this mismatch may be intentional for testing purposes.

## Code Architecture

### Directory Structure
- `/src/` - Main application code
  - `app.js` - Express.js application entry point
  - `helpers.js` - Utility functions
  - `core/database.js` - Database module (MongoDB configuration without implementation)
- `/tests/` - Jest test files
- `/config/` - Configuration files (database.json for different environments)
- `/data/` - Sample data files
- `/assets/` - Binary files (logo.png)
- `/docs/` - Documentation (incomplete API.md)

### Key Implementation Details
- **Framework**: Express.js with Helmet for security headers
- **No Build Process**: Direct Node.js execution without transpilation
- **Database Config**: MongoDB configuration present but not implemented
- **Security**: Basic security headers via Helmet middleware

## Advanced Git Features

### New Test Scenarios Added
- **Empty Commits**: For edge case testing
- **Cherry-picked Commits**: With -x flag showing origin
- **Revert Commits**: Clean revert demonstrating history
- **Octopus Merge**: Multi-parent merge with 3+ branches
- **Git LFS**: Large file storage tracking (*.psd, *.zip, *.mov)
- **Symbolic Links**: Including broken links for testing
- **File Permissions**: Executable bit changes
- **Unicode Branch Names**: Testing special characters and emojis
- **Very Long Branch Names**: Testing UI display limits
- **Git Hooks**: Pre-commit and commit-msg hooks
- **Submodules**: Simulated submodule structure

## Git Branch Map

### Branch Relationship Tree
```
main (current)
│
├─ Already Merged:
│  ├─ hotfix/security-patch → merged at commit 2848c2c
│  └─ feature/database → partially merged at db86cf6
│
└─ Active Branches:
   │
   ├─ From early history (main~10):
   │  ├─ feature/user-auth
   │  │  └─ feature/user-auth-api [STACKED]
   │  └─ feature/refactor-old
   │
   ├─ From feature/database merge (main~6):
   │  ├─ feature/database (continues after merge)
   │  │  └─ feature/database-models [STACKED]
   │  └─ bugfix/memory-leak
   │
   ├─ From after hotfix (main~4):
   │  └─ feature/experimental
   │
   ├─ From commit 4fbcc2f (main~3):
   │  ├─ feature/api-v2 (includes merge from release/v2.0)
   │  │  └─ feature/api-v2-routes [STACKED]
   │  └─ release/v2.0
   │
   └─ From recent main:
      └─ feature/long-running

ORPHAN: gh-pages (no common ancestor with main)
```

### Key Testing Scenarios

1. **Stacked Branches** - Perfect for testing git stacking tools:
   - `feature/user-auth-api` stacked on `feature/user-auth`
   - `feature/database-models` stacked on `feature/database`
   - `feature/api-v2-routes` stacked on `feature/api-v2`

2. **Merge Patterns**:
   - Completed merge: `hotfix/security-patch`
   - Partial merge: `feature/database` (branch continues after merge)
   - Cross-branch merge: `release/v2.0` into `feature/api-v2`

3. **Branch Types**:
   - Feature branches (`feature/*`) - various development stages
   - Bugfix branch (`bugfix/memory-leak`)
   - Hotfix branch (`hotfix/security-patch`) - already merged
   - Release branch (`release/v2.0`)
   - Orphan branch (`gh-pages`) - documentation site

4. **Complex Scenarios**:
   - Branches from different points in history
   - Long-running branches with divergent history
   - Stacked feature development
   - Various merge conflict scenarios

## Working with This Repository

When making changes, remember:
1. This is a test repository - changes should maintain its usefulness for testing git operations
2. The code functionality is secondary to the git history and structure
3. Intentional inconsistencies may exist for testing edge cases
4. File renames, moves, and complex merges are deliberate test scenarios