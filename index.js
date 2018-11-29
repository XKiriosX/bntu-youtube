const controller = {
  search: async function (searchText) {
    let a = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyB2AC2rKcF06wFgx6fjT-Ss7YDLLgcgyxM&type=video&part=snippet&maxResults=3&q=${searchText}`)
        .then(res => res.json());
    return a;
  }
};

async function onSearchClick() {
  let searchText = document.querySelector('.SearchBar').value;
  let res = await controller.search(searchText);
  const { items } = res;
  res.map(item => {

  });
  console.log(items);
}

function contentGenerator() {
  let videoHolder = document.createElement('div');
  videoHolder.innerHTML = `
    <div class="flex-item">
      <div class="video-title"><a href="#">МОБИ ДИК (Escape From Tarkov)</a></div>
      <div class="video-thumbnail">
        <img src="src/mqdefault.jpg" alt="thumbnail">
      </div>
      <div class="video-info">
        <div class="video-author">
          <i class="fas fa-male"></i>
          <p>Wycc220</p>
        </div>
        <div class="published-at">
          <i class="far fa-calendar-alt"></i>
          <p>2018-11-28</p>
        </div>
        <div class="watched">
          <i class="far fa-eye"></i>
          <p>1488</p>
        </div>
      </div>
      <div class="video-description">
        <p>http://vk.com/official_group_by_wycc220 Группа ВК.</p>
      </div>
    </div>
  `;
  return videoHolder.firstElementChild;
}