export default class FetchService {
  static _apiKey = 'AIzaSyDeah8nAbCTXE8AFB1PcEYtawQDbLTSX1Q';

  static async getPosts(input: string, sort: string, token: string) {

    let pageToken = '';
    token ? pageToken = `&pageToken=${token}` : pageToken = '' 

    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?order=${sort}${pageToken}&key=${this._apiKey}&type=video&part=snippet&maxResults=15&q=${input}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return response.json();
  };
}
