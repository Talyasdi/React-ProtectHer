export const script = [
  {
    id: "BOT/intro",
    message: "Hello there! How can I help you today?",
    trigger: "CHOICES/intro"
  },
  {
    id: "CHOICES/intro",
    options: [
      { label: "I would like to get information", trigger: "BOT/1" },
      { label: "I would like to check suspecious profile", trigger: "BOT/2" }
    ]
  },
  //option 1
  {
    id: "BOT/1",
    options: [
      { label: "Get tips about safety online", trigger: "BOT/1a" },
      { label: "Know more about cyberbullying", trigger: "BOT/1b" },
      { label: "Access to guides regarding maintaining online privacy and reporting content", trigger: "BOT/1c"},
      { label: "Identify mental stress signs", trigger: "BOT/1d" },
      { label: "Sexualty and body image online", trigger: "BOT/1e"}
    ] 
      
  },
  //option 1a
  {
    id: "BOT/1a",
    component:(
      <div>
        <p>
        1. Protect Personal Information: Be cautious about sharing personal information online, such as your full name, address, phone number, school name, or photos. Avoid posting sensitive details that could be used by strangers to identify or contact you.<br/>

2. Use Privacy Settings: Take advantage of privacy settings on social media platforms and websites to control who can view your profile, posts, and information. Review and adjust these settings regularly to ensure your privacy and security online.<br/>

3. Be Mindful of Online Friends: Be selective about accepting friend requests or adding people to your online networks. Only connect with individuals you know and trust in real life. Remember that not everyone online is who they claim to be.<br/>

4. Think Before You Click: Exercise caution when clicking on links, downloading files, or opening attachments from unknown sources. These actions could lead to malware infections, phishing scams, or exposure to inappropriate content. When in doubt, verify the source or consult a trusted adult.<br/>

5. Speak Up About Concerns: If you encounter cyberbullying, inappropriate content, or suspicious behavior online, don't hesitate to speak up and seek help. Talk to a parent, teacher, or trusted adult about your concerns. Reporting harmful content or abusive behavior can help protect yourself and others from potential harm<br/>
        </p>
      </div>
    ),
    trigger: "BOT/intro"
  },
  //option 1b
  {
    id: "BOT/1b",
    options: [
      { label: "What is it?", trigger: "BOT/1b1" },
      { label: "How to deal with it?", trigger: "BOT/1b2" },
    ],
    trigger: "BOT/intro"
  },
  //option 1b1
  {
    id: "BOT/1b1",
    component: (
    <div> 
    <p>Cyberbullying refers to the use of electronic communication, such as social media, websites, or text messages, to intimidate, harass, or target an individual or group. It can take various forms, including sending hurtful or threatening messages, spreading rumors online, sharing embarrassing or private information without consent, or excluding someone from online groups or activities.<br/>

Cyberbullying can have serious consequences for the victim's mental health, leading to feelings of fear, anxiety, depression, and even thoughts of suicide. It can also negatively impact academic performance, social relationships, and overall well-being.<br/>

According to the National Institute of Child Health and Human Development (NICHD), cyberbullying affects millions of adolescents and teenagers worldwide, highlighting the urgent need for awareness, prevention, and intervention strategies.<br/>

It's crucial for parents, educators, and communities to work together to address cyberbullying effectively by promoting digital literacy, fostering empathy and respect online, and providing support to those affected.
 
    </p>
    </div>
  ),
  trigger: "BOT/intro"
  },
  //option 1b2
  {
    id: "BOT/1b2",
    component: (
    <div> 
    <p>
    1. Stay Calm and Don't Respond: It's essential not to retaliate or engage with the cyberbully. Responding may escalate the situation or provide them with the attention they seek.<br/>

2. Save Evidence: Keep records of the harassing messages, posts, or images as evidence. This documentation can be crucial if you need to report the cyberbullying to authorities or website administrators.<br/>

3. Block the Bully: Most social media platforms and messaging apps allow users to block or mute individuals. Blocking the bully can help prevent further harassment.<br/>

4. Reach Out for Support: Talk to a trusted adult, such as a parent, teacher, or counselor, about what you're experiencing. They can provide guidance, support, and help you navigate the situation.<br/>

5. Report the Bullying: Many social media platforms and websites have mechanisms for reporting harassment and cyberbullying. Use these tools to report the behavior to site administrators or moderators.<br/>

6. Protect Your Privacy: Review your privacy settings on social media and adjust them to control who can see your posts and information. Limiting access to your profile can reduce the likelihood of future harassment.<br/>

7. Seek Professional Help if Needed: If cyberbullying is causing significant distress or affecting your mental health, consider reaching out to a mental health professional for support and guidance.<br/>

Remember, dealing with cyberbullying can be challenging, but you're not alone. Don't hesitate to seek help from trusted individuals and resources
    </p>
    </div>
  ),
  trigger: "BOT/intro"
  },
  //option 1c
  {
    id: "BOT/1c",
    options: [
      { label: "Guides regarding maintaining online privacy", trigger: "BOT/1c1" },
      { label: "Guides about reporting and removing content ", trigger: "BOT/2c1" },
    ]
  },
  //option 1d
  {
    id: "BOT/1d",
    options: [
      { label: "Red lights", trigger: "BOT/1d1" },
      { label: "Do's and Dont's", trigger: "BOT/1d2" },
    ],
    trigger: "BOT/intro"
  },
  //option 1d1
  {
    id: "BOT/1d1",
    component: (
      <div> 
        <p>
        1. Social change: reduction in the scope of social events and meetings in which the child takes part.<br/>
2. Extreme change in behavior: changes in sleeping, eating and temperament habits (apathy or irritability).<br/>
3. Low frustration threshold: tantrums or crying that are not adapted to the situation.<br/>
4. Signs of depression: general indifference or lack of interest in things the child likes.<br/>
5. Decrease in academic motivation: does the child go to school happily, what about his grades?<br/>
6. Multiple absences from school: sometimes under the pretext of various illnesses.<br/>
7. Excessive dependence on an adult or developmental regression.<br/>
8. Extreme seclusion.<br/>
From Gilad Han in Among the Ringtones - a website of Matach and the teachers' union.
        </p>
        </div>
        ),
      trigger:"BOT/intro"
   },
  //option 1d2
  {
    id: "BOT/1d2",
    component: (
      <div> 
        <p>
        1.	Encourage Open Communication: <br/>
	Encourage your child to share any changes in behavior and reassure them that you're there to listen and provide support.<br/>
	Spending quality time and showing care can make them feel less isolated and more supported.<br/>
2.	Investigate the Situation:<br/>
  Talk to your child to understand the situation, including who is involved and how it started.<br/>
	Identify if other children are also affected and help your child form alliances with supportive peers.<br/>
3.	Identify Supportive Figures:<br/>
	Determine who the trusted adults are for your child at school, individuals who can offer help and support while also being trusted and respected by your child.<br/>
4.	Share Personal Experiences:<br/>
	Consider sharing personal stories of overcoming similar challenges with the child's class, either through meetings with parents or discussions led by teachers.<br/>
5.	Facilitate Classroom Discussion:<br/>
	Encourage the school counselor or teacher to facilitate a discussion circle in the class, allowing students to openly address the issue and propose solutions collectively.<br/>
6.	Collaborate with School Staff:<br/>
	Work collaboratively with the educational team instead of directing anger towards them. True cooperation is essential in effectively addressing the situation.<br/>
7.	Empower the Child:<br/>
  Involve the child in decision-making processes and empower them to take an active role in determining how to respond to the situation.<br/>
	Avoid encouraging violent reactions, as this can escalate the problem and lead to further harm.<br/>

From Gilad Han in Among the ringtones - a website of Matach and the teachers union
        </p>
        </div>
        ),
      trigger:"BOT/intro"
   },
  //option 1e
  {
    id: "BOT/1e",
    options: [
      { label: "Grooming online", trigger: "BOT/1e1" },
      { label: "Body image online", trigger: "BOT/1e2" },
      { label: "Misinformation about relationships", trigger: "BOT/1e3" },
      { label: "Expertise center ", trigger: "BOT/1e4" },
      { label: "Red lights", trigger: "BOT/1e5" },
      { label: "Why teenagers don't tell about sexual abuse?", trigger: "BOT/1e6" },
    ]
  },
//1e1
  {
    id: "BOT/1e1",
    component: (
      <div> 
        <a href="https://www.wtb.org.il/grooming-dont-fall-in-the-net/">Grooming-Don't fall in the net</a>
      </div>
    ),
    trigger: "BOT/intro"
  },
//1e2
{
  id: "BOT/1e2",
  component: (
    <div> 
      <a href="https://www.wtb.org.il/journey-of-body-image-and-the-net/">About body image and the net</a>
    </div>
  ),
  trigger: "BOT/intro"
},
//1e3
{
  id: "BOT/1e3",
  component: (
    <div> 
      <a href="https://www.wtb.org.il/false-information-online-relationships/">About misleading information online about relationships</a>
    </div>
  ),
  trigger: "BOT/intro"
},
//1e4
{
  id: "BOT/1e4",
  component: (
    <div> 
      <a href="https://www.wtb.org.il/its-your-body/">Girls and young women's body expertise center of the Women's Body Association</a>
    </div>
  ),
  trigger: "BOT/intro"
},
//1e5
{
  id: "BOT/1e5",
  component: (
    <div> 
    <p>
  Red signs – avoidance:<br/>
    1. A sharp change in behavior<br/>
    2. Regression, convergence, withdrawal, uncharacteristic regulation<br/>
  Red signs - externalizing behavior:<br/>
    1.Extreme change in behavior. An extroverted child becomes an introvert and vice versa<br/>
    2.Sexual games and sexual knowledge that are not age appropriate<br/>
  Red signs - physical and bodily changes:<br/>
    1.Physical neglect<br/>
    2.Depression and/or suicidality<br/>
    (From the website "Meda Amin Al Min":https://www.minamin.org/nurot-adumot)
    </p>
    </div>
  ),
  trigger: "BOT/intro"
},
//1e6
{
  id: "BOT/1e6",
  component: (
    <div> 
    <p>
    1. Some do not understand that what happened to them is sexual abuse<br/>
    2. Fear that they will not be believed<br/>
    3. Threat by the offender<br/>
    4. Understanding of the explosive potential in the story and fear of what will happen following the disclosure<br/>
    5. A desire not to grieve the parents, especially when the attacker is a familiar, loved or close figure<br/>
    6. Self-blame for assault, "It's because of me" "I tempted him" etc.<br/>
    7. A feeling that "I deserve it" or that "that's the way it is"<br/>
    8. A feeling of exhaustion, lack of strength<br/>
    (From the website "Reliable information about sex")
    </p>
    </div>
  ),
  trigger: "BOT/intro"
},
  //options for 1c
  //1ca
  {
    id: "BOT/1c1",
    component: (
      <div> 
      <p>
        The Ministry of National Security:<br/>
        The National Headquarters for the Protection of Children on the Internet<br/>
        <a href="https://www.gov.il/he/Departments/Guides/report_content_to_social_networks">Reporting and removal of content on social networks</a>
        </p> 
      </div>
    ),
    trigger: "BOT/intro"
  },

  //1cb
  {
    id: "BOT/2c1",
    component: (
      <div> 
      <p>
        Department of Justice: <br/>
        The Authority for the Protection of Privacy<br/>
        <a href="https://www.gov.il/he/departments/guides/apps_guide">Guide to maintaining privacy on social networks</a>
        </p> 
       
      </div>
    ),
    trigger: "BOT/intro"
  },
  
  //option 2
  {
    id: "BOT/2",
    options: [
      { label: "Info about fake profile", trigger: "BOT/3a" },
      { label: "Info about impersonator  profile", trigger: "BOT/3b" },
      { label: "Checking suspicious profile in a resource of profiles", trigger: "BOT/3c" },
    ]
  },

//3a
{
  id: "BOT/3a",
  component: (
    <div> 
    <p>
    Fake profile:<br/>
A profile that presents a person who does not exist in order to make others connect with him for various purposes.<br/>
What is the difference between an impersonator profile and a fake profile?<br/>
A fake profile presents a person who does not exist and uses a false identity, while an impostor profile uses the details of another real person, and performs online activities under that person's name. Impersonation is a felony.<br/>

How can I tell if the profile is fake?<br/>
It is recommended to suspect a profile with these characteristics:<br/>
1. The profile picture usually looks professional and of higher quality than usual<br/>
2. A profile with low activity - rarely interacts with other users<br/>
3. Very little personal data<br/>
4. Too many or too few members<br/>
5. A small pool of photos and/or videos<br/>
6. Over-tagging of images.<br/>
From the Israeli Internet Association. https://www.isoc.org.il/netica/question-and-answers/online-scams/fake-profile 
      </p> 
     
    </div>
  ),
  trigger: "BOT/intro"
},
//3b
{
  id: "BOT/3b",
  component: (
    <div> 
    <p>
    Impersonator profile: <br/>
Impersonation is the false presentation of oneself, as another person, in order to remain anonymous while performing some action that can be performed under a false guise. It is important to emphasize that impersonation is a criminal offense.<br/>
How can I tell if someone is impersonating me online?<br/>
You can detect an impostor profile in two ways:<br/>
Search your name on the social network in Hebrew and English.<br/>
Receiving comments about things that you allegedly distributed online (in the case of impersonation, various contents and/or comments will be distributed on your behalf).<br/>
Are social networks working to prevent this phenomenon?<br/>
Social networks such as Facebook, Instagram and Twitter do not allow impersonating profiles, and request that you report them in these cases. Upon receiving the report, they may apply sanctions against the managers of these profiles, up to the permanent deletion of the profile.<br/>
From the Israeli Internet Association.  https://www.isoc.org.il/netica/question-and-answers/online-scams/imposter-profile 
      </p> 
     
    </div>
  ),
  trigger: "BOT/intro"
},
//3c
{
  id: "BOT/3c",
  component: (
    <div> 
    <p>
      The following link can check if the profile is suspecious, by checking its existence in several social media websites.
      <a href="https://checkusernames.com/">Checking if a profile is suspicious</a>
      </p> 
     
    </div>
  ),
  trigger: "BOT/intro"
},


    //go to start
  //{
  //   id: "BOT/StartOver",
  //   message: "Do you want to start again?",
  //   options: [
  //     { label: "Yes", trigger: "BOT/intro" },
  //     { label: "No", trigger: "BOT/end" },
  //   ]
  // },
  // //BOT-end
  // {
  //   id: "BOT/end",
  //   end: true
  // },
];

