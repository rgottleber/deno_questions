export async function getRandomQuestion() {
  const questions = await getQuestions();
  const num = Math.floor(Math.random() * questions.data.length);
  const question = questions.data[num];
  return {
    question,
  };
}

export async function getQuestions() {
  return {
    data: [
      {
        question:
          "When you are old, what do you think children will ask you to tell stories about?",
      },
      {
        question:
          "If you could switch two movie characters, what switch would lead to the most inappropriate movies?",
      },
      {
        question:
          "What animal would be cutest if scaled down to the size of a cat?",
      },
      {
        question:
          "What inanimate object would be the most annoying if it played loud upbeat music while being used?",
      },
      {
        question:
          "When did something start out badly for you but in the end, it was great?",
      },
      { question: "What weird food combinations do you really enjoy?" },
      {
        question:
          "How would your country change if everyone, regardless of age, could vote?",
      },
      { question: "What are some red flags to watch out for in daily life?" },
      {
        question:
          "If your job gave you a surprise three day paid break to rest and recuperate, what would you do with those three days?",
      },
      { question: "Where do you get your news?" },
      {
        question:
          "What movie can you watch over and over without ever getting tired of?",
      },
      { question: "What’s wrong but sounds right?" },
      {
        question:
          "What’s the most epic way you’ve seen someone quit or be fired?",
      },
      {
        question:
          "If you couldn’t be convicted of any one type of crime, what criminal charge would you like to be immune to?",
      },
      { question: "What social stigma does society need to get over?" },
      { question: "What’s the most creative use of emojis you’ve ever seen?" },
      {
        question:
          "What’s something that will always be in fashion, no matter how much time passes?",
      },
      {
        question:
          "What actors or actresses play the same character in almost every movie or show they do?",
      },
      {
        question:
          "In the past people were buried with the items they would need in the afterlife, what would you want buried with you so you could use it in the afterlife?",
      },
      {
        question:
          "What’s the best / worst practical joke that you’ve played on someone or that was played on you?",
      },
      { question: "Who do you go out of your way to be nice to?" },
      { question: "Where do you get most of the decorations for your home?" },
      {
        question:
          "What food have you never eaten but would really like to try?",
      },
      { question: "What food is delicious but a pain to eat?" },
      { question: "Who was your craziest / most interesting teacher?" },
      { question: "What 􏰀old person􏰁 things do you do?" },
      { question: "What was the last photo you took?" },
      { question: "What is the most amazing slow motion video you’ve seen?" },
      { question: "Where are some unusual places you’ve been?" },
      { question: "Which celebrity do you think is the most down to earth?" },
      {
        question:
          "What would be the worst thing to hear as you are going under anesthesia before heart surgery?",
      },
      { question: "What’s the spiciest thing you’ve ever eaten?" },
      { question: "What’s the most expensive thing you’ve broken?" },
      {
        question:
          "What obstacles would be included in the World’s most amazing obstacle course?",
      },
      { question: "What makes you roll your eyes every time you hear it?" },
      {
        question:
          "What do you think you are much better at than you actually are?",
      },
      { question: "Should kidneys be able to be bought and sold?" },
      {
        question:
          "When was the last time you got to tell someone 􏰀I told you so.􏰁?",
      },
      { question: "What would a world populated by clones of you be like?" },
      { question: "What riddles do you know?" },
      { question: "What’s your cure for hiccups?" },
      {
        question:
          "What invention doesn’t get a lot of love, but has greatly improved the world?",
      },
      { question: "What’s something you really resent paying for?" },
      { question: "Do you think that aliens exist?" },
      { question: "What are you currently worried about?" },
      {
        question:
          "What’s the most interesting building you’ve ever seen or been in?",
      },
      { question: "What mythical creature do you wish actually existed?" },
      { question: "What are your most important rules when going on a date?" },
      { question: "How do you judge a person?" },
      {
        question:
          "If someone narrated your life, who would you want to be the narrator?",
      },
      { question: "What was the most unsettling film you’ve seen?" },
      {
        question:
          "What unethical experiment would have the biggest positive impact on society as a whole?",
      },
      {
        question:
          "When was the last time you were snooping, and found something you wish you hadn’t?",
      },
      { question: "Which celebrity or band has the worst fan base?" },
      { question: "What are you interested in that most people aren’t?" },
      {
        question:
          "If you were given a PhD degree, but had no more knowledge of the subject of the degree besides what you have now, what degree would you want to be given to you?",
      },
      {
        question:
          "What smartphone feature would you actually be excited for a company to implement?",
      },
      {
        question:
          "What’s something people don’t worry about but really should?",
      },
      { question: "What movie quotes do you use on a regular basis?" },
      {
        question:
          "Do you think that children born today will have better or worse lives than their parents?",
      },
      { question: "What’s the funniest joke you know by heart?" },
      {
        question:
          "When was the last time you felt you had a new lease on life?",
      },
      {
        question:
          "What’s the funniest actual name you’ve heard of someone having?",
      },
      {
        question:
          "Which charity or charitable cause is most deserving of money?",
      },
      {
        question:
          "What TV show character would it be the most fun to change places with for a week?",
      },
      { question: "What was cool when you were young but isn’t cool now?" },
      {
        question:
          "If you were moving to another country, but could only pack one carry-on sized bag, what would you pack?",
      },
      { question: "What’s the most ironic thing you’ve seen happen?" },
      {
        question: "If magic was real, what spell would you try to learn first?",
      },
      {
        question:
          "If you were a ghost and could possess people, what would you make them do?",
      },
      {
        question:
          "What goal do you think humanity is not focused enough on achieving?",
      },
      { question: "What problem are you currently grappling with?" },
      {
        question:
          "What character in a movie could have been great, but the actor they cast didn’t fit the role?",
      },
      { question: "What game have you spent the most hours playing?" },
      {
        question:
          "What’s the most comfortable bed or chair you’ve ever been in?",
      },
      { question: "What’s the craziest conversation you’ve overheard?" },
      { question: "What’s the hardest you’ve ever worked?" },
      {
        question:
          "What movie, picture, or video always makes you laugh no matter how often you watch it?",
      },
      {
        question:
          "What artist or band do you always recommend when someone asks for a music recommendation?",
      },
      {
        question:
          "If you could have an all-expenses paid trip to see any famous world monument, which monument would you choose?",
      },
      {
        question:
          "If animals could talk, which animal would be the most annoying?",
      },
      { question: "What’s the most addicted to a game you’ve ever been?" },
      { question: "What’s the coldest you’ve ever been?" },
      {
        question:
          "Which protagonist from a book or movie would make the worst roommate?",
      },
      {
        question:
          "Do you eat food that’s past its expiration date if it still smells and looks fine?",
      },
      { question: "What’s the most ridiculous thing you have bought?" },
      { question: "What’s the funniest comedy skit you’ve seen?" },
      { question: "What’s the most depressing meal you’ve eaten?" },
      {
        question:
          "What tips or tricks have you picked up from your job / jobs?",
      },
      {
        question: "What outdoor activity haven’t you tried, but would like to?",
      },
      {
        question:
          "What songs hit you with a wave of nostalgia every time you hear them?",
      },
      {
        question:
          "What’s the worst backhanded compliment you could give someone?",
      },
      {
        question:
          "What’s the most interesting documentary you’ve ever watched?",
      },
      { question: "What was the last song you sung along to?" },
      {
        question:
          "What’s the funniest thing you’ve done or had happen while your mind was wandering?",
      },
      { question: "What app can you not believe someone hasn’t made yet?" },
      { question: "When was the last time you face palmed?" },
      {
        question:
          "If you were given five million dollars to open a small museum, what kind of museum would you create?",
      },
      {
        question:
          "Which of your vices or bad habits would be the hardest to give up?",
      },
      { question: "What really needs to be modernized?" },
      { question: "When was the last time you slept more than nine hours?" },
      {
        question:
          "How comfortable are you speaking in front of large groups of people?",
      },
      { question: "What’s your worst example of procrastination?" },
      { question: "Who has zero filter between their brain and mouth?" },
      { question: "What was your most recent lie?" },
      {
        question:
          "When was the last time you immediately regretted something you said?",
      },
      {
        question:
          "What would be the best thing you could reasonably expect to find in a cave?",
      },
      {
        question:
          "What did you think was going to be amazing but turned out to be horrible?",
      },
      {
        question:
          "What bit of trivia do you know that is very interesting but also very useless?",
      },
      {
        question:
          "What’s the silliest thing you’ve seen someone get upset about?",
      },
      { question: "What animal or plant do you think should be renamed?" },
      { question: "What was the best thing that happened to you today?" },
      { question: "What languages do you wish you could speak?" },
      { question: "What’s the most pleasant sounding accent?" },
      {
        question:
          "What’s something that everyone, absolutely everyone, in the entire world can agree on?",
      },
      { question: "What country is the strangest?" },
      { question: "What’s the funniest word in the English language?" },
      {
        question:
          "What’s some insider knowledge that only people in your line of work have?",
      },
      { question: "Who do you wish you could get back into contact with?" },
      {
        question:
          "How do you make yourself sleep when you can’t seem to get to sleep?",
      },
      {
        question:
          "If people receive a purple heart for bravery, what would other color hearts represent?",
      },
      { question: "What are some of the best vacations you’ve had?" },
      {
        question:
          "If there was a book of commandments for the modern world, what would some of the rules be?",
      },
      { question: "What’s the craziest video you’ve ever seen?" },
      { question: "What’s your 􏰀Back in my day, we...􏰁?" },
      {
        question:
          "If you could know the truth behind every conspiracy, but you would instantly die if you hinted that you knew the truth, would you want to know?",
      },
      {
        question: "What animal would be the most terrifying if it could speak?",
      },
      { question: "What’s the worst hairstyle you’ve ever had?" },
      {
        question:
          "What habit do you have now that you wish you started much earlier?",
      },
      {
        question:
          "If you were given one thousand acres of land that you didn’t need to pay taxes on but couldn’t sell, what would you do with it?",
      },
      { question: "What about the opposite sex confuses you the most?" },
      { question: "When was the last time you yelled at someone?" },
      { question: "What’s the opposite of a koala?" },
      {
        question:
          "What kinds of things do you like to cook or are good at cooking?",
      },
      { question: "What life skills are rarely taught but extremely useful?" },
      {
        question:
          "What movie universe would be the worst to live out your life in?",
      },
      {
        question:
          "If you could hack into any one computer, which computer would you choose?",
      },
      {
        question:
          "Who do you feel like you know even though you’ve never met them?",
      },
      { question: "What’s the most ridiculous animal on the planet?" },
      { question: "What’s the worst thing you’ve eaten out of politeness?" },
      {
        question:
          "What’s the most historic thing that has happened in your lifetime?",
      },
      {
        question:
          "What happens in your country regularly that people in most countries would find strange or bizarre?",
      },
      { question: "What has been blown way out of proportion?" },
      {
        question:
          "When was a time you acted nonchalant but were going crazy inside?",
      },
      { question: "What’s about to get much better?" },
      {
        question: "What are some clever examples of misdirection you’ve seen?",
      },
      { question: "What’s your funniest story involving a car?" },
      {
        question: "What would be the click-bait titles of some popular movies?",
      },
      {
        question:
          "If you built a themed hotel, what would the theme be and what would the rooms look like?",
      },
      {
        question:
          "What scientific discovery would change the course of humanity overnight if it was discovered?",
      },
      {
        question:
          "Do you think that humans will ever be able to live together in harmony?",
      },
      { question: "What would your perfect bar look like?" },
      { question: "What’s the scariest nonhorror movie?" },
      { question: "What’s the most amazing true story you’ve heard?" },
      {
        question: "What’s the grossest food that you just can’t get enough of?",
      },
      { question: "What brand are you most loyal to?" },
      {
        question:
          "What’s the most awkward thing that happens to you on a regular basis?",
      },
      {
        question:
          "If you had to disappear and start a whole new life, what would you want your new life to look like?",
      },
      { question: "What movie or book do you know the most quotes from?" },
      {
        question:
          "What was one of the most interesting concerts you’ve been to?",
      },
      { question: "Where are you not welcome anymore?" },
      { question: "What do you think could be done to improve the media?" },
      { question: "What’s the most recent show you’ve binge watched?" },
      { question: "What’s the worst movie trope?" },
      {
        question:
          "What’s a common experience for many people that you’ve never experienced?",
      },
      { question: "What are some misconceptions about your hobby?" },
      { question: "What’s the smartest thing you’ve seen an animal do?" },
      { question: "What’s the most annoying noise?" },
      { question: "What’s your haunted house story?" },
      { question: "What did you Google last?" },
      {
        question: "What’s the dumbest thing someone has argued with you about?",
      },
      {
        question:
          "If money and practicality weren’t a problem, what would be the most interesting way to get around town?",
      },
      { question: "What’s the longest rabbit hole you’ve been down?" },
      { question: "What’s the saddest scene in a movie or TV series?" },
      { question: "What’s the most frustrating product you own?" },
      { question: "What inconsequential super power would you like to have?" },
      { question: "What qualities do all your friends have in common?" },
      { question: "What odd smell do you really enjoy?" },
      { question: "What’s the coolest animal you’ve seen in the wild?" },
      {
        question:
          "What’s the best lesson you’ve learned from a work of fiction?",
      },
      { question: "What food do you crave most often?" },
      { question: "Who in your life has the best / worst luck?" },
      {
        question:
          "What fashion trend makes you cringe or laugh every time you see it?",
      },
      {
        question:
          "What’s your best story of you or someone else trying to be sneaky and failing miserably?",
      },
      { question: "Which apocalyptic dystopia do you think is most likely?" },
      {
        question:
          "If you had a HUD that showed three stats about any person you looked at, what three stats would you want it to show?",
      },
      { question: "What’s the funniest thing you’ve seen a kid do?" },
      { question: "What’s your secret talent?" },
      {
        question:
          "What’s the best way you or someone you know has gotten out of a ticket / trouble with the law?",
      },
      {
        question:
          "Tear gas makes people cry and laughing gas makes people giggle, what other kinds of gases do you wish existed?",
      },
      { question: "What’s the most beautiful beach you’ve been to?" },
      {
        question:
          "What’s the most anxiety inducing thing you do on a regular basis?",
      },
      {
        question:
          "What’s something that everyone agrees we should change, but somehow it never changes?",
      },
      { question: "What trend are you tired of?" },
      { question: "What’s incredibly cheap and you would pay way more for?" },
      { question: "What’s your grossest bug story?" },
      {
        question:
          "What would the adult version of an ice-cream truck sell and what song would it play?",
      },
      { question: "What company do you despise?" },
      {
        question:
          "When was the most inappropriate time you busted out in laughter?",
      },
      { question: "What would be an accurate tag line for each month?" },
      { question: "What’s the most overrated product out on the market?" },
      { question: "What word do you always misspell?" },
      { question: "What naps are the most satisfying?" },
      {
        question:
          "What’s the weirdest thing you’ve found lying on the ground / side of the road?",
      },
      { question: "What’s the funniest TV show you’ve ever seen?" },
      { question: "What’s the most embarrassing story from your childhood?" },
      { question: "What animal is the most majestic?" },
      {
        question:
          "What’s something that everyone knows is true, but we don’t like to admit it?",
      },
      { question: "What’s the weirdest text or email you’ve gotten?" },
      { question: "What always cheers you up when you think about it?" },
      {
        question:
          "What sport could you play the longest in a televised game, without anyone discovering you aren’t a professional athlete?",
      },
      {
        question:
          "If you could talk to animals and they would understand you, but you couldn’t understand them, what would you do with that power?",
      },
      {
        question:
          "What’s the most boring sport, and what would you do to make it more exciting?",
      },
      { question: "What’s the creepiest tech out there?" },
      {
        question:
          "Who did you use to look up to, but they screwed up and you lost faith in them?",
      },
      {
        question:
          "What’s fine in small numbers but terrifying in large numbers?",
      },
      {
        question:
          "Do you like things to be carefully planned or do you prefer to just go with the flow?",
      },
      { question: "What animal would you most like to eat?" },
      {
        question:
          "What fictional characters have you had a crush on over the years?",
      },
      {
        question:
          "What would the box with all your hopes and dreams inside look like?",
      },
      { question: "What was the worst shopping experience you’ve ever had?" },
      {
        question:
          "What story you’ve heard has stayed with you and always disturbs you every time you think about it?",
      },
      {
        question:
          "What was the most important appointment or deadline you missed?",
      },
      {
        question:
          "If you were a clown themed super hero, what powers would you have?",
      },
      {
        question:
          "If you could airdrop anything you want, worth two million dollars or less, anywhere you want, what would you airdrop and where would you airdrop it?",
      },
      {
        question:
          "If you lived in a virtual reality world of your own creation, what would it look like?",
      },
      { question: "What escalated very quickly?" },
      {
        question:
          "What two things are terrible when separate but great when you put them together?",
      },
      { question: "What did you believe for way too long as a child?" },
      {
        question:
          "What big event do you think will happen soon that most people aren’t expecting?",
      },
      { question: "What still makes you cringe when you think back on it?" },
      { question: "What current trend makes no sense to you?" },
      {
        question:
          "If you owned a restaurant, what kind of food would it serve?",
      },
      {
        question:
          "Which celebrity is the most likely to have a collection of canes that are just for show?",
      },
      { question: "What’s the weirdest crush you’ve had?" },
      {
        question:
          "What do a lot of people have very strong opinions about, even though they know very little about it?",
      },
      { question: "What’s your go to casino game?" },
      { question: "An epic feast is held in your honor, what’s on the table?" },
      { question: "What’s your favorite holiday movie?" },
      { question: "Who is the most manipulative person you’ve ever met?" },
      { question: "Who is the most creative person you know?" },
      { question: "What’s the funniest pick up line you’ve heard?" },
      {
        question:
          "What seemingly innocent question makes you think 􏰀It’s a trap!􏰁?",
      },
      { question: "Howambitiousareyou?" },
      { question: "What did you like / dislike about where you grew up?" },
      {
        question:
          "What elements of pop culture will be forever tied in your mind to your childhood?",
      },
      { question: "What’s your good luck charm?" },
      { question: "What’s legal now, but probably won’t be in 25 years?" },
      {
        question:
          "Would you want the ability to hear the thoughts of people near you if you couldn’t turn the ability off?",
      },
      {
        question:
          "When was the last time you stayed up through the entire night?",
      },
      {
        question:
          "What’s something that people think makes them look cool, but actually has the opposite effect?",
      },
      { question: "What’s the oldest thing you own?" },
      { question: "What has someone borrowed but never given back?" },
      { question: "Where is the best place you’ve been for taking walks?" },
      {
        question:
          "If cartoon physics suddenly replaced real physics, what are some things you would want to try?",
      },
      { question: "What from the present will withstand the test of time?" },
      { question: "Who in your life is the worst at using technology?" },
      { question: "What’s the weirdest conversation you’ve eavesdropped on?" },
      {
        question:
          "What just around the corner tech are you eager to get your hands on?",
      },
      { question: "What was the darkest movie you’ve ever seen?" },
      {
        question:
          "What do you do when you hear something fall in the middle of the night while you are in bed?",
      },
      {
        question:
          "What outfit could you put together from clothes you own to get the most laughs?",
      },
      {
        question:
          "What’s the most disgusting sounding word in the English language?",
      },
      { question: "What was ruined because it became popular?" },
      { question: "What outdated slang do you use on a regular basis?" },
      { question: "What was the biggest realization you had about yourself?" },
      { question: "What’s your best example of easy come, easy go?" },
      { question: "What small change greatly improves a person’s appearance?" },
      { question: "What topic could you spend hours talking about?" },
      {
        question:
          "What happens regularly that would horrify a person from 100 years ago?",
      },
      {
        question:
          "What do a lot of people hope will happen but is just not going to happen?",
      },
      {
        question:
          "What’s the weirdest thing that has happened to you while working at your job?",
      },
      {
        question:
          "What questions would you like to ask a time traveler from 200 years in the future?",
      },
      { question: "Which way should toilet paper hang, over or under?" },
      {
        question:
          "What’s the most physically painful thing you’ve ever experienced?",
      },
      { question: "What horror story do you have from a job you’ve had?" },
      { question: "What’s the most rage inducing game you’ve ever played?" },
      { question: "What’s the biggest overreaction you’ve ever seen?" },
      { question: "What are some of the most common misconceptions?" },
      { question: "What job doesn’t exist now but will exist in the future?" },
      { question: "What awful movie do you love?" },
      {
        question:
          "What normally delicious food gets ruined when you wrap it in a tortilla?",
      },
      { question: "What’s your best example of fake it till you make it?" },
      {
        question:
          "What were you completely certain of until you found out you were wrong?",
      },
      {
        question:
          "What’s something commonly done that gets progressively weirder the more you think about it?",
      },
      {
        question:
          "What’s the cutest thing you can imagine? Something so cute it’s almost painful.",
      },
      {
        question:
          "If you were given unlimited resources, how would you lure the worst of humanity into one stadium at the same time?",
      },
      { question: "What do you think about when you hear the word 􏰀classy􏰁?" },
      { question: "What near future predictions do you have?" },
      { question: "What do you need help with most often?" },
      {
        question:
          "What piece of 􏰀art􏰁 would you create if you had to pretend to be an artist and submit something to a gallery?",
      },
      { question: "What do you do to make the world a better place?" },
      {
        question:
          "What’s the best and worst thing about the country you are from?",
      },
      {
        question:
          "If you were in charge renaming things so that their names would be more accurate, what names would you come up with?",
      },
      { question: "What’s better broken than whole?" },
      { question: "What values are most important to you?" },
      { question: "What’s the best sandwich you’ve ever had?" },
      {
        question: "What’s the worst thing you ate from a fast food restaurant?",
      },
      { question: "What’s something that I don’t know?" },
      { question: "What profession doesn’t get enough credit or respect?" },
      { question: "What memory of yours feels real but is most likely false?" },
      { question: "What’s your 􏰀and then it got worse􏰁 story?" },
      {
        question:
          "What was the most amazing physical feat you’ve managed to pull off?",
      },
      {
        question:
          "What’s the most annoying thing about the social media platform you use most often?",
      },
      {
        question:
          "If you were hired to show tourists what life is really like where you live, what would you show them / have them do?",
      },
      {
        question:
          "What would be the most unsettling thing to keep occasionally finding around your house?",
      },
      { question: "What nicknames do you have for people in your life?" },
      {
        question:
          "What does the opposite sex do that you wish that you could do, but it’s not anatomically feasible or it’s socially frowned upon?",
      },
      { question: "How much do you plan / prepare for the future?" },
      { question: "What do you hate most and love most about your car?" },
      {
        question:
          "What weird potato chip flavor that doesn’t exist would you like to try?",
      },
      { question: "What’s the silliest thing you’ve convinced someone of?" },
      {
        question:
          "How much do you think names affect the outcomes of people’s lives?",
      },
      {
        question:
          "What product or service is way more expensive than it needs to be?",
      },
      { question: "What’s the shadiest thing you’ve seen someone do?" },
      {
        question:
          "What was the last situation where some weird stuff went down and everyone acted like it was normal, and you weren’t sure if you were crazy or everyone around you was crazy?",
      },
      { question: "What did you eat so much of that now you hate it?" },
      {
        question: "What are some of the dumbest lyrics you’ve heard in a song?",
      },
      { question: "Where’s the line between soup and cereal?" },
      { question: "What word do you always mispronounce?" },
      { question: "What do you think you do better than 90% of people?" },
      {
        question:
          "What would be the worst food to be liquefied and drunk through a straw?",
      },
      {
        question:
          "What’s the weirdest thing about modern life that people just accept as normal?",
      },
      {
        question:
          "How much of your body would you cybernetically enhance if you could?",
      },
      {
        question:
          "If you wanted to slowly drive a roommate insane using only notes, what kind of notes would you leave around the house?",
      },
      {
        question:
          "If you had a giraffe that you needed to hide, where would you hide it?",
      },
      { question: "What’s the clumsiest thing you’ve done?" },
      { question: "What songs do you only know the chorus to?" },
      {
        question:
          "Think of a brand, now what would an honest slogan for that brand be?",
      },
      {
        question:
          "What’s something common from your childhood that will seem strange to future generations?",
      },
      { question: "What’s the most amazing place in nature you’ve been?" },
      { question: "What’s quickly becoming obsolete?" },
      {
        question: "Where is the most uncomfortable place you have ever slept?",
      },
      { question: "What’s the most annoying animal you’ve encountered?" },
      {
        question:
          "What’s your best example of correlation not equaling causation?",
      },
      {
        question:
          "In what situations, do you wish you could throw down a smoke bomb and disappear?",
      },
      { question: "When was the last time you were hopelessly lost?" },
      {
        question:
          "What songs do you feel compelled to sing along with when you hear them, even if you don’t totally know all the words?",
      },
      {
        question:
          "What product do you wish a company would make a 􏰀smart􏰁 version of?",
      },
      { question: "What two films would you like to combine into one?" },
      {
        question:
          "As a child, what did you think would be awesome about being an adult, but isn’t as awesome as you thought it would be?",
      },
      { question: "When’s censorship warranted?" },
      { question: "What’s the most boring super hero you can come up with?" },
      {
        question: "What would be some of the downsides of certain superpowers?",
      },
      { question: "What word is a lot of fun to say?" },
      {
        question: "What current trend do you hope will go on for a long time?",
      },
      {
        question:
          "What actors or actresses can’t play a different character because they played their most famous character too well?",
      },
      { question: "Where’s your go to restaurant for amazing food?" },
      { question: "What’s something that all your friends agree on?" },
      { question: "What’s your best story from a wedding?" },
      { question: "What’s are some of your Pavlovian responses?" },
    ],
  };
}
