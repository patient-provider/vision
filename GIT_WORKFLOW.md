# Git Development Workflow

## Before developing new functionality:
1. Checkout master branch in local repository `git checkout master`
2. Update upstream master branch in your local repository with most recent changes `git pull upstream master`
3. Push changes to your forked repository on Github `git push origin master`
4. Create and checkout feature branch in local repository `git checkout -b <feature-branch-name>`

## While developing feature
1. Checkout feature branch `git checkout <feature-branch-name>`
2. To see changed/added/deleted files `git status`
3. To discard changes to a file `git checkout -- <file>`
4. To add a file to commit `git add <file>` or all files `git add .`
5. To remove a file from commit `git reset HEAD <file>`

## When you have a set of changes in commit exactly the way you want them:
- Commit the changes `git commit -m "<description-of-changes>"`

## When done with development push changes to your forked repository on GitHub
1. Checkout master branch in local repository `git checkout master`
2. Update upstream master branch in your local repository with most recent changes `git pull upstream master`
3. Push changes to your forked repository on Github `git push origin master`
4. Checkout feature branch in local repository `git checkout <feature-branch-name>`
5. Merge master branch into feature branch `git merge master` NOTE: You may need to resolve conflicts
6. Push changes to your forked repository on Github`git push --set-upstream origin <feature-branch-name>`

## Create Pull Request (PR) on GitHub
1. Navigate to your forked repository on Github and click 'Branches'
2. Click 'New pull request' on <feature-branch-name>
3. Fill in form with title and comments describing change
4. Click 'Create pull request'
5. If your PR is merged into project, you may delete feature branch `git branch -d <feature-branch-name>`
6. If your PR needs further refinement, follow steps from 'While developing feature'