const songs = [

    {
        title: "Without Me",
        artist: "Halsey",
        favorite: false,
        src: "songs/Halsey - Without Me.mp3",
        cover: "images/without_me_cover.jpg",
        lyrics: [
            { time: 15, text: "Found you when your heart was broke" },

            { time: 18, text: "I filled your cup until it overflowed" },

            { time: 22, text: "Took it so far to keep you close (keep you close)" },

            { time: 26, text: "I was afraid to leave you on your own" },

            { time: 28, text: "I said I'd catch you if you fall (fall)" },

            { time: 32, text: "And if they laugh, then fuck 'em all (all)" },

            { time: 35, text: "And then I got you off your knees" },

            { time: 37, text: "Put you right back on your feet" },

            { time: 39, text: "Just so you could take advantage of me" },

            { time: 42, text: "Tell me, how's it feel sittin' up there?" },

            { time: 46, text: "Feeling so high, but too far away to hold me" },

            { time: 49, text: "You know I'm the one who put you up there" },

            { time: 53, text: "Name in the sky, does it ever get lonely?" },

            { time: 56, text: "Thinking you could live without me" },

            { time: 60, text: "Thinking you could live without me" },

            { time: 63, text: "Baby, I'm the one who put you up there" },

            { time: 67, text: "I don't know why (yeah, I don't know why)" },

            { time: 70, text: "Thinking you could live without me" },

            { time: 75, text: "Live without me" },

            { time: 78, text: "Baby, I'm the one who put you up there" },

            { time: 81, text: "I don't know why (I don't know why, yeah yeah)" },

            { time: 85, text: "Gave love 'bout a hundred tries (hundred tries)" },

            { time: 89, text: "Just running from the demons in your mind" },

            { time: 91, text: "Then I took yours and made 'em mine (made 'em mine)" },

            { time: 96, text: "I didn't notice 'cause my love was blind" },

            { time: 99, text: "Said I'd catch you if you fall (fall)" },

            { time: 102, text: "And if they laugh, then fuck 'em all (all)" },

            { time: 106, text: "And then I got you off your knees" },

            { time: 108, text: "Put you right back on your feet" },

            { time: 110, text: "Just so you can take advantage of me" },

            { time: 113, text: "Tell me how's it feel sittin' up there?" },

            { time: 116, text: "Feeling so high but too far away to hold me" },

            { time: 120, text: "You know I'm the one who put you up there" },

            { time: 123, text: "Name in the sky, does it ever get lonely?" },

            { time: 127, text: "Thinking you could live without me" },

            { time: 130, text: "Thinking you could live without me" },

            { time: 134, text: "Baby, I'm the one who put you up there" },

            { time: 137, text: "I don't know why (yeah, I don't know why)" },

            { time: 141, text: "Thinking you could live without me" },

            { time: 145, text: "Live without me" },

            { time: 148, text: "Baby, I'm the one who put you up there" },

            { time: 151, text: " I don't know why, yeah" },

            { time: 156, text: "You don't have to say just what you did" },

            { time: 159, text: "I already know (I know)" },

            { time: 161, text: "I had to go and find out from them" },

            { time: 165, text: "So tell me how's it feel (oh-whoa)" },

            { time: 169, text: "Tell me how's it feel sittin' up there?" },

            { time: 172, text: "Feeling so high but too far away to hold me" },

            { time: 176, text: "You know I'm the one who put ou up there" },

            { time: 179, text: "Name in the sky, does it ever get lonely?" },

            { time: 183, text: "Thinking you could live without me" },

            {
                time: 187, text: "Thinking you could live without me"
            },

            { time: 190, text: "Baby, I'm the one who put you up there" },

            { time: 194, text: "I don't know why (yeah, I don't know why)" }

        ]
    },

    {
        title: "2002",
        artist: "Anne-Marie",
        favorite: false,
        src: "songs/2002 - Anne Marie.mp3",
        cover: "images/2002_cover.jpg",
        lyrics: [

            { time: 0, text: "I will always remember" },

            { time: 3, text: "The day you kissed my lips" },

            { time: 6, text: "Light as a feather" },

            { time: 9, text: "And it went just like this" },

            { time: 10, text: "No, it's never been better" },

            { time: 12, text: "Than the summer of 2002 (ooh)" },

            { time: 20, text: "Uh, we were only eleven" },

            { time: 23, text: "But acting like grown-ups" },

            { time: 25, text: "Like we are in the present" },

            { time: 28, text: "Drinking from plastic cups" },

            { time: 31, text: `Singing, "Love is forever and ever"` },

            { time: 35, text: "Well, I guess that was true" },

            { time: 41, text: "Dancing on the hood in the middle of the woods" },

            { time: 44, text: "On an old Mustang, where we sang" },

            { time: 46, text: "Songs with all our childhood friends" },

            { time: 50, text: "And it went like this, say" },

            { time: 51, text: "Oops, I got 99 problems singing bye, bye, bye" },

            { time: 55, text: "Hold up, if you wanna go and take a ride with me" },

            { time: 58, text: "Better hit me, baby, one more time, uh" },

            { time: 61, text: "Paint a picture for you and me" },

            { time: 63, text: "On the days when we were young, uh" },

            { time: 66, text: "Singing at the top of both our lungs " },

            { time: 70, text: "Now we're under the covers" },

            { time: 73, text: "Fast forward to eighteen" },

            { time: 75, text: "We are more than lovers" },

            { time: 78, text: "Yeah, we are all we need" },

            { time: 81, text: "When we're holding each other" },

            { time: 82, text: "I'm taken back to 2002 (ooh)" },

            { time: 90, text: "Yeah" },

            { time: 91, text: "Dancing on the hood in the middle of the woods" },

            { time: 93, text: "On an old Mustang, where we sang" },

            { time: 96, text: "Songs with all our childhood friends" },

            { time: 99, text: "And it went like this, say" },

            { time: 101, text: "Oops, I got 99 problems singing bye, bye, bye" },

            { time: 106, text: "Hold up, if you wanna go and take a ride with me" },

            { time: 108, text: "Better hit me, baby, one more time, uh" },

            { time: 111, text: "Paint a picture for you and me" },

            { time: 113, text: "On the days when we were young, uh" },

            { time: 116, text: "Singing at the top of both our lungs" },

            { time: 120, text: "On the day we fell in love" },

            { time: 122, text: "Ooh ooh, ooh ooh" },

            { time: 124, text: "On the day we fell in love" },

            { time: 127, text: "Ooh ooh, ooh ooh" },

            { time: 130, text: "Dancing on the hood in the middle of the woods" },

            { time: 133, text: " On an old Mustang, where we sang" },

            { time: 135, text: "Songs with all our childhood friends" },

            { time: 140, text: " Oh, now" },

            { time: 141, text: " Oops, I got 99 problems singing bye, bye, bye" },

            { time: 146, text: "Hold up, if you wanna go and take a ride with me" },

            { time: 148, text: "Better hit me, baby, one more time" },

            { time: 151, text: "Paint a picture for you and me" },

            { time: 153, text: "On the days when we were young" },

            { time: 156, text: "Singing at the top of both our lungs" },

            { time: 159, text: "On the day we fell in love)" },

            { time: 162, text: "Ooh ooh, ooh ooh" },

            { time: 165, text: "On the day we fell in love" },

            { time: 167, text: "Ooh ooh, ooh ooh" },

            { time: 170, text: " On the day we fell in love" },

            { time: 172, text: "Ooh ooh, ooh ooh" },

            { time: 174, text: "On the day we fell in love" },

            { time: 177, text: "Ooh ooh, ooh ooh" },

            { time: 180, text: "On the day we fell in love, love, love" },
        ]

    },

    {
        title: "Bad Guy",
        artist: "Billie Eilish",
        favorite: false,
        src: "songs/Billie Eilish  bad guy.mp3",
        cover: "images/bad_guy_cover.jpg",
        lyrics: [

            { time: 14, text: "White shirt now red, my bloody nose" },

            { time: 17, text: "Sleepin', you're on your tippy toes" },

            { time: 21, text: "Creepin' around like no one knows" },

            { time: 24, text: "Think you're so criminal" },

            { time: 28, text: "Bruises on both my knees for you" },

            { time: 32, text: "Don't say thank you or please" },

            { time: 35, text: "I do what I want when I'm wanting to" },

            { time: 39, text: "My soul? So cynical" },

            { time: 42, text: "So you're a tough guy" },

            { time: 43, text: "Like it really rough guy" },

            { time: 45, text: "Just can't get enough guy" },

            { time: 47, text: "Chest always so puffed guy" },

            { time: 49, text: "I'm that bad type" },

            { time: 50, text: "Make your mama sad type" },

            { time: 52, text: "Make your girlfriend mad tight" },

            { time: 54, text: "Might seduce your dad type" },

            { time: 56, text: "I'm the bad guy, duh" },

            { time: 67, text: "I'm the bad guy" },

            { time: 74, text: "I like it when you take control" },

            { time: 78, text: "Even if you know that you don't" },

            { time: 81, text: "Own me, I'll let you play the role" },

            { time: 85, text: "I'll be your animal" },

            { time: 88, text: "My mommy likes to sing along with me" },

            { time: 94, text: "But she won't sing this song" },

            { time: 96, text: "If she reads all the lyrics" },

            { time: 99, text: "She'll pity the  men I know" },

            { time: 102, text: "So you're a tough guy" },

            { time: 104, text: "Like it really rough guy" },

            { time: 106, text: "Just can't get enough guy" },

            { time: 107, text: "Chest always so puffed guy" },

            { time: 109, text: "I'm that bad type" },

            { time: 111, text: "Make your mama sad type" },

            { time: 113, text: "Make your girlfriend mad tight" },

            { time: 115, text: "Might seduce your dad type" },

            { time: 117, text: "I'm the bad guy, duh" },

            { time: 127, text: "I'm the bad guy, duh" },

            { time: 140, text: "I'm only good at being bad, bad" },

            { time: 159, text: "I like when you get mad" },

            { time: 163, text: "I guess I'm pretty glad that you're alone" },

            { time: 167, text: "You said she's scared of me?" },

            { time: 169, text: "I mean, I don't see what she sees" },

            { time: 172, text: "But maybe it's 'cause I'm wearing your cologne" },

            { time: 177, text: "I'm a bad guy" },

            { time: 185, text: "I'm, I'm a bad guy" },

            { time: 188, text: "Bad guy, bad guy" },

            { time: 190, text: "I'm a bad" },
        ]
    },

    {
        title: "Sorry",
        artist: "Justin Bieber",
        favorite: false,
        src: "songs/Sorry - Justin Bieber.mp3",
        cover: "images/sorry_cover.jpg",
        lyrics: [

            { time: 10, text: "You gotta go and get angry at all of my honesty" },

            { time: 14, text: "You know I try, but I don't do too well with apologies" },

            { time: 19, text: "I hope I don't run out of time, could someone call a referee?" },

            { time: 23, text: "'Cause I just need one more shot at forgiveness" },

            { time: 29, text: "I know you know that I made those mistakes maybe once or twice" },

            { time: 33, text: "And by once or twice, I mean maybe a couple of hundred times" },

            { time: 38, text: "So let me, oh, let me redeem, oh, redeem, oh, myself tonight" },

            { time: 42, text: "'Cause I just need one more shot at second chances" },

            { time: 48, text: "Yeah, is it too late now to say sorry?" },

            { time: 52, text: "'Cause I'm missing more than just your body" },

            { time: 57, text: "Oh, is it too late now to say sorry?" },

            { time: 62, text: "Yeah, I know that I let you down" },

            { time: 64, text: "Is it too late to say I'm sorry now?" },

            { time: 69, text: "I'm sorry, yeah" },

            { time: 75, text: "Sorry, yeah" },

            { time: 80, text: "Sorry" },

            { time: 81, text: "Yeah, I know that I let you down" },

            { time: 84, text: "Is it too late to say I'm sorry now?" },

            { time: 91, text: "I'll take every single piece of the blame if you want me to" },

            { time: 96, text: "But you know that there is no innocent one in this game for two" },

            { time: 101, text: "I'll go, I'll go and then you go, you go out and spill the truth" },

            { time: 105, text: "Can we both say the words and forget this?" },

            { time: 110, text: "Yeah, is it too late now to say sorry?" },

            { time: 114, text: "'Cause I'm missing more than just your body" },

            { time: 119, text: "Oh, is it too late now to say sorry?" },

            { time: 124, text: "Yeah, I know that I let you down" },

            { time: 127, text: "Is it too late to say I'm sorry now?" },

            { time: 130, text: "I'm not just tryna get you back on me (Oh, no, no)" },

            { time: 134, text: "'Cause I'm missing more than just your body (Your body)" },

            { time: 139, text: "Oh, is it too late now to say sorry?" },

            { time: 143, text: "Yeah, I know that I let you down" },

            { time: 147, text: "Is it too late to say I'm sorry now?" },

            { time: 151, text: "I'm sorry, yeah" },

            { time: 156, text: "Sorry, oh" },

            { time: 161, text: "Sorry" },

            { time: 162, text: "Yeah, I know that I let you down" },

            { time: 165, text: "Is it too late to say I'm sorry now?" },

            { time: 170, text: "I'm sorry, yeah" },

            { time: 175, text: "Sorry, oh" },

            { time: 180, text: "Sorry" },

            { time: 182, text: "Yeah, I know that I let you down" },

            { time: 184, text: "Is it too late to say I'm sorry now?" },

        ]
    },

    {
        title: "Perfect",
        artist: "Ed Sheeran",
        favorite: false,
        src: "songs/Perfect - Ed Sheeran.mp3",
        cover: "images/perfect_cover.jpg",
        lyrics: [

            { time: 2, text: "I found a love for me" },

            { time: 10, text: "Oh, darling, just dive right in and follow my lead" },

            { time: 18, text: "Well, I found a girl, beautiful and sweet" },

            { time: 25, text: "Oh, I never knew you were the someone waitin' for me" },

            { time: 32, text: "'Cause we were just kids when we fell in love" },

            { time: 37, text: "Not knowin' what it was" },

            { time: 40, text: "I will not give you up this time" },

            { time: 48, text: "Oh, darling, just kiss me slow" },

            { time: 52, text: "Your heart is all I own" },

            { time: 56, text: "And in your eyes, you're holding mine" },

            { time: 62, text: "Baby, I'm dancin' in the dark with you between my arms" },

            { time: 73, text: "Barefoot on the grass, while listenin' to our favourite song" },

            { time: 81, text: "When you said you looked a mess, I whispered underneath my breath" },

            { time: 88, text: "But you heard it, 'Darling, you look perfect tonight'" },

            { time: 101, text: "Well, I found a woman, stronger than anyone I know" },

            { time: 108, text: "She shares my dreams, I hope that someday, I'll share her home" },

            { time: 116, text: "I found a love to carry more than just my secrets" },

            { time: 124, text: "To carry love, to carry children of our own" },

            { time: 130, text: "We are still kids, but we're so in love" },

            { time: 135, text: "Fightin' against all odds" },

            { time: 139, text: "I know we'll be alright this time" },

            { time: 146, text: "Darling, just hold my hand" },

            { time: 150, text: "Be my girl, I'll be your man" },

            { time: 154, text: "I see my future in your eyes" },

            { time: 160, text: "Oh, baby, I'm dancin' in the dark with you between my arms" },

            { time: 172, text: "Barefoot on the grass while listenin' to our favourite song" },

            { time: 179, text: "When I saw you in that dress, lookin' so beautiful" },

            { time: 185, text: "I don't deserve this, darling, you look perfect tonight" },

            { time: 199, text: "No, no, no" },

            { time: 202, text: "Mm-mm" },

            { time: 206, text: "Baby, I'm dancin' in the dark with you between my arms" },

            { time: 217, text: "Barefoot on the grass while listenin' to our favourite song" },

            { time: 224, text: "I have faith in what I see, now I know I have met" },

            { time: 230, text: "An angel in person, and she looks perfect" },

            { time: 238, text: "I don't deserve this, you look perfect tonight" },
            { time: 247, text: " - - -" },
        ]
    },

    {
        title: "See You Again",
        artist: "Wiz Khalifa",
        favorite: false,
        src: "songs/See You Again.mp3",
        cover: "images/see_you_again_cover.jpg",
        lyrics: [
            { time: 11, text: "It's been a long day without you, my friend" },

            { time: 17, text: "And I'll tell you all about it when I see you again" },

            { time: 23, text: "We've come a long way from where we began" },

            { time: 29, text: "Oh, I'll tell you all about it when I see you again" },

            { time: 35, text: "When I see you again" },

            { time: 40, text: "Damn, who knew?" },

            { time: 41, text: "All the planes we flew, good things we been through" },

            { time: 45, text: "That I'd be standing right here talkin' to you" },

            { time: 47, text: "'Bout another path, I know we loved to hit the road and laugh" },

            { time: 50, text: "But something told me that it wouldn't last" },

            { time: 53, text: "Had to switch up, look at things different, see the bigger picture" },

            { time: 57, text: "Those were the days, hard work forever pays" },

            { time: 60, text: "Now I see you in a better place, uh" },

            { time: 65, text: "How can we not talk about family when family's all that we got?" },

            { time: 68, text: "Everything I went through, you were standing there by my side" },

            { time: 72, text: "And now you gon' be with me for the last ride" },

            { time: 74, text: "It's been a long day without you, my friend" },

            { time: 80, text: "And I'll tell you all about it when I see you again (I'll see you again)" },

            { time: 86, text: "We've come a long way (yeah, we came a long way)" },

            { time: 90, text: "From where we began (you know where we started)" },

            { time: 93, text: "Oh, I'll tell you all about it when I see you again (let me tell you)" },

            { time: 98, text: "When I see you again" },

            { time: 101, text: "Oh, oh" },

            { time: 107, text: "Ooh (yeah)" },

            { time: 116, text: "First, you both go out your way and the vibe is feeling strong" },

            { time: 119, text: "And what's small turned to a friendship, a friendship turned to a bond" },

            { time: 12, text: "And that bond will never be broken, the love will never get lost" },

            { time: 126, text: "And when brotherhood come first, then the line will never be crossed" },

            { time: 131, text: "Established it on our own when that line had to be drawn" },

            { time: 134, text: "And that line is what we reached, so remember me when I'm gone" },

            { time: 140, text: "How can we not talk about family when family's all that we got?" },

            { time: 143, text: "Everything I went through, you were standing there by my side" },

            { time: 146, text: "And now you gon' be with me for the last ride" },

            { time: 149, text: "So let the light guide your way, yeah" },

            { time: 155, text: "Hold every memory as you go" },

            { time: 161, text: "And every road you take" },

            { time: 165, text: "Will always lead you home, home" },

            { time: 173, text: "It's been a long day without you, my friend" },

            { time: 179, text: "And I'll tell you all about it when I see you again" },

            { time: 185, text: "We've come a long way from where we began" },

            { time: 195, text: "Oh, I'll tell you all about it when I see you again" },

            { time: 197, text: "When I see you again (oh, uh)" },

            { time: 203, text: "Yeah-yeah (oh, yeah, ooh, yup)" },

            { time: 210, text: "When I see you again (yup, uh)" },

            { time: 213, text: "See you again (oh, yeah), yeah-yeah (oh, yeah), oh-oh (yeah)" },

            { time: 218, text: "Ooh (uh-huh)" },

            { time: 221, text: "When I see you again (yup)" }

        ]
    },

    {
        title: "Treat You Better",
        artist: "Shawn Mendes",
        favorite: false,
        src: "songs/Treat You Better - Shawn Mendes.mp3",
        cover: "images/treat_you_better_cover.jpg",
        lyrics: [
            { time: 11, text: "I won't lie to you" },

            { time: 16, text: "I know he's just not right for you" },

            { time: 22, text: "And you can tell me if I'm off, but I see it on your face" },

            { time: 26, text: "When you say that he's the one that you want" },

            { time: 28, text: "And you're spendin' all your time in this wrong situation" },

            { time: 31, text: "And anytime you want it to stop" },

            { time: 34, text: "I know I can treat you better than he can" },

            { time: 39, text: "And any girl like you deserves a gentleman" },

            { time: 45, text: "Tell me, why are we wasting time on all your wasted cryin'" },

            { time: 49, text: "When you should be with me instead?" },

            { time: 51, text: "I know I can treat you better, better than he can" },

            { time: 58, text: "I'll stop time for you" },

            { time: 62, text: "The second you say you'd like me too" },

            { time: 69, text: "I just wanna give you the lovin' that you're missing" },

            { time: 72, text: "Baby, just to wake up with you" },

            { time: 74, text: "Would be everything I need, and this could be so different" },

            { time: 78, text: "Tell me what you want to do" },

            { time: 80, text: "'Cause I know I can treat you better than he can" },

            { time: 86, text: "And any girl like you deserves a gentleman" },

            { time: 91, text: "Tell me, why are we wasting time on all your wasted cryin'" },

            { time: 94, text: "When you should be with me instead?" },

            { time: 97, text: "I know I can treat you better, better than he can" },

            { time: 107, text: "Better than he can" },

            { time: 116, text: "Give me a sign, take my hand, we'll be fine" },

            { time: 121, text: "Promise, I won't let you down" },

            { time: 127, text: "Just know that you don't have to do this alone" },

            { time: 132, text: "Promise, I'll never let you down" },

            { time: 138, text: "'Cause I know I can treat you better than he can" },

            { time: 143, text: "And any girl like you deserves a gentleman" },

            { time: 149, text: "Tell me, why are we wasting time on all your wasted cryin'" },

            { time: 152, text: "When you should be with me instead?" },

            { time: 155, text: "I know I can treat you better, better than he can, oh" },

            { time: 166, text: "Better than he can" },

            { time: 172, text: "Better than he can" }



        ]
    }

];


