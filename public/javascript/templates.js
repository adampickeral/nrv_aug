nrvaug.templates = {};

var main = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>What We Do</h2>' +
      '<section>' +
        '<p class="first">The New River Valley Agile Users Group brings together individuals from all levels of involvement in software development. We discuss all things agile from software craftsmanship to continuous delivery, and project management to agile coaching. The topics of the meetings are driven by the attendees, where each person brainstorms topics they\'d like to discuss, and the group votes on the ones they find most interesting.</p>' +
      '</section>' +
    '</div>' +
  '</div>';

var meetings = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>Meetings</h2>' +
      '<section>' +
        '<p class="first">We hold monthly meetings, generally the second Tuesday of every month from 6:00pm - 8:00pm.</p>' +
        '<p>Our next meeting will be on Tuesday January 13th, from 6:00pm - 8:00pm at <a class="info-link" href="http://www.techpad.org/" target="blank">TechPad</a> in Downtown Blacksburg. This will follow the Lean Coffee format, where we\'ll brainstorm topics as we arrive, and then discuss the top vote getters. This will be a bring your own food meeting.</p>' +
      '</section>' +
      '<div class="form">' +
        '<h3>Don\'t forget to RSVP!</h3>' +
        '<h4>All fields are required</h4>' +
        '<div class="form-field">' +
          '<label for="rsvp-name">Name</label>' +
          '<input id="rsvp-name" type="text">' +
        '</div>' +
        '<div class="form-field">' +
          '<label for="rsvp-email">Email</label>' +
          '<input id="rsvp-email" type="email">' +
        '</div>' +
        '<div class="form-field">' +
          '<label>Attending:</label>' +
          '<div class="option-group">' +
            '<input id="rsvp-attending-yes" name="rsvp-attending" type="radio" value="yes" checked="checked">' +
            '<label for="rsvp-attending-yes">Yes</label>' +
            '<input id="rsvp-attending-no" name="rsvp-attending" type="radio" value="no">' +
            '<label for="rsvp-attending-no">No</label>' +
          '</div>' +
        '</div>' +
        '<div class="form-field">' +
          '<label for="security-challenge-question">What is this a picture of?</label>' +
          '<div id="security-challenge-image"><img src="/images/secure_image_{{ challenge }}.png"></div>' +
          '<input id="security-challenge-question" name="security-challenge-question" type="text">' +
        '</div>' +
        '<div class="form-field info-message">' +
          '<div id="rsvp-message"></div>' +
        '</div>' +
        '<div class="form-field save-link">' +
          '<a class="button" id="rsvp-submit">Submit</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="blurb">' +
      '<div id="map-canvas"></div>' +
    '</div>' +
  '</div>';

var mailingList = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>Mailing List</h2>' +
      '<p>Fill out the form below to keep up to date with Agile NRV.</p>' +
      '<div class="form-field">' +
        '<label for="mailing-list-name">Name</label>' +
        '<input id="mailing-list-name" type="text">' +
      '</div>' +
      '<div class="form-field">' +
        '<label for="mailing-list-email">Email</label>' +
        '<input id="mailing-list-email" type="email">' +
      '</div>' +
      '<div class="form-field save-link">' +
        '<a class="button" id="mailing-list-submit">Submit</a>' +
      '</div>' +
      '<div class="form-field info-message">' +
        '<div id="mailing-list-request-message"></div>' +
      '</div>' +
    '</div>' +
  '</div>';

