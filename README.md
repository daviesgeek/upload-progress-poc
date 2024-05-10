# Upload Progress Proof of Concept

## Overview

This is a quick test to show how to get upload progress working with large files. It uses React Remix, Yarn v4, express, and multer.

## Usage

Make sure you have [yarn installed](https://yarnpkg.com/getting-started/install):

```bash
$ yarn -v
4.2.2
```

Then install dependencies:

```bash
$ yarn
➤ YN0000: · Yarn 4.2.2
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed
➤ YN0000: · Done in 0s 388ms
```

Start the frontend:

```bash
$ cd frontend
$ yarn dev
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Start the backend:

```bash
$ yarn start
[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts`
Server listening on port 3000
```

At this point you should be ready to open up the frontend app in your browser of choice. It should be available at http://locahost:5173:

![](imgs/Screenshot%202024-05-10%20at%2013.47.21.png)

Select a file, then choose "Upload". The progress bar should fill up as the file is uploaded:

![](imgs/Screenshot%202024-05-10%20at%2013.48.22.png)

The backend/uploads folder should now include the file you uploaded and the server output should show you the file:

```bash
{
  fieldname: 'file',
  originalname: 'drive-download-20180720T040550Z-001.zip',
  encoding: '7bit',
  mimetype: 'application/zip',
  destination: 'uploads/',
  filename: '670ee5dab57e851612939633d001e951',
  path: 'uploads/670ee5dab57e851612939633d001e951',
  size: 297967928
}
```

## Findings

Not sure about the tooling at the moment, it's obviously overly complex for the frontend, but there's a ton of features that I'm not using and/or are not familiar with at the moment.
Overall though, this was a good test to bridge the gap between what I know is possible and how to actually implement this feature.