const audio = document.querySelector("#audio");
const cover = document.querySelector(".cover");
const songTitle = document.querySelector(".song-title");
const artist = document.querySelector(".artist");
const playlist = document.querySelector(".playlist");
const search = document.querySelector("#search");
const noResult = document.querySelector(".no-result");
const shuffleBtn = document.querySelector("#shuffle");
const repeatBtn = document.querySelector("#repeat");
const allSongsBtn = document.querySelector("#allSongsBtn");
const favoritesBtn = document.querySelector("#favoritesBtn");
const toast = document.querySelector("#toast");
const toastText = document.querySelector("#toast-text");
const toastIcon = document.querySelector("#toast-icon");

let toastTimeout;
let currentSong = 0;
let favorites = JSON.parse(
    localStorage.getItem("favorites")
) || [];

const lyrics = document.querySelector(".lyrics");

// buttons
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let isPlaying = false;
let shuffle = false;
let showingFavorites = false;
let repeatMode = 0;
// 0 = OFF
// 1 = Repeat All
// 2 = Repeat One

let playedSongs = [];

// progress bar
const progress = document.querySelector(".progress");
const currentTimeEl = document.querySelector(".current-time");
const durationEl = document.querySelector(".duration");

// Load Song Function
function loadSong(index) {

    songTitle.textContent = songs[index].title;
    artist.textContent = songs[index].artist;
    cover.src = songs[index].cover;
    audio.src = songs[index].src;

    lyrics.innerHTML = "";
    songs[index].lyrics.forEach((line) => {
        const div = document.createElement("div");
        div.classList.add("lyric-line");
        div.dataset.time = line.time;
        div.textContent = line.text;
        lyrics.appendChild(div);
    });

    updatePlaylist();
}

