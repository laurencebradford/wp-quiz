// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Should I make a WordPress site?",
        "main":    "<p>Thinking about making a WordPress site? Take this quiz to see if you should or not.</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Definitely make a site on WordPress!!",
        "level2":  "Probably make a site on WP.",
        "level3":  "Maybe make a WP site ...",
        "level4":  "Mmmm ... probably not a good call.",
        "level5":  "Don't make a site on WordPress, plz." // no comma here
    },
    "questions": [
        { // - Multiple Choice, Multiple True Answers, Select Any
            "q": "What do you want the site to do?",
            "a": [
                {"option": "Be my business site, with a blog.",     "correct": true},
                {"option": "Act as a personal site/blog.",          "correct": true},
                {"option": "Be the next social network.",           "correct": false},
                {"option": "I don't know... ",                      "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> WordPress is starting to look appealing ...</p>",
            "incorrect": "<p><span>Hmmm.</span> Maybe you need to Google the word WordPress more.</p>" // no comma here
        },
        { // - Multiple Choice, Multiple True Answers, Select Any
            "q": "How much coding experience do have?",
            "a": [
                {"option": "I got Github repos on Github repos, bitch.",            "correct": true},
                {"option": "I know HTML, CSS. I've dabbled with JavaScript, etc.",  "correct": true},
                {"option": "A little and dying to learn more.",                     "correct": true},
                {"option": "What's code? ",                                         "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Great.</span> Glad to hear it.</p>",
            "incorrect": "<p><span>Uh oh.</span> I'm starting to think Square Space is for you ... </p>" // no comma here
        },
        { // Question 4
            "q": "How many pages will be on this site?",
            "a": [
                {"option": "A ton. And a blog, duh. #contentmarketing",    "correct": true},
                {"option": "Not sure. But pretty many.",                   "correct": true},
                {"option": "2",                                            "correct": false},
                {"option": "1",                                            "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Got it.</span> WordPress is all about blogging.</p>",
            "incorrect": "<p><span>Hmmm ...</span> In most scenarios, WordPress is ideal for websites with multiple pages and, of course, a blog. (Because, really, you need content marketing.)</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers
            "q": "Are you selling stuff ON this site? (Like, physical products or even a service ... )",
            "a": [
                {"option": "Nope. We've already got that covered.",                             "correct": true},
                {"option": "I'm not selling anything.",                                         "correct": true},
                {"option": "I am not sure?",                                                    "correct": false},
                {"option": "Yes, I'm selling my groovy lava lamps. (Or some other trinket).",   "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Brilliant!</span> Because, while you can sell stuff on WordPress ... I wouldn't. Well, maybe.</p>",
            "incorrect": "<p><span>FYI</span> While there are ways you can implement eCommerce and payment processing right onto WordPress, depending on your situation, taking that off-site will most likely be best.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers
            "q": "What is your budget for the project?",
            "a": [
                {"option": "Stacks on stacks on stacks.",                             "correct": true},
                {"option": "Decent.",                                                 "correct": true},
                {"option": "Limited.",                                                "correct": true},
                {"option": "Nothing. Literally zero.",                                "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span>Your really don't need a big budget for WP, anyways. Well, if you're building it yourself...</p>",
            "incorrect": "<p><span>Did you know...</span>That in order to have a website, there are always costs. Like a domain name. And server.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers
            "q": "How much customization do you want to do?",
            "a": [
                {"option": "A ton. I'm talking log-in features, real-time data updates, and so on.",                            "correct": false},
                {"option": "Def want some sliders, brah. And that SEO Yoast plugin. And 10 others.",                                "correct": true},
                {"option": "Some, but nothing too cray cray.",                                                                      "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span>You're on the right track.</p>",
            "incorrect": "<p><span>Woah there.</span>That sounds a bit too complex for WP...</p>" // no comma here
        }
    ]
};