var resources = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>Books</h2>' +
      '<resources>' +
        '<resource class="first">' +
          '<div class="image"><img src="/images/art_of_agile_development.gif"></div>' +
          '<h3>The Art of Agile Development</h3>' +
          '<author>James Shore, Shane Warden</author>' +
          '<synopsis>Shore provides a detailed look at eXtreme Programming, explaining topics such as team roles, practices, work environment, and even why one would choose to be agile and utilize XP within their development process. An excellent resource for new and experienced agile practitioners.</synopsis>' +
        '</resource>' +
        '<resource>' +
          '<div class="image"><img src="/images/user_stories_applied.jpg"></div>' +
          '<h3>User Stories Applied</h3>' +
          '<author>Mike Cohn</author>' +
          '<synopsis>Cohn covers the ins and outs of user stories, discussing what they are, what makes a good user story, and also what makes a bad user story. He also explains how to use user stories when you don\'t have access to a user, as well as how to prioritize and estimate user stories.</synopsis>' +
        '</resource>' +
        '<resource>' +
          '<div class="image"><img src="/images/agile_testing.jpg"></div>' +
          '<h3>Agile Testing: A Practical Guide for Testers and Agile Teams</h3>' +
          '<author>Lisa Crispin, Janet Gregory</author>' +
          '<synopsis>This books explains the differences between testing in a traditional development process and testing in an agile process. The role of the tester changes from a reactive to a proactive one, and the approach to testing shifts from developing a test plan to a test strategy. The agile testing matrix is used to explain all the different types of testing needed on an agile project.</synopsis>' +
        '</resource>' +
        '<resource>' +
          '<div class="image"><img src="/images/agile_retrospectives.jpg"></div>' +
          '<h3>Agile Retrospectives: Making Good Teams Great</h3>' +
          '<author>Esther Derby, Janet Larsen</author>' +
          '<synopsis>An excellent resource for teams needing to improve their retrospective. This book explains the basic format of a retrospective as well as how to lead a retrospective and manage the activities and people involved. A multitude of activities are provided to help teams actively engage in mining information about their process and deciding what improvements need to be made.</synopsis>' +
        '</resource>' +
      '</resources>' +
    '</div>' +
    '<div class="blurb">' +
      '<h2>Blogs</h2>' +
      '<resources>' +
        '<resource class="first">' +
          '<h3 class="info-link"><a href="http://xprogramming.com/index.php" target="_blank">XProgramming.com</a></h3>' +
          '<author>Ron Jeffries</author>' +
          '<synopsis>A collection of articles, both opinion based and anecdotal, on the values and practices of eXtreme Programming from the mind of Ron Jeffries, one of the three founders of XP.</synopsis>' +
        '</resource>' +
        '<resource>' +
          '<h3 class="info-link"><a href="http://www.jamesshore.com/Blog/" target="_blank">jamesshore.com</a></h3>' +
          '<author>James Shore</author>' +
          '<synopsis>James Shore, author of <reference>The Art of Agile Development</reference>, covers a vast array of topics on agile development in this blog. He also has an excellent series on test-driven development, offered for free in Java and with a paid subscription in Javascript.</synopsis>' +
        '</resource>' +
        '<resource>' +
          '<h3 class="info-link"><a href="http://martinfowler.com/" target="_blank">martinfowler.com</a></h3>' +
          '<author>Martin Fowler</author>' +
          '<synopsis>Martin Fowler works for ThoughtWorks and is the author of several books on Agile Development, including <reference>Planning Extreme Programming</reference>. Here you will find Martin\'s thoughts on Agile Development and Software Design.</synopsis>' +
        '</resource>' +
      '</resources>' +
    '</div>' +
  '</div>';

