# AlgorithmClassCode
Code for homeworks, quizes, exams, lectures

## Setup
1. Download these into a windows sub system for linux (wsl) directory
2. Install node which is a javascript runtime environment allowing js running outside a browser. See https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04 for node and npm (step 3)
3. Install node package manager (npm) so you can install node code packages.
4. Run `npm install` at root directory to install the dependencies listed in the `package.json` file into an auto generated `node_modules` folder, like the base types files needed for typescript.
5. Install typescript compiler with npm with this command: `npm install --global typescript`. See https://www.geeksforgeeks.org/how-to-install-typescript/
6. Enter this command in your terminal `tsc` to compile all files in this repo. It will go backwards in directories until it finds a `tsconfig.json` file (which we have at the root) and using those options in that file, will compile all `.ts` files recursively, generating corresponding `.js` files. At runtime there are no types anymore, it just uses js thats how typescript works.
7. For any file you want to run, type `node FileNameWithoutFileExtension` like `node breadthFirstSearch` from within the same directory. Or alternatively always stay at the root directory, open the file in vs code, right click the tab at top of vscode and click "Copy relative path". Then just type `node`, space, paste the relative path, delete the extension and enter. This is faster than doing `cd ..... whatever` to get the the correct directory.
