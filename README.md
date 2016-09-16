[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
# okla

##Prerequisites

####Install `git`
Follow the instructions at [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install `git` which is required to clone the repository.

####Install `node`
1. Visit [https://nodejs.org/](https://nodejs.org/) and follow the instructions provided to install `node`.
2. Follow the instructions at [https://docs.npmjs.com/getting-started/fixing-npm-permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) to be able to install `npm` packages globally without providing the root password.

#### Install Mongo
Visit [https://www.mongodb.com/download-center?jmp=nav#community](https://www.mongodb.com/download-center?jmp=nav#community) and follow the instructions provided to install mongodb.

## Download the project and install dependencies
From a terminal run the following commands:

```bash
cd

git clone https://github.com/kindu/okla.git

cd okla

npm install
```

## Define environment variables
From a terminal do the following

```bash
cd ~/okla

vim .env

# Press i to enter insert mode

# Paste the following
PORT=3000
MONGODB_URI='mongodb://localhost/okla'


# Press the escape key to get out of insert mode
# Type ':wq' and then press enter to save and exit

```
