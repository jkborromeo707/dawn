const $  = (e) => document.querySelector(e),
      $$ = (e) => document.querySelectorAll(e);

function engines () {
  return {
    g: ['https://google.com/search?q=', 'Google'],
    y: ['https://youtube.com/results?search_query=', 'Youtube'],
    j: ['http://jisho.org/search/', 'Jisho'],
    n: ['https://nyaa.si/?f=0&c=0_0&q=', 'Nyaa'],
    i: ['https://www.google.com/search?tbm=isch&q=', 'Google Images'],
    b: ['https://gelbooru.com/index.php?page=post&s=list&tags=', 'Gelbooru'],
    p: ['http://www.pixiv.net/search.php?s_mode=s_tag&word=', 'Pixiv'],
    w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
  };
}

const { parse, stringify } = JSON;

const nodes = (elem) =>
      Array.prototype.slice.call($(elem).children);

new Weather('sydney').getWeather;
new DateTime().setDateTime();