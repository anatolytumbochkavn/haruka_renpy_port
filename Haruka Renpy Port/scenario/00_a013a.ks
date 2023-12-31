


@PlaySe file=SE352

@Cg file=B17a
@Update
@Wait time=2000


@Hide
@BlackOut time=1000

@Cg file=B19a

@Talk name=Haruka
Mm? What's wrong, Sora?
@Hitret id=2024


@PlayBgm file=BGM05
@Char file=CA01_01M

@Talk name=心の声
Break time. As I was preparing for the next class, Sora
entered the classroom.
@Hitret id=2025

@Talk name=Sora voice=SR000468
...I'm not here for you, Haru.
@Hitret id=2026

@Talk name=Haruka
Uh...
@Hitret id=2027

@Talk name=心の声
I-If that was the case, then why was she here?
@Hitret id=2028


@Char file=CF01_03M

@Talk name=Ryouhei voice=RH000094
Could it be you came for me?
@Hitret id=2029


@PlaySe file=se008

@Char file=CH01_04M x=-300
@Char file=CF01_03M x=-200
@Char file=CA01_01M x=200
@Update time=0
@Leave id=亮平 mx=240 my=0 fade=1 time=250 accel=1
@Update
@waitAction id=亮平
@Char file=CH01_02M x=-200
@Char file=CA01_01M x=200

@Talk name=Class　Rep voice=KO000106
Ah, welcome Sora-san. Are you prepared already?
@Hitret id=2030


@Char file=CA01_10M

@Talk name=Sora voice=SR000469
Yes.
@Hitret id=2031


@Talk name=心の声
The class rep approached with a cheerful smile on her face.
@Hitret id=2032

@Talk name=心の声
Sora was a bit awkward and fidgety, but I couldn't see the
gulf of hesitation that had once been between her and Class
Rep.
@Hitret id=2033


@ClearChar
@Char file=CC01_02M

@Talk name=Akira voice=AK000113
I'm ready too!
@Hitret id=2034

@Talk name=Haruka
Wha... Where's everyone going?
@Hitret id=2035


@Char file=CA01_01M

@Talk name=Sora voice=SR000470
Today is cooking class...
@Hitret id=2036

@Talk name=Haruka
Uh... Cooking class... With ingredients and stuff; you sure?
@Hitret id=2037

@Talk name=Sora voice=SR000471
Mm.
@Hitret id=2038

@Talk name=心の声
As she said that, Sora showed me her second bag. Yes, she
did take it with her to school this morning... But when did
she...
@Hitret id=2039


@Char file=CC01_01M

@Talk name=Akira voice=AK000114
We bought the materials yesterday when we went shopping
together, see?
@Hitret id=2040


@Char file=CA01_02M

@Talk name=Sora voice=SR000472
We bought them.
@Hitret id=2041

@Talk name=Haruka
D-Did you...
@Hitret id=2042



@Talk name=Akira voice=AK000115
That being said, Haru-kun, Ryouhei-kun, we may not be eating
lunch together today.
@Hitret id=2043

@Talk name=Akira voice=AK000116
When class is over, we might stay and eat in the cooking
room.
@Hitret id=2044

@Talk name=Haruka
Aah, I see. I understand, got it.
@Hitret id=2045


@ClearChar
@Char file=CF01_06M

@Talk name=Ryouhei voice=RH000095
What the hell, and you didn't invite me.
@Hitret id=2046


@Char file=CD01_01M
@Talk name=Kazuha voice=KA000084
Nakazato-Senpai, if you dare to come alone, then please do.
@Hitret id=2047


@Char file=CF01_10M

@Talk name=Ryouhei voice=RH000096
Ooh... Though I am a man of a hundred battles, the challenge
is high indeed. But, with Haruka by me!
@Hitret id=2048

@Talk name=Haruka
Even with you, that'd be embarrassing; pass.
@Hitret id=2049


@Char file=CF01_09M

@Talk name=Ryouhei voice=RH000097
What's with you? You'll get greeted with a welcoming mood,
so it'll be fine!
@Hitret id=2050

@Talk name=Haruka
No I won't, they'll just get annoyed.
@Hitret id=2051


@Char file=CD01_02M

@Talk name=Kazuha voice=KA000085
Kasugano-kun has some sense in him.
@Hitret id=2052


@Char file=CF01_03M

@Talk name=Ryouhei voice=RH000098
Darn... But, at cooking practice, there'll be an atmosphere
of, "Maybe the boy I like will come and take a peep at me!
I'll do my best!" don't you realize?
@Hitret id=2053


@ClearChar id=一葉
@Char file=CH01_11M

@Talk name=Class　Rep voice=KO000107
It's different these days. The good-looking boys who can do
that wait for us in out-of-the-way spots. So they can sneak
in easier and pretend it was an accident.
@Hitret id=2054


@Char file=CF01_02M

@Talk name=Ryouhei voice=RH000099
Right! Haruka, where's your spot? The field? The rooftop?
No, sorry Haruka, wouldn't it be better if we waited
separately?
@Hitret id=2055

@Talk name=Haruka
No, I'm not planning to...
@Hitret id=2056


@ClearChar id=亮平
@Char file=CA01_04M

@Talk name=Sora voice=SR000473
Um...
@Hitret id=2057

@Talk name=Haruka
!?
@Hitret id=2058

@Talk name=心の声
...Wha-What's she glaring at me for?
@Hitret id=2059


@Char file=CD01_01M

@Talk name=Kazuha voice=KA000086
Anyway, if you wish not our loathing, please don't loiter
around the practice room.
@Hitret id=2060


@Char file=CH01_02M

@Talk name=Class　Rep voice=KO000108
Well, let's go together, Sora-san.
@Hitret id=2061


@Char file=CA01_01M

@Talk name=Sora voice=SR000474
...Yeah.
@Hitret id=2062


@ClearChar

@Char file=CF01_10M

@Talk name=Ryouhei voice=RH000100
Darn... I just thought I might get some sides.
@Hitret id=2063


@Char file=CC01_01M

@Talk name=Akira voice=AK000117
Sorry, Ryo-nii-chan, Haru-kun. If there's any left over I'll
get it for you~.
@Hitret id=2064


@Update
@action id=亮平 action=ActionAdvJump cycle=300 count=1 height=30
@WaitAction id=亮平

@Talk name=Ryouhei voice=RH000101
Akira! You're a real bro!
@Hitret id=2065


@Char file=CD01_01M

@Talk name=Kazuha voice=KA000087
Don't; if you spoil him once, he'll keep wanting more. You
have to properly discipline him.
@Hitret id=2066


@Char file=CF01_05M

@Talk name=Ryouhei voice=RH000102
Don't worry, I'll get some from you too.
@Hitret id=2067


@Char file=CD01_05M

@Talk name=Kazuha voice=KA000088
Kya! I'd rather die than share with you! Come on Akira,
we're going!
@Hitret id=2068


@ClearChar id=亮平
@Char file=CD01_07M x=300
@Char file=CC01_09M x=100
@Update
@action id=瑛 action=ActionAdvHop height=0 cycle=100 count=5 width=10
@WaitAction id=瑛

@Talk name=Akira voice=AK000118
Aaaaaaaah!? Ow ow ow! Don't pull~!!
@Hitret id=2069


@ClearChar

@Char file=CF01_03M

@Talk name=Ryouhei voice=RH000103
Well, it happens. Haruka, during lunch break let's the two
of us eat lunch in a lonely corner of the field where no one
will be around.
@Hitret id=2070

@Talk name=Haruka
Eh... Wh-What's- That expositioney...
@Hitret id=2071


@Char file=CF01_04M

@Talk name=Ryouhei voice=RH000104
Repeat it!!
@Hitret id=2072

@Talk name=Haruka
Ooh... F-For lunch break, a corner of the field where no one
will be around? I... I got it...
@Hitret id=2073

@Talk name=Ryouhei voice=RH000105
Al-right! We're ready!
@Hitret id=2074


@Char file=CH01_01M

@Talk name=Class　Rep voice=KO000109
With you there, maybe no one will come after all.
@Hitret id=2075


@ClearChar
@Char file=CF01_09M

@Talk name=Ryouhei voice=RH000106
Wha!? What's that!!
@Hitret id=2076


@ClearChar
@Char file=CA01_05M

@Talk name=Sora voice=SR000475
...
@Hitret id=2077

@Talk name=Haruka
Wha... What?
@Hitret id=2078


@ClearChar

@Talk name=Haruka
...S-So what are we even trying to do...
@Hitret id=2079


@Char file=CF01_01M

@Talk name=Ryouhei voice=RH000107
Well, we'll wait and not get our hopes up.
@Hitret id=2080

@Talk name=Haruka
By the way, what do you think the girls will make in class?
@Hitret id=2081

@Talk name=Ryouhei voice=RH000108
Who knows. I'm looking forward to whatever they make.
@Hitret id=2082

@Talk name=Haruka
You're anticipating... They won't necessarily give it to us.
@Hitret id=2083


@Char file=CF01_08M

@Talk name=Ryouhei voice=RH000109
Whisper! Pray! Hope! To be a winner!
@Hitret id=2084

@Talk name=Haruka
Yeah...
@Hitret id=2085

@Talk name=心の声
Ryouhei really was brimming with vitality...
@Hitret id=2086


@Char file=CF01_01M

@Talk name=Ryouhei voice=RH000110
Well, let's go to shop! Today's the day we finish putting in
the DVDs!
@Hitret id=2087

@Talk name=Haruka
Yeah, Ok.
@Hitret id=2088

@Talk name=心の声
Girls had home ec, and boys had engineering class.
@Hitret id=2089


@ClearChar

@Talk name=心の声
We also went to the hallway to get to class.
@Hitret id=2090

@Talk name=心の声
While I didn't think our conversation had spread, the girls
were awfully excited, while on the other hand the guys were
feeling nervous.
@Hitret id=2091

@Talk name=心の声
And Ryouhei was oblivious to both atmospheres...
@Hitret id=2092


@Char file=CF01_02M

@Talk name=Ryouhei voice=RH000111
After all that hard work, the food will be delicious~ for
sure~.
@Hitret id=2093

@Talk name=心の声
He-He was already set on it!!
@Hitret id=2094


@StopBgm

@Hide
@BlackOut time=1000

@Wait time=2000

@Change target=00_a013b


