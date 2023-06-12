export default class API_LINKS {
  domain = "https://www.gogoanime.pe/";

  // For searching as a whole [GETS ALL THE MATCHING LIST]
  searchMore = "search.html?keyword=";

  /**
   * SEARCH BAR API
   * Get info for search bars [GETS LIMITED ANIME LIST]
   * It is faster than above api. Takes less time and net
   *
   * DOWNSIDE:
   *   used for search bar for quick response
   *   Limited Amount of list
   */
  search = `https://ajax.gogo-load.com/site/loadAjaxSearch?keyword=${this.keyword}&id=-1&link_web=${this.domain}`;

  /**
   * POPULAR ONGOING API
   * PAGE RANGE: +ve integers
   */
  popularOngoingUpdate = `https://ajax.gogo-load.com/ajax/page-recent-release-ongoing.html?page=${this.int}`;

  /**
   * POPULAR ANIME API
   * ID RANGE: 1-3
   *  1 - DAILY
   *  2 - WEEKLY
   *  3 - MONTHLY
   */
  popular = `https://ajax.gogo-load.com/anclytic-ajax.html?id=[1-3]&link_web=${this.domain}`;

  /**
   * MAIN RELEASE PAGE
   * TYPE RANGE: 1-3
   * 1 - SUB
   * 2 - DUB
   * 3 - CHINESE
   * PAGE RANGE: +ve integers
   */
  recentRelease = `https://ajax.gogo-load.com/ajax/page-recent-release.html?page=${this.int}&type=[1-3]`;
}

/**
 * FOR EPISODE PAGE
 */

// var base_url_cdn_api = 'https://ajax.gogo-load.com/';

// // for getting start and end of ep for LoadListEpisodeApi
// // if (ep_end == '')
// //   ep_end = ep_start;
// var ep_start = $("#episode_page a").attr("ep_start")
// var ep_end = $("#episode_page a").attr("ep_end")

// // For id
// var id = $("input#movie_id").val();
// var default_ep = $("input#default_ep").val();
// var alias = $("input#alias_anime").val();

// function loadListEpisode(obj, ep_start, ep_end, id, default_ep, alias) {
//   var url = base_url_cdn_api + 'ajax/load-list-episode?ep_start=' + ep_start + '&ep_end=' + ep_end + '&id=' + id + '&default_ep=' + default_ep + '&alias=' + alias;
// }
