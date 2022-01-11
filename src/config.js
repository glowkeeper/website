class LocalRoutes {

      static home = "/"

      static academia = `/academia`
      static apps = `/apps`
      static blog = `/blog`
      static books = `/books`
      static flashFiction = `/flash-fiction`
      static misc = `/miscellany`
      static poetry = `/poetry`
      static songs = `/songs`
      static stories = `/stories`

      static about = `/about`
      static cv = `/cv`
      static contact = `/contact`

      // flash fiction
      static 
}

class LocalRoutesFlashFiction {

  static eric = `${LocalRoutes.flashFiction}/eric`
  static fortunes = `${LocalRoutes.flashFiction}/fortunes-always-hiding` 
  static wisdom = `${LocalRoutes.flashFiction}/wisdom` 
}

class LocalRoutesMisc {

  static anotherGreatEscape = `${LocalRoutes.misc}/another-great-escape`
  static myGreatEscape = `${LocalRoutes.misc}/my-great-escape`
  static patience = `${LocalRoutes.misc}/patience`
  static scotlandEngland = `${LocalRoutes.misc}/scotland-vs-england`
  static westHamEverton = `${LocalRoutes.misc}/west-ham-vs-everton`
  static wind = `${LocalRoutes.misc}/wind`
  static worldCupSemi = `${LocalRoutes.misc}/world-cup-semi`
}

export class LocalRoutesPoetry {

  static difficult = `${LocalRoutes.poetry}/difficult`
  static dreamland = `${LocalRoutes.poetry}/dreamland`
  static if = `${LocalRoutes.poetry}/if`
  static iKneel = `${LocalRoutes.poetry}/i-kneel`
  static monkey = `${LocalRoutes.poetry}/monkey`
  static notChristmas = `${LocalRoutes.poetry}/not-christmas`
  static orgreave = `${LocalRoutes.poetry}/orgreave`
  static prudictive = `${LocalRoutes.poetry}/prudictive`
  static santaClaus = `${LocalRoutes.poetry}/santa-claus`
  static soonToBe73 = `${LocalRoutes.poetry}/soon-to-be-73`
  static theRoad = `${LocalRoutes.poetry}/the-road`
  static winter = `${LocalRoutes.poetry}/winter`
}

export class LocalRoutesSongs {

  static collegeCampus = `${LocalRoutes.songs}/college-campus`
  static echoChamber = `${LocalRoutes.songs}/echo-chamber`
  static if = `${LocalRoutes.songs}/if`
  static iRememberWhen = `${LocalRoutes.songs}/i-remember-when`
  static onTheStreet = `${LocalRoutes.songs}/on-the-street`
  static whatsWrongWithNow = `${LocalRoutes.songs}/whats-wrong-with-now`
}

export class LocalRoutesStories {

  static change = `${LocalRoutes.stories}/change`
  static frederick = `${LocalRoutes.stories}/frederick`
  static freedom = `${LocalRoutes.stories}/freedom`
  static gratitude = `${LocalRoutes.stories}/gratitude`
  static minusculus = `${LocalRoutes.stories}/minusculus`
  static theDruid = `${LocalRoutes.stories}/the-druid`
  static theEarthAndTheMoon = `${LocalRoutes.stories}/the-earth-and-the-moon`
  static theHopeOfGods = `${LocalRoutes.stories}/the-hope-of-gods`
  static theKnucker = `${LocalRoutes.stories}/the-knucker`
  static theMillwright = `${LocalRoutes.stories}/the-millwright`
}

export class UIText {

  static home = "home"

  static academia = "academia"
  static apps = "apps"
  static blog = "blog"
  static books = "books"
  static flashFiction = "flash fiction"
  static misc = "miscellany"
  static poetry = "poetry"
  static songs = "songs"
  static stories = "stories"

  static about = "about"
  static cv = "cv"
  static contact = "contact"

  // flash fiction
  static flash
}

export class UITextFlashFiction {

  static eric = "eric"
  static fortunes = "fortunes always hiding"
  static wisdom = "wisdom"
}

export class UITextMisc {

  static anotherGreatEscape = "another great escape"
  static myGreatEscape = "my great escape"
  static patience = "patience"
  static scotlandEngland = "scotland vs england"
  static westHamEverton = "west ham vs everton"
  static wind = "wind"
  static worldCupSemi = "world cup semi"
}

export class UITextPoetry {

