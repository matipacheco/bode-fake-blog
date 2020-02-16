## Example

A basic use case example is shown below.

Note: You should have `lambda-local` installed on you system. More information [here](https://www.npmjs.com/package/lambda-local)

    npm setup
    lambda-local -l transpiled/index.js -h handler -e events/creation_event.json
    lambda-local -l transpiled/index.js -h handler -e events/list_event.json


## References

[1 - How to transpile ES6 and use it with AWS Lambda](https://medium.com/@tomokazukozuma/how-to-transpile-es6-and-use-it-with-aws-lambda-78da3d7aefe3)

[2 - Sequelize v5 Docs](https://gsequelize.org/v5/)