// Generate Playlist Automatically
songs.forEach((song, index) => {

    const li = document.createElement("li");
    const isFavorite = favorites.includes(song.title);

    li.innerHTML = `<span class="song-name"> ${song.title} </span>
    <i class="${isFavorite ? "ri-heart-fill active-favorite" : "ri-heart-line"} favorite-btn"></i>`;

    const heart = li.querySelector(".favorite-btn");

    heart.addEventListener("click", (e) => {

        e.stopPropagation();

        if (favorites.includes(song.title)) {
            favorites = favorites.filter(title => title !== song.title);
        }
        else {
            favorites.push(song.title);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));

        heart.classList.toggle("ri-heart-line");
        heart.classList.toggle("ri-heart-fill");
        heart.classList.toggle("active-favorite");

        filterPlaylist();
    });

    li.addEventListener("click", () => {
        currentSong = index;
        playCurrentSong();
    });

    playlist.appendChild(li);

});


// Play/Pause Song Function
function playSong() {
    audio.play();
    isPlaying = true;
    playBtn.innerHTML = '<i class="ri-pause-fill"></i>';
    cover.classList.add("playing");
}


function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.innerHTML = '<i class="ri-play-fill"></i>';
    cover.classList.remove("playing");
}

// current song notification
function playCurrentSong() {

    loadSong(currentSong);
    playSong();
    showToast(
        `Now Playing: ${songs[currentSong].title}`,
        "ri-music-2-line",
        "green"
    );
}

