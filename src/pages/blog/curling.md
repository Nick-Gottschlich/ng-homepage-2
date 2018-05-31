---
title: "Formatting cURL Calls in Your Code"
actualUrl: "curling"
date: "2018-03-01"
---

Today I'm gonna talk about cURLing.

No, I don't mean working on your hair, nor do I mean getting that bicep pump, and while I applaud the recent efforts of the USA Olympic Team (gold baby!) I'm not talking about the sport either. No, today we are talking about the software called cURL (supposed to be pronounced "see you-are-ell", but everyone just calls it "curl").

[cURL](https://curl.haxx.se/) is a piece of software written all the way back in 1997. It's a testament to how solidly it was written that it's still used today, in a day and age where most modern JavaScript packages are obsolete in 30 minutes. cURL is used to transfer data using various protocols. You can use cURL to `GET` information from a URL, and you can use it to `POST` or `PUT` information there as well. cURL can be very useful in coding when you are automating calls to APIs (and you are automating your releases, right? If so, this could be useful to you).

Now I'm assuming you know a thing or two about how cURL works. If not, go ahead and check out the [tutorial](https://curl.haxx.se/docs/httpscripting.html). I'm not gonna talk about the specifics of making a request. What I do want to talk about is how to write that request into your code so that when people look at it 6 months from now they don't want to gouge their eyes out.

*Note: I'll be using Javascript [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) for the code in this blog post. These are similar to [f-strings](https://cito.github.io/blog/f-strings/) in python-3. I won't include the code that actually makes the cURL command run on the command line.*

Let's look at a fictional example in which we need to maintain some code which automates the update or our release notes during a code release.

## What not to do

Nobody wants to read this:

```javascript
`curl -u ${USERNAME}:"${PASSWORD}" -sSX POST -d '{"body":{"storage":{"representation": 'storage',"value": "${releaseNotesString}"}},
"title": "Release Notes: ${versionNum}","type": "page","version":{"number": ${version}}}' -H "Content-Type: application/json" 
${APIURL}/rest/1.0/api/update`
```

Holy cow, what the hell is that? I see a `POST`... and some big data object... oh there's a URL? Looks like I'm off to spend some time getting up close and personal with the curl man pages, ugh.

This is not a situation you want to be put in, nor is it a situation you want to put coworker in (well, probably). So let's talk about how to clean up this code.

## There are no shortcuts on the road to success...fully formatting your cURL commands

First thing's first, toss away the `-u`. Throw out the `-H`. Don't give them the `-d`. There's no need to get `-sSX` tricky. Okay I'll stop, but these shortcuts are only useful once you already know cURL well and you are flying along in your terminal like Elliot from Mr. Robot. If you use these shortcuts in your code all you're doing is guaranteeing a visit to the cURL man page for anyone else who reads it in the future (and let's be honest, probably you as well in 2 months). Use the full versions of the flags.

```javascript
`curl --user ${USERNAME}:"${PASSWORD}" --silent --show-error --request POST --data '{"body":{"storage":{"representation": 'storage',
"value": "${releaseNotesString}"}},"title": "Release Notes: ${versionNum}","type": "page","version":{"number": ${version}}}' 
--header "Content-Type: application/json" ${APIURL}/rest/1.0/api/update`
```

Ok, this is already slightly better, I know right away what `--user`, `--data`, `--request` and the like are going for. But now this code is even bigger, with even more characters. We can do better.

## Get that data out of here!

We can take that whole block of information that's comes right after `--data`, move it out of the template literal, format it nice and pretty and then call it with `${JSON.stringify(data)}`.

Like so:
```javascript
const releaseNotesData = {
  body:
  {
    storage:
    {
      representation: 'storage',
      value: releaseNotesString
    }
  },
  title: `Release Notes: ${versionNum}`,
  type: 'page',
  version: { number: version }
}

`curl --user ${USERNAME}:"${PASSWORD}" --silent --show-error --request POST --data '${JSON.stringify(releaseNotesData)}' 
--header "Content-Type: application/json" ${APIURL}/rest/1.0/api/update`
```

Alright, not bad! This is almost readable!

## Give each statement it's own space

How would you feel if you had to work right smack dab next to all your coworkers, with barely any space between you? No dividers, no spacing, no sound barriers... Oh, you're telling me that's how all modern offices are set up?

Regardless, give your cURL statements some space. Seperate them out so that each line starts with what you're about to do and then the data or options needed to do it. One statement per line!

Like so:
```javascript
const releaseNotesData = {
  body:
  {
    storage:
    {
      representation: 'storage',
      value: releaseNotesString
    }
  },
  title: `Release Notes: ${versionNum}`,
  type: 'page',
  version: { number: version }
}

`curl --user ${USERNAME}:"${PASSWORD}" \
--silent --show-error \
--request POST \ 
--data '${JSON.stringify(releaseNotesData)}' \
--header "Content-Type: application/json" \
--url ${APIURL}/rest/1.0/api/update`
```

*You can use those `\` backslashes to show that you are the end of your statement, they'll be ignored by cURL. This is useful if you have an especially long line that you can't line break (like a long URL), as it will help people who word wrap their text editors know when your statement is ending at a glance.*

Alright, so now I'm coming back to this code half a year down the line *and would you look at that* I know exactly what's going on with this cURL command. It takes in a username and password (because the API needs a login). It runs silently (so it doesn't output to the command line) but still shows errors on failure. It sends a POST request to the URL, with the data contained in the nicely formatted `releaseNotesData`. It's header is set to "Content-Type: application.json", and it hits the update `APIURL` URL. Notice how even though it's not neccesary, I added the `--url` flag just to be absolutely clear what is going on in the last line.

We did it! Clean, well formatted code that will make future maintainers drop to their knees and worship the ground you stand on. Well, maybe not, but at least you'll be happy with yourself when you can read your own code when you come back to fix the bugs you inevitably wrote.

-Nick