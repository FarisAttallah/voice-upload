// Made by docs/voice/upload_site.py from the recording scripts. Do not edit by hand.
window.VOICE_LINES = [
 {
  "key": "boss",
  "name": "The Big Boss",
  "who": "The head of Brightside Staffing, face to face in his office. The intro, and his scenes between placements.",
  "folder": "Boss",
  "lines": [
   {
    "file": "Boss_01",
    "say": "Ah. Come in, come in. Close the door, please.",
    "note": "The door opens",
    "group": "The intro scene"
   },
   {
    "file": "Boss_02",
    "say": "Sit, sit. You're the new temp. Congratulations: you've been selected.",
    "note": "Needed since 2026-10-11: the camera sits down on it (docs/BOSS_INTRO.md)",
    "group": "The intro scene"
   },
   {
    "file": "Boss_03",
    "say": "Welcome to Brightside Staffing. We place people wherever people are needed.",
    "note": "",
    "group": "The intro scene"
   },
   {
    "file": "Boss_04",
    "say": "That's all we do. It keeps us very busy.",
    "note": "Optional",
    "group": "The intro scene"
   },
   {
    "file": "Boss_05",
    "say": "Your first placement is a diner. Customers come in, customers are served.",
    "note": "Says \"a diner\": a recording cannot know the placement's name",
    "group": "The intro scene"
   },
   {
    "file": "Boss_06",
    "say": "You and your crew take the orders, cook, plate and serve.",
    "note": "",
    "group": "The intro scene"
   },
   {
    "file": "Boss_07",
    "say": "Every few days, we'll review what you earned against a target.",
    "note": "No numbers, so the line survives retuning. \"We'll\" as recorded (2026-10-11)",
    "group": "The intro scene"
   },
   {
    "file": "Boss_08",
    "say": "Meet the target, and you stay. Miss it, and your file is updated.",
    "note": "",
    "group": "The intro scene"
   },
   {
    "file": "Boss_09",
    "say": "Don't mind the cameras. They're for your development.",
    "note": "Optional",
    "group": "The intro scene"
   },
   {
    "file": "Boss_10",
    "say": "Crews who finish their placements may be considered for a permanent position.",
    "note": "The carrot",
    "group": "The intro scene"
   },
   {
    "file": "Boss_11",
    "say": "Like mine.",
    "note": "Optional. Pats his chair: the permanent position is his chair (docs/STORY.md)",
    "group": "The intro scene"
   },
   {
    "file": "Boss_12",
    "say": "Now. Your contract. Just sign at the bottom.",
    "note": "Skipping the scene jumps here. \"Just\" as recorded (2026-10-11)",
    "group": "The intro scene"
   },
   {
    "file": "Boss_13",
    "say": "Wonderful. Welcome to the family.",
    "note": "After the HIRED stamp",
    "group": "The intro scene"
   },
   {
    "file": "Boss_14",
    "say": "Your shift starts now. Don't keep the customers waiting.",
    "note": "Then the diner loads",
    "group": "The intro scene"
   },
   {
    "file": "Boss_Wait_01",
    "say": "Take your time. We're timing it.",
    "note": "No signature after a while",
    "group": "The intro scene"
   },
   {
    "file": "Boss_Wait_02",
    "say": "The pen works. I checked.",
    "note": "Still no signature",
    "group": "The intro scene"
   },
   {
    "file": "Boss_NotNow",
    "say": "Of course. The offer stands. It always stands.",
    "note": "The player picks \"Not now\"",
    "group": "The intro scene"
   },
   {
    "file": "Boss_Late",
    "say": "Your crew has already clocked in. Let's be quick.",
    "note": "New 2026-10-11, draft. A friend joining a shift that has started hears this instead of Boss_14 (every player sees the scene once, docs/BOSS_INTRO.md)",
    "group": "The intro scene"
   },
   {
    "file": "Boss_Next1_01",
    "say": "Ah. Come in. Don't mind that. It's just the diner.",
    "note": "He swivels round and switches off the screen. Light, a little caught out",
    "group": "Scene 1: after the diner"
   },
   {
    "file": "Boss_Next1_02",
    "say": "Every review passed. Head office is delighted.",
    "note": "You sit. Pleased for you",
    "group": "Scene 1: after the diner"
   },
   {
    "file": "Boss_Next1_03",
    "say": "Everyone gets reviewed. It's how we look after people.",
    "note": "New. Hands together, smiling. Kindly, like a reassurance",
    "group": "Scene 1: after the diner"
   },
   {
    "file": "Boss_Next1_04",
    "say": "Your next placement is an office. Lovely place. Nobody there has ever left.",
    "note": "He slides the contract across. A big smile, as good news",
    "group": "Scene 1: after the diner"
   },
   {
    "file": "Boss_Next1_05",
    "say": "Your file's up to date. Lovely photo, by the way.",
    "note": "New. Taps the crew's folder. Friendly, in passing",
    "group": "Scene 1: after the diner"
   },
   {
    "file": "Boss_Next1_06",
    "say": "Same terms as before. Sign, and off you go.",
    "note": "You sign",
    "group": "Scene 1: after the diner"
   },
   {
    "file": "Boss_Next1_07",
    "say": "They're expecting you at half eight.",
    "note": "New. Already back at his paperwork, not looking up",
    "group": "Scene 1: after the diner"
   },
   {
    "file": "Boss_NextWait",
    "say": "Your next placement isn't ready yet. We'll call you.",
    "note": "Said instead of _04 when the next placement is not out yet. Polite, closing the meeting",
    "group": "Scene 1: after the diner"
   }
  ]
 },
 {
  "key": "diner-manager",
  "name": "The Diner Manager",
  "who": "The diner's manager, over the ceiling speaker, and in person on review evenings.",
  "folder": "DinerManager",
  "lines": [
   {
    "file": "Diner_Hello",
    "say": "Hey, everyone, I'm your manager. Welcome aboard.",
    "note": "Day 1, before the first greeting. Bright.",
    "group": "Hello"
   },
   {
    "file": "Diner_Practice_Start",
    "say": "First shift's just practice. Take your time, find your feet.",
    "note": "Day 0, the practice shift starts. Easygoing.",
    "group": "Practice"
   },
   {
    "file": "Diner_Practice_End",
    "say": "Not bad for a first go. Tomorrow the doors open for real.",
    "note": "Day 0, the practice shift is done. Proud of them.",
    "group": "Practice"
   },
   {
    "file": "Diner_Start_C1",
    "say": "Morning, team! Grill's hot, coffee's on. Let's open up.",
    "note": "",
    "group": "Start"
   },
   {
    "file": "Diner_End_C1",
    "say": "And that's closing. Good shift, everyone. Get some sleep.",
    "note": "Warm, tired-happy.",
    "group": "End"
   },
   {
    "file": "Diner_Remark_C2",
    "say": "Smells like a proper diner in here. Love it.",
    "note": "To himself, a happy sigh.",
    "group": "Remark"
   },
   {
    "file": "Diner_Start_K3",
    "say": "Morning, team. Targets went up again, but we'll manage.",
    "note": "",
    "group": "Start"
   },
   {
    "file": "Diner_End_K3",
    "say": "That's closing. Good shift today.",
    "note": "",
    "group": "End"
   },
   {
    "file": "Diner_Remark_K3",
    "say": "Busy one today. You're holding up well.",
    "note": "Once on a busy day.",
    "group": "Remark"
   },
   {
    "file": "Diner_Start_S1",
    "say": "Morning, team. Good to see all of you.",
    "note": "He means every one of them. The screen may add the day number in front.",
    "group": "Start"
   },
   {
    "file": "Diner_End_S1",
    "say": "That's closing. Get home safe.",
    "note": "",
    "group": "End"
   },
   {
    "file": "Diner_Remark_S1",
    "say": "You're doing great. Just keep it going.",
    "note": "Once on a busy day.",
    "group": "Remark"
   },
   {
    "file": "Diner_NewContract_01",
    "say": "Got a new contract for you. The quota's on your screen.",
    "note": "Screen shows the contract number, quota and deadline.",
    "group": "New contract"
   },
   {
    "file": "Diner_NewReview_01",
    "say": "New review today. You'll see the target up there.",
    "note": "Screen shows the review number, target and deadline.",
    "group": "New review"
   },
   {
    "file": "Diner_ReviewDay_01",
    "say": "It's review day, so... no pressure.",
    "note": "",
    "group": "Review day"
   },
   {
    "file": "Diner_LastDay_01",
    "say": "Last day on this contract.",
    "note": "",
    "group": "Last day"
   },
   {
    "file": "Diner_LastDay_04",
    "say": "Quota's due tonight, so keep at it.",
    "note": "",
    "group": "Last day"
   },
   {
    "file": "Diner_Behind_02",
    "say": "We're behind, guys.",
    "note": "",
    "group": "Behind"
   },
   {
    "file": "Diner_Behind_05",
    "say": "Someone's dragging. Sort it out between you.",
    "note": "",
    "group": "Behind"
   },
   {
    "file": "Diner_BadReview_01",
    "say": "Someone left us one star.",
    "note": "Screen also shows the fine.",
    "group": "Bad review"
   },
   {
    "file": "Diner_BadReview_02",
    "say": "Somebody never got their food, and now it's online.",
    "note": "Screen also shows the fine.",
    "group": "Bad review"
   },
   {
    "file": "Diner_BadReview_03",
    "say": "Another bad review. Come on.",
    "note": "Screen also shows the fine.",
    "group": "Bad review"
   },
   {
    "file": "Diner_FreeMeal_01",
    "say": "That one was late, so it's free.",
    "note": "",
    "group": "Free meal"
   },
   {
    "file": "Diner_FreeMeal_02",
    "say": "Another free meal. That's money, you know.",
    "note": "",
    "group": "Free meal"
   },
   {
    "file": "Diner_FreeMeal_03",
    "say": "The boss is going to see all these free meals.",
    "note": "",
    "group": "Free meal"
   },
   {
    "file": "Diner_Meet_Follow",
    "say": "Alright, team, review time. Follow me to the back.",
    "note": "Every meeting, one take. Upbeat.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_Sit",
    "say": "Grab a chair, everyone.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_SitNudge",
    "say": "Come on, sit down. I don't bite.",
    "note": "Only when the crew has not sat after a while. Lands differently after the first fail.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_1a",
    "say": "So. Your first review. I've been looking forward to this.",
    "note": "Review 1, tone 1.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_1b",
    "say": "You passed! The boss is going to love this.",
    "note": "Pleased, for the boss.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_1c",
    "say": "Same again next time, yeah? See you in the morning.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_2a",
    "say": "Okay. Review number two. Let's have a look.",
    "note": "Review 2, tone 2.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_2b",
    "say": "Oh great! You passed!",
    "note": "Real relief, a little too big.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_2c",
    "say": "Targets go up again tomorrow.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_3a",
    "say": "Review three. Here we go.",
    "note": "Review 3, tone 3. A breath first.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_3b",
    "say": "You passed. Oh, thank goodness.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_3c",
    "say": "Two more days and you're out of here.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_4a",
    "say": "Last review. I didn't sleep much last night.",
    "note": "Review 4, tone 3.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_4b",
    "say": "You passed. All of you. You actually did it.",
    "note": "Almost laughing.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_4c",
    "say": "Your reassignment's coming. Take it, and don't come back.",
    "note": "Kind, firm.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F1_a",
    "say": "Ah. This one didn't pass.",
    "note": "Fail at review 1, tone 1: routine policy to him. Mild, like a late delivery.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F1_b",
    "say": "When a review fails, someone answers for it.",
    "note": "Matter-of-fact.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F1_pick",
    "say": "Let's see who he picked...",
    "note": "Reading a card. \"He\" is the boss.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F1_you",
    "say": "Ah, it's you. Come on, follow me. Don't look so worried.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F1_desk",
    "say": "Hand flat on the desk. Try not to move, it's quicker.",
    "note": "Helpful, like showing a new hire the fryer.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F1_done",
    "say": "There we go. Wrap it up tight, it stops after a bit.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F1_retry",
    "say": "Good news, the boss is giving you another go. Make him proud.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F2_a",
    "say": "It didn't pass. I really thought you had it.",
    "note": "Fail at review 2, tone 2: he no longer enjoys it.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F2_b",
    "say": "Someone has to answer for it. That's how it works.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F2_pick",
    "say": "Let's see who it is this time...",
    "note": "Quieter than F1.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F2_you",
    "say": "It's you. Come on. Let's get it over with.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F2_desk",
    "say": "Hand on the desk. I'll be quick, I promise.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F2_done",
    "say": "Done. Here, let me wrap that for you.",
    "note": "He does the bandage himself.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F2_retry",
    "say": "The boss is giving you another go. Please, make it count.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F3_a",
    "say": "It didn't pass. I'm so sorry.",
    "note": "Fail at reviews 3-4, tone 3: it hurts him, he still does it.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F3_b",
    "say": "I told him you tried. He doesn't care.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F3_pick",
    "say": "He's picked someone. I don't get a say.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F3_you",
    "say": "It's you. I'm sorry. Come with me.",
    "note": "Can't look at them.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F3_desk",
    "say": "Hand on the desk. On three. One, two.",
    "note": "The thunk lands on \"two\", to spare them the wait.",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F3_done",
    "say": "It's over. Here, hold it up. I've got you.",
    "note": "",
    "group": "Meet"
   },
   {
    "file": "Diner_Meet_F3_retry",
    "say": "He's giving you another go. Please don't make me do that again.",
    "note": "",
    "group": "Meet"
   }
  ]
 },
 {
  "key": "office-manager",
  "name": "The Office Manager",
  "who": "TaMorgan Group's manager, on the wall screen with the camera off.",
  "folder": "OfficeManager",
  "lines": [
   {
    "file": "Office_Visit_Gather",
    "say": "Good evening. Review call in Room 1, please. Camera's on.",
    "note": "Every review call and every failed one: the same take every time, from the office's wall screens as the call opens. On day 6 you say it in person too.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Office_Visit_1a",
    "say": "First review is in. You passed. Zero flags on any of you.",
    "note": "Day 2. Camera off. Right after the gather line, so no second greeting.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Office_Visit_3a",
    "say": "Second review is in. You've passed again.",
    "note": "Day 4. Your camera is on for the first time: it shows the crew's own meeting room from a corner of its ceiling, the chair at the head of the table empty.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Office_Visit_3c",
    "say": "Two more days, then we'll circle back on something permanent.",
    "note": "Day 4. The carrot, the boss's \"permanent position\". One of his two buzzwords.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Office_Visit_4a",
    "say": "That's the final review. You've passed.",
    "note": "Day 6. In person: you are already sitting at the head of the table when the crew comes in, and you do not move. Speak to people across a table.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Office_Visit_4b",
    "say": "Just a reminder, your next placement is in your inbox.",
    "note": "Day 6.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Office_Visit_4c",
    "say": "Leave your desks as they are. Someone comes in for them tonight.",
    "note": "Day 6. The last thing you say to them.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Office_Fail_First_a",
    "say": "That review didn't pass.",
    "note": "Any fail. Right after the gather line.",
    "group": "A failed review (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Fail_First_b",
    "say": "Per the process, that's a correction, then you go again.",
    "note": "",
    "group": "A failed review (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Fail_First_pick",
    "say": "Head office have selected someone. The name is on your screen.",
    "note": "The screen shows the chosen player's badge.",
    "group": "A failed review (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Fail_First_lift",
    "say": "The lift is coming down for you. Everyone else, stay put.",
    "note": "The chosen player walks to the lift.",
    "group": "A failed review (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Fail_Retry",
    "say": "Head office have approved a retry of that review.",
    "note": "On the screen once the chosen player is back on the floor; then the review is retried.",
    "group": "A failed review (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S1_in",
    "say": "Come in. Take the chair, please.",
    "note": "Stage 1: the mouth. The lift doors open on you.",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S1_what",
    "say": "This is the standard. Everyone client-facing has it done.",
    "note": "",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S1_hold",
    "say": "Hold still. It takes about four seconds.",
    "note": "Then the cut. Stages 2 and 3 reuse this take.",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S1_done",
    "say": "Done. That's within the standard.",
    "note": "Checking it, not admiring it.",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S1_out",
    "say": "You can go back down. Tell them it went fine.",
    "note": "",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S2_in",
    "say": "You again. Sit down.",
    "note": "Stage 2: wider, the cheeks.",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S2_what",
    "say": "We're taking it up a level. Head office want it wider.",
    "note": "",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S2_done",
    "say": "That's stage two done.",
    "note": "",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S2_out",
    "say": "You can go.",
    "note": "Stage 3 reuses this take.",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S3_in",
    "say": "Sit down. This one's the eyes.",
    "note": "Stage 3: the eyes open wide, the blinking stops.",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S3_hold",
    "say": "Keep them open. Don't blink until I say.",
    "note": "Then the cut.",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Room_S3_done",
    "say": "Done. Mine's the same, for reference.",
    "note": "The only time you ever mention your own face. A fact.",
    "group": "Upstairs, in the room (cutscene)",
    "cutscene": true
   },
   {
    "file": "Office_Hello",
    "say": "Good morning, everyone. I'm on another call, so camera's off today.",
    "note": "Day 1, before the first greeting. You say \"today\" every day.",
    "group": "Day 1 and the practice"
   },
   {
    "file": "Office_Practice_Start",
    "say": "We'll start with a practice run. It isn't scored.",
    "note": "Day 0, the practice job starts.",
    "group": "Day 1 and the practice"
   },
   {
    "file": "Office_Practice_End",
    "say": "That's the practice logged. The real demo is next.",
    "note": "Day 0, the practice is done; the client is already in Room 1.",
    "group": "Day 1 and the practice"
   },
   {
    "file": "Office_Start_C1",
    "say": "Good morning, everyone. Busy day, so we'll get straight into it.",
    "note": "Day 1.",
    "group": "Morning greetings (one per day)"
   },
   {
    "file": "Office_Start_K1",
    "say": "Good morning. Same process as yesterday.",
    "note": "Day 2.",
    "group": "Morning greetings (one per day)"
   },
   {
    "file": "Office_Start_S2",
    "say": "Good morning, everyone. That's day three, so we're halfway.",
    "note": "Day 3. He has counted.",
    "group": "Morning greetings (one per day)"
   },
   {
    "file": "Office_Start_D4",
    "say": "Good morning. Let's begin.",
    "note": "Day 4, a review day.",
    "group": "Morning greetings (one per day)"
   },
   {
    "file": "Office_Start_D5",
    "say": "Good morning. Yesterday's numbers are logged. Thank you.",
    "note": "Day 5.",
    "group": "Morning greetings (one per day)"
   },
   {
    "file": "Office_Start_D6",
    "say": "Good morning, everyone. I've blocked out this evening for your review.",
    "note": "Day 6. \"Last day\" is the review line's, not his.",
    "group": "Morning greetings (one per day)"
   },
   {
    "file": "Office_Client_In_01",
    "say": "To loop you in, the client's in Room 1. Someone sit beside them.",
    "note": "Clock-in. One of his two buzzwords.",
    "group": "The day's client"
   },
   {
    "file": "Office_Client_In_03",
    "say": "Please don't promise them anything the platform can't do.",
    "note": "A reminder, meant plainly.",
    "group": "The day's client"
   },
   {
    "file": "Office_Early_01",
    "say": "Finished early. I'll log that for head office.",
    "note": "",
    "group": "The demo's result"
   },
   {
    "file": "Office_Pitch_Good_01",
    "say": "They've signed. Noted.",
    "note": "The screen shows the money.",
    "group": "The demo's result"
   },
   {
    "file": "Office_Pitch_Bad_01",
    "say": "They left without signing. I'll follow up with them tomorrow.",
    "note": "Not annoyed. Three catches and the client walked out.",
    "group": "The demo's result"
   },
   {
    "file": "Office_Remark_K2",
    "say": "Still here, by the way. Just listening in.",
    "note": "",
    "group": "Quiet moments"
   },
   {
    "file": "Office_Remark_S1",
    "say": "I had my review here too, years ago. It's a fair system.",
    "note": "His only self-disclosure. A fact, not reassurance.",
    "group": "Quiet moments"
   },
   {
    "file": "Office_NewReview_01",
    "say": "New review from today. Target and deadline are on your screen.",
    "note": "Shortened for voice. Screen shows the review number, target and deadline.",
    "group": "Reviews"
   },
   {
    "file": "Office_ReviewDay_01",
    "say": "Just a reminder, it's review day. I'll have your numbers this evening.",
    "note": "",
    "group": "Reviews"
   },
   {
    "file": "Office_LastDay_03",
    "say": "Last day today. Please don't leave anything unfinished.",
    "note": "",
    "group": "Reviews"
   },
   {
    "file": "Office_Behind_02",
    "say": "We're behind schedule. Noted.",
    "note": "",
    "group": "Reviews"
   },
   {
    "file": "Office_ReplyAll",
    "say": "Please don't reply all. I've muted the thread.",
    "note": "Eight emails land at once.",
    "group": "Events"
   },
   {
    "file": "Office_AllHands_Day6_Call",
    "say": "All-hands, everyone. Gather at the screen, please.",
    "note": "The screen lights up.",
    "group": "Day 6: the all-hands"
   },
   {
    "file": "Office_AllHands_Day6_02",
    "say": "Head office asked me to share these. They're better than last month's.",
    "note": "Reading from a slide. \"Last month's\" is the office's crumb that the crew is not the first.",
    "group": "Day 6: the all-hands"
   },
   {
    "file": "Office_AllHands_Day6_04",
    "say": "That's all. Back to your desks.",
    "note": "The call ends.",
    "group": "Day 6: the all-hands"
   }
  ],
  "freshFrom": "2026-10-26T00:00:00Z"
 },
 {
  "key": "security-manager",
  "name": "The Security Manager",
  "who": "Lockwell Security's handler, over the radio.",
  "folder": "SecurityManager",
  "lines": [
   {
    "file": "Security_TimeUp_Fail_01",
    "say": "Time's up and the report is short. The client wants the day again.",
    "note": "Phase 86I2c: after the debrief, a required item was not handed in, so the same day starts over. Tired, not angry.",
    "group": "A failed review (cutscene)",
    "cutscene": true
   },
   {
    "file": "Security_Visit_Gather",
    "say": "Everyone to the van, please. This won't take long.",
    "note": "Every visit, word for word (one recording, used each time): as you reach your spot. New 2026-10-12 (built in Phase 57), like the diner's gather line.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_1a",
    "say": "Evening, team. Quick debrief from me. Review one is in.",
    "note": "Visit 1 (evening of day 2). Confident, in person for the first time. You got out of your car and lean on the crew's van.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_1b",
    "say": "Passed. Clean work. The client wants you back tomorrow.",
    "note": "Visit 1. Reading it off your phone.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_1c",
    "say": "Same building tomorrow. They'll have fixed a few things. Night.",
    "note": "Visit 1. Leaving. A wave.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_2a",
    "say": "Review two. Good numbers. A few notes on getting caught.",
    "note": "Visit 2 (evening of day 4). Clipped, tired, reading off your phone. You are already sitting in the open back of the crew's van when they come back; nobody saw you arrive.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_2b",
    "say": "Nothing to action. Keep your letter on you.",
    "note": "Visit 2. Flat.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_2c",
    "say": "Right. I'll see myself out.",
    "note": "Visit 2. Ordinary, as if nothing is odd; you shut the van's doors, then walk off reading your phone, past the guard at the gate (who never looks at you) and into the client's building.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_3a",
    "say": "Final review. Passed. Well done, team. Very professional.",
    "note": "Visit 3 (evening of day 6, the placement passed). Strained, slow. You come out of the depot's front door: you were inside all day.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_3b",
    "say": "Your photos are going upstairs. Someone will review them.",
    "note": "Visit 3. Calm. (The crew's last-day photos go to the office's trays: STORY.md rung 3.)",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_3c",
    "say": "Your work here is done. I'll take the camera.",
    "note": "Visit 3. The last line of the placement. You pick up the crew's camera from the van and walk back into the building with it.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_F_a",
    "say": "Evening. I'll keep this short. The review didn't pass.",
    "note": "Any failed review (one, two or the final one): you let the crew go in person, before the letter of separation. Quiet, not angry.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_F_b",
    "say": "Your engagement ends tonight. Please hand in the covers. They're counted.",
    "note": "Any failed review.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Visit_F_c",
    "say": "Don't take it hard. We'll keep your photo on file.",
    "note": "Any failed review. Leaving. Kind, which is the creepy part. Nothing odd in this visit: a person doing an unpleasant job.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Security_Hello",
    "say": "Radio check. This is your handler. I'll be watching. Professionally.",
    "note": "Day 1, before the first greeting. Pleased with \"Professionally\".",
    "group": "Hello"
   },
   {
    "file": "Security_Practice_Start",
    "say": "Practice run first. Getting caught is free today. Only today.",
    "note": "Day 0, the practice break-in starts (a catch costs nothing in the practice).",
    "group": "Practice"
   },
   {
    "file": "Security_Practice_End",
    "say": "Clean enough. From now on, getting caught costs a strike.",
    "note": "Day 0, the practice is done.",
    "group": "Practice"
   },
   {
    "file": "Security_Start_C1",
    "say": "Morning, team. The brief is on the board. Read it twice.",
    "note": "The screen adds the day number in front.",
    "group": "Start"
   },
   {
    "file": "Security_Start_K1",
    "say": "Morning. Brief's on the board. Same building, new problems.",
    "note": "The screen adds the day number in front.",
    "group": "Start"
   },
   {
    "file": "Security_Start_S1",
    "say": "Good morning. Please stay on the radio today. All day.",
    "note": "The screen adds the day number in front.",
    "group": "Start"
   },
   {
    "file": "Security_Fixed_01",
    "say": "The client fixed what you reported. That's the job working.",
    "note": "Pleased, like a teacher.",
    "group": "Fixed"
   },
   {
    "file": "Security_Fixed_02",
    "say": "Overnight fixes are on the board. Find a new way in.",
    "note": "",
    "group": "Fixed"
   },
   {
    "file": "Security_Strike_01",
    "say": "A tester has been stopped. Show the letter. That's a strike.",
    "note": "",
    "group": "Strike"
   },
   {
    "file": "Security_Strike_02",
    "say": "Someone got caught. Walk out calmly. Smile at the guard.",
    "note": "",
    "group": "Strike"
   },
   {
    "file": "Security_Restart_01",
    "say": "Last strike. The client has ended the test. We go again.",
    "note": "The last strike: the day starts over. Tired.",
    "group": "Restart"
   },
   {
    "file": "Security_Alert_01",
    "say": "Site alert is up. Slow down. Look like you belong.",
    "note": "",
    "group": "Alert"
   },
   {
    "file": "Security_Lockdown_01",
    "say": "Lockdown. The doors are shut. Nobody is a visitor now.",
    "note": "",
    "group": "Lockdown"
   },
   {
    "file": "Security_End_C1",
    "say": "That's time. Everyone back to the van. Bring the proof.",
    "note": "",
    "group": "End"
   },
   {
    "file": "Security_End_K1",
    "say": "Time. Leave the building. Whatever you didn't prove didn't happen.",
    "note": "",
    "group": "End"
   },
   {
    "file": "Security_End_S1",
    "say": "Time. Please come back to the van. All of you.",
    "note": "",
    "group": "End"
   },
   {
    "file": "Security_Early_01",
    "say": "Everything's back early. The client is impressed. And a little worried.",
    "note": "",
    "group": "Early"
   },
   {
    "file": "Security_Debrief_Good_01",
    "say": "Clean report. The client paid. They didn't look happy about it.",
    "note": "The screen shows the money. Amused.",
    "group": "Debrief"
   },
   {
    "file": "Security_Debrief_Bad_01",
    "say": "Findings missing. The client paid for half a report.",
    "note": "Unused since Phase 86I2c (a short report now fails the day): skip it.",
    "group": "Debrief"
   },
   {
    "file": "Security_Promise_Missed",
    "say": "You promised a stretch and missed it. The client wrote that down.",
    "note": "A promised stretch finding was not done.",
    "group": "Promise"
   },
   {
    "file": "Security_Remark_C1",
    "say": "Reminder: photograph it, tag it, leave it where it was.",
    "note": "Confident.",
    "group": "Remark"
   },
   {
    "file": "Security_Remark_K4",
    "say": "Reminder: seated staff are out of scope. Please don't photograph them.",
    "note": "Clipped, read off the clipboard like any other rule. The customer crumb (owner, 2026-10-11): never say who seated staff are.",
    "group": "Remark"
   },
   {
    "file": "Security_Remark_S1",
    "say": "Everyone gets watched. Someone has to do the watching.",
    "note": "Strained. Almost to yourself. (The rung's theme, as corporate talk.)",
    "group": "Remark"
   },
   {
    "file": "Security_NewContract_01",
    "say": "A new engagement is live. The terms are on your screen.",
    "note": "Screen shows the contract number, quota and deadline.",
    "group": "New contract"
   },
   {
    "file": "Security_NewReview_01",
    "say": "A new review begins. The target is on your screen.",
    "note": "Screen shows the review number, target and deadline.",
    "group": "New review"
   },
   {
    "file": "Security_ReviewDay_01",
    "say": "Review day. Your report gets read tonight. So do you.",
    "note": "",
    "group": "Review day"
   },
   {
    "file": "Security_LastDay_02",
    "say": "Last day. The final test. Everything you've learned, all at once.",
    "note": "",
    "group": "Last day"
   },
   {
    "file": "Security_LastDay_04",
    "say": "The quota is due tonight. Please don't make me write that report.",
    "note": "",
    "group": "Last day"
   },
   {
    "file": "Security_Behind_02",
    "say": "You are behind schedule. Please be ahead of schedule. Thanks!",
    "note": "The same words every manager says.",
    "group": "Behind"
   },
   {
    "file": "Security_Behind_05",
    "say": "Statistically, one of you keeps getting caught. Let's not name names.",
    "note": "",
    "group": "Behind"
   },
   {
    "file": "Security_NewThing_01",
    "say": "New procedure, effective today. Details are in your memo.",
    "note": "",
    "group": "New thing"
   },
   {
    "file": "Security_NewThing_02",
    "say": "Effective immediately: a new procedure. The client insisted.",
    "note": "",
    "group": "New thing"
   },
   {
    "file": "Security_EventToday_02",
    "say": "Heads up. The site has plans today. They didn't tell us.",
    "note": "",
    "group": "Event today"
   },
   {
    "file": "Security_FireDrill",
    "say": "Fire drill. Everyone outside. Stand with the staff and look bored.",
    "note": "Everyone in the building walks to the car park for a short while.",
    "group": "Fire drill"
   },
   {
    "file": "Security_VipVisit",
    "say": "A VIP is on site. The guards are all out front. Lovely.",
    "note": "Every guard walks the front of the building for a while, so the back is unwatched.",
    "group": "Vip visit"
   },
   {
    "file": "Security_PowerCut",
    "say": "Power cut. Cameras are down. So are the keypads. Move.",
    "note": "Cameras and keypads are dead for a short while. Quick.",
    "group": "Power cut"
   },
   {
    "file": "Security_CallingCards",
    "say": "Calling cards today. Leave them nicely. The guards will find them.",
    "note": "Calling cards: findings pay more, each card raises the alert.",
    "group": "Calling cards"
   },
   {
    "file": "Security_NoNotice",
    "say": "No-notice test. Fewer strikes, bigger cheque. Please don't get caught.",
    "note": "No-notice test: one strike fewer.",
    "group": "No notice"
   },
   {
    "file": "Security_Rush",
    "say": "Rush job. The client wants the report early. The pay is better.",
    "note": "Rush engagement: the debrief comes early.",
    "group": "Rush"
   }
  ]
 },
 {
  "key": "graveyard-manager",
  "name": "The Graveyard Manager",
  "who": "The memorial park's night manager.",
  "folder": "GraveyardManager",
  "lines": [
   {
    "file": "Graveyard_Visit_1a",
    "say": "Morning, team. Quick one before I clock off. Review one is in.",
    "note": "Visit 1 (dawn after night 2). Warm, in person for the first time. A thermos in one hand. You walk in through the main gate while the ones still standing walk out past you; you never look at them.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Visit_1b",
    "say": "Passed. Lovely. Head office likes a quiet first review.",
    "note": "Visit 1. Reading from a card.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Visit_1c",
    "say": "Same again tonight. Same plots, same order. Morning.",
    "note": "Visit 1. Leaving by the main gate, the way you came.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Visit_2a",
    "say": "Review two. Numbers are fine. A few comments on digging pace.",
    "note": "Visit 2 (dawn after night 4). Clipped, tired. You came up the path from among the stones, not from the gate.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Visit_2b",
    "say": "Nothing to action. Keep the clock clear.",
    "note": "Visit 2. Flat.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Visit_2c",
    "say": "Right. I'll be off. Same time tonight.",
    "note": "Visit 2. Ordinary, as if nothing is odd; then you walk back into the plots, not out of the gate.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Visit_3a",
    "say": "Final review. Passed. Well done, team. Truly.",
    "note": "Visit 3 (dawn after night 6, the placement passed). Strained, slow. You were already in the line walking to the gate; you step out of it to speak.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Visit_3b",
    "say": "Your reassignment letter is on its way. Don't get comfortable.",
    "note": "Visit 3.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Visit_3c",
    "say": "Your completion has been rescheduled. Please report to your next placement.",
    "note": "Visit 3. The last line of the placement. Then you step back into the line and walk out of the gate with the others, in step.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Visit_F_a",
    "say": "Morning. I'll keep this short. The review didn't pass.",
    "note": "Any failed review (one, two or the final one): you let the crew go in person, before the letter of separation. Quiet, not angry.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Visit_F_b",
    "say": "Your contract ends this morning. Please leave the shovels. They're counted.",
    "note": "Any failed review.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Visit_F_c",
    "say": "Don't worry about the future. We always find room for people.",
    "note": "Any failed review. Leaving. Kind, which is the creepy part.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "Graveyard_Hello",
    "say": "Evening, team. I'm your night manager. I keep the time out here.",
    "note": "Night 1, before the first greeting. Proud of the job, like a stationmaster.",
    "group": "Hello"
   },
   {
    "file": "Graveyard_Practice_Start",
    "say": "A practice night first. Just the one late arrival. Take your time.",
    "note": "Night 0, the practice starts (one zombie: hit, carry, bury).",
    "group": "Practice"
   },
   {
    "file": "Graveyard_Practice_End",
    "say": "Lovely. Back where it belongs. The real nights are busier.",
    "note": "Night 0, the practice is done.",
    "group": "Practice"
   },
   {
    "file": "Graveyard_Start_C1",
    "say": "Good evening, team. The gates are locked. The clock is ready.",
    "note": "The screen adds the night number in front.",
    "group": "Start"
   },
   {
    "file": "Graveyard_Start_K1",
    "say": "Evening. Tonight's roster is on the register. Please read it.",
    "note": "The screen adds the night number in front.",
    "group": "Start"
   },
   {
    "file": "Graveyard_Start_S1",
    "say": "Good evening. Please stay together tonight. It helps the count.",
    "note": "The screen adds the night number in front.",
    "group": "Start"
   },
   {
    "file": "Graveyard_Rise_01",
    "say": "The first section is due. Please greet late arrivals firmly.",
    "note": "",
    "group": "Rise"
   },
   {
    "file": "Graveyard_Rise_03",
    "say": "Arrivals are starting. Please keep them away from the clock.",
    "note": "",
    "group": "Rise"
   },
   {
    "file": "Graveyard_End_C1",
    "say": "And that's dawn. Lovely work, team. Please put the shovels away.",
    "note": "",
    "group": "End"
   },
   {
    "file": "Graveyard_End_K2",
    "say": "Shift over. The gates open now. Please stand aside.",
    "note": "The gates open for the ones still standing to walk out.",
    "group": "End"
   },
   {
    "file": "Graveyard_End_S2",
    "say": "That's the shift. Please let the morning staff leave first.",
    "note": "Said as if \"morning staff\" were an ordinary phrase.",
    "group": "End"
   },
   {
    "file": "Graveyard_Dawn_Review",
    "say": "That's dawn. Review results at the gatehouse, team. I'm on my way.",
    "note": "Review mornings only (after nights 2, 4 and 6), in place of the dawn line. Calls the crew to the gatehouse for the visit. Tone follows the night.",
    "group": "Dawn"
   },
   {
    "file": "Graveyard_Remark_C1",
    "say": "Reminder: the lamp posts have cameras. And speakers. And opinions.",
    "note": "Warm.",
    "group": "Remark"
   },
   {
    "file": "Graveyard_Remark_K2",
    "say": "Please do not chat with late arrivals. It encourages them.",
    "note": "Clipped.",
    "group": "Remark"
   },
   {
    "file": "Graveyard_Remark_S1",
    "say": "Everyone is on the roster eventually. That's what makes it fair.",
    "note": "Strained. Almost to yourself. (The rung's theme, as corporate talk.)",
    "group": "Remark"
   },
   {
    "file": "Graveyard_Strike_01",
    "say": "A late arrival has clocked in. That is a strike.",
    "note": "The screen shows how many strikes are left.",
    "group": "Strike"
   },
   {
    "file": "Graveyard_Strike_03",
    "say": "Another one on the clock. Please keep them off it.",
    "note": "Never the night's first strike.",
    "group": "Strike"
   },
   {
    "file": "Graveyard_Restart_01",
    "say": "Too many on the clock. We'll run the night again. From dusk.",
    "note": "The last strike: the night starts over (if the owner keeps the security rule). Tired.",
    "group": "Restart"
   },
   {
    "file": "Graveyard_SectionG",
    "say": "Roster update: section G opens tonight. Same procedure as always.",
    "note": "Night 6, at dusk, after the greeting. Say it like any other roster note: no weight on any word. (Section G is where the crew's own staff numbers rise; the line should only feel cold afterwards.)",
    "group": "Section g"
   },
   {
    "file": "Graveyard_NewContract_01",
    "say": "A new contract is live. The quota is on your screen.",
    "note": "Screen shows the contract number, quota and deadline.",
    "group": "New contract"
   },
   {
    "file": "Graveyard_NewReview_01",
    "say": "A new review begins. The target is on your screen.",
    "note": "Screen shows the review number, target and deadline.",
    "group": "New review"
   },
   {
    "file": "Graveyard_ReviewDay_01",
    "say": "Review night. Your numbers will be reviewed at dawn. So will you.",
    "note": "",
    "group": "Review day"
   },
   {
    "file": "Graveyard_LastDay_03",
    "say": "Final night, team! We're all so calm. Look how calm we are.",
    "note": "Clearly not calm.",
    "group": "Last day"
   },
   {
    "file": "Graveyard_LastDay_04",
    "say": "The quota is due at dawn. Do the math. We already did.",
    "note": "",
    "group": "Last day"
   },
   {
    "file": "Graveyard_Behind_02",
    "say": "You are behind schedule. Please be ahead of schedule. Thanks!",
    "note": "",
    "group": "Behind"
   },
   {
    "file": "Graveyard_Behind_05",
    "say": "Statistically, one of you is the problem. Let's not dig into who.",
    "note": "",
    "group": "Behind"
   },
   {
    "file": "Graveyard_NewThing_01",
    "say": "New procedure, effective tonight. Details are in your memo.",
    "note": "",
    "group": "New thing"
   },
   {
    "file": "Graveyard_NewThing_03",
    "say": "A new memo. Please read it twice. Once is not policy.",
    "note": "",
    "group": "New thing"
   },
   {
    "file": "Graveyard_EventToday_03",
    "say": "Heads up, team: something is happening tonight. Plan accordingly, or don't.",
    "note": "",
    "group": "Event today"
   },
   {
    "file": "Graveyard_Overtime_01",
    "say": "Overtime approved. The night will be longer. So will the queue.",
    "note": "",
    "group": "Overtime"
   },
   {
    "file": "Graveyard_Overtime_02",
    "say": "Overtime tonight. More pay, more hours, more arrivals. Lovely.",
    "note": "",
    "group": "Overtime"
   }
  ]
 },
 {
  "key": "callcentre-manager",
  "name": "The Call Centre Manager",
  "who": "The call centre's team leader.",
  "folder": "CallCentreManager",
  "lines": [
   {
    "file": "CallCentre_Visit_Gather",
    "say": "Headsets down, team. This won't take long.",
    "note": "Every review evening, failed included, as he reaches his spot under the call board: one take, played every time, word for word. Polite, a little rehearsed. New 2026-10-12 (Phase 76).",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_1a",
    "say": "Evening, team. Quick one. Your first review came through.",
    "note": "Evening 1 (after day 2). Warm, the first time they see him.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_1b",
    "say": "Passed. Lovely call handling. Head office listened to a few.",
    "note": "Evening 1. Reading from the binder.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_1c",
    "say": "Same again tomorrow. Same words, same order. Night.",
    "note": "Evening 1. Leaving. Friendly.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_2a",
    "say": "Review two. Passed. Your handle times were noted.",
    "note": "Evening 2 (after day 4). Clipped, tired. Before each line he touches his headset and waits a beat, as if listening; leave a short silence before you speak.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_2b",
    "say": "No complaints logged. Well. None about you.",
    "note": "Evening 2. A small pause before \"Well.\"",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_2c",
    "say": "Right. I'm off. Please don't call me.",
    "note": "Evening 2. Leaving. Dry, half a joke. (After it, he stops at the binder shelf and checks a page before he goes.)",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_3a",
    "say": "Final review. Let me check the binder.",
    "note": "Evening 3 (after day 6, the placement's last). Strained, slow. He has just stood up from a desk where he was taking calls. Pages turning.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_3b",
    "say": "Passed. The binder says: continue. Congratulations, team.",
    "note": "Evening 3. Reads \"continue\" exactly as written. (Behind him a line starts ringing; he does not turn round.)",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_3b_Alt",
    "say": "Passed. The binder says: complete. Congratulations, team.",
    "note": "Optional. Optional. Record it, but the owner picks it only once the ending is decided: \"complete\" is the memorial park's word for a buried temp, so this line would decide the crew's fate. Same delivery as 3b.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_3c",
    "say": "Your file goes upstairs tonight. Someone up there will read it. Probably.",
    "note": "Evening 3. Leaving. A pause before \"Probably.\" Calm, as if nothing is ringing.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_F_a",
    "say": "Evening. Short call, this one. The review didn't pass.",
    "note": "Failed review. Quiet, not angry. A man doing an unpleasant job.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_F_b",
    "say": "I checked the binder twice. It says the same thing both times.",
    "note": "Failed review. Almost apologetic: it is not his decision.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_F_c",
    "say": "Your contract ends tonight. Please leave the headsets. They're counted.",
    "note": "Failed review. The same line the diner's manager says about the aprons.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Review_F_d",
    "say": "The lines open again tomorrow. Someone will answer them.",
    "note": "Failed review. Leaving. Flat.",
    "group": "Review scenes",
    "cutscene": true
   },
   {
    "file": "CallCentre_Hello",
    "say": "Hi, team! I'm your team leader. Every call is recorded. Including this one.",
    "note": "Day 1, before the first greeting. Pleased with the joke.",
    "group": "Hello"
   },
   {
    "file": "CallCentre_Practice_Start",
    "say": "Practice call first. The caller is one of ours. Be gentle.",
    "note": "Day 0, the practice call starts.",
    "group": "Practice"
   },
   {
    "file": "CallCentre_Practice_End",
    "say": "Practice over. The real lines open soon. They don't hang up gently.",
    "note": "Day 0, the practice is done.",
    "group": "Practice"
   },
   {
    "file": "CallCentre_Start_C1",
    "say": "Good morning, team! Headsets on. Smiles on. Callers can hear a smile.",
    "note": "",
    "group": "Start"
   },
   {
    "file": "CallCentre_Start_K1",
    "say": "Morning. Lines open. Answer fast, read carefully, hang up never.",
    "note": "The screen adds the day number in front.",
    "group": "Start"
   },
   {
    "file": "CallCentre_Start_S1",
    "say": "Good morning. Please follow the binder. The binder knows best.",
    "note": "The screen adds the day number in front.",
    "group": "Start"
   },
   {
    "file": "CallCentre_End_C2",
    "say": "Headsets off! Thank you for calling. Sorry. For working.",
    "note": "A habit: corrects himself with a laugh.",
    "group": "End"
   },
   {
    "file": "CallCentre_End_K2",
    "say": "Time. Missed calls have been logged. So has everyone.",
    "note": "",
    "group": "End"
   },
   {
    "file": "CallCentre_End_S1",
    "say": "Lines closed. Please stay at your desks until the floor is counted.",
    "note": "",
    "group": "End"
   },
   {
    "file": "CallCentre_Remark_C2",
    "say": "We're a family here. A family with a call queue.",
    "note": "Warm. The agency's running joke: every manager has a version.",
    "group": "Remark"
   },
   {
    "file": "CallCentre_Remark_K1",
    "say": "Reminder: the binder is always right. Please be right with it.",
    "note": "Clipped.",
    "group": "Remark"
   },
   {
    "file": "CallCentre_Remark_S1",
    "say": "Please leave the judgement to the binder. It's had practice.",
    "note": "Strained. Almost to themselves. Policy, not a confession.",
    "group": "Remark"
   },
   {
    "file": "CallCentre_Edition_01",
    "say": "A new edition of the binder has arrived. Old copies are wrong now.",
    "note": "Day 5, midday. The game shows which binder on screen.",
    "group": "Edition"
   },
   {
    "file": "CallCentre_PowerCut",
    "say": "We've lost the lines. Please stay at your desks. Don't touch anything.",
    "note": "The power cut starts, the room goes dark. Calm, a bit too calm.",
    "group": "Power cut"
   },
   {
    "file": "CallCentre_PowerBack",
    "say": "Lines are back. Thank you for waiting in the dark.",
    "note": "The power cut ends.",
    "group": "Power back"
   },
   {
    "file": "CallCentre_Listening",
    "say": "The supervisor is listening in. Please sound like the binder.",
    "note": "\"Supervisor listening\" starts: a mistake costs double. Lowered voice.",
    "group": "Listening"
   },
   {
    "file": "CallCentre_SameCaller",
    "say": "We have a repeat caller. On every line. Please be consistent.",
    "note": "\"The same caller\" starts. Forced cheer.",
    "group": "Same caller"
   },
   {
    "file": "CallCentre_NewContract_01",
    "say": "A new contract is live. The targets are on your screen.",
    "note": "Screen shows the contract number, quota and deadline.",
    "group": "New contract"
   },
   {
    "file": "CallCentre_NewReview_01",
    "say": "A new review begins. The target is on your screen.",
    "note": "Screen shows the review number, target and deadline.",
    "group": "New review"
   },
   {
    "file": "CallCentre_ReviewDay_01",
    "say": "Review day. Your calls will be reviewed tonight. So will you.",
    "note": "",
    "group": "Review day"
   },
   {
    "file": "CallCentre_LastDay_03",
    "say": "Last day, team! We are all so calm. Listen to how calm.",
    "note": "Clearly not calm.",
    "group": "Last day"
   },
   {
    "file": "CallCentre_LastDay_04",
    "say": "The quota is due tonight. The binder already knows the answer.",
    "note": "",
    "group": "Last day"
   },
   {
    "file": "CallCentre_Behind_02",
    "say": "You are behind target. Please answer faster. Then faster than that.",
    "note": "",
    "group": "Behind"
   },
   {
    "file": "CallCentre_Behind_05",
    "say": "Statistically, one of you keeps losing callers. Let's not find out who.",
    "note": "",
    "group": "Behind"
   },
   {
    "file": "CallCentre_NewThing_01",
    "say": "New procedure, effective today. It's in a binder. Everything is.",
    "note": "",
    "group": "New thing"
   },
   {
    "file": "CallCentre_NewThing_03",
    "say": "A new memo. Please read it aloud to whoever holds the binder.",
    "note": "",
    "group": "New thing"
   },
   {
    "file": "CallCentre_EventToday_03",
    "say": "A special event today. Nothing to worry about. It's been scripted.",
    "note": "",
    "group": "Event today"
   }
  ]
 },
 {
  "key": "caller",
  "name": "The Caller",
  "who": "A former temp who phones the crew in the evening.",
  "folder": "Caller",
  "lines": [
   {
    "file": "Diner_Call1_01",
    "say": "Hello? Is this the diner? The one on the corner?",
    "note": "Someone picked up. Unsure he has the right number.",
    "group": "Call 1"
   },
   {
    "file": "Diner_Call1_01M",
    "say": "Pick up. ...Okay. Nobody's there. Fine. I'll keep it short.",
    "note": "Nobody picked up: this plays on the answering machine instead of 01. A sigh before \"Okay\".",
    "group": "Call 1"
   },
   {
    "file": "Diner_Call1_02",
    "say": "You're the new crew. Don't say anything. I know you are.",
    "note": "Quietly. He thinks the line might be listened to.",
    "group": "Call 1"
   },
   {
    "file": "Diner_Call1_03",
    "say": "I worked there. Before you. Same kitchen, same speaker.",
    "note": "A small, tired laugh on \"same speaker\".",
    "group": "Call 1"
   },
   {
    "file": "Diner_Call1_04",
    "say": "Three days in. It still feels normal, right? Mostly normal?",
    "note": "Light on the first question, careful on \"mostly\".",
    "group": "Call 1"
   },
   {
    "file": "Diner_Call1_05",
    "say": "Do me a favour tomorrow. Watch the customers when they leave.",
    "note": "The important line. Slow and clear.",
    "group": "Call 1"
   },
   {
    "file": "Diner_Call1_06",
    "say": "Just watch. Don't say anything about it. Not out loud.",
    "note": "Almost a whisper by the end.",
    "group": "Call 1"
   },
   {
    "file": "Diner_Call1_07",
    "say": "I'll call again. ...I have to go.",
    "note": "Suddenly in a hurry. Then the line clicks off (the game adds the click).",
    "group": "Call 1"
   },
   {
    "file": "Diner_Call2_01",
    "say": "It's me again. Don't talk. Just listen.",
    "note": "Someone picked up. No greeting this time.",
    "group": "Call 2"
   },
   {
    "file": "Diner_Call2_01M",
    "say": "It's me. You're not picking up. ...That's smart, actually.",
    "note": "Nobody picked up: plays instead of 01. Relieved on the last part.",
    "group": "Call 2"
   },
   {
    "file": "Diner_Call2_02",
    "say": "Today. Did they all stop? Did they all look at you?",
    "note": "Already knows the answer.",
    "group": "Call 2"
   },
   {
    "file": "Diner_Call2_03",
    "say": "Yeah. They did that to us too.",
    "note": "Flat. A memory he does not like.",
    "group": "Call 2"
   },
   {
    "file": "Diner_Call2_04",
    "say": "You're not imagining it. I need you to know that.",
    "note": "Warm. The one kind thing he says.",
    "group": "Call 2"
   },
   {
    "file": "Diner_Call2_05",
    "say": "Two days left. Finish the job. Don't give them a reason.",
    "note": "Firm, like advice from an older brother.",
    "group": "Call 2"
   },
   {
    "file": "Diner_Call2_06",
    "say": "When they offer you the next placement... take it. I did.",
    "note": "A pause before \"take it\". \"I did\" almost to himself.",
    "group": "Call 2"
   },
   {
    "file": "Diner_Call2_07",
    "say": "I thought the next one would be different. It's not, it's-",
    "note": "Cut off mid-word, as if the line went dead. Do not finish the word.",
    "group": "Call 2"
   },
   {
    "file": "Office_Call3_01",
    "say": "It's me. Don't say anything, the room's got a mic. Just listen.",
    "note": "Someone is in the meeting room when the screen answers.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_01M",
    "say": "Nobody in there? Doesn't matter. I'll talk anyway.",
    "note": "Nobody is in the room: plays instead of 01.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_02",
    "say": "You got through the diner. I knew you would, honestly.",
    "note": "Warm, relieved.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_03",
    "say": "Quick one, answer on the screen. Anyone gone up in the lift yet?",
    "note": "The question. The screen shows YES and NO; then wait.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_Y1",
    "say": "Right. Then you've seen it.",
    "note": "They answered YES. Flat, a breath.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_Y2",
    "say": "Don't treat them any different. It's still them in there. Okay?",
    "note": "YES. His one kind thing.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_N1",
    "say": "Good. Keep it that way. Every review, pass it, whatever it takes.",
    "note": "They answered NO. Firm.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_N2",
    "say": "Just pass them. Please.",
    "note": "NO. Quiet.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_S",
    "say": "Nothing? Fine. I'll say it anyway.",
    "note": "Nobody answered. Then the NO lines.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_04",
    "say": "Look, your manager at the diner rang me. He's never done that before.",
    "note": "The diner manager. Puzzled by it.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_05",
    "say": "He wants you out. Him. He's working on something.",
    "note": "Slow.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_06",
    "say": "I'll tell you more when I can. Not on this line.",
    "note": "Careful.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_07",
    "say": "They've given me a camera now, where I am. Weird, that.",
    "note": "A small laugh.",
    "group": "Call 3"
   },
   {
    "file": "Office_Call3_08",
    "say": "Van's back. I've got to go. Pass the next one, okay?",
    "note": "Hurried. Then the line clicks off (the game adds the click).",
    "group": "Call 3"
   }
  ]
 },
 {
  "key": "diner-crew",
  "name": "The Diner's New Crew",
  "who": "Whoever picks up the diner's phone when the crew calls it from the call centre.",
  "folder": "DinerCrew",
  "lines": [
   {
    "file": "Diner_Answer_01",
    "say": "Hello? ...The diner?",
    "note": "Picking up a phone nobody rings. A little unsure, friendly, a breakfast rush behind you. A pause after \"Hello?\".",
    "group": "Answer"
   }
  ]
 },
 {
  "key": "crew-radio",
  "name": "The Crew Radio",
  "who": "A teammate's voice over the crew's radio in the security depot, warning that a parked body is being watched.",
  "folder": "CrewRadio",
  "lines": [
   {
    "file": "Crew_Alert_Eye",
    "say": "Eye, someone's watching you.",
    "note": "A quick heads-up to a teammate. Calm, a little urgent.",
    "group": "Alert"
   },
   {
    "file": "Crew_Alert_Talker",
    "say": "Talker, someone's watching you.",
    "note": "The same, to the TALKER.",
    "group": "Alert"
   },
   {
    "file": "Crew_Alert_Tech",
    "say": "Tech, someone's watching you.",
    "note": "The same, to the TECH.",
    "group": "Alert"
   },
   {
    "file": "Crew_Alert_Runner",
    "say": "Runner, someone's watching you.",
    "note": "The same, to the RUNNER.",
    "group": "Alert"
   }
  ]
 },
 {
  "key": "office-client-1",
  "name": "Office Client, Day 1: Mr. Okafor",
  "who": "The day's client at TaMorgan Group: gives the brief, runs the meeting, judges the pitch. Mr. Okafor is short on time, brisk, polite. A player's name is never said: where the game names someone, the line here leaves it out.",
  "folder": "OfficeClient1",
  "lines": [
   {
    "file": "Office_Brief_Day1_01",
    "say": "Morning. I'm short on time, so I'll keep this quick.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day1_02",
    "say": "Two things today: the plan, and the build.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day1_03",
    "say": "The plan goes on the wall over there. Print it when it's done.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day1_04",
    "say": "The build starts rolling the moment you press start. I'll be watching.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Meeting_Day1_01",
    "say": "First, a quick look at the numbers.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day1_02",
    "say": "Are we on track for launch?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day1_03",
    "say": "Our users want a clean dashboard.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day1_04",
    "say": "Who signs off on the plan?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day1_05",
    "say": "The budget stays where it is.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day1_06",
    "say": "Any risks I should know about?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Slip_01",
    "say": "Let's go over that again. Are we clear?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Slip_02",
    "say": "Let me write that down.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Slip_03",
    "say": "Can I count on you?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Slip_04",
    "say": "One more slide, then.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Slip_Reaction",
    "say": "Let's add that to the agenda.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Good",
    "say": "Good.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_End",
    "say": "Great. That's everything.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Crash_01",
    "say": "Was that the pipeline?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Crash_02",
    "say": "Did the build just fall over?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Clatter_01",
    "say": "Did something just fall?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Clatter_02",
    "say": "Is the plan coming together?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Pitch_Day1_01",
    "say": "Right. Let's see what you've got.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day1_Wall_Done",
    "say": "The whole plan, up on the wall. Good.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day1_Wall_Half",
    "say": "Half a plan. I'll pay for half.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day1_Wall_Missing",
    "say": "Where's the plan?",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day1_Run",
    "say": "Now the build. Show me it running.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day1_Build_Done",
    "say": "Straight to the server. Lovely.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day1_Build_Crash",
    "say": "Well. It got that far, at least.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day1_Build_Short",
    "say": "Still rolling. I'll pay for what I saw.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day1_Build_Missing",
    "say": "It never left the start.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day1_End",
    "say": "That's the day. Same time tomorrow.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   }
  ]
 },
 {
  "key": "office-client-2",
  "name": "Office Client, Day 2: Ms. Lindqvist",
  "who": "The day's client at TaMorgan Group: gives the brief, runs the meeting, judges the pitch. Ms. Lindqvist is warm and quick. A player's name is never said: where the game names someone, the line here leaves it out.",
  "folder": "OfficeClient2",
  "lines": [
   {
    "file": "Office_Brief_Day2_01",
    "say": "Good morning. I'm Ms. Lindqvist. I've read your file.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day2_02",
    "say": "Same as yesterday: a plan on the wall, and a build.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day2_03",
    "say": "Print the plan when it's finished. I'll want a copy.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day2_04",
    "say": "Press start when you're ready. I'll be in Room One.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Meeting_Day2_01",
    "say": "Let's start with last quarter.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_02",
    "say": "Did you read my email?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_03",
    "say": "The launch date has not moved.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_04",
    "say": "Who owns the timeline?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_05",
    "say": "My team likes things simple.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_06",
    "say": "Can you take that offline?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_Slip_01",
    "say": "Let's go over that again. Are we clear?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_Slip_02",
    "say": "Let me write that down.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_Slip_03",
    "say": "Can I count on you?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_Slip_04",
    "say": "One more slide, then.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_Slip_Reaction",
    "say": "Let's add that to the agenda.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_Good",
    "say": "Good.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_End",
    "say": "Great. That's everything.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_CrashLie_01",
    "say": "What was that noise?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_CrashLie_02",
    "say": "Is the build still running?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_ClatterLie_01",
    "say": "Did the plan just fall apart?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_ClatterLie_02",
    "say": "How's the wall coming along?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_Truth_01",
    "say": "Tell me more about that.",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_Truth_02",
    "say": "How long until it's fixed?",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_Truth_03",
    "say": "I appreciate the honesty.",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day2_LateLie",
    "say": "Are you sure? Let's come back to that.",
    "note": "In a meeting, after an answer that came too slowly to believe. A small pause after \"sure?\".",
    "group": "Meeting"
   },
   {
    "file": "Office_Change_Solo_Day2_01",
    "say": "Don't mind me. Just a quick change.",
    "note": "Out on the office floor, moving cards on a wall while people work. Thinking aloud, cheerful.",
    "group": "Change"
   },
   {
    "file": "Office_Change_Solo_Day2_02",
    "say": "That goes there now.",
    "note": "Out on the office floor, moving cards on a wall while people work. Thinking aloud, cheerful.",
    "group": "Change"
   },
   {
    "file": "Office_Change_Solo_Day2_03",
    "say": "There. That's the plan now.",
    "note": "Out on the office floor, moving cards on a wall while people work. Thinking aloud, cheerful.",
    "group": "Change"
   },
   {
    "file": "Office_Pitch_Day2_01",
    "say": "Shall we? Show me the wall first.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day2_Wall_Done",
    "say": "The whole plan, up on the wall. Good.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day2_Wall_Half",
    "say": "Half a plan. I'll pay for half.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day2_Wall_Missing",
    "say": "Where's the plan?",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day2_Run",
    "say": "Now the build. Show me it running.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day2_Build_Done",
    "say": "Straight to the hatch. Lovely.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day2_Build_Crash",
    "say": "Well. It got that far, at least.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day2_Build_Short",
    "say": "Still rolling. I'll pay for what I saw.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day2_Build_Missing",
    "say": "It never left the start.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day2_End",
    "say": "Thank you, everyone. A good day's work.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   }
  ]
 },
 {
  "key": "office-client-3",
  "name": "Office Client, Day 3: Dr. Varga",
  "who": "The day's client at TaMorgan Group: gives the brief, runs the meeting, judges the pitch. Dr. Varga is dry and exact. A player's name is never said: where the game names someone, the line here leaves it out.",
  "folder": "OfficeClient3",
  "lines": [
   {
    "file": "Office_Brief_Day3_01",
    "say": "Morning. Dr. Varga. Let's not waste each other's time.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day3_02",
    "say": "I need a full plan, printed, and a working build.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day3_03",
    "say": "The build goes to the mail room hatch. Every time.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day3_04",
    "say": "Start when you like. The clock starts with you.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Meeting_Day3_01",
    "say": "I'll keep my notes short.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_02",
    "say": "What's the one priority today?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_03",
    "say": "I want it fast, and I want it right.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_04",
    "say": "Are your people stretched?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_05",
    "say": "Let's keep this between us.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_06",
    "say": "Do you need more budget?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_Slip_01",
    "say": "Let's go over that again. Are we clear?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_Slip_02",
    "say": "Let me write that down.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_Slip_03",
    "say": "Can I count on you?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_Slip_04",
    "say": "One more slide, then.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_Slip_Reaction",
    "say": "Let's add that to the agenda.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_Good",
    "say": "Good.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_End",
    "say": "Great. That's everything.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_CrashLie_01",
    "say": "What was that noise?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_CrashLie_02",
    "say": "Is the build still running?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_ClatterLie_01",
    "say": "Did the plan just fall apart?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_ClatterLie_02",
    "say": "How's the wall coming along?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_Truth_01",
    "say": "Tell me more about that.",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_Truth_02",
    "say": "How long until it's fixed?",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_Truth_03",
    "say": "I appreciate the honesty.",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day3_LateLie",
    "say": "Are you sure? Let's come back to that.",
    "note": "In a meeting, after an answer that came too slowly to believe. A small pause after \"sure?\".",
    "group": "Meeting"
   },
   {
    "file": "Office_Pitch_Day3_01",
    "say": "Right. The wall, then the build.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day3_Wall_Done",
    "say": "The whole plan, up on the wall. Good.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day3_Wall_Half",
    "say": "Half a plan. I'll pay for half.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day3_Wall_Missing",
    "say": "Where's the plan?",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day3_Run",
    "say": "Now the build. Show me it running.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day3_Build_Done",
    "say": "Straight to the hatch. Lovely.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day3_Build_Crash",
    "say": "Well. It got that far, at least.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day3_Build_Short",
    "say": "Still rolling. I'll pay for what I saw.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day3_Build_Missing",
    "say": "It never left the start.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day3_End",
    "say": "That will do. Thank you.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   }
  ]
 },
 {
  "key": "office-client-4",
  "name": "Office Client, Day 4: Ms. Haddad",
  "who": "The day's client at TaMorgan Group: gives the brief, runs the meeting, judges the pitch. Ms. Haddad is bright and full of ideas. A player's name is never said: where the game names someone, the line here leaves it out.",
  "folder": "OfficeClient4",
  "lines": [
   {
    "file": "Office_Brief_Day4_01",
    "say": "Hello, everyone. Ms. Haddad. Lovely to finally meet you.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day4_02",
    "say": "The plan on the wall. The build to the hatch.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day4_03",
    "say": "I like to stay flexible. I'm sure you do too.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day4_04",
    "say": "Whenever you're ready.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Meeting_Day4_01",
    "say": "I've been thinking since this morning.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_02",
    "say": "Is the scope locked?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_03",
    "say": "My board wants the bigger picture.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_04",
    "say": "Can we still move things around?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_05",
    "say": "No promises. Just ideas.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_06",
    "say": "How do you feel about change?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_Slip_01",
    "say": "Let's go over that again. Are we clear?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_Slip_02",
    "say": "Let me write that down.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_Slip_03",
    "say": "Can I count on you?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_Slip_04",
    "say": "One more slide, then.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_Slip_Reaction",
    "say": "Let's add that to the agenda.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_Good",
    "say": "Good.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_End",
    "say": "Great. That's everything.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_CrashLie_01",
    "say": "What was that noise?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_CrashLie_02",
    "say": "Is the build still running?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_ClatterLie_01",
    "say": "Did the plan just fall apart?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_ClatterLie_02",
    "say": "How's the wall coming along?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_Truth_01",
    "say": "Tell me more about that.",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_Truth_02",
    "say": "How long until it's fixed?",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_Truth_03",
    "say": "I appreciate the honesty.",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day4_LateLie",
    "say": "Are you sure? Let's come back to that.",
    "note": "In a meeting, after an answer that came too slowly to believe. A small pause after \"sure?\".",
    "group": "Meeting"
   },
   {
    "file": "Office_Change_Day4_01",
    "say": "Sorry, everyone. One small change.",
    "note": "Out on the office floor, moving cards on a wall while people work. Thinking aloud, cheerful.",
    "group": "Change"
   },
   {
    "file": "Office_Change_Day4_02",
    "say": "This one moves here. And this one.",
    "note": "Out on the office floor, moving cards on a wall while people work. Thinking aloud, cheerful.",
    "group": "Change"
   },
   {
    "file": "Office_Change_Day4_03",
    "say": "Much better. Carry on.",
    "note": "Out on the office floor, moving cards on a wall while people work. Thinking aloud, cheerful.",
    "group": "Change"
   },
   {
    "file": "Office_Scope_Solo_Day4_01",
    "say": "One more thing for the plan. It's printing now.",
    "note": "On the office's wall screen, a quick call to the team. Cheerful, as if it is a small thing.",
    "group": "Scope"
   },
   {
    "file": "Office_Scope_Solo_Day4_02",
    "say": "It has to fit on the wall. Thank you!",
    "note": "On the office's wall screen, a quick call to the team. Cheerful, as if it is a small thing.",
    "group": "Scope"
   },
   {
    "file": "Office_Pitch_Day4_01",
    "say": "Let's see if my changes made it.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day4_Wall_Done",
    "say": "The whole plan, up on the wall. Good.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day4_Wall_Half",
    "say": "Half a plan. I'll pay for half.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day4_Wall_Missing",
    "say": "Where's the plan?",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day4_Run",
    "say": "Now the build. Show me it running.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day4_Build_Done",
    "say": "Straight to the hatch. Lovely.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day4_Build_Crash",
    "say": "Well. It got that far, at least.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day4_Build_Short",
    "say": "Still rolling. I'll pay for what I saw.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day4_Build_Missing",
    "say": "It never left the start.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Solo_Day4_Card",
    "say": "And my extra card. Good.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Solo_Day4_NoCard",
    "say": "I don't see my extra card.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day4_End",
    "say": "Lovely. I'll have more ideas tomorrow.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   }
  ]
 },
 {
  "key": "office-client-5",
  "name": "Office Client, Day 5: Mr. Brandt",
  "who": "The day's client at TaMorgan Group: gives the brief, runs the meeting, judges the pitch. Mr. Brandt is formal and polite. A player's name is never said: where the game names someone, the line here leaves it out.",
  "folder": "OfficeClient5",
  "lines": [
   {
    "file": "Office_Brief_Day5_01",
    "say": "Morning. Mr. Brandt. I'll be quick.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day5_02",
    "say": "One plan on the wall, printed. One build, delivered.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day5_03",
    "say": "I like to know exactly who I'm working with.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day5_04",
    "say": "Go ahead and start.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Solo_Day5",
    "say": "The contract is on the side table. Mark it before the pitch.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Meeting_Day5_01",
    "say": "Thanks for coming.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_02",
    "say": "What are you holding up out there?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_03",
    "say": "I like one point of contact.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_04",
    "say": "Is the team fine without you?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_05",
    "say": "Let's go through the numbers slowly.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_06",
    "say": "Will it be ready for the pitch?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_Slip_01",
    "say": "Let's go over that again. Are we clear?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_Slip_02",
    "say": "Let me write that down.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_Slip_03",
    "say": "Can I count on you?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_Slip_04",
    "say": "One more slide, then.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_Slip_Reaction",
    "say": "Let's add that to the agenda.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_Good",
    "say": "Good.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_End",
    "say": "Great. That's everything.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_CrashLie_01",
    "say": "What was that noise?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_CrashLie_02",
    "say": "Is the build still running?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_ClatterLie_01",
    "say": "Did the plan just fall apart?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_ClatterLie_02",
    "say": "How's the wall coming along?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_Truth_01",
    "say": "Tell me more about that.",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_Truth_02",
    "say": "How long until it's fixed?",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_Truth_03",
    "say": "I appreciate the honesty.",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day5_LateLie",
    "say": "Are you sure? Let's come back to that.",
    "note": "In a meeting, after an answer that came too slowly to believe. A small pause after \"sure?\".",
    "group": "Meeting"
   },
   {
    "file": "Office_Pitch_Day5_01",
    "say": "Walk me through it.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day5_Wall_Done",
    "say": "The whole plan, up on the wall. Good.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day5_Wall_Half",
    "say": "Half a plan. I'll pay for half.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day5_Wall_Missing",
    "say": "Where's the plan?",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day5_Run",
    "say": "Now the build. Show me it running.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day5_Build_Done",
    "say": "Straight to the hatch. Lovely.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day5_Build_Crash",
    "say": "Well. It got that far, at least.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day5_Build_Short",
    "say": "Still rolling. I'll pay for what I saw.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day5_Build_Missing",
    "say": "It never left the start.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Solo_Day5_Contract",
    "say": "The contract's marked. Thank you.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Solo_Day5_NoContract",
    "say": "The contract's still blank.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day5_End",
    "say": "Thank you. Thank you all.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   }
  ]
 },
 {
  "key": "office-client-6",
  "name": "Office Client, Day 6: Ms. Castellano",
  "who": "The day's client at TaMorgan Group: gives the brief, runs the meeting, judges the pitch. Ms. Castellano is calm, a little too calm. A player's name is never said: where the game names someone, the line here leaves it out.",
  "folder": "OfficeClient6",
  "lines": [
   {
    "file": "Office_Brief_Day6_01",
    "say": "Good morning. Ms. Castellano. Head office sent me.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day6_02",
    "say": "You know the work by now. The plan, then the build.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day6_03",
    "say": "There's an all-hands later. Please attend. Everyone does.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Brief_Day6_04",
    "say": "Start when you're ready.",
    "note": "The brief, standing at the table before work starts. To the whole team. Unhurried.",
    "group": "Brief"
   },
   {
    "file": "Office_Meeting_Day6_01",
    "say": "Let's make this one count.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_02",
    "say": "How's the floor looking?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_03",
    "say": "I've heard good things about this team.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_04",
    "say": "Is the delivery on its way?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_05",
    "say": "Head office is following this one closely.",
    "note": "In a meeting, across a table to one person. A statement; leave a beat after it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_06",
    "say": "Can we sign today?",
    "note": "In a meeting, a question to one person across the table. Expect an answer.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_Slip_01",
    "say": "Let's go over that again. Are we clear?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_Slip_02",
    "say": "Let me write that down.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_Slip_03",
    "say": "Can I count on you?",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_Slip_04",
    "say": "One more slide, then.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_Slip_Reaction",
    "say": "Let's add that to the agenda.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_Good",
    "say": "Good.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_End",
    "say": "Great. That's everything.",
    "note": "In a meeting, after a wrong or late answer. Patient, a little tired.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_CrashLie_01",
    "say": "What was that noise?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_CrashLie_02",
    "say": "Is the build still running?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_ClatterLie_01",
    "say": "Did the plan just fall apart?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_ClatterLie_02",
    "say": "How's the wall coming along?",
    "note": "In a meeting, just after a loud crash or clatter outside the glass. Curious, not alarmed.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_Truth_01",
    "say": "Tell me more about that.",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_Truth_02",
    "say": "How long until it's fixed?",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_Truth_03",
    "say": "I appreciate the honesty.",
    "note": "In a meeting, after an honest answer about a problem. Interested, wants to talk about it.",
    "group": "Meeting"
   },
   {
    "file": "Office_Meeting_Day6_LateLie",
    "say": "Are you sure? Let's come back to that.",
    "note": "In a meeting, after an answer that came too slowly to believe. A small pause after \"sure?\".",
    "group": "Meeting"
   },
   {
    "file": "Office_Pitch_Day6_01",
    "say": "Last one for me. Let's see it.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day6_Wall_Done",
    "say": "The whole plan, up on the wall. Good.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day6_Wall_Half",
    "say": "Half a plan. I'll pay for half.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day6_Wall_Missing",
    "say": "Where's the plan?",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day6_Run",
    "say": "Now the build. Show me it running.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day6_Build_Done",
    "say": "Straight to the hatch. Lovely.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day6_Build_Crash",
    "say": "Well. It got that far, at least.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day6_Build_Short",
    "say": "Still rolling. I'll pay for what I saw.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day6_Build_Missing",
    "say": "It never left the start.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   },
   {
    "file": "Office_Pitch_Day6_End",
    "say": "That's everything. Thank you for your time.",
    "note": "The pitch: walking the team's work at the end of the day. Judging it out loud, fair.",
    "group": "Pitch"
   }
  ]
 },
 {
  "key": "office-colleagues",
  "name": "Office Colleagues",
  "who": "TaMorgan's colleagues, who catch you in the corridor for a chat you don't have time for.",
  "folder": "OfficeColleagues",
  "lines": [
   {
    "file": "Office_Ambush_01",
    "say": "Hey! Got a minute?",
    "note": "Stepping out at a corridor corner and walking beside a colleague. Chatty, friendly, in no hurry.",
    "group": "Ambush"
   },
   {
    "file": "Office_Ambush_02",
    "say": "Quick one. Did you get my email?",
    "note": "Stepping out at a corridor corner and walking beside a colleague. Chatty, friendly, in no hurry.",
    "group": "Ambush"
   },
   {
    "file": "Office_Ambush_03",
    "say": "Walk with me. It's about Friday.",
    "note": "Stepping out at a corridor corner and walking beside a colleague. Chatty, friendly, in no hurry.",
    "group": "Ambush"
   },
   {
    "file": "Office_Ambush_04",
    "say": "Did you sign the birthday card?",
    "note": "Stepping out at a corridor corner and walking beside a colleague. Chatty, friendly, in no hurry.",
    "group": "Ambush"
   },
   {
    "file": "Office_Ambush_05",
    "say": "Have you got a pen I can borrow?",
    "note": "Stepping out at a corridor corner and walking beside a colleague. Chatty, friendly, in no hurry.",
    "group": "Ambush"
   },
   {
    "file": "Office_Ambush_06",
    "say": "Is the printer working for you?",
    "note": "Stepping out at a corridor corner and walking beside a colleague. Chatty, friendly, in no hurry.",
    "group": "Ambush"
   },
   {
    "file": "Office_Ambush_Bye_01",
    "say": "No worries. Catch you later.",
    "note": "Peeling away down the corridor. Friendly, a little put out.",
    "group": "Ambush"
   },
   {
    "file": "Office_Ambush_Bye_02",
    "say": "Fine. I'll send you a calendar invite.",
    "note": "Peeling away down the corridor. Friendly, a little put out.",
    "group": "Ambush"
   },
   {
    "file": "Office_Ambush_More_01",
    "say": "Great. So, here's the thing.",
    "note": "Still walking beside them, not taking the hint. Keen.",
    "group": "Ambush"
   },
   {
    "file": "Office_Ambush_More_02",
    "say": "Oh, and one more thing.",
    "note": "Still walking beside them, not taking the hint. Keen.",
    "group": "Ambush"
   }
  ]
 }
];
