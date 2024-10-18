const CONFIG = new Config({
    overrideStorage: true, // override localStorage with fixed userconfig values
    temperature: {
      location: 'Istanbul, Turkey',
      scale: 'C'
    },
    clock: {
      format: 'h:i p',
      iconColor: '#ff7b95'
    },
    search: {
      engines: {
        g: ['https://google.com/search?q=', 'Google'],
        i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
        d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
        y: ['https://youtube.com/results?search_query=', 'Youtube'],
        w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
      }
    },
    keybindings: {
      "t": 'todo-list',
      "s": 'search-bar'
    },
    disabled: ['crypto'],
    openLastVisitedTab: false,
    tabs: [
      {
        name: 'School',
        background_url: 'src/img/banners/bg-1.gif',
        categories: [{
          name: 'Sites',
          links: [
            {
              url: 'https://obs.yeditepe.edu.tr/',
              name: '/obs/'
            },
            {
              name: '/yulr/',
              url: 'https://yulearn.yeditepe.edu.tr/login/index.php',
              icon: 'mountain',
              icon_color: '#4957F2'
            },
            {
              name: '/lit/',
              url: 'https://calendar.google.com/',
              icon: 'calendar-clock'
            },
            {
              name: '/imgSearch/',
              url: 'https://images.google.com/',
              icon: 'camera'
            }
          ]
        },
        {
          name: 'Comfy',
          links: [
            {
              name: '/lounge/',
              url: 'https://www.youtube.com/@LofiGirl/streams'
            },
          ]
        },
        {
          name: 'Technology',
          links: [
            {
              name: '/mDoc/',
              url: 'https://www.mathworks.com/help/matlab/',
            },
            {
              name: '/Docs/',
              url: 'https://docs.google.com/'
            },
            {
              name: '/λ/',
              url: 'https://www.gmail.com',
              icon: 'mail'
            },
            {
              name: '/calc/',
              url: 'https://www.symbolab.com/'
            },
            {
              name: '/prog/',
              url: 'https://www.programiz.com/python-programming/online-compiler/',
              icon: 'code'
            }
          ]
        }
        ]
      }
    ]
  });
