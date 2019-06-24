# Vision Project

## To contribute to project:
1. Install [Node.js 10.16.0](http://nodejs.org/dist/v10.16.0/).
2. Install [Git](http://git-scm.com/downloads).
3. Fork [Vision](https://github.com/patient-provider/vision)
4. Clone fork to your computer: `git clone https://github.com/<username>/vision.git`
5. All commands must run from root of repository: `cd vision`

## To build project:

- Run `./auto.sh build` (Mac/Unix) or `auto build` (Windows)

NOTE: These scripts rebuild node modules, if necessary, and pass parameter (ie `build`) to `npm run`. To see available tasks run script without parameter.

## To run project locally:
1. Run `./auto.sh local` (Unix/Mac) or `auto local` (Windows)
2. Navigate a browser to http://localhost:8080