  static difficult = "difficult"
  static dreamland = "dreamland"
  static if = "if"
  static iKneel = "i kneel"
  static monkey = "monkey"
  static notChristmas = "not christmas"
  static orgreave = "orgreave"
  static prudictive = "prudictive"
  static santaClaus = "santa claus"
  static soonToBe73 = "soon to be 73"
  static theRoad = "the road"
  static winter = "winter"
}

export class UITextSongs {

  static collegeCampus = "college campus"
  static echoChamber = "echo chamber"
  static if = "if"
  static iRememberWhen = "i remember when"
  static onTheStreet = "on the street"
  static whatsWrongWithNow = "what's wrong with now"
}

export class UITextStories {

  static change = "change"
  static frederick = "frederick"
  static freedom = "freedom"
  static gratitude = "gratitude"
  static minusculus = "minusculus"
  static theDruid = "the druid"
  static theEarthAndTheMoon = "the earth and the moon"
  static theHopeOfGods = "the hope of gods"
  static theKnucker = "the knucker"
  static theMillwright = "the millwright"
}

export const homeSections = {
  academia: {
    id: "home-academia",
    title: UIText.academia,
    route: LocalRoutes.academia
  },
  apps: {
    id: "home-apps",
    title: UIText.apps,
    route: LocalRoutes.apps
  },
  blog: {
    id: "home-blog",
    title: UIText.blog,
    route: LocalRoutes.blog
  },
  books: {
    id: "home-books",
    title: UIText.books,
    route: LocalRoutes.books
  },
  flashFiction: {
    id: "home-flash-fiction",
    title: UIText.flashFiction,
    route: LocalRoutes.flashFiction
  },
  misc: {
    id: "home-misc",
    title: UIText.misc,
    route: LocalRoutes.misc
  },
  poetry: {
    id: "home-poetry",
    title: UIText.poetry,
    route: LocalRoutes.poetry
  },
  songs:  {
    id: "home-songs",
    title: UIText.songs,
    route: LocalRoutes.songs
  },
  stories: {
    id: "home-stories",
    title: UIText.stories,
    route: LocalRoutes.stories
  }
}

export const aboutSections = {
  contact: {
    id: "about",
    title: UIText.about,
    route: LocalRoutes.contact + "/about",
    content: "/assets/posts/about/about.md"
  },
}

export const cvSections = {
  cv: {
    id: "cv",
    title: UIText.cv,
    route: LocalRoutes.contact + "/cv",
    content: "/assets/posts/cv/cv.md"
  },
}

export const contactSections = {
  contact: {
    id: "contact",
    title: UIText.contact,
    route: LocalRoutes.contact + "/contact",
    content: "/assets/posts/contact/contact.md"
  },
}

export const academiaSections = {
  academia: {
    id: "academia",
    title: UIText.contact,
    route: LocalRoutes.academia + "/academia",
    content: "/assets/posts/academia/academia.md"
  },
}

export const appsSections = {
  apps: {
    id: "apps",
    title: UIText.apps,
    route: LocalRoutes.apps + "/apps",
    content: "/assets/posts/apps/apps.md"
  }
}

export const blogSections = {
  blog: {
    id: "blog",
    title: UIText.blog,
    route: LocalRoutes.blog + "/blog",
    content: "/assets/posts/blog/blog.md"
  },
}

export const booksSections = {
  books: {
    id: "books",
    title: UIText.books,
    route: LocalRoutes.books + "/books",
    content: "/assets/posts/books/books.md"
  },
}

export const flashFictionSections = {
  eric: {
    id: "flash-eric",
    title: UITextFlashFiction.eric,
    route: LocalRoutesFlashFiction.eric,
    content: "/assets/posts/flashFiction/eric.md"
  },
  fortunes: {
    id: "flash-fortunes",
    title: UITextFlashFiction.fortunes,
    route: LocalRoutesFlashFiction.fortunes,
    content: "/assets/posts/flashFiction/fortunesAlwaysHiding.md"
  },
  wisdom: {
    id: "flash-wisdom",
    title: UITextFlashFiction.wisdom,
    route: LocalRoutesFlashFiction.wisdom,
    content: "/assets/posts/flashFiction/wisdom.md"
  }
}