// Play Button Event
playBtn.addEventListener("click", () => {

    if (isPlaying) {
        pauseSong();
    }

    else {
        playSong();
    }

});

// Smart Shuffle Function
function getRandomSong() {

    // Agar sab songs play ho gaye
    if (playedSongs.length >= songs.length - 1) {
        playedSongs = [currentSong];
    }
    let random;

    do {
        random = Math.floor(Math.random() * songs.length);
    }

    while (
        playedSongs.includes(random)
    );

    playedSongs.push(random);
    return random;
}

// Next Button Event
nextBtn.addEventListener("click", () => {

    if (shuffle) {
        currentSong = getRandomSong();
    }

    else {
        currentSong++;

        if (currentSong >= songs.length) {
            currentSong = 0;
        }
    }

    playCurrentSong();
});

// Previous Button Event
prevBtn.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    playCurrentSong();
});

// Update Playlist Function
function updatePlaylist() {

    const items = document.querySelectorAll(".playlist li");

    items.forEach((item) => {
        item.classList.remove("active");
    });

    items[currentSong]
        .classList.add("active");
}

// Update Progress While Song Plays
audio.addEventListener("timeupdate", () => {

    const current = audio.currentTime;
    const duration = audio.duration;

    progress.value = (current / duration) * 100;

    let currentMin = Math.floor(current / 60);
    let currentSec = Math.floor(current % 60);

    if (currentSec < 10) {
        currentSec = "0" + currentSec;
    }

    currentTimeEl.textContent = `${currentMin}:${currentSec}`;
});

