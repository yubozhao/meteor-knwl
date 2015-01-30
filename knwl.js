Knwl = function() {
	var e = /\b([0-9]{4})-(1[0-2]|0[1-9])-(3[0-1]|0[1-9]|[1-2][0-9])(T(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-](?:2[0-3]|[0-1][0-9]):[0-5][0-9])?)?\b/i;
	var t = /\b[A-Z0-9._%+-]+@([A-Z0-9.-]+\.[A-Z]{2,4}|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\b/i;
	var n = ["ac", "ad", "ae", "aero", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "arpa", "as", "asia", "at", "au", "aw", "ax", "az", "ba", "bb", "be", "bf", "bg", "bh", "bi", "biz", "bj", "bm", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cat", "cc", "cd", "cf", "cg", "ch", "ci", "cl", "cm", "cn", "co", "com", "coop", "cr", "cu", "cv", "cw", "cx", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "edu", "ee", "eg", "es", "eu", "fi", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gov", "gp", "gq", "gr", "gs", "gt", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "im", "in", "info", "int", "io", "iq", "ir", "is", "it", "je", "jo", "jobs", "jp", "kg", "ki", "km", "kn", "kp", "kr", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mil", "mk", "ml", "mn", "mo", "mobi", "mp", "mq", "mr", "ms", "mt", "mu", "museum", "mv", "mw", "mx", "my", "na", "name", "nc", "ne", "net", "nf", "ng", "nl", "no", "nr", "nu", "om", "org", "pa", "pe", "pf", "ph", "pk", "pl", "pm", "pn", "post", "pr", "pro", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tel", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "travel", "tt", "tv", "tw", "tz", "ua", "ug", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "yt", "امارات", "বাংলা", "中国", "中國", "الجزائر", "مصر", "გე", "香港", "भारत", "بھارت", "భారత్", "ભારત", "ਭਾਰਤ", "ভারত", "இந்தியா", "ایران", "ايران", "الاردن", "한국", "қаз", "ලංකා", "இலங்கை", "المغرب", "мон", "مليسيا", "عمان", "فلسطين", "срб", "рф", "قطر", "السعودية", "السعودیة", "السعودیۃ", "السعوديه", "سورية", "سوريا", "新加坡", "சிங்கப்பூர்", "ไทย", "تونس", "台灣", "台湾", "臺灣", "укр", "اليمن", "xxx", "онлайн", "сайт", "شبكة", "游戏", "企业", "camera", "clothing", "lighting", "singles", "ventures", "voyage", "guru", "holdings", "equipment", "bike", "estate", "tattoo", "在线", "中文网", "land", "plumbing", "contractors", "sexy", "menu", "世界", "uno", "gallery", "technology", "集团", "reviews", "guide", "我爱你", "graphics", "construction", "onl", "みんな", "diamonds", "kiwi", "enterprises", "today", "futbol", "photography", "tips", "directory", "kitchen", "移动", "kim", "삼성", "monash", "wed", "pink", "ruhr", "buzz", "careers", "shoes", "موقع", "career", "otsuka", "中信", "gift", "recipes", "coffee", "luxury", "domains", "photos", "limo", "viajes", "wang", "democrat", "mango", "cab", "support", "dance", "nagoya", "computer", "wien", "berlin", "codes", "email", "بازار", "repair", "holiday", "center", "systems", "wiki", "ceo", "international", "solar", "company", "education", "training", "academy", "marketing", "florist", "solutions", "build", "institute", "builders", "red", "blue", "ninja", "business", "gal", "social", "house", "camp", "immobilien", "moda", "glass", "management", "kaufen", "farm", "公益", "政务", "club", "voting", "TOKYO", "moe"];
	this.text = {};
	this.text.data = {};
	this.addToObj = function(e, t) {
		r.text.data[t] = e
	};
	this.get = function(e) {
		if (e !== undefined) {
			e = e.toLowerCase();
			if (e === "emotion") {
				return r.text.data.emotions
			} else if (e === "phones") {
				return r.text.data.phones
			} else if (e === "dates") {
				return r.text.data.dates
			} else if (e === "times") {
				return r.text.data.times
			} else if (e === "links") {
				return r.text.data.links
			} else if (e === "readingtime") {
				return r.text.data.readingTime
			} else if (e === "emails") {
				return r.text.data.emails
			} else if (e === "places") {
				return r.text.data.places
			} else if (e === "hashtags") {
				return r.text.data.hashtags
			} else if (e === "aliases") {
				return r.text.data.aliases
			} else if (e === "spam") {
				return r.text.data.spam
			} else {
				console.error("KNWL ERROR: Data type not correct, correct types: 'emotion','phones','dates','times','links','emails','places','hashtags','aliases'")
			}
		} else {
			return r.text.data
		}
	};
	this.escapeRegExp = function(e) {
		return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
	};
	this.removeCharacters = function(e, t) {
		for (var n = 0; n < e.length; n++) {
			t = t.replace(new RegExp(r.escapeRegExp(e[n]), "g"), "")
		}
		return t
	};
	this.text.readingTime = function(e) {
		var t = e * .312;
		return t / 60
	};
	this.date = {};
	this.date.days = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
	this.date.months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
	this.date.monthAbbrs = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];
	this.date.holidays = [
		["thanksgiving"],
		["christmas"],
		["new", "years"],
		["july", "4th"]
	];
	this.date.holidaysD = [
		[28, 11],
		[25, 12],
		[1, 1],
		[4, 7]
	];
	this.date.dateObj = new Date;
	this.date.getDay = function(e) {
		if (!isNaN(e)) {
			if (e > 0 && e < 32) {
				return parseInt(e)
			}
		} else {
			for (var t = 0; t < r.date.days.length; t++) {
				if (r.date.days[t] === e) {
					return t + 1
				}
			}
		}
	};
	this.date.getMonth = function(e, t) {
		if (!isNaN(e) && t === "mdy") {
			return parseInt(e)
		} else {
			for (var n = 0; n < r.date.months.length; n++) {
				if (r.date.months[n] === e) {
					return n + 1
				}
			}
			for (var n = 0; n < r.date.monthAbbrs.length; n++) {
				if (r.date.monthAbbrs[n] === e) {
					return n + 1
				}
			}
		}
	};
	this.date.findDates = function(e, t) {
		var n = [];
		for (var i = 0; i < e.length; i++) {
			e[i] = e[i].split(/[.,!?]+/);
			e[i] = e[i][0]
		}
		var s = [];
		for (var i = 0; i < e.length; i++) {
			var o = r.date.getMonth(e[i]);
			if (o !== undefined) {
				var u = r.date.getDay(e[i + 1]);
				if (u !== undefined) {
					if (u > 0 && u < 32) {
						if (!isNaN(e[i + 2]) && e[i + 2] !== "") {
							var a = parseInt(e[i + 2]);
							if (a > 32 && a < 1e4) {
								s = [o, u, a, r.preview(i, e)]
							}
						} else {
							s = [o, u, r.date.dateObj.getFullYear(), r.preview(i, e)]
						}
					}
					n.push(s)
				}
			}
		}
		var s = [];
		for (var i = 0; i < e.length; i++) {
			var f = e[i].replace("(", "");
			var f = f.replace(")", "");
			var l = f.split("/");
			if (l.length === 3) {
				var c = 0;
				for (var h = 0; h < l.length; h++) {
					if (!isNaN(l[h]) && l[h] !== "") {
						c++
					}
				}
				if (c === 3) {
					var o = r.date.getMonth(l[0], "mdy");
					var u = r.date.getDay(l[1]);
					var a = parseInt(l[2]);
					s = [o, u, a, r.preview(i, e)];
					n.push(s)
				}
			}
		}
		var s = [];
		for (var i = 0; i < e.length; i++) {
			if (e[i + 1] === "of") {
				if (e[i + 2] !== undefined) {
					var u = r.date.getDay(e[i]);
					var o = r.date.getMonth(e[i + 2]);
					var a = r.date.dateObj.getFullYear();
					if (o !== undefined && u !== undefined) {
						if (e[i + 3] !== undefined) {
							if (!isNaN(e[i + 3])) {
								if (e[i + 3] > 32 && e[i + 3] < 1e4) {
									a = e[i + 3]
								}
							} else if (e[i + 3] === "on" || e[i + 3] === "in") {
								if (e[i + 4] !== undefined) {
									if (!isNaN(e[i + 4])) {
										if (e[i + 4] > 32 && e[i + 4] < 1e4) {
											a = e[i + 4]
										}
									}
								}
							} else {
								for (var p = i; p > 0; p--) {
									if (!isNaN(e[p])) {
										if (e[p] > 32 && e[p] < 1e4) {
											a = parseInt(e[p]);
											break
										}
									} else if (t[p - 1][t[p - 1].length - 1] === "." || t[p - 1][t[p - 1].length - 1] === "?" || t[p - 1][t[p - 1].length - 1] === "!" || t[p - 1][t[p - 1].length - 1] === ";") {
										break
									}
								}
							}
						} else {
							for (var p = i; p > 0; p--) {
								if (!isNaN(e[p])) {
									if (e[p] > 32 && e[p] < 1e4) {
										a = parseInt(e[p]);
										break
									}
								} else if (t[p - 1][t[p - 1].length - 1] === "." || t[p - 1][t[p - 1].length - 1] === "?" || t[p - 1][t[p - 1].length - 1] === "!" || t[p - 1][t[p - 1].length - 1] === ";") {
									break
								}
							}
						}
						s = [o, u, a, r.preview(i, e)];
						n.push(s)
					}
				}
			}
		}
		var s = [];
		for (var i = 0; i < e.length; i++) {
			for (var d = 0; d < r.date.holidays.length; d++) {
				var v = r.date.holidays[d];
				var m = i;
				if (e[m] === v[0]) {
					for (var g = 0; g < v.length; g++) {
						if (e[m] === v[g]) {
							if (g === v.length - 1) {
								if (r.date.dateObj.getMonth() <= r.date.holidaysD[d][1] + 1) {
									s = [r.date.holidaysD[d][1], r.date.holidaysD[d][0], r.date.dateObj.getFullYear(), r.preview(i, e)]
								} else {
									s = [r.date.holidaysD[d][1], r.date.holidaysD[d][0], r.date.dateObj.getFullYear() + 1, r.preview(i, e)]
								}
								n.push(s)
							}
						}
						m++
					}
				}
			}
		}
		var s = [];
		for (var i = 0; i < e.length; i++) {
			var y = e[i].split(/[-]+/);
			if (y.length === 3) {
				var b = 0;
				for (var g = 0; g < y.length; g++) {
					if (isNaN(y[g]) === false) {
						b++
					}
				}
				if (b === 3) {
					if (y[0].length === 4 && (y[1].length === 2 || y[1].length === 1) && (y[2].length === 2 || y[2].length === 1)) {
						for (var g = 0; g < y.length; g++) {
							y[g] = parseInt(y[g])
						}
						if (y[1] > 0 && y[1] < 13) {
							if (y[2] > 0 && y[2] < 32) {
								if (y[0] > 0) {
									s = [y[1], y[2], y[0], r.preview(i, e)];
									n.push(s)
								}
							}
						}
					}
				}
			}
		}
		return n
	};
	this.time = {};
	this.time.findTimes = function(e) {
		var t = [];
		var n = [];
		for (var i = 0; i < e.length; i++) {
			var s = e[i].split(":");
			if (s.length === 2) {
				var o = false;
				if (braid.search("am", s[1], true) !== false) {
					s[1] = s[1].slice(0, s[1].length - 2);
					o = "AM"
				} else if (braid.search("pm", s[1], true) !== false) {
					s[1] = s[1].slice(0, s[1].length - 2);
					o = "PM"
				}
				if (!isNaN(s[0]) && !isNaN(s[1])) {
					if (s[0] > 0 && s[0] < 13) {
						if (s[1] >= 0 && s[1] < 61) {
							if (e[i + 1] === "pm") {
								n = [s[0], s[1], "PM", r.preview(i, e)];
								t.push(n)
							} else if (e[i + 1] === "am") {
								n = [s[0], s[1], "AM", r.preview(i, e)];
								t.push(n)
							} else {
								if (o !== false) {
									n = [s[0], s[1], o, r.preview(i, e)];
									t.push(n)
								}
							}
						}
					}
				}
			}
		}
		var n = [];
		for (var i = 0; i < e.length; i++) {
			if (e[i].split(":").length === 1) {
				if (isNaN(e[i]) !== true) {
					var u = parseInt(e[i]);
					if (u > 0 && u < 13) {
						if (e[i + 1] === "am" || e[i + 1] === "pm") {
							n = [u, "00", e[i + 1].toUpperCase(), r.preview(i, e)];
							t.push(n)
						}
					}
				} else if (braid.search("am", e[i], true) !== false) {
					var u = e[i];
					u = u.slice(0, u.length - 2);
					u = parseInt(u);
					if (isNaN(u) !== true) {
						if (u > 0 && u < 13) {
							n = [u, "00", "AM", r.preview(i, e)];
							t.push(n)
						}
					}
				} else if (braid.search("pm", e[i], true) !== false) {
					var u = e[i];
					u = u.slice(0, u.length - 2);
					u = parseInt(u);
					if (isNaN(u) !== true) {
						if (u > 0 && u < 13) {
							n = [u, "00", "PM", r.preview(i, e)];
							t.push(n)
						}
					}
				}
			}
		}
		return t
	};
	this.emotion = {};
	this.emotion.negativeWords = ["terrible", "horrible", "evil", "die", "dick", "bitch", "fucked", "stupid", "idiot", "dumb", "noob", "shit", "vain", "n00b", "dickhead", "cocksucker", "disgusting", "slut", "upset"];
	this.emotion.negativeWordsB = ["fuck", "shit", "kill", "rape", "hate", "hating"];
	this.emotion.positiveWords = ["happy", "good", "great", "amazing", "awesome", "wonderful", "brilliant", "smart", "epic"];
	this.emotion.positiveWordsB = ["love", "like", "want", "<3", "kiss"];
	this.emotion.subjects = ["she's", "you", "him", "her", "it", "this", "he's", "shes", "hes", "your", "you're", "ur", "they're", "their", "theyre", "i", "i'm"];
	this.emotion.negComb = [
		["fuck", "off"],
		["go", "away"],
		["go", "cry"],
		["go", "and"]
	];
	this.emotion.negCombSep = ["and", "it", "&"];
	this.emotion.posComb = [
		["thank", "you"],
		["thanks", "a", "million"],
		["happy", "birthday"],
		["happy", "thanksgiving"],
		["merry", "christmas"],
		["happy", "holidays"],
		["good", "day"],
		["oh", "cool"]
	];
	this.emotion.posCombSep = ["for", "and", "&"];
	this.emotion.findEmotions = function(e) {
		console.log(e);
		var t = 0;
		var n = 0;
		for (var i = 0; i < e.length; i++) {
			for (var s = 0; s < r.emotion.negativeWords.length; s++) {
				var o = r.emotion.negativeWords[s];
				if (e[i].search(o) !== -1) {
					for (var u = 0; u < r.emotion.subjects.length; u++) {
						for (var a = i - 1; a > -1; a--) {
							var f = e[a].split(/[.,!?]+/);
							console.log(f);
							if (e[a] !== undefined) {
								if (e[a] === r.emotion.subjects[u]) {
									t++
								}
							}
							if (f.length !== 1) {
								break
							}
						}
					}
				}
			}
		}
		for (var i = 0; i < e.length; i++) {
			for (var s = 0; s < r.emotion.negativeWordsB.length; s++) {
				var o = r.emotion.negativeWordsB[s];
				if (e[i].search(o) !== -1) {
					for (var u = 0; u < r.emotion.subjects.length; u++) {
						for (var a = i; a < e.length; a++) {
							var f = e[a].split(/[.,!?]+/);
							if (e[a] !== undefined) {
								if (e[a] === r.emotion.subjects[u] || e[a].replace(/[.,!?]+/g, "") === r.emotion.subjects[u]) {
									t++
								}
							}
							if (f.length !== 1) {
								break
							}
						}
					}
				}
			}
		}
		for (var i = 0; i < e.length; i++) {
			for (var s = 0; s < r.emotion.positiveWords.length; s++) {
				var l = r.emotion.positiveWords[s];
				if (e[i].search(l) !== -1) {
					for (var u = 0; u < r.emotion.subjects.length; u++) {
						for (var a = i - 1; a > -1; a--) {
							var f = e[a].split(/[.,!?]+/);
							console.log(f);
							if (e[a] !== undefined) {
								if (e[a] === r.emotion.subjects[u]) {
									n++
								}
							}
							if (f.length !== 1) {
								break
							}
						}
					}
				}
			}
		}
		for (var i = 0; i < e.length; i++) {
			for (var s = 0; s < r.emotion.positiveWordsB.length; s++) {
				var l = r.emotion.positiveWordsB[s];
				if (e[i].search(l) !== -1) {
					for (var u = 0; u < r.emotion.subjects.length; u++) {
						for (var a = i; a < e.length; a++) {
							var f = e[a].split(/[.,!?]+/);
							if (e[a] !== undefined) {
								if (e[a] === r.emotion.subjects[u] || e[a].replace(/[.,!?]+/g, "") === r.emotion.subjects[u]) {
									n++
								}
							}
							if (f.length !== 1) {
								break
							}
						}
					}
				}
			}
		}
		for (var i = 0; i < e.length; i++) {
			for (var c = 0; c < r.emotion.negComb.length; c++) {
				var h = 0;
				var p = r.emotion.negComb[c].length;
				var d = 0;
				for (var u = i; u < i + p; u++) {
					if (e[u] === r.emotion.negComb[c][d]) {
						h++
					} else {
						for (var v = 0; v < r.emotion.negCombSep.length; v++) {
							if (e[u] === r.emotion.negCombSep[v]) {
								if (e[u + 1] === r.emotion.negComb[c][d]) {
									h++
								}
							}
						}
					}
					d++
				}
				if (h === p) {
					t++
				}
			}
		}
		for (var i = 0; i < e.length; i++) {
			for (var c = 0; c < r.emotion.posComb.length; c++) {
				var h = 0;
				var p = r.emotion.posComb[c].length;
				var d = 0;
				for (var u = i; u < i + p; u++) {
					if (e[u] === r.emotion.posComb[c][d]) {
						h++
					} else {
						for (var v = 0; v < r.emotion.posCombSep.length; v++) {
							if (e[u] === r.emotion.posCombSep[v]) {
								if (e[u + 1] === r.emotion.posComb[c][d]) {
									h++
								}
							}
						}
					}
					d++
				}
				if (h === p) {
					n++
				}
			}
		}
		console.log(n);
		if (t === n) {
			return "neutral or unknown"
		} else if (t > n) {
			return "negative"
		} else {
			return "positive"
		}
	};
	this.preview = function(e, t) {
		var n = "";
		var r = -10;
		for (var i = e - 6; i < e + 6; i++) {
			n += " " + t[i]
		}
		n = braid.replace(n, " undefined@w@@n@  @w@");
		n = n.slice(1, n.length);
		return n
	};
	this.phone = {};
	this.phone.areaCodeLength = 3;
	this.phone.formatPhoneNumber = function(e) {
		var t = e.slice(e.length - 7, e.length - 4) + "-" + e.slice(e.length - 4, e.length);
		t = "(" + e.slice(e.length - (r.phone.areaCodeLength + 7), e.length - 7) + ") " + t;
		if (e.length > r.phone.areaCodeLength + 7) {
			t = "+" + e.slice(0, e.length - (r.phone.areaCodeLength + 7)) + " " + t
		}
		return t
	};
	this.phone.findPhones = function(e) {
		var t = [],
			n = null;
		var i = /^\d{7,13}$/;
		var s = /^\d{3}$/;
		var o = /^\d{1,3}$/;
		for (var u = 0; u < e.length; u++) {
			n = r.removeCharacters(["-", "(", ")"], e[u]);
			if (i.test(n)) {
				if (u > 0 && n.length === 7) {
					var a = r.removeCharacters(["(", ")"], e[u - 1]);
					if (s.test(a)) {
						n = a + n;
						if (u > 1) {
							var f = r.removeCharacters("+", e[u - 2]);
							if (o.test(f)) {
								n = f + n
							}
						}
					}
				} else if (u > 0 && n.length === r.phone.areaCodeLength + 7) {
					var f = r.removeCharacters("+", e[u - 1]);
					if (o.test(f)) {
						n = f + n
					}
				}
				if (n.length >= 7 + r.phone.areaCodeLength) {
					t.push([r.phone.formatPhoneNumber(n), r.preview(u, e)])
				}
			}
		}
		return t
	};
	this.spam = {};
	this.spam.vowCount = function(e) {
		var t = e.match(/[aeiou]/gi);
		var n = t ? t.length : 0;
		return n
	};
	this.spam.conCount = function(e) {
		var t = e.match(/[bcdfghjklmnpqrstvwxyz]/gi);
		var n = t ? t.length : 0;
		return n
	};
	this.spam.specCount = function(e) {
		var t = e.match(/[1234567890@#$%^&*();]/gi);
		var n = t ? t.length : 0;
		return n
	};
	this.spam.isSpam = function(e) {
		var t = false;
		var n = 0;
		for (var i = 0; i < e.length; i++) {
			n += e[i].length
		}
		var s = n / e.length;
		if (s + 15 >= 5.1 && s - 15 <= 5.1) {} else {
			t = true
		}
		var o = 0;
		var u = 0;
		var a = 0;
		for (var i = 0; i < e.length; i++) {
			o += r.spam.vowCount(e[i]);
			u += r.spam.conCount(e[i]);
			a += r.spam.specCount(e[i])
		}
		if (o >= u) {
			t = true
		} else if (a > o) {
			t = true
		}
		var f = u / 7;
		if (e.length > 3) {
			if (o + f >= u / 1.9 && o - f <= u / 1.9) {} else {
				t = true
			}
		} else if (e.length > 2) {
			if (o + f >= u / 1.4 && o - f <= u / 1.4) {} else {
				t = true
			}
		} else {
			f = u / 3;
			if (o + f >= u && o - f <= u) {} else {
				t = true
			}
		}
		var l = [];
		for (var i = 0; i < e.length; i++) {
			var c = e[i];
			for (var h = 0; h < c.length; h++) {
				var p = false;
				for (var d = 0; d < l.length; d++) {
					if (l[d] === c[h]) {
						p = true
					}
				}
				if (p === false) {
					l.push(c[h])
				}
			}
		}
		var v = l.length;
		if (v + e.length / 7 < e.length) {
			t = true
		}
		var m = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		for (var i = 0; i < e.length; i++) {
			var c = e[i];
			c = c.split(/[.?! ]+/);
			c = c[0];
			var g = 0;
			while (g < c.length - 2) {
				for (var h = g + 1; h < c.length; h++) {
					var y = true;
					for (var b = 0; b < m.length; b++) {
						if (c[g] === m[b]) {
							y = false
						}
					}
					if (y === false) {
						if (c[h] === c[g]) {
							if (c[h + 1] === c[g + 1]) {
								if (c[h + 2] === c[g + 2]) {
									t = true
								}
							}
						}
					} else {
						break
					}
				}
				g++
			}
		}
		return t
	};
	this.link = {};
	this.link.findLinks = function(e) {
		var t = [];
		for (var i = 0; i < e.length; i++) {
			var s = e[i].replace(new RegExp(/[()!]/g), "");
			if (/^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i.test(s)) {
				t.push([s, r.preview(i, e)])
			} else if (s.indexOf("@") == -1 && s.indexOf("://") == -1) {
				for (var o = 0; o < n.length; o++) {
					if (s.indexOf("." + n[o]) != -1) {
						t.push([s, r.preview(i, e)]);
						break
					}
				}
			}
		}
		var u = [];
		for (var i = 0; i < t.length; i++) {
			if (t[i][0][t[i][0].length - 1] === "." || t[i][0][t[i][0].length - 1] === "?") {
				u.push([t[i][0].slice(0, t[i][0].length - 1), t[i][1]])
			} else {
				u.push(t[i])
			}
		}
		return u
	};
	this.email = {};
	this.email.findEmails = function(e) {
		var n = [],
			i = "";
		for (var s = 0; s < e.length; s++) {
			var o = e[s].split(/[\,\|\(\)\?]/g);
			for (var u = 0; u < o.length; u++) {
				var a = o[u].replace(new RegExp(/[()!]/g), "");
				a = braid.replace(a, ",@wa@");
				if (t.test(a)) {
					i = a.match(t)[0];
					n.push([i, r.preview(s, e)])
				}
			}
		}
		return n
	};
	this.hashtags = {};
	this.hashtags.findHashtags = function(e) {
		var t = [],
			n = "";
		for (var i = 0; i < e.length; i++) {
			if (/^#([a-z0-9][a-z0-9\-_]*)\b/i.test(e[i])) {
				n = e[i].match(/^#([a-z0-9][a-z0-9\-_]*)\b/i)[0];
				t.push([n, r.preview(i, e)])
			}
		}
		return t
	};
	this.aliases = {};
	this.aliases.findAliases = function(e) {
		var t = [],
			n = "";
		for (var i = 0; i < e.length; i++) {
			if (/^(@[a-z0-9][a-z0-9\-_]*)\b/i.test(e[i])) {
				n = e[i].match(/^(@[a-z0-9][a-z0-9\-_]*)\b/i)[0];
				t.push([n, r.preview(i, e)])
			}
		}
		return t
	};
	this.places = {};
	this.places.falsePlaces = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "His", "Hers", "Who", "Whom", "Whose"];
	this.places.findPlaces = function(e) {
		var t = [];
		for (var n = 0; n < e.length; n++) {
			e[n] = e[n].replace(new RegExp(/[()!,]/g), "");
			if (e[n] === "at" || e[n] === "in" || e[n] === "near" || e[n] === "close" && e[n + 1] === "to") {
				var i = [];
				var s = 1;
				while (e[n + s] !== "at" && e[n + s] !== "in" && e[n + s] !== "near" && !/^.*(\.|\,|\?|\!)+$/.test(e[n + s - 1]) && n + s < e.length) {
					var o = e[n + s].replace(/[\,\.]/, "");
					if (/^[A-Z](.*)$/.test(o)) {
						if (n + 4 > n + s) {
							i.push(o)
						}
					}
					s++
				}
				if (i.length > 0 && i.length < 3) {
					var u = false;
					for (var a = 0; a < i.length; a++) {
						for (var f = 0; f < r.places.falsePlaces.length; f++) {
							if (i[a] === r.places.falsePlaces[f]) {
								u = true
							} else if (i[a].length < 2) {
								u = true
							}
						}
					}
					if (u === false) {
						t.push([i.join(" "), r.preview(n, e)])
					}
				}
				n += s - 1
			}
		}
		return t
	};
	this.init = function(e) {
		var t = e.toLowerCase();
		r.text.wordCount = t.split(/[ ]+/).length - 1;
		var n = t.split(/[ \n]+/);
		var i = n;
		var s = e.split(/[ \n]+/);
		t = t.split(/[\n ]+/);
		for (var o = 0; o < t.length; o++) {
			t[o] = braid.replace(t[o], " @w@@n@,@w@" + '@n@"@w@');
			t[o] = t[o].replace("?", "")
		}
		var u = t;
		var a = r.emotion.findEmotions(u);
		if (a !== []) {
			r.addToObj(a, "emotions")
		}
		var f = r.date.findDates(u, n);
		if (f !== []) {
			r.addToObj(f, "dates")
		}
		var l = r.time.findTimes(u);
		if (l !== []) {
			r.addToObj(l, "times")
		}
		var c = r.phone.findPhones(u);
		if (c !== []) {
			r.addToObj(c, "phones")
		}
		var h = r.link.findLinks(n);
		if (h !== []) {
			r.addToObj(h, "links")
		}
		var p = r.email.findEmails(s);
		if (p !== []) {
			r.addToObj(p, "emails")
		}
		var d = r.places.findPlaces(s);
		if (d !== []) {
			r.addToObj(d, "places")
		}
		var v = r.hashtags.findHashtags(s);
		if (v !== []) {
			r.addToObj(v, "hashtags")
		}
		var m = r.aliases.findAliases(s);
		if (m !== []) {
			r.addToObj(m, "aliases")
		}
		var g = r.spam.isSpam(u);
		r.addToObj(g, "spam");
		var y = r.text.readingTime(r.text.wordCount);
		if (y !== []) {
			r.addToObj(y, "readingTime")
		}
	};
	var r = this
}
var braid = {};
braid.vnumber = .02;
braid.version = function() {
	console.log(braid.vnumber)
};
braid.search = function(e, t, n, r) {
	if (n !== undefined) {
		if (n === false) {
			t = t.toLowerCase();
			e = e.toLowerCase();
			if (r !== false) {
				t = braid.replace(t, "aeiouyAEIOUY@wa@");
				e = braid.replace(e, "aeiouyAEIOUY@wa@")
			}
		}
	}
	var i = [];
	var t = t.split("");
	var e = e.split("");
	var s;
	var o = 0;
	for (var u = 0; u < t.length; u++) {
		if (t[u] === e[0]) {
			for (var a = 0; a < e.length; a++) {
				s = u + a;
				if (t[s] === e[a]) {
					if (a === e.length - 1) {
						var f = s - e.length + 1;
						i.push(f);
						o++
					}
				}
			}
		}
	}
	if (o === 0) {
		return false
	} else {
		return i
	}
};
braid.replace = function(e, t) {
	var n = t;
	var t = {};
	t.full = n;
	var r = false,
		i = false;
	t.groups = t.full.split("@n@");
	if (e instanceof Array) {
		var s = [];
		r = true;
		for (var o = 0; o < e.length; o++) {
			var u = e[o];
			if (u === parseInt(u)) {
				u = u.toString();
				i = true
			}
			for (var a = 0; a < t.groups.length; a++) {
				var f = t.groups[a];
				var l = braid.search("@wa@", f, true);
				if (l === false) {
					var c = f.split("@w@");
					var h = c[0];
					var p = c[1];
					u = deiwo3replace(h, p, u)
				} else {
					var c = f.split("@wa@");
					var h = c[0];
					if (braid.search("!NUM!", h, true) !== false) {
						h = "12345678910"
					}
					if (braid.search("!VOWEL!", h, true) !== false) {
						h = "aeiouyAEIOUY"
					}
					if (braid.search("!SPECIAL!", h, true) !== false) {
						h = "~`@#$%^&*()_+-={}|[]:;<>"
					}
					h = h.split("");
					var p = c[1];
					for (var d = 0; d < h.length; d++) {
						u = deiwo3replace(h[d], p, u)
					}
				}
			}
			if (i === true) {
				u = parseInt(u)
			}
			s.push(u);
			i = false
		}
	} else {
		if (e === parseInt(e)) {
			e = e.toString();
			i = true
		}
		for (var a = 0; a < t.groups.length; a++) {
			var f = t.groups[a];
			var l = braid.search("@wa@", f, true);
			if (l === false) {
				var c = f.split("@w@");
				var h = c[0];
				var p = c[1];
				e = deiwo3replace(h, p, e)
			} else {
				var c = f.split("@wa@");
				var h = c[0];
				if (braid.search("!NUM!", h, true) !== false) {
					h = "12345678910"
				}
				if (braid.search("!VOWEL!", h, true) !== false) {
					h = "aeiouyAEIOUY"
				}
				h = h.split("");
				var p = c[1];
				for (var d = 0; d < h.length; d++) {
					e = deiwo3replace(h[d], p, e)
				}
			}
		}
		if (i === true) {
			e = parseInt(e)
		}
	}
	if (r === false) {
		return e
	} else {
		return s
	}
};
var deiwo3replace = function(e, t, n) {
	return n.replace(new RegExp(e, "g"), t)
};
braid.help = function(e) {
	if (!e) {
		console.log('Incorrect santex. Make sure to use the first parameter as a keyword. Example: braid.help("braid.replace"). \n|TIP: You can use this function in the console for quick help.')
	} else {
		if (braid.search("replace", e, false) !== false) {
			console.log("*SANTEX FOR braid.replace()*\n\n" + "|RETURNS: braid.replace() will return the output after completing actions on the string.\n" + "|SANTEX: var VARIABLE = braid.replace('this is a test','this@w@that@n@is@w@was');\n" + "|OUTPUT: 'that was a test'\n" + "|NOTE: Using the parameter 'key' (second parameter), '@w@' is used as 'with', so 'apple@w@grape' means 'replace apple with grape'.\n" + "| '@n@ is used as 'next.' It is used to seperate instructions, as follows, 'apple@w@grape@n@cherry@w@bannana'.\n" + "| You can use '@wa@' instead of '@w@' to replace all instances of each character with another, like so, 'aeiouy@wa@#'\n" + "| If the string were 'abcdefghijklmnopqrstuvwxyz', this would output '#bcd#fgh#jklmn#pqrst#vwx#z'.\n" + "| *Input can be an Array, Integer, or String.\n")
		} else if (braid.search("search", e, false) !== false) {
			console.log("*SANTEX FOR braid.search()*\n\n" + "|RETURNS: if braid.search() finds a match to query, it will return the positions of all matches in an array.\n" + "| If it does not find a match, it will return *false*.\n" + "|SANTEX: var VARIABLE = braid.search('query','complete string',false,false);\n" + "|OUTPUT: *false*\n" + "|NOTE: The third (3) parameter should be *true* or *false*, if *true* the search will be case sensitive, if *false* the search will not.\n| Setting this to false will also search by just consonants, instead of both consonants and vowels.\n" + "| The fourth (4) parameter can be set to *false* to disable the removal of vowels when searching with the third (3) parameter equal to *true*.\n")
		} else {
			console.log("~No help available on this topic. Please make sure to check your spelling.\nSANTEX: braid.help('braid.complementary'), etc.\n    ")
		}
	}
};