export const miscSections = {
  anotherGreatEscape: {
    id: "misc-another-great-escape",
    title: UITextMisc.anotherGreatEscape,
    route: LocalRoutesMisc.anotherGreatEscape,
    content: "/assets/posts/misc/anotherGreatEscape.md"
  },
  myGreatEscape: {
    id: "misc-my-great-escape",
    title: UITextMisc.myGreatEscape,
    route: LocalRoutesMisc.myGreatEscape,
    content: "/assets/posts/misc/myGreatEscape.md"
  },
  patience: {
    id: "misc-patience",
    title: UITextMisc.patience,
    route: LocalRoutesMisc.patience,
    content: "/assets/posts/misc/patience.md"
  },
  scotlandEngland: {
    id: "misc-scotland-vs-england",
    title: UITextMisc.scotlandEngland,
    route: LocalRoutesMisc.scotlandEngland,
    content: "/assets/posts/misc/scotlandEngland.md"
  },
  westHamEverton: {
    id: "misc-west-ham-vs-everton",
    title: UITextMisc.westHamEverton,
    route: LocalRoutesMisc.westHamEverton,
    content: "/assets/posts/misc/westHamEverton.md"
  },
  wind: {
    id: "misc-wind",
    title: UITextMisc.wind,
    route: LocalRoutesMisc.wind,
    content: "/assets/posts/misc/wind.md"
  },
  worldCupSemi: {
    id: "misc-world-cup-semi",
    title: UITextMisc.worldCupSemi,
    route: LocalRoutesMisc.worldCupSemi,
    content: "/assets/posts/misc/worldCupSemi.md"
  },
}

export const poetrySections = {
  difficult: {
    id: "poetry-difficult",
    title: UITextPoetry.difficult,
    route: LocalRoutesPoetry.difficult,
    content: "/assets/posts/poetry/difficult.md"
  },
  dreamland: {
    id: "poetry-dreamland",
    title: UITextPoetry.dreamland,
    route: LocalRoutesPoetry.dreamland,
    content: "/assets/posts/poetry/dreamland.md"
  },
  if: {
    id: "poetry-if",
    title: UITextPoetry.if,
    route: LocalRoutesPoetry.if,
    content: "/assets/posts/poetry/if.md"
  },
  iKneel: {
    id: "poetry-i-kneel",
    title: UITextPoetry.iKneel,
    route: LocalRoutesPoetry.iKneel,
    content: "/assets/posts/poetry/iKneel.md"
  },
  monkey: {
    id: "poetry-monkey",
    title: UITextPoetry.monkey,
    route: LocalRoutesPoetry.monkey,
    content: "/assets/posts/poetry/monkey.md"
  },
  notChristmas: {
    id: "poetry-not-christmas",
    title: UITextPoetry.notChristmas,
    route: LocalRoutesPoetry.notChristmas,
    content: "/assets/posts/poetry/notChristmas.md"
  },
  orgreave: {
    id: "poetry-orgreave",
    title: UITextPoetry.orgreave,
    route: LocalRoutesPoetry.orgreave,
    content: "/assets/posts/poetry/orgreave.md"
  },
  prudictive: {
    id: "poetry-prudictive",
    title: UITextPoetry.prudictive,
    route: LocalRoutesPoetry.prudictive,
    content: "/assets/posts/poetry/prudictive.md"
  },
  santaClaus: {
    id: "poetry-santa-claus",
    title: UITextPoetry.santaClaus,
    route: LocalRoutesPoetry.santaClaus,
    content: "/assets/posts/poetry/santaClaus.md"
  },
  soonToBe73: {
    id: "poetry-soon-to-be-73",
    title: UITextPoetry.soonToBe73,
    route: LocalRoutesPoetry.soonToBe73,
    content: "/assets/posts/poetry/soonToBe73.md"
  },
  theRoad: {
    id: "poetry-the-road",
    title: UITextPoetry.theRoad,
    route: LocalRoutesPoetry.theRoad,
    content: "/assets/posts/poetry/theRoad.md"
  },
  winter: {
    id: "poetry-winter",
    title: UITextPoetry.winter,
    route: LocalRoutesPoetry.winter,
    content: "/assets/posts/poetry/winter.md"
  },
}

export const songsSections = {
  collegeCampus: {
    id: "songs-college-campus",
    title: UITextSongs.collegeCampus,
    route: LocalRoutesSongs.collegeCampus,
    content: "/assets/posts/songs/collegeCampus.md"
  },
  echoChamber: {
    id: "songs-echo-chamber",
    title: UITextSongs.echoChamber,
    route: LocalRoutesSongs.echoChamber,
    content: "/assets/posts/songs/echoChamber.md"
  },
  if: {
    id: "songs-if",
    title: UITextSongs.if,
    route: LocalRoutesSongs.if,
    content: "/assets/posts/songs/if.md"
  },
  iRememberWhen: {
    id: "songs-i-remember-when",
    title: UITextSongs.iRememberWhen,
    route: LocalRoutesSongs.iRememberWhen,
    content: "/assets/posts/songs/iRememberWhen.md"
  },
  onTheStreet: {
    id: "songs-on-the-street",
    title: UITextSongs.onTheStreet,
    route: LocalRoutesSongs.onTheStreet,
    content: "/assets/posts/songs/onTheStreet.md"
  },
  whatsWrongWithNow: {
    id: "songs-whats-wrong-with-now",
    title: UITextSongs.whatsWrongWithNow,
    route: LocalRoutesSongs.whatsWrongWithNow,
    content: "/assets/posts/songs/whatsWrongWithNow.md"
  },
}