var blog = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<div id="september-2014-content" class="sidebar-box">' +
        '<blog>' +
          '<h2>September 2014 Meeting</h2>' +
          '<author>Adam Pickeral</author>' +
          '<date>9/9/14</date>' +
          '<section>' +
            '<p class="first">This was our first in a series of talks where different companies in the area provide more insight into a unique area of their development process. Adam Pickeral from Rackspace detailed how his team scales agile, growing from a team of 6 developers to over 30.</p>' +
            '<iframe src="https://docs.google.com/presentation/d/1Bjht72mMmocaW8BqZPV7uWvYvWpHH2BmjdtpYilJEzE/embed?start=false&loop=false&delayms=60000" frameborder="0" width="775" height="500" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>' +
          '</section>' +
        '</blog>' +
      '</div>' +
    '</div>' +
    '<div class="blurb">' +
      '<div id="november-content" class="sidebar-box">' +
        '<blog>' +
          '<h2>November Meeting</h2>' +
          '<author>Adam Pickeral</author>' +
          '<date>11/12/13</date>' +
          '<section>' +
            '<p class="first">Our first meeting in Roanoke turned out to be a great success with about 12 attendees. Thanks again to <a class="info-link" href="http://www.interactiveachievement.com/" target="_blank">Interactive Achievement</a> for providing both the location and food! We discussed distributed version control using git, the Kano Model, and automated testing for continuous delivery.</p>' +
            '<p>For distributed version control, one of our group members presented their own unique way of using git which involves a number of personal public and private repositories off of the main repository. The personal repositories are designed to keep the main repo clean and free of commits that would pollute the history. Their method also allows for one (or more) gatekeepers of the main repo. While I think what they were trying to achieve could be done in a simpler manner, it was nonetheless a novel solution, and if it works, it works!</p>' +
          '</section>' +
          '<section>' +
            '<h3>Kano Model</h3>' +
            '<p class="first">We discussed the <a class="info-link" href="http://en.wikipedia.org/wiki/Kano_model" target="_blank">Kano Model</a> as a method for prioritizing features in a product backlog. The Kano Model is a useful approach for agile software development in that it involves the customers in determining the usefulness of new features. For each new feature that is to be developed, a series of functional and dysfunctional questions are posed to the customer. The answers are then plotted in a matrix that places features into six categories: Must-Have, Linear, Exciter, Indifferent, Reverse, Questionable. The categories describe the features in terms of what the customer expects, wants, and doesn\’t want to have in the product. This essentially gives you the order in which features should be developed, where you first deliver expected and wanted functionality, and avoid (or re-evaluate) unwanted functionality.</p>' +
          '</section>' +
          '<section>' +
            '<h3>Automated Testing for Continuous Delivery</h3>' +
            '<p class="first">We see this situation a lot: teams want to deliver faster, but delivery can\’t happen until QA signs off, and of course features are developed faster than QA can test them. The obvious solution is to automate the testing that QA does. Automation eliminates human errors (forgotten tests), it catches human errors (regression defects), and it speeds up the time it takes to develop new features. It acts as a safety net giving the team confidence to rapidly build new features or improve existing code. It also frees up time of members of the QA team so they have a more proactive, rather than reactive, role in which they help define requirements and test cases before features are developed. Easy solution…</p>' +
            '<p>But it can take a while to build a safety net, both in terms of test coverage and the process by which the tests are built. By process I mean who writes the tests, what types of tests there are, and who is responsible for quality. In agile we don\’t have a separate “quality” team. There\’s a change in mindset that has to happen to get to continuous delivery, which is that everyone owns the quality of the product. Everyone tests. So when QA is a bottleneck, the first change in the process isn\’t to start writing automated tests. The first step isn\’t even writing unit tests. The first change is to have developers own the QA role by running the manual tests themselves. Make them feel the pain of manually running through a regression test plan after every change. This is where real change will start to happen. Then it will be up to the team to decide what the next step will be in getting to continuous delivery, whether it\’s automated acceptance tests, or even unit tests.</p>' +
          '</section>' +
        '</blog>' +
        '<p class="read-more"></p>' +
      '</div>' +
      '<a class="info-link read-more-link" id="november-read-more">read more...</a>' +
    '</div>' +
    '<div class="blurb">' +
      '<div id="september-content" class="sidebar-box">' +
        '<blog>' +
          '<h2>September Meeting</h2>' +
          '<author>Adam Pickeral</author>' +
          '<date>9/10/13</date>' +
          '<section>' +
            '<p class="first">We had another great turnout for this month\’s meeting (with several new faces). It\’s very exciting getting to hear so many different perspectives on agile, as well as the different problems that teams are facing. You really start to see just how different the processes of every team, company, and even teams within a company really are when you talk to more people. And that\’s the beauty of agile; you don\’t just follow a process blindly, you do what works for your team. On to the topics…</p>' +
          '</section>' +
          '<section>' +
            '<h3>Self-Organizing Teams: Fact or Fiction</h3>' +
            '<p class="first">This topic was approached from two different angles: 1) How do you coach your teams to be self-organizing? 2) How do you take self-organizing teams to the next level?</p>' +
            '<p>The best way to create self-organizing teams is to not make any decisions for them! Teams are going to make the wrong decision from time to time and that\’s ok, it\’s even a good thing. Failures are opportunities for learning and improvement, and teams are never going to learn how to make the right decisions for themselves if they\’re never allowed to make the wrong decisions for themselves. In agile we reduce the impact of failure through short feedback cycles. From 1 second unit tests to 1 week iterations, the time that a failure lives is small enough that the impact won\’t be large, but is large enough that lessons can be learned and better decisions can be made.</p>' +
            '<p>Teams can also become more self-organizing by rotating responsibilities. The scrum master or agile coach shouldn\’t be the one who is always leading stand-ups and retrospectives. Once your team understands the benefits of these types of meetings, let them take the meetings over. Rotate the facilitator of the meeting so that there is a different person running it each time. This method will also help your teams get to the next level. When a team is truly self-organizing, they\’ll be able to look beyond the day to day and begin taking ownership of larger concepts such as roadmap and personnel decisions.</p>' +
          '</section>' +
          '<section>' +
            '<h3>When to do Automated UI Testing</h3>' +
            '<p class="first">Automated UI testing is a divisive topic in the community. Some are strongly opposed to heavy Automated UI (or Automated Acceptance) testing, and others are strongly for it. It really just depends on your project, process, and current testing situation. James shore <a href="http://www.jamesshore.com/Blog/Alternatives-to-Acceptance-Testing.html" class="info-link" target="_blank">argues</a> that there isn\’t a strong need for automated acceptance testing if you are diligent in your process and have the right tests at lower levels of testing (integration, unit, etc). Bob Martin (Uncle Bob) <a href="http://blog.8thlight.com/uncle-bob/2013/09/26/AT-FAIL.html" class="info-link" target="_blank">argues</a> for automated acceptance testing, and that those who argue against are missing the point of these types of tests.</p>' +
            '<p>Some form of automated acceptance testing should be required, because this is the only way your system is tested end-to-end in an automated manner. How much testing is required at this level again depends on your process and how much testing is being done at the lower levels. The earlier you start doing automated acceptance tests the better, because similar to doing TDD with unit tests, they help drive the design of your system. Not only that, but if business people can help define or even write these tests, then the passing tests let developers know that the stories are finished.</p>' +
          '</section>' +
        '</blog>' +
        '<p class="read-more"></p>' +
      '</div>' +
      '<a class="info-link read-more-link" id="september-read-more">read more...</a>' +
    '</div>' +
    '<div class="blurb">' +
      '<div id="august-content" class="sidebar-box">' +
        '<blog>' +
          '<h2>August Meeting</h2>' +
          '<author>Adam Pickeral</author>' +
          '<date>8/13/13</date>' +
          '<section>' +
            '<p class="first">This month Daniel Markham was our guest speaker and spoke to us about scaling agile without getting bogged down. He discussed several agile practices and how each one works on teams of 3, 15, 50, even 150+. There was a lot of material covered so I won\’t talk about everything here, but I will touch on a few highlights.</p>' +
          '</section>' +
          '<section>' +
            '<h3>Pairing</h3>' +
            '<p class="first">Pairing Programming is one of the practices that works with any size team. No matter how small or large a team, this simple practice can always be utilized to help spread knowledge of the code base, improve code quality, and educate members of the team by working with more experienced developers.</p>' +
          '</section>' +
          '<section>' +
            '<h3>Planning / Releasing</h3>' +
            '<p class="first">Working in sprints and doing sprint planning works well with small teams and even up to teams of 15. It\’s easy to coordinate planning and releases with a small number of people involved. Sprints start to fail, however, as the team size increases towards 50. As the size of the team grows kanban becomes a necessity to facilitate planning and releases. The shear volume of work that needs to be coordinated for planning and releases in large teams lends itself to the just in time nature of kanban. By focusing on only what\’s currently in progress and the next few things coming up, teams can reduce the overhead of planning and are better equipped to adapt to the inevitable changes that will happen in large-scale projects.</p>' +
          '</section>' +
          '<section>' +
            '<h3>Standups</h3>' +
            '<p class="first">As the team size increases to 15, information radiators become very important for standups. Teams can focus on talking about work currently in progress and coming up to help keep the meeting short. The standup changes when the team size approaches 50. It becomes more of a problem identification and solving meeting that is attended only by tech leads and people with problems. It\’s no longer possible for every person on a 50 person team to go around and give an update on what they are working on. What does work well at this level though, is splitting the larger team into smaller ones, where each smaller team has their own standup through which problems are identified and reported up to the larger team standup.</p>' +
          '</section>' +
          '<section>' +
            '<h3>Communication</h3>' +
            '<p class="first">A goal Daniel establishes for his teams, both small and large, is to have zero meetings. If you\’re having to schedule a meeting, then communication is failing somewhere else. This isn\’t a goal to adhere to strictly, rather it\’s an ideal to strive for. Much like setting a goal of having 100% test coverage, it\’s something you want to attain but realize you may never get there. Nonetheless you strive for that goal because that is the ideal state. It may not be possible to have zero meetings, especially on larger teams, and even more so on teams that are non-collocated, but if you find your days filled with meetings, you should look at your team and process to see where communication is failing. This could be an indicator of poor collaboration within the team as well.</p>' +
          '</section>' +
        '</blog>' +
        '<p class="read-more"></p>' +
      '</div>' +
      '<a class="info-link read-more-link" id="august-read-more">read more...</a>' +
    '</div>' +
    '<div class="blurb">' +
      '<div id="july-content" class="sidebar-box">' +
        '<blog>' +
          '<h2>July Meeting</h2>' +
          '<author>Adam Pickeral</author>' +
          '<date>7/9/13</date>' +
          '<section>' +
            '<p class="first">What great meeting we had this time! One of our highest attendance rates yet (10 people), and lots of interesting conversation. We went with the lean coffee format again, and these are the topics we discussed: Working with remote members, agile coaching / crash course in agile, working with hard deadlines. Check out the notes below from our discussions.</p>' +
          '</section>' +
          '<section>' +
            '<h3>Working with Remote Members</h3>' +
            '<p class="first">The most effective form of communication on a software development project is face-to-face, with team members, developers and business people, sitting together and working together daily.  We use this principle to guide our decisions in how we communicate and work together on an agile team, but reality often prevents us from having all of our team members co-located. So how can we be agile with remote team members?</p>' +
            '<p>We discussed a few different problems in working with remote members including communication, tracking work, and working with a remote product owner. When you have remote team members, it\’s important to make every effort to simulate face-to-face communication. Trying to hold meetings with a large number of people over the phone will result in disengagement from the meeting for those workers who aren\’t present. They miss out on the subtle nuances on an in-person conversation, not to mention it can be very difficult to hear multiple people speaking over a conference call. Make it a point to invest in high quality microphones, speakers, and cameras for video conferencing. Try to simulate being with remote members as much as technology will allow you.</p>' +
            '<p>Having a remote product owner can be especially difficult when the development team has questions around the stories on which they are currently working. Team members may bottle their questions up until standup, sitting idly, rather than getting answers now so they can continue their work. Team members will also miss out on another benefit of sitting together, and that is communication being available to everyone. When everyone sits together, you get to hear all of the conversations and decide for yourself what is important for you to participate in or ignore. So we need to try and make our communication available to everyone. Mailing lists can help with this, but how can team members quickly decide if the content is really important to them or not. One technique is to include recipients who need to respond in the TO line of the email and loop in everyone else by including them in the CC line. This is a very simple rule that people can use to make a quick decision if they want to be involved in a conversation or not. Now as far as not getting immediate answers from that remote product owner, another quick and easy solution is to have a persistent chat room where all members of the team participate. Not only will this help with getting faster feedback from a remote product owner, but making the effort to hold a majority of your conversations in the chat room will also keep other remote members involved in the day-to-day work as well.</p>' +
            '<p>Tracking work is best done on a whiteboard with index cards and post-it notes. The whiteboard becomes an information radiator for everyone on the team, and even for co-workers passing through the workspace. Index cards and post-it notes also seem less permanent than something electronic, making it seem like it\’s easier to change direction if necessary. But remote members can\’t see the board, so what do you do? You have a couple of different options here, and you really have to decide what works best and makes the most sense for your team. You can use an electronic tracking tool, preferably something that can mimic a whiteboard such as Trello, and also use a whiteboard. The problem here is that you have to make sure you are updating cards in both places, but the benefits might outweigh the costs. The other option is to only use the electronic tool and to have that tool on display on a large TV in the team\’s workspace. Both of these options allow remote members to have access to the “whiteboard” while also still providing an information radiator to everyone else on the team.</p>' +
            '<p>When deciding what tools to use, it\’s important to remember people, then process, then tools. You need to get your people together and figure out the simplest thing that is going to work for them and make their work easier. The tools come later as a supplement to the process you have created on your team. Don\’t let your tools dictate your process, let the people dictate their own process.</p>' +
          '</section>' +
          '<section>' +
            '<h3>Agile Coaching / Crash Course in Agile</h3>' +
            '<p class="first">How do you teach agile software development to a team who is new to agile, and how do you teach agile to members who are new to the team? When starting with a new team, it\’s always best to start with the basics and follow all of the rules. As time evolves the team will evolve the process and do what works best for the them. But a new team doesn\’t know what works best for them, and they need to be able to understand the basics of working on agile team, and why we work the way that we do, in order to decide what will work best for their team. So take Scrum for software development teams, or take eXtreme Programming, and follow those processes exactly. If you are the one introducing agile to the team, make sure you understand the values and principles of the agile manifesto and how they guide the decisions we make around our process and find opportunities to reinforce those values during development.</p>' +
            '<p>When introducing new team members, a good technique to use is to introduce the process in context. Pick a feature that your team has recently completed and take them through the lifecycle of that feature. Introduce the different roles along the way, emphasize why your team works the way it does, being sure to use the agile values and principles to back up your reasoning, or just back it up with whatever reasons your team has for working the way it does.</p>' +
          '</section>' +
          '<section>' +
            '<h3>Working with Hard Deadlines</h3>' +
            '<p class="first">Hard deadlines are often present in software development, and what that usually means is that someone wants everything to be done by a certain date. Agile planning works around the assumption that we can only go as fast as we can go. Sure we can change things in our process along the way to help us work faster, but things are also going to happen that slow us down. That\’s why an agile plan is a living plan, it is not set in stone. When working with a hard deadline, it\’s important to establish what the minimum viable product (MVP) is. Once you have the MVP established, that functionality becomes the highest priority for the team, and you work towards completing that. If there\’s time left after the MVP is complete, then you can work on polishing up and enhancing the functionality. The MVP can also change, and that\’s why it\’s critical to always look at the plan and adjust it accordingly. These adjustments take place in sprint plannings, retrospectives, standups, even in day-today work as problems arise or work is completed ahead of time. Be transparent in your progress so the team has the ability and information necessary to make the best decisions they can on what is the most important thing to be working on right now. There are three aspects to planning a project, and they are scope, time, and budget (price of development, funds available, etc). You get to fix two of these things, and with a hard deadline time is going to be fixed, and the budget is usually also fixed (event if it isn\’t, throwing people at the problem or working insane hours won\’t work anyways). These leaves you with one thing that is flexible, and that is scope. So decide what\’s most important, and do that first.</p>' +
          '</section>' +
        '</blog>' +
        '<p class="read-more"></p>' +
      '</div>' +
      '<a class="info-link read-more-link" id="july-read-more">read more...</a>' +
    '</div>' +
    '<div class="blurb">' +
      '<div id="june-content" class="sidebar-box">' +
        '<blog>' +
          '<h2>June Meeting</h2>' +
          '<author>Adam Pickeral</author>' +
          '<date>6/11/13</date>' +
          '<section>' +
            '<p class="first">This was our first meeting trying out the <a href="http://leancoffee.org/" class="info-link" target="blank">Lean Coffee</a> format, and I\'d say it went pretty well. Everyone had a lot of interesting topics to discuss, and we had some insightful conversations on the topics we chose to discuss.</p>' +
          '</section>' +
          '<section>' +
            '<h3>Indoctrinating New Team Members into Agile</h3>' +
            '<p class="first">On-boarding new members is hard. It can be even harder in an agile process where the process itself is driven by the team\'s values. The difficult part isn\'t teaching a new member the process, it\'s teaching them why your team chooses to do it the way that they do. Values are part of your team\'s culture and that is something that is experienced, not taught.</p>' +
            '<p>There are many different types of developers at many different levels of experience, both in programming and in agile development. Our discussion focused on the cowboy coder; the developer who is an excellent programmer, but works outside the confines of any process, someone who sees the potential improvements from a small task and takes the initiative in making those changes, thus vastly increasing the scope of a task. Wanting to continuously improve the code base is a good mindset, but it has to be done intelligently and safely, through small, incremental changes.</p>' +
            '<p>Working incrementally and making small, continuous changes are usually some of the core values your team will have, so how do you show new members this is something your team values? You let your process do the talking. An easy way to contain the scope of changes made is through code reviews. Performing code reviews on every single change that will go into master (or trunk) is an excellent way to show off your team\'s values. Not only can you control scope and demonstrate how your team values small, incremental changes, but you will also see how your team values quality. The code is what the team lives in and should be kept very clean. This should shine through in comments during code reviews, showing off the team\'s attention to coding standards, simplicity, testing (quality), and readability.</p>' +
            '<p>Values are part of the team culture, and it\'s important to note that culture (and values) is something everyone on the team owns. Given that, everyone on the team should perform code reviews (collective code ownership, another value!). This just reinforces the values your team has by getting more team members to own and live those values.</p>' +
            '<p>If your team is full of clean coders and clean code is something they are passionate about, watching the <a href="http://www.cleancoders.com/" class="info-link" target="blank">Clean Coders</a> video series together as a team is another excellent way to show off your team\'s values. The important part here is that everyone watches these together as a team, not just the new members.</p>' +
            '<p>So when you want to teach new members the way your team works, just use the process, and get the whole team involved.</p>' +
          '</section>' +
          '<section>' +
            '<h3>Scaling Continuous Integration / Deployment</h3>' +
            '<p class="first">Reliable continuous deployment can be difficult to achieve, but once your team reaches it, it is an excellent practice to maintain. It is much easier to get to continuous deployment with a small team, but how do you scale it as the team grows?</p>' +
            '<p>The ideal state in continuous deployment is that every change that is merged into master (trunk) is the only change that goes through the build pipeline and is deployed to production. With a team of ~20 developers, this becomes very difficult to control, as you could have all 20 developers trying to merge and deploy their code at the same time.</p>' +
            '<p>Now, from this discussion, there are some issues with the build pipeline in terms of test instability that cause changes to get backed up, thus making the situation of multiple team members trying to merge and deploy at once even worse, as changes continue to pile on top of one another. The solution discussed was to have a queueing system for merges.</p>' +
            '<p>Queueing can be done in a couple of different ways. Usually you won\'t have a single team of ~20 developers, rather you will have multiple sub-teams of 3-5 developers. In this case, you can have a queue within each team. Having a physical token that team members need to have in their possession in order to merge and deploy is a great tool for enforcing the queue.</p>' +
            '<p>Queues within each team help, but they only get you down to at most having the total number of sub-teams trying to merge and deploy at once. So what is needed then is a single queue for everyone involved. There are ways to automate a queue in a build system, but the first step should be implementing a manual process. Something lightweight that\'s easy to implement and test. Then you can automate it if it\'s working. The queue will also magnify any pain points in the deployment pipeline, as team members will have to wait longer to merge and deploy their code. This is a good thing! It will cause the team to make the process faster and fix instabilities.</p>' +
          '</section>' +
          '<section>' +
            '<h3>Planning Research Work (Spikes)</h3>' +
            '<p class="first">Sometimes we don\'t fully understand what changes need to be made for new functionality, or we don\'t know the feasibility of proposed new functionality. In these cases the team needs to perform spikes to better understand the new functionality before they can do any planning around it. The problem is, how do you keep these spikes from eating up all of your development time?</p>' +
            '<p>The simplest solution is to timebox spikes. Setting a fixed limit on a spike is a way to ensure we do the minimal amount of research necessary in order to better plan the upcoming work. We don\'t need to know how to implement it, we just need to know if it is possible and what is the scope of the work.</p>' +
            '<p>Sometimes these spikes are large and can\'t be contained within a small timebox. This is really a symptom of a spike that is too vague. Just like a user story, a spike needs to have acceptance criteria, or some measurable goals that team members can check off so they know when they are done with a spike. Spikes can also be broken down into smaller spikes. If the scope of a spike will take longer than two days to investigate, split it into smaller spikes that make sense. Remember that we work in small increments, and this applies to almost everything we do, including research.</p>' +
          '</section>' +
        '</blog>' +
        '<p class="read-more"></p>' +
      '</div>' +
      '<a class="info-link read-more-link" id="june-read-more">read more...</a>' +
    '</div>' +
  '</div>';