// Show Duration
audio.addEventListener("loadedmetadata", () => {
    let durationMin = Math.floor(audio.duration / 60);
    let durationSec = Math.floor(audio.duration % 60);

    if (durationSec < 10) {
        durationSec = "0" + durationSec;
    }

    durationEl.textContent = `${durationMin}:${durationSec}`;
});

// Seek Song
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// Auto Play Next Song (Bonus)
audio.addEventListener("ended", () => {

    // 🔂 Repeat One
    if (repeatMode === 2) {
        audio.currentTime = 0;
        playSong();
        return;
    }

    // 🔀 Shuffle
    if (shuffle) {
        currentSong = getRandomSong();
    }

    else {
        currentSong++;

        // 🔁 Repeat All
        if (currentSong >= songs.length) {

            if (repeatMode === 1) {

                currentSong = 0;

            }

            else {
                currentSong = songs.length - 1;
                pauseSong();
                return;
            }
        }
    }
    playCurrentSong();
});

// volume control
const volume = document.querySelector(".volume");

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

// Initialize the player
loadSong(currentSong);
updatePlaylist();
updateRepeatButton(false);

// Display current lyric line 
audio.addEventListener(
    "timeupdate", () => {

        const current = audio.currentTime;

    });

audio.addEventListener("timeupdate", () => {

    const current = audio.currentTime;
    const lines = document.querySelectorAll(".lyric-line");

    lines.forEach((line, index) => {

        const start = Number(line.dataset.time);

        const next = index < lines.length - 1
            ? Number(lines[index + 1].dataset.time)
            : Infinity;

        if (current >= start && current < next) {

            lines.forEach(l =>
                l.classList.remove("active-lyric")
            );

            line.classList.add("active-lyric");
            lyrics.scrollTo({
                top: line.offsetTop - lyrics.clientHeight / 2,
                behavior: "smooth"
            });
        }

    });

});

