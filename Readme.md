## Example  for test site via WDIO

This project demonstrates a simple setup for a wdio test suite with page objects.

# To run test

1. Clone project
2. Install dependeces

```sh
   npm install
```

3. Install Chrome
4. Run test

```sh
   npm run test
```

To run in headless mode, use command

```sh
   npm run test-headless
```

Additional config to start

```sh 
export PATH=./node_modules/.bin:$PATH
export NVM_DIR=~/.nvm                
source $(brew --prefix nvm)/nvm.sh
```

# To Do

1. Add config for run in cloud/docker
2. Add screenshot tool for failed tests
3. Add config for Gitlab CI and for Jenkins CI
4. Add config for GitHub CI
5. Add additional tests for demo site
6. Fix eslint config and add pre-commit script (for example husky)
7. Fix Reporter (link to files, logs, structure)
8. Add test for API (rest + WS)
9. Refactor session for this project
10. TBD...