var contact = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>Contact Us</h2>' +
      '<div class="form">' +
        '<h4>All fields are required</h4>' +
        '<div class="form-field">' +
          '<label for="contact-name">Name</label>' +
          '<input id="contact-name" type="text">' +
        '</div>' +
        '<div class="form-field">' +
          '<label for="contact-email">Email</label>' +
          '<input id="contact-email" type="email">' +
        '</div>' +
        '<div class="form-field">' +
          '<label for="contact-subject">Subject</label>' +
          '<input id="contact-subject" type="text">' +
        '</div>' +
        '<div class="form-field">' +
          '<label for="contact-message">Message</label>' +
          '<textarea id="contact-message"></textarea>' +
        '</div>' +
        '<div class="form-field">' +
          '<label for="contact-security-challenge-question">What is this a picture of?</label>' +
          '<div id="security-challenge-image"><img src="/images/secure_image_{{ challenge }}.png"></div>' +
          '<input id="contact-security-challenge-question" name="contact-security-challenge-question" type="text">' +
        '</div>' +
        '<div class="form-field info-message">' +
          '<div id="contact-response-message"></div>' +
        '</div>' +
        '<div class="form-field save-link">' +
          '<a class="button" id="contact-submit">Submit</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';

nrvaug.templates.mainTmpl = Mustache.compile(main);
nrvaug.templates.meetingsTmpl = Mustache.compile(meetings);
nrvaug.templates.mailingListTmpl = Mustache.compile(mailingList);
nrvaug.templates.resourcesTmpl = Mustache.compile(resources);
nrvaug.templates.blogTmpl = Mustache.compile(blog);
nrvaug.templates.contactTmpl = Mustache.compile(contact);
