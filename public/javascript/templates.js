nrvaug.templates = {};

var main = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>Our Mission</h2>' +
      '<p class="blurb-content">Encourage better software development through agile practices.</p>' +
    '</div>' +
    '<div class="blurb">' +
      '<h2>Principles</h2>' +
      '<ul class="blurb-content">' +
        '<li class="icon-right-dir"><b>Discussions are open to all things agile</b></li>' +
        '<li class="icon-right-dir"><b>Allow the group to determine discussion topics</b></li>' +
        '<li class="icon-right-dir"><b>Include people from all aspects of software development</b></li>' +
        '<li class="icon-right-dir"><b>Meet on a monthly basis</b></li>' +
      '</ul>' +
    '</div>' +
  '</div>';

var meetings = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>Meetings</h2>' +
      '<section>' +
        '<p class="first">We hold monthly meetings, generally the second Tuesday of every month from 6:00pm - 8:00pm.</p>' +
        '<p class="blurb-content">Our next meeting will be on Tuesday August 13th, from 6:00pm - 8:00pm at <a class="info-link" href="http://www.techpad.org/" target="blank">TechPad</a> in downtown Blacksburg. Daniel Markham will be talking with us about "Agile / Scrum, going from 3 to 150. Scaling without bogging down." We\'ll discuss how to work in a really small group, how to scale out to 30 developers, then how to push past 100. We\'ll also hit on technical practices and discuss how they work at various scales.</p>' +
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
      '<p class="blurb-content">Fill out the form below to keep up to date with Agile NRV.</p>' +
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
          '<p class="blurb-content">We discussed a few different problems in working with remote members including communication, tracking work, and working with a remote product owner. When you have remote team members, it\’s important to make every effort to simulate face-to-face communication. Trying to hold meetings with a large number of people over the phone will result in disengagement from the meeting for those workers who aren\’t present. They miss out on the subtle nuances on an in-person conversation, not to mention it can be very difficult to hear multiple people speaking over a conference call. Make it a point to invest in high quality microphones, speakers, and cameras for video conferencing. Try to simulate being with remote members as much as technology will allow you.</p>' +
          '<p class="blurb-content">Having a remote product owner can be especially difficult when the development team has questions around the stories on which they are currently working. Team members may bottle their questions up until standup, sitting idly, rather than getting answers now so they can continue their work. Team members will also miss out on another benefit of sitting together, and that is communication being available to everyone. When everyone sits together, you get to hear all of the conversations and decide for yourself what is important for you to participate in or ignore. So we need to try and make our communication available to everyone. Mailing lists can help with this, but how can team members quickly decide if the content is really important to them or not. One technique is to include recipients who need to respond in the TO line of the email and loop in everyone else by including them in the CC line. This is a very simple rule that people can use to make a quick decision if they want to be involved in a conversation or not. Now as far as not getting immediate answers from that remote product owner, another quick and easy solution is to have a persistent chat room where all members of the team participate. Not only will this help with getting faster feedback from a remote product owner, but making the effort to hold a majority of your conversations in the chat room will also keep other remote members involved in the day-to-day work as well.</p>' +
          '<p class="blurb-content">Tracking work is best done on a whiteboard with index cards and post-it notes. The whiteboard becomes an information radiator for everyone on the team, and even for co-workers passing through the workspace. Index cards and post-it notes also seem less permanent than something electronic, making it seem like it\’s easier to change direction if necessary. But remote members can\’t see the board, so what do you do? You have a couple of different options here, and you really have to decide what works best and makes the most sense for your team. You can use an electronic tracking tool, preferably something that can mimic a whiteboard such as Trello, and also use a whiteboard. The problem here is that you have to make sure you are updating cards in both places, but the benefits might outweigh the costs. The other option is to only use the electronic tool and to have that tool on display on a large TV in the team\’s workspace. Both of these options allow remote members to have access to the “whiteboard” while also still providing an information radiator to everyone else on the team.</p>' +
          '<p class="blurb-content">When deciding what tools to use, it\’s important to remember people, then process, then tools. You need to get your people together and figure out the simplest thing that is going to work for them and make their work easier. The tools come later as a supplement to the process you have created on your team. Don\’t let your tools dictate your process, let the people dictate their own process.</p>' +
        '</section>' +
        '<section>' +
          '<h3>Agile Coaching / Crash Course in Agile</h3>' +
          '<p class="first">How do you teach agile software development to a team who is new to agile, and how do you teach agile to members who are new to the team? When starting with a new team, it\’s always best to start with the basics and follow all of the rules. As time evolves the team will evolve the process and do what works best for the them. But a new team doesn\’t know what works best for them, and they need to be able to understand the basics of working on agile team, and why we work the way that we do, in order to decide what will work best for their team. So take Scrum for software development teams, or take eXtreme Programming, and follow those processes exactly. If you are the one introducing agile to the team, make sure you understand the values and principles of the agile manifesto and how they guide the decisions we make around our process and find opportunities to reinforce those values during development.</p>' +
          '<p class="blurb-content">When introducing new team members, a good technique to use is to introduce the process in context. Pick a feature that your team has recently completed and take them through the lifecycle of that feature. Introduce the different roles along the way, emphasize why your team works the way it does, being sure to use the agile values and principles to back up your reasoning, or just back it up with whatever reasons your team has for working the way it does.</p>' +
        '</section>' +
        '<section>' +
          '<h3>Working with Hard Deadlines</h3>' +
          '<p class="first">Hard deadlines are often present in software development, and what that usually means is that someone wants everything to be done by a certain date. Agile planning works around the assumption that we can only go as fast as we can go. Sure we can change things in our process along the way to help us work faster, but things are also going to happen that slow us down. That\’s why an agile plan is a living plan, it is not set in stone. When working with a hard deadline, it\’s important to establish what the minimum viable product (MVP) is. Once you have the MVP established, that functionality becomes the highest priority for the team, and you work towards completing that. If there\’s time left after the MVP is complete, then you can work on polishing up and enhancing the functionality. The MVP can also change, and that\’s why it\’s critical to always look at the plan and adjust it accordingly. These adjustments take place in sprint plannings, retrospectives, standups, even in day-today work as problems arise or work is completed ahead of time. Be transparent in your progress so the team has the ability and information necessary to make the best decisions they can on what is the most important thing to be working on right now. There are three aspects to planning a project, and they are scope, time, and budget (price of development, funds available, etc). You get to fix two of these things, and with a hard deadline time is going to be fixed, and the budget is usually also fixed (event if it isn\’t, throwing people at the problem or working insane hours won\’t work anyways). These leaves you with one thing that is flexible, and that is scope. So decide what\’s most important, and do that first.</p>' +
        '</section>' +
      '</blog>' +
    '</div>' +
    '<div class="blurb">' +
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
          '<p class="blurb-content">There are many different types of developers at many different levels of experience, both in programming and in agile development. Our discussion focused on the cowboy coder; the developer who is an excellent programmer, but works outside the confines of any process, someone who sees the potential improvements from a small task and takes the initiative in making those changes, thus vastly increasing the scope of a task. Wanting to continuously improve the code base is a good mindset, but it has to be done intelligently and safely, through small, incremental changes.</p>' +
          '<p class="blurb-content">Working incrementally and making small, continuous changes are usually some of the core values your team will have, so how do you show new members this is something your team values? You let your process do the talking. An easy way to contain the scope of changes made is through code reviews. Performing code reviews on every single change that will go into master (or trunk) is an excellent way to show off your team\'s values. Not only can you control scope and demonstrate how your team values small, incremental changes, but you will also see how your team values quality. The code is what the team lives in and should be kept very clean. This should shine through in comments during code reviews, showing off the team\'s attention to coding standards, simplicity, testing (quality), and readability.</p>' +
          '<p class="blurb-content">Values are part of the team culture, and it\'s important to note that culture (and values) is something everyone on the team owns. Given that, everyone on the team should perform code reviews (collective code ownership, another value!). This just reinforces the values your team has by getting more team members to own and live those values.</p>' +
          '<p class="blurb-content">If your team is full of clean coders and clean code is something they are passionate about, watching the <a href="http://www.cleancoders.com/" class="info-link" target="blank">Clean Coders</a> video series together as a team is another excellent way to show off your team\'s values. The important part here is that everyone watches these together as a team, not just the new members.</p>' +
          '<p class="blurb-content">So when you want to teach new members the way your team works, just use the process, and get the whole team involved.</p>' +
        '</section>' +
        '<section>' +
          '<h3>Scaling Continuous Integration / Deployment</h3>' +
          '<p class="first">Reliable continuous deployment can be difficult to achieve, but once your team reaches it, it is an excellent practice to maintain. It is much easier to get to continuous deployment with a small team, but how do you scale it as the team grows?</p>' +
          '<p class="blurb-content">The ideal state in continuous deployment is that every change that is merged into master (trunk) is the only change that goes through the build pipeline and is deployed to production. With a team of ~20 developers, this becomes very difficult to control, as you could have all 20 developers trying to merge and deploy their code at the same time.</p>' +
          '<p class="blurb-content">Now, from this discussion, there are some issues with the build pipeline in terms of test instability that cause changes to get backed up, thus making the situation of multiple team members trying to merge and deploy at once even worse, as changes continue to pile on top of one another. The solution discussed was to have a queueing system for merges.</p>' +
          '<p class="blurb-content">Queueing can be done in a couple of different ways. Usually you won\'t have a single team of ~20 developers, rather you will have multiple sub-teams of 3-5 developers. In this case, you can have a queue within each team. Having a physical token that team members need to have in their possession in order to merge and deploy is a great tool for enforcing the queue.</p>' +
          '<p class="blurb-content">Queues within each team help, but they only get you down to at most having the total number of sub-teams trying to merge and deploy at once. So what is needed then is a single queue for everyone involved. There are ways to automate a queue in a build system, but the first step should be implementing a manual process. Something lightweight that\'s easy to implement and test. Then you can automate it if it\'s working. The queue will also magnify any pain points in the deployment pipeline, as team members will have to wait longer to merge and deploy their code. This is a good thing! It will cause the team to make the process faster and fix instabilities.</p>' +
        '</section>' +
        '<section>' +
          '<h3>Planning Research Work (Spikes)</h3>' +
          '<p class="first">Sometimes we don\'t fully understand what changes need to be made for new functionality, or we don\'t know the feasibility of proposed new functionality. In these cases the team needs to perform spikes to better understand the new functionality before they can do any planning around it. The problem is, how do you keep these spikes from eating up all of your development time?</p>' +
          '<p class="blurb-content">The simplest solution is to timebox spikes. Setting a fixed limit on a spike is a way to ensure we do the minimal amount of research necessary in order to better plan the upcoming work. We don\'t need to know how to implement it, we just need to know if it is possible and what is the scope of the work.</p>' +
          '<p class="blurb-content">Sometimes these spikes are large and can\'t be contained within a small timebox. This is really a symptom of a spike that is too vague. Just like a user story, a spike needs to have acceptance criteria, or some measurable goals that team members can check off so they know when they are done with a spike. Spikes can also be broken down into smaller spikes. If the scope of a spike will take longer than two days to investigate, split it into smaller spikes that make sense. Remember that we work in small increments, and this applies to almost everything we do, including research.</p>' +
        '</section>' +
      '</blog>' +
    '</div>' +
  '</div>';

nrvaug.templates.mainTmpl = Mustache.compile(main);
nrvaug.templates.meetingsTmpl = Mustache.compile(meetings);
nrvaug.templates.mailingListTmpl = Mustache.compile(mailingList);
nrvaug.templates.resourcesTmpl = Mustache.compile(resources);
nrvaug.templates.blogTmpl = Mustache.compile(blog);
