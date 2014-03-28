---
layout: post
title:  "Craftsman Tip #1: How to Recognize Exceptions"
date:   2013-07-19 10:52:48
categories: software
post_author: Byron Sommardahl
post_gravatar: 76dbcc74021b8039f14c7b583978b56d
---

Part of being a software craftsman is knowing how to recognize exceptions. Really, it takes time to build up enough experience seeing and fixing exceptions so that you can simply say, “I’ve seen this before. The problem is…” Along the way, when you find an exception that’s not very helpful in its message, get in the habit of looking at the inner exceptions until you reach the first exception. That will probably be the one that tells you what the real problem it is. Then remember the exception by its type or the error message so that you don’t have to google anything next time.