// filter playlist function
function filterPlaylist() {

    const items = document.querySelectorAll(".playlist li");

    items.forEach((item, index) => {

        const isFavorite = favorites.includes(songs[index].title);

        if (showingFavorites) {

            if (isFavorite) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }

        } else {
            item.classList.remove("hide");
        }

    });

    const visibleSongs = document.querySelectorAll(".playlist li:not(.hide)");

    if (showingFavorites && visibleSongs.length === 0) {

        noResult.style.display = "block";
        noResult.querySelector("h3").textContent = "No favorite songs";
        noResult.querySelector("p").textContent = "Add songs by clicking the heart icon.";

    } else {
        noResult.style.display = "none";
    }
}

// all songs button 
allSongsBtn.addEventListener("click", () => {

    showingFavorites = false;
    filterPlaylist();

    allSongsBtn.classList.add("active-filter");
    favoritesBtn.classList.remove("active-filter");

});

// favorites button function
favoritesBtn.addEventListener("click", () => {

    showingFavorites = true;
    filterPlaylist();

    favoritesBtn.classList.add("active-filter");
    allSongsBtn.classList.remove("active-filter");

});

// Search Songs
search.addEventListener("input", () => {

    const value = search.value.toLowerCase();
    const items = document.querySelectorAll(".playlist li");
    let found = false;

    items.forEach((item) => {
        const songName = item.textContent.toLowerCase();

        if (songName.includes(value)) {
            item.classList.remove("hide");
            found = true;
        }

        else {
            item.classList.add("hide");
        }

    });

    if (value === "") {
        noResult.style.display = "none";
        playlist.style.opacity = "1";
    }

    else {
        noResult.style.display = found ? "none" : "block";
        playlist.style.opacity = found ? "1" : ".3";
    }
});

