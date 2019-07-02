# Vision Project

## To contribute to project:
1. Install [Node.js 10.16.0](http://nodejs.org/dist/v10.16.0/).
2. Install [Git](http://git-scm.com/downloads).
3. Fork [Vision](https://github.com/patient-provider/vision)
4. Create local repository on your computer: `git clone https://github.com/<username>/vision.git`
5. Change to the 'vision' directory in local repository `cd vision`.
6. Add the source repository as 'upstream' with the command `git remote add upstream https://github.com/patient-provider/vision.git`.
7. Add the upstream master branch to your local repository  `git pull upstream master`.
8. Use git workflow you prefer or [follow this one, if you are unfamiliar with git](./GIT_WORKFLOW.md).

Use `./auto.sh` (Mac/Unix) or `auto` (Windows) script from 'vision' directory to manage automation
- To see available tasks run `./auto.sh` (Mac/Unix) or `auto` (Windows) script without parameter.

## To build and test project:
1. Run `./auto.sh karma` (Unix/Mac) or `auto karma` (Windows)
2. Navigate at least one browser to http://localhost:9876
3. Run `./auto.sh build` (Mac/Unix) or `auto build` (Windows)

## To run project locally:
1. Run `./auto.sh run` (Unix/Mac) or `auto run` (Windows)
2. Navigate a browser to http://localhost:8080