# Git Test Repository

A comprehensive fake repository designed for testing git-related tools, wrappers, and integrations.

## Purpose

This repository serves as a testing ground for developers building git-related tools. It contains a realistic project history with various git scenarios that your tool might encounter in real-world usage.

## Repository Features

### Branch Structure
- **14 branches** with different states and relationships
- Feature branches (`feature/*`)
- Bugfix branches (`bugfix/*`)
- Hotfix branches (`hotfix/*`)
- Release branches (`release/*`)
- Orphan branch (`gh-pages`)

### Commit History
- **Multiple authors**: 7 different contributors
- **Date range**: Commits spanning January-February 2024
- **Varied commit types**: features, fixes, refactors, chores
- **Merge commits**: Both fast-forward and non-fast-forward merges

### Complex Scenarios

#### 1. Merge Conflicts
- `src/utils.js` has different implementations across branches
- Date formatting conflicts between `feature/user-auth` and `feature/database`

#### 2. File Operations
- **Renamed files**: `utils.js` → `helpers.js`
- **Moved files**: `database.js` → `core/database.js`
- **Binary files**: PNG image in `assets/`
- **Large JSON files**: Sample data in `data/`

#### 3. Branch Relationships
- Branches ahead/behind main
- Nested branches (branches created from other branches)
- Divergent histories
- Cross-branch merges

#### 4. Tags
- Annotated tags: `v1.0.0`, `v1.1.0`
- Lightweight tags: `v0.9.0`, `v1.2.0-beta`

## How to Use This Repository

### For Testing Git Wrappers

```bash
# Clone the repository
git clone https://github.com/crazywolf132/fake-repo.git
cd fake-repo

# List all branches
git branch -a

# View the complex history
git log --oneline --graph --all --decorate

# Test branch operations
git checkout feature/user-auth
git checkout feature/database

# Test merge conflict scenarios
git checkout -b test-conflicts main
git merge feature/user-auth
git merge feature/database  # This will conflict
```

### Test Scenarios

#### 1. Branch Analysis
Test your tool's ability to:
- List all branches with their status
- Identify branches ahead/behind main
- Detect merged vs unmerged branches
- Find branch creation points

#### 2. History Traversal
- Parse complex merge histories
- Handle multiple parents in merge commits
- Track file changes across renames
- Identify author contributions

#### 3. Conflict Detection
- Detect potential merge conflicts
- Analyze conflicting changes
- Suggest conflict resolution

#### 4. File Tracking
- Follow files through renames
- Track files moved to different directories
- Handle binary files appropriately

## Repository Structure

```
.
├── assets/             # Binary files (images)
├── config/             # Configuration files
├── data/               # Sample data files
├── docs/               # Documentation
├── src/                # Source code
│   ├── core/           # Core modules
│   ├── middleware/     # Express middleware
│   ├── migrations/     # Database migrations
│   ├── models/         # Data models
│   ├── routes/         # API routes
│   ├── services/       # Service layer
│   └── validators/     # Input validation
└── tests/              # Test files
```

## Branch Tree Structure

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

## Branch Descriptions

- **main**: Primary development branch
- **feature/user-auth**: Authentication implementation (branched from early main)
- **feature/user-auth-api**: API routes for authentication [STACKED on feature/user-auth]
- **feature/database**: Database integration (partially merged, continues development)
- **feature/database-models**: Mongoose models [STACKED on feature/database]
- **feature/api-v2**: Version 2 API development (includes release/v2.0 merge)
- **feature/api-v2-routes**: API v2 routes [STACKED on feature/api-v2]
- **feature/experimental**: Experimental caching features
- **feature/long-running**: Performance metrics implementation
- **feature/refactor-old**: Legacy code refactoring
- **bugfix/memory-leak**: Memory leak fixes
- **hotfix/security-patch**: Security updates (MERGED)
- **release/v2.0**: Release preparation branch
- **gh-pages**: Documentation site (orphan branch - no common history)

## Contributing

This is a test repository designed to remain static for consistent testing. If you have suggestions for additional git scenarios that would be helpful for testing, please open an issue.

## License

This repository is provided as-is for testing purposes. Feel free to use it in developing and testing your git-related tools.