// Shuffle Button
shuffleBtn.addEventListener("click", () => {

    shuffle = !shuffle;

    shuffleBtn.classList.toggle("active");
    playedSongs = [];

    showToast(
        shuffle
            ? "Shuffle Enabled" : "Shuffle Disabled", "ri-shuffle-line",
        shuffle ? "purple" : "orange"
    );
});

// Repeat Button
repeatBtn.addEventListener("click", () => {
    repeatMode++;

    if (repeatMode > 2) {
        repeatMode = 0;
    }

    updateRepeatButton();

});
// Repeat One/All function
function updateRepeatButton(showNotification = true) {

    repeatBtn.classList.remove("active");

    if (repeatMode === 0) {
        repeatBtn.innerHTML = '<i class="ri-repeat-line"></i>';

        if (showNotification) {
            showToast("Repeat Off", "ri-close-circle-line", "orange");
        }
    }

    else if (repeatMode === 1) {
        repeatBtn.classList.add("active");
        repeatBtn.innerHTML = '<i class="ri-repeat-line"></i>';

        if (showNotification) {
            showToast("Repeat All", "ri-repeat-line", "cyan");
        }
    }

    else {
        repeatBtn.classList.add("active");
        repeatBtn.innerHTML = '<i class="ri-repeat-one-line"></i>';

        if (showNotification) {
            showToast("Repeat One", "ri-repeat-one-line", "cyan");
        }
    }

}

// toast message
function showToast(message, icon, color) {

    clearTimeout(toastTimeout);
    toastText.textContent = message;
    toastIcon.className = icon;

    toast.classList.remove(
        "purple",
        "cyan",
        "green",
        "orange"
    );

    toast.classList.add(color);
    toast.classList.add("show");

    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}


// Keyboard Shortcuts

// document.addEventListener("keydown",(e)=>{

//     // Space = Play / Pause

//     if(e.code==="Space"){

//         e.preventDefault();

//         if(isPlaying){

//             pauseSong();

//         }

//         else{

//             playSong();

//         }

//     }

//     // Next

//     if(e.code==="ArrowRight"){

//         nextBtn.click();

//     }

//     // Previous

//     if(e.code==="ArrowLeft"){

//         prevBtn.click();

//     }

// });

// // Volume Up

// if(e.code==="ArrowUp"){

//     e.preventDefault();

//     volume.value=Math.min(
//         1,
//         Number(volume.value)+0.1
//     );

//     audio.volume=volume.value;

// }

// // Volume Down

// if(e.code==="ArrowDown"){

//     e.preventDefault();

//     volume.value=Math.max(
//         0,
//         Number(volume.value)-0.1
//     );

//     audio.volume=volume.value;

// }