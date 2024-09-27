/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
*/

// blame discord, not me

const filterList = ["asscock", "assfuck", "assfucker", "assnigger", "assrape", "b!tch", "b1tch", "batshit", "bitch", "bitchass", "bitchtits", "boyfucking", "boypussy", "bullshit", "buttfuck", "buttfucka", "buttfucker", "buttplay", "buttsex", "c|_|nt", "camel fucker", "camslut", "camwhore", "camwhores", "choad", "chode", "clitfuck", "clusterfuck", "cnut", "cockmongler", "cockmongruel", "cockmuncher", "cocknugget", "cocksucka", "cocksucker", "cocksuckers", "cocksuckin", "coon ass", "cousin-fucker", "cowfuck", "cucklord", "cuckold", "cuckshit", "cucktard", "cumslut", "cunt", "cuntrag", "dickface", "dickfucker", "dipshit", "dogfucking", "dumbfuck", "f4gg0t*", "f4ggot*", "facefuck", "facefucked", "faggot*", "faggotcock", "fagit", "fagtard", "fat bitch", "fcknig", "feggit", "feggot", "finger-fuck", "fingerfuck", "fistfuck", "fking", "fucc", "fuck", "f\xfack", "f\xfbck", "f\xfcck", "fuckable", "fuckass", "fuckbag", "fuckboy", "fuckbuddies", "fuckbuddy", "fucked", "fucker", "fuckery", "fuckface", "fuckhead", "fuckhole", "fucking", "fucknig", "fucknut", "fucknutt", "fuckoff", "fuckpigs", "fucktard", "fucktart", "fuckup", "fuckwad", "fuckwitt", "fuicking", "fuk", "gayfuck", "homodumbshit", "k|_|nt", "kyke", "manslut", "manwhore", "mongtard", "mothafucka", "mothafuckin", "motherfucker", "motherfucking", "n!bb3r*", "n!bber*", "n!gg3r*", "n!gger*", "n!kk3r*", "n!kker*", "n!qq3r*", "n!qqer*", "n|bb3r*", "n|bber*", "n|gg3r*", "n|gger*", "n|kk3r*", "n|kker*", "n|qq3r*", "n|qqer*", "n1bb3r*", "n1bber*", "n1gg", "n1gg3r*", "n1gger*", "n1igger*", "n1kk3r*", "n1kker*", "n1qq3r*", "n1qqer*", "nibb3r", "nibber", "niccer", "nick gur", "nigaboo", "nigg", "nigg3r", "niggar", "niggeer", "nigger*", "niggir", "niggor", "niggur", "niggurs", "nikk3r", "nikker", "niqq3r", "niqqer", "pu$$y", "pussy licking", "pussyjob", "pussylicking", "q|_|nt", "queerhole", "qunt", "r3t4rd", "r3tar", "retard", "rētard", "retarde", "retarded", "retardi", "retards", "retart", "retrad", "ritard", "ritarded", "rtard", "s-h-i-t", "s-hit", "scumfuck", "sh-it", "sheepfucker", "shit", "shitass", "shitbag", "shitbrains", "shitcunt", "shitdick", "shiteaters", "shitface", "shithead", "shithole", "shitshow", "shitskin", "shitspitter", "shitstain", "shitty", "shlt", "skullfuck", "slut", "slutwife", "spergtard", "spicshit", "spictard", "suck my dick", "throatfuck", "throatfucked", "throatfucking", "titfuck", "titfucking", "titfucks", "tittfuck", "tittyfuck", "tittyfucking", "tittyfucks", "to fuck", "uglyfuck", "whore", "69ing", "amateur porn", "anal sex", "analsex", "anilingus", "anillingus", "assbanger", "asscock", "assfuck", "assfucker", "asslicker", "asslicking", "assnigger", "assrape", "auto erotic", "autoerotic", "autofellatio", "ball sucking", "balls deep", "bangbros", "barely legal", "bdsm", "bean flicker", "beat my meat", "beaver lips", "beef curtain", "big black cock", "big black dick", "big breasted women", "big cock", "big dick", "big knockers", "big milkers", "big tits", "bislut", "black cock", "blacked raw", "blow job", "blowbang", "blowie", "blowj", "blowjob", "blowjobs", "blumpkin", "boipussy", "bondage", "boner", "boyfucking", "boypussy", "brazzers", "bukake", "bukakke", "bukkake", "bukkakese", "bunnygirl", "butt plug", "buttfuck", "buttfucka", "buttfucker", "buttplay", "buttsex", "c|_|nt", "c0ck", "camel fucker", "camel toe", "cameltoe", "camgirl", "camslut", "camwhore", "camwhores", "chaturbate", "chicks with dicks", "choad", "chode", "clitfuck", "clitless", "cnut", "cock", "cockface", "cockgobbler", "cockhead", "cockhole", "cockmeat", "cocksucka", "cocksucker", "cocksuckers", "cocksuckin", "coochie", "creampie", "creampied", "creampieing", "creampies", "cuckholding", "cuckholdry", "cucking", "cuckish", "cucklord", "cuckold", "cuckolding", "cuckolds", "cuckshed", "cucky", "cum", "cumed", "cumguzzler", "cumhole", "cuming", "cummed", "cummers", "cummies", "cumming", "cumshot", "cumshots", "cumskin", "cumslut", "cumsucking", "cumswallow", "cumtart", "cunnilingus", "cunnillingus", "cunt", "cuntrag", "deep throat", "deep throating", "deep-throat", "deep-throated", "deep-throating", "deepthroat", "deepthroated", "deepthroating", "deepthroats", "dick-sneeze", "dickcheese", "dickface", "dickfucker", "dickgirls", "dickhole", "dickjuice", "dicklicker", "dickmilk", "dickride", "dickriding", "dickslap", "dicksucker", "dildo", "dildoing", "dilfs", "dog style", "dogfucking", "doggie style", "doggiestyle", "doggy stile", "doggy style", "doggystyle", "donkey punch", "double dong", "double penetration", "eat you out", "eat your ass", "eating ass", "ecchi", "ejaculate", "ejaculating", "ero guro", "erotic asphyxiation", "extremetube", "facefuck", "facefucked", "felatio", "felch", "felching", "fellate", "fellatio", "feltch", "feltching", "female squirting", "femdom", "finger-bang", "finger-banging", "finger-fuck", "fingerbang", "fingerbanged", "fingerbanging", "fingerblast", "fingerblasting", "fingered", "fingerfuck", "fingering", "fistfuck", "fisting", "fking", "foot fetish", "foreskin", "fucc", "f\xfack", "f\xfbck", "f\xfcck", "fuck her", "fuck him", "fuckable", "fuckass", "fuckbag", "fuckbuddies", "fuckbuddy", "fuckface", "fuckhole", "fuckpigs", "fuk", "gang bang", "gang rape", "gangbang", "gangrape", "giant cock", "gloryhole", "golden shower", "goopchute", "goregasm", "group sex", "hand job", "handjob", "hardcore porn", "hentai", "Hi! I love sex", "homoerotic", "hornpub", "horny", "hot bi babe", "hotwife", "hubporn", "jack off", "jacking off", "jerk off instructions", "jerking off", "jerkoff", "jizz", "jizzle", "k|_|nt", "kinkiest", "kinkster", "kinky", "limpdick", "livesex", "lolicon", "mangina", "manslut", "manwhore", "masochism", "menage a trois", "micropenis", "milf", "milfs", "missionary position", "mommy milkers", "my dick", "My naked photos", "My sexy photos", "naughtyamerica", "nubiles", "nudes", "nuvid", "oralsex", "orgasm", "orgies", "orgy", "paypig", "piss play", "pissflaps", "pissing porn", "pompoir", "ponyplay", "poon", "poop chute", "poopchute", "pornhub", "pornmd", "porno", "pornography", "pornstar", "pornstars", "porntube", "pov porn", "precum", "precumming", "precums", "pregnancy fetish", "prone bone", "pu$$y", "pussy licking", "pussyjob", "pussylicking", "q|_|nt", "queef", "qunt", "rapeplay", "rawdog", "reality kings", "redtube", "reverse cowgirl", "rimjob", "rimjobworld", "rule 34", "scatplay", "sex toy", "sexbot", "sextape", "shaved beaver", "shaved pussy", "shemale", "shitcunt", "shitdick", "shotacon", "sit on my face", "skeet", "skullfuck", "slampig", "slut", "slutwife", "sodomise", "sodomite", "sodomize", "spankbang", "spankbank", "suck clit", "suck my clit", "suck my dick", "suck my pubes", "teamskeet", "tentacle porn", "throatfuck", "throatfucked", "throatfucking", "throatpie", "thumbzilla", "tiddays", "tiddayz", "tiddes", "tiddie", "tiddied", "tiddies", "tiddy", "tiddys", "titfuck", "titfucking", "titfucks", "tities", "titjob", "tits", "tittay", "titted", "tittes", "tittfuck", "titti", "tittie", "tittied", "titties", "tittiez", "tittle", "titts", "titty", "tittyfuck", "tittyfucking", "tittyfucks", "tittys", "tity", "tnaflix", "to fuck", "tribadism", "tribbing", "upskirt", "urethra play", "vibrator", "voyeurism", "vrporn", "wank", "wankjob", "whore", "xhamster", "xnxx", "xtube", "xvideos", "youporn", "africoon", "americoon", "arabshits", "assfucker", "asshat", "asshole", "assnigger", "assrape", "asswipe", "autist", "b!tch", "bamboo coon", "betacuck", "blmtard", "brown towel heads", "buttfucka", "buttfucker", "c|_|nt", "camslut", "camwhore", "camwhores", "china-man", "chinaman", "chinamen", "chinc", "chinese wetback", "chink", "cockknocker", "cockknoker", "cockmongler", "cockmongruel", "cockmuncher", "cocknocker", "cocknugget", "cocksucka", "cocksucker", "cocksuckers", "cocksuckin", "coon ass", "cotton picker", "cousin-fucker", "crab rangook", "crabrangook", "cuck", "cuckold", "cucktard", "cumslut", "cunt", "cuntrag", "dipshit", "dogfucking", "dot head", "dumbfuck", "dune coon", "dunecoon", "f4gg0t*", "f4ggot*", "f4gs", "fag", "fagbag", "fagg", "faggot*", "faggotcock", "fagit", "fags", "fagtard", "fat bitch", "feggit", "feggot", "femenazis", "feminazi", "femtards", "fuckboy", "fucker", "fuckface", "fuckhead", "fucknig", "fuckoff", "fuckpigs", "fucktard", "fucktart", "fuckwad", "fuckwitt", "gas the kikes", "gayfuck", "gaylord", "gaytard", "gaywad", "goatfucker", "gook", "gookanese", "hindoo", "homodumbshit", "jackass", "jappos", "japs", "jerkoff", "jewbag", "jewtard", "jigaboo", "jigarooni", "jiggabo", "jiggaboo", "jiggers", "jijjiboo", "joo shill", "k|_|nt", "kill yourself", "kneegrow", "kyke", "kys", "ladyboy", "librtard", "libtard", "libturd", "lolspergs", "manslut", "manwhore", "mentally retarded", "mongaloid", "monglet", "mongloid", "mongoloid", "mongreloids", "mongtard", "mothafucka", "mothafuckin", "motherfucker", "motherfucking", "musloid chimps", "musloids", "n i g g", "n!bb3r*", "n!bber*", "n!gg3r*", "n!gger*", "n!kk3r*", "n!kker*", "n!qq3r*", "n!qqer*", "n|bb3r*", "n|bber*", "n|gg3r*", "n|gger*", "n|kk3r*", "n|kker*", "n|qq3r*", "n|qqer*", "n1bb3r*", "n1bber*", "n1g", "n1gg", "n1gg3r*", "n1gger*", "n1igger*", "n1kk3r*", "n1kker*", "n1qq3r*", "n1qqer*", "negroid", "negros", "neomongloids", "nibb3r", "nibber", "niccer", "nick gur", "nig nog", "nigaboo", "nigar", "nigette", "nigg", "nigg", "nigg3r", "niggar", "nigge", "niggeer", "nigger*", "niggies", "niggin", "niggir", "nigglet", "nigglets", "niggor", "niggr", "niggress", "niggs", "niggur", "niggurs", "niglet", "nignog", "nigor", "nigr", "nigre", "nigress", "nigro", "nigs", "nikk3r", "nikker", "niponese", "niqq3r", "niqqer", "paki", "phag", "phaggot", "pickaninny", "pinkaloid", "poofter", "pooinloo", "poojeet", "porch monkey", "porch monkies", "pu$$y", "q|_|nt", "queerbag", "queerhole", "qunt", "r3t4rd", "r3tar", "rapefugee", "reatard", "reatarded", "retard", "rētard", "retardation", "retarde", "retarded", "retardi", "retards", "retart", "retrad", "ritard", "ritarded", "rotten joo", "rtard", "sand monkey", "sand nigger", "sandnegroes", "sandnigers", "sandniggs", "sandnogs", "schizoid", "scumfuck", "she-man", "sheepfucker", "shekelnose", "shemale", "shitbag", "shitbrains", "shitcunt", "shiteaters", "shitface", "shithead", "shitskin", "shitspitter", "shitstain", "skank", "skanky", "slampig", "slant eye", "slantey-eye'd", "slut", "slutwife", "socket face", "sperg", "sperglord", "spergouts", "spergs", "spergtard", "spic", "spick", "spickaboo", "spicks", "spicshit", "spictard", "spigger", "spik", "squinties", "suck my dick", "that ho over there", "that hoe over there", "the orientals", "towelhead", "towel head", "towel-head", "trannie", "tranny", "turkoids", "turkroach", "uglyfuck", "wanker", "wankjob", "wetback", "wetblack", "whigger", "whore", "wigger", "zipperhead"];

export default filterList;