export const storiesSections = {
  change: {
    id: "stories-change",
    title: UITextStories.change,
    route: LocalRoutesStories.change,
    content: "/assets/posts/stories/change.md"
  },
  frederick: {
    id: "stories-frederick",
    title: UITextStories.frederick,
    route: LocalRoutesStories.frederick,
    content: "/assets/posts/stories/frederick.md"
  },
  freedom: {
    id: "stories-freedom",
    title: UITextStories.freedom,
    route: LocalRoutesStories.freedom,
    content: "/assets/posts/stories/freedom.md"
  },
  gratitude: {
    id: "stories-gratitude",
    title: UITextStories.gratitude,
    route: LocalRoutesStories.gratitude,
    content: "/assets/posts/stories/gratitude.md"
  },
  minusculus: {
    id: "stories-minusculus",
    title: UITextStories.minusculus,
    route: LocalRoutesStories.minusculus,
    content: "/assets/posts/stories/minusculus.md"
  },
  theDruid: {
    id: "stories-the-druid",
    title: UITextStories.theDruid,
    route: LocalRoutesStories.theDruid,
    content: "/assets/posts/stories/theDruid.md"
  },
  theEarthAndTheMoon: {
    id: "stories-the-earth-and-the-moon",
    title: UITextStories.theEarthAndTheMoon,
    route: LocalRoutesStories.theEarthAndTheMoon,
    content: "/assets/posts/stories/theEarthAndTheMoon.md"
  },
  theHopeOfGods: {
    id: "stories-the-hope-of-gods",
    title: UITextStories.theHopeOfGods,
    route: LocalRoutesStories.theHopeOfGods,
    content: "/assets/posts/stories/theHopeOfGods.md"
  },
  theKnucker: {
    id: "stories-the-knucker",
    title: UITextStories.theKnucker,
    route: LocalRoutesStories.theKnucker,
    content: "/assets/posts/stories/theKnucker.md"
  },
  theMillwright: {
    id: "stories-the-millwright",
    title: UITextStories.theMillwright,
    route: LocalRoutesStories.theMillwright,
    content: "/assets/posts/stories/theMillwright.md"
  }
}

export const siteSections = {
  home: {
    id: "home",
    title: UIText.home,
    route: LocalRoutes.home,
    sections: homeSections
  },
  about: {
    id: "about",
    title: UIText.about,
    route: LocalRoutes.about,
    sections: aboutSections
  },
  cv: {
    id: "cv",
    title: UIText.cv,
    route: LocalRoutes.cv,
    sections: cvSections
  },
  contact: {
    id: "contact",
    title: UIText.contact,
    route: LocalRoutes.contact,
    sections: contactSections
  },
  academia: {
    id: "academia",
    title: UIText.academia,
    route: LocalRoutes.academia,
    sections: academiaSections
  },
  apps: {
    id: "apps",
    title: UIText.apps,
    route: LocalRoutes.apps,
    sections: appsSections
  },
  blog: {
    id: "blog",
    title: UIText.blog,
    route: LocalRoutes.blog,
    sections: blogSections
  },
  books: {
    id: "books",
    title: UIText.books,
    route: LocalRoutes.books,
    sections: booksSections
  },
  flashFiction: {
    id: "flash-fiction",
    title: UIText.flashFiction,
    route: LocalRoutes.flashFiction,
    sections: flashFictionSections
  },
  misc: {
    id: "misc",
    title: UIText.misc,
    route: LocalRoutes.misc,
    sections: miscSections
  },
  poetry: {
    id: "poetry",
    title: UIText.poetry,
    route: LocalRoutes.poetry,
    sections: poetrySections
  },
  songs:  {
    id: "songs",
    title: UIText.songs,
    route: LocalRoutes.songs,
    sections: songsSections
  },
  stories: {
    id: "stories",
    title: UIText.stories,
    route: LocalRoutes.stories,
    sections: storiesSections
  }
}

