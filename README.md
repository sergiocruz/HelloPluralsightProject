# Hello Pluralsight



## Short Description

This is a sample project to test out how projects work at Pluralsight. For this project, you'll be creating a basic website using HTML. If you want to deploy it to a real website, we'll even walkthrough how to do that!



## Full Description

### Project Overview

Learn the basics of Pluralsight projects with this quick introduction, and become comfortable using Git and GitHub — even if you’ve never used them before.

You'll edit a basic HTML page, as well as fork a GitHub repository and clone it down locally.

Here's what you'll build in this project:

![screenshot.png](Screenshot)

### What You’ll Need

You'll need to have access to the following tools on your local machine to complete this project.

* Git
* GitHub
* Code Editor
* Command Line / Terminal Access
* Docker

Never used Git and don’t have a code editor? We have a video that walks you through all the steps you’ll need to set this up.

### Prerequisites

In order to complete this project, you'll need to know the basics of HTML! Aside from that, you'll need a local computer where you can install git, and edit some files. We'll walk you through that part, so if you haven't used Git before -- don't worry. We recommend that you should have already completed the following Pluralsight Courses:

* [Todo Basic HTML Course 1](#)

And have an understanding of the following topics:

* Know what an HTML tag looks like
* Know some of the most common tags -- `title`, `h1`, `ul`, `li`.

If you know these, you should be all set to jump in and give this project a shot!

### Live Demo

Wondering what this project will look like when you've completed it? [Follow this link](#) to see a live version of it.



## Setup

In order to get this working, you'll need to have [Git](https://git-scm.com/) installed, and have a GitHub account. If this is your first time setting up Git, I'd recommend checking out Code School's video on How to Setup Git for Code School Projects in 5 Minutes to learn what you need to know.

To get started, fork this repository to your account and clone it down locally. We'll be editing the "index.html" file in the root directory for this project.

### Installation

Run the following command to install all dependencies.

```
$ npm install
```

### Verify Setup

In order to verify that everything is setup correctly, run the following command. You should see a list of failing tests. This is good! Each of these tests corresponds to something we'll be working on in this project. By the end, all of the tests will pass.

```
$ npm test
```

We recommend running the following command, which will watch for any changes to your files, then run your tests automatically. This makes things easier, since you'll see updates immediately when you save your files!

```
$ npm test-watch
```



[//]: # (project_id: hello-pluralsight)
## Hello Pluralsight

[//]: # (task_id: @title)
### Add a Page Title

Create a `title` element with your name.

[//]: # (task_id: @h1)
### Add a Header Element

Add an `h1` saying "Hello, Pluralsight!".

[//]: # (task_id: @ul)
## Create an Unordered List

Create a `ul` element with at least 2 `li` elements.

[//]: # (task_id: @li)
## What Do You Want to Learn?

In these `li` elements, list out what you want to learn.





# Checking Your Work

Once you've completed all of the tasks, go ahead and commit those to your fork of this repository and push it up to GitHub. Follow the directions on [Hello Code School](https://www.codeschool.com/projects/hello-code-school) to submit your project and get feedback from Code School.

## Running Tests Locally

You don't need to run and of the tests locally -- they'll all run when you submit your project. If you're an overachiever and want to try running the tests locally, here's what you'll need to do.

First off, install [node.js](https://nodejs.org/en/) locally. Next you'll need to run a few commands from this folder.

```
$ npm install
$ npm test
```

If everything is working, you should see something like this:

```
HelloCodeSchoolProject (answer) $ npm test

> hello-codeschool-project@1.0.0 test /Users/adam/code/projects/HelloCodeSchoolProject
> mocha test/



  Your HTML Page
    ✓ should have a different title
    ✓ should have a different h1
    ✓ should have a ul
    ✓ should have at least 2 li elements


  4 passing (306ms)
```

# Making it Public

Once all tests are passing, try pushing your master branch up to the `gh-pages` branch -- this will make your webpage available on the web! Here's a command to do that:

```
$ git push origin master:gh-pages
```

This will make your `index.html` file available at the URL:

`http://<username>.github.io/HelloCodeSchoolProject/`

# Another Answer

If you want to checkout one other possible solution to this problem and compare your work, you can checkout the `solution` branch.
