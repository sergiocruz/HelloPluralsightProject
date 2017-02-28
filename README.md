# Hello Pluralsight



## Short Description

This is a sample project to test out how projects work at Pluralsight. For this project, you'll be creating a basic website using HTML. If you want to deploy it to a real website, we'll even walkthrough how to do that!



## Full Description

### Project Overview

Learn the basics of Pluralsight projects with this quick introduction, and become comfortable using Git and GitHub — even if you’ve never used them before.

You'll edit a basic HTML page, as well as fork a GitHub repository and clone it down locally.

Here's what you'll build in this project:

![Screenshot](https://raw.githubusercontent.com/pluralsight-projects/HelloPluralsightProject/master/screenshot.png)

### What You’ll Need To Complete This Project

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

### Associate Project with Pluralsight

After cloning this repository down, copy the ".projects_config" file from the [HelloPluralsightProject](#) and save that to this directory. This will allow your status to be reflected on the website while you're working through the project locally!

[//]: # (install: "npm install")
### Installation

Run the following command to install all dependencies.

```
$ npm install
```

[//]: # (test: "npm test")
[//]: # (test-watch: "npm test-watch")
### Verify Setup

In order to verify that everything is setup correctly, run the following command. You should see a list of failing tests. This is good! Each of these tests corresponds to something we'll be working on in this project. By the end, all of the tests will pass.

```
$ npm test
```

We recommend running the following command, which will watch for any changes to your files, then run your tests automatically. This makes things easier, since you'll see updates immediately when you save your files! You can run this command once, then look back at it after you've made changes to the "index.html" file.

```
$ npm test-watch
```



[//]: # (project_id: hello-pluralsight)
[//]: # (test: node_modules/.bin/mocha test/hello-pluralsight_test.js)
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





## Next Steps

Once all tests are passing, try pushing your master branch up to the `gh-pages` branch -- this will make your webpage available on the web! Here's a command to do that:

```
$ npm run deploy:github-pages
```

This will make your `index.html` file available at the URL:

`http://<username>.github.io/HelloPluralsightProject/`
