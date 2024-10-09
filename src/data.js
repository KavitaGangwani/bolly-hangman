const Movie = [
    {
      title: "Kabir Singh",
      year: 2019,
      description: "A romantic drama directed by Sandeep Reddy Vanga, starring Shahid Kapoor as a troubled surgeon dealing with anger management issues and heartbreak."
    },
    {
      title: "Bajrangi Bhaijaan",
      year: 2015,
      description: "Directed by Kabir Khan, this heartwarming drama follows the journey of a devout Hanuman devotee who embarks on a mission to reunite a lost Pakistani girl with her family."
    },
    {
      title: "Kuch Kuch Hota Hai",
      year: 1998,
      description: "Directed by Karan Johar, this romantic drama features Shah Rukh Khan, Kajol, and Rani Mukerji in a story about love, friendship, and second chances."
    },
    {
      title: "Sultan",
      year: 2016,
      description: "Directed by Ali Abbas Zafar, this sports drama stars Salman Khan as a wrestler who faces personal and professional challenges on his journey to redemption."
    },
    {
      title: "Chennai Express",
      year: 2013,
      description: "Directed by Rohit Shetty, this action-comedy follows the adventures of a man who embarks on a journey from Mumbai to Rameswaram, encountering love and chaos along the way."
    },
    {
      title: "Andhadhun",
      year: 2018,
      description: "Directed by Sriram Raghavan, this black comedy thriller follows a blind pianist who unwittingly becomes embroiled in a murder mystery, leading to a series of unexpected twists."
    },
    {
      title: "Om Shanti Om",
      year: 2007,
      description: "Directed by Farah Khan, this romantic drama features Shah Rukh Khan and Deepika Padukone in a reincarnation story that spans two generations, blending romance, revenge, and Bollywood glamour."
    },
    {
      title: "Kal Ho Naa Ho",
      year: 2003,
      description: "Directed by Nikkhil Advani, this romantic drama revolves around a terminally ill man who tries to bring happiness into the lives of those around him, especially his neighbor."
    },
    {
      title: "A Wednesday",
      year: 2008,
      description: "Directed by Neeraj Pandey, this thriller unfolds over the course of a single day as a common man takes drastic measures to challenge the system and demand justice."
    },
    
    {
      title: "Stree",
      year: 2018,
      description: "Directed by Amar Kaushik, this horror comedy is based on the urban legend of the 'Nale Ba' witch and her nightly visits to a small town, blending scares with humor and social commentary."
    },
    {
      title: "Dabangg",
      year: 2010,
      description: "Directed by Abhinav Kashyap, this action-comedy introduces Salman Khan as Chulbul Pandey, a fearless and quirky police officer known for his unconventional methods of law enforcement."
    },
    {
      title: "Queen",
      year: 2013,
      description: "Directed by Vikas Bahl, this comedy-drama follows a young woman who embarks on a solo honeymoon trip to Europe after her wedding plans fall apart, discovering independence and self-discovery along the way."
    },
    {
      title: "Barfi",
      year: 2012,
      description: "Directed by Anurag Basu, this romantic comedy-drama features Ranbir Kapoor as a charming deaf and mute man who falls in love with an autistic woman, played by Priyanka Chopra."
    },
    {
      title: "Kaho Naa Pyaar Hai",
      year: 2000,
      description: "Directed by Rakesh Roshan, this romantic thriller marks the debut of Hrithik Roshan and follows the story of two lookalikes, one of whom seeks revenge for his lover's murder."
    },
    {
      title: "Golmaal Fun Unlimited",
      year: 2006,
      description: "Directed by Rohit Shetty, this slapstick comedy follows the misadventures of four friends who find themselves embroiled in hilarious situations as they try to outsmart each other."
    },
    {
      title: "Munna Bhai M.B.B.S.",
      year: 2003,
      description: "Directed by Rajkumar Hirani, this comedy-drama stars Sanjay Dutt as a lovable goon who enrolls in medical school to fulfill his father's dream, bringing laughter and life lessons to the hospital."
    },
    {
      title: "Ghajini",
      year: 2008,
      description: "Directed by A.R. Murugadoss, this psychological action thriller follows a man with short-term memory loss who seeks vengeance for the murder of his beloved, piecing together clues from his past."
    },
   
    {
      title: "Koi Mil Gaya",
      year: 2003,
      description: "Directed by Rakesh Roshan, this science fiction drama follows the journey of a mentally challenged young man who befriends an extraterrestrial being with special powers."
    },
    {
      title: "Kabhi Khushi Kabhie Gham",
      year: 2001,
      description: "Directed by Karan Johar, this family drama explores themes of love, duty, and reconciliation as it follows the wealthy Raichand family through their trials and tribulations."
    },
    {
      title: "Dil Chahta Hai",
      year: 2001,
      description: "Directed by Farhan Akhtar, this coming-of-age film follows three inseparable friends as they navigate love, friendship, and adulthood in modern-day Mumbai."
    },
    {
      title: "Vicky Donor",
      year: 2012,
      description: "Directed by Shoojit Sircar, this romantic comedy addresses the taboo subject of sperm donation with humor and sensitivity, starring Ayushmann Khurrana and Yami Gautam."
    },
    {
      title: "Wake Up Sid",
      year: 2009,
      description: "Directed by Ayan Mukerji, this coming-of-age film follows a lazy and aimless young man who discovers purpose and responsibility after a chance encounter with an ambitious woman."
    },
    {
      title: "Rockstar",
      year: 2011,
      description: "Directed by Imtiaz Ali, this musical drama stars Ranbir Kapoor as a troubled musician who finds fame, love, and heartbreak on his journey to self-discovery."
    },
    {
      title: "Raazi",
      year: 2018,
      description: "Directed by Meghna Gulzar, this spy thriller is based on the true story of an Indian woman who marries a Pakistani military officer to provide vital intelligence during the Indo-Pakistani War of 1971."
    },
    {
      title: "Kesari",
      year: 2019,
      description: "Directed by Anurag Singh, this historical action film tells the story of the Battle of Saragarhi, where a small group of Sikh soldiers valiantly fought against a much larger enemy force."
    },
    {
      title: "Dilwale",
      year: 2015,
      description: "Directed by Rohit Shetty, this romantic action-comedy features Shah Rukh Khan and Kajol in a story of love, betrayal, and redemption, set against the backdrop of feuding mafia families."
    },
    
    {
      title: "Rang De Basanti",
      year: 2006,
      description: "Directed by Rakeysh Omprakash Mehra, this patriotic drama follows a group of young friends who become politically active and question the system after starring in a documentary about India's freedom fighters."
    },
    {
      title: "Mohabbatein",
      year: 2000,
      description: "Directed by Aditya Chopra, this romantic drama revolves around a stern headmaster who challenges his students to choose between love and tradition, leading to a clash of ideologies."
    },
    {
      title: "Swades",
      year: 2004,
      description: "Directed by Ashutosh Gowariker, this drama follows an Indian-American scientist who returns to India and becomes involved in grassroots development projects, rediscovering his roots and sense of belonging."
    },
    {
      title: "Krrish",
      year: 2006,
      description: "Directed by Rakesh Roshan, this superhero film follows the adventures of Krishna, a young man with superhuman abilities who must embrace his destiny to protect the world from evil forces."
    },
    {
      title: "Don",
      year: 2006,
      description: "Directed by Farhan Akhtar, this action thriller is a remake of the 1978 film of the same name, featuring Shah Rukh Khan as a charismatic underworld leader known for his cunning and style."
    },
    
    {
      title: "Raajneeti",
      year: 2010,
      description: "Directed by Prakash Jha, this political thriller explores the power struggles within a political family, highlighting the dark side of politics and the lengths people will go to for power."
    },
    {
      title: "Zindagi Na Milegi Dobara",
      year: 2011,
      description: "Directed by Zoya Akhtar, this coming-of-age film follows three friends as they embark on a road trip across Spain, confronting their fears and rediscovering the joy of living."
    },
    {
      title: "Ae Dil Hai Mushkil",
      year: 2016,
      description: "Directed by Karan Johar, this romantic drama explores unrequited love and complex relationships, featuring Ranbir Kapoor, Anushka Sharma, and Aishwarya Rai Bachchan."
    },
    {
      title: "Jab We Met",
      year: 2007,
      description: "Directed by Imtiaz Ali, this romantic comedy follows the chance meeting and subsequent adventures of two strangers on a train journey, leading to unexpected love and self-discovery."
    },
    {
      title: "Kabhi Alvida Naa Kehna",
      year: 2006,
      description: "Directed by Karan Johar, this romantic drama explores themes of love, marriage, and infidelity as it follows two couples struggling with their relationships and societal expectations."
    },
    {
      title: "Badhaai Ho",
      year: 2018,
      description: "Directed by Amit Ravindernath Sharma, this comedy-drama follows a middle-aged couple who unexpectedly find themselves expecting a child, leading to comical and heartwarming situations."
    },
    {
      title: "Gadar",
      year: 2001,
      description: "Directed by Anil Sharma, this period romance set during the partition of India tells the story of a Sikh truck driver who falls in love with a Muslim woman and fights to reunite with her against all odds."
    },
    {
      title: "Fashion",
      year: 2008,
      description: "Directed by Madhur Bhandarkar, this drama explores the dark side of the fashion industry through the rise and fall of a young model, played by Priyanka Chopra."
    },
    {
      title: "Rock On",
      year: 2008,
      description: "Directed by Abhishek Kapoor, this musical drama follows a rock band's journey to redemption and reconciliation, as they reunite after years to pursue their passion for music once again."
    },
    {
      title: "Dear Zindagi",
      year: 2016,
      description: "Directed by Gauri Shinde, this slice-of-life film stars Alia Bhatt as a young woman who seeks therapy to deal with her emotional baggage, finding guidance and perspective from her unconventional therapist, played by Shah Rukh Khan."
    },

    {
      title: "Devdas",
      year: 2002,
      description: "Directed by Sanjay Leela Bhansali, this romantic drama is based on the novel of the same name by Sarat Chandra Chattopadhyay, depicting the tragic love story of Devdas and Paro."
    },
    {
      title: "Hum Dil De Chuke Sanam",
      year: 1999,
      description: "Directed by Sanjay Leela Bhansali, this romantic drama follows a young woman torn between her arranged marriage and her love for a charismatic musician, leading to a journey of self-discovery and sacrifice."
    },
    {
      title: "Airlift",
      year: 2016,
      description: "Directed by Raja Krishna Menon, this historical drama is based on the true story of the largest civilian evacuation in history, as an Indian businessman helps evacuate stranded Indians during the Gulf War."
    },
    {
      title: "Chak De India",
      year: 2007,
      description: "Directed by Shimit Amin, this sports drama follows the journey of a former hockey player who coaches the Indian women's national field hockey team, leading them to victory against all odds."
    },
    {
      title: "Piku",
      year: 2015,
      description: "Directed by Shoojit Sircar, this comedy-drama follows a quirky father-daughter duo as they embark on a road trip from Delhi to Kolkata, navigating family dynamics and existential crises along the way."
    },
    {
      title: "Border",
      year: 1997,
      description: "Directed by J.P. Dutta, this war drama is based on the Battle of Longewala during the Indo-Pakistani War of 1971, showcasing the bravery and sacrifice of Indian soldiers."
    },
    {
      title: "My Name Is Khan",
      year: 2010,
      description: "Directed by Karan Johar, this drama follows an Indian Muslim man with Asperger's syndrome who embarks on a journey across America to meet the president, in an attempt to clear his name and spread a message of peace."
    },
    
    {
      title: "Dil Se",
      year: 1998,
      description: "Directed by Mani Ratnam, this romantic thriller explores themes of love and terrorism as it follows a radio journalist who falls in love with a mysterious woman with a hidden agenda."
    },
    {
      title: "Chhichhore",
      year: 2019,
      description: "Directed by Nitesh Tiwari, this comedy-drama follows a group of friends as they reminisce about their college days and confront the pressures of adulthood, celebrating the spirit of friendship and resilience."
    },
    {
      title: "Guru",
      year: 2007,
      description: "Directed by Mani Ratnam, this biographical drama is loosely based on the life of businessman Dhirubhai Ambani, depicting his rise from humble beginnings to corporate success."
    },
    {
      title: "Gangs of Wasseypur",
      year: 2012,
      description: "Directed by Anurag Kashyap, this epic crime saga spans generations as it follows the power struggles and vendettas within a coal mafia family in the town of Wasseypur."
    },
    {
      title: "Jodhaa Akbar",
      year: 2008,
      description: "Directed by Ashutosh Gowariker, this historical romance is based on the marriage of Mughal Emperor Akbar and Rajput princess Jodha Bai, exploring their relationship amidst political intrigue and cultural differences."
    },
    
    {
      title: "Dil Dhadakne Do",
      year: 2015,
      description: "Directed by Zoya Akhtar, this ensemble comedy-drama follows a dysfunctional Punjabi family as they embark on a cruise vacation, confronting their secrets and conflicts along the way."
    },
    {
      title: "Aankhen",
      year: 2002,
      description: "Directed by Vipul Amrutlal Shah, this heist thriller follows a disgraced bank manager who recruits blind men to carry out a daring robbery, only to face unexpected challenges."
    }
  ];
  
 export default Movie; 