
export const html_server_client = {
  _load_script: function (fname) {
    return new Promise((resolve, reject) => {
      const sc = document.createElement("script");
      sc.type = "text/javascript";
      sc.src = fname;
      sc.onload = () => resolve();
      sc.onerror = (e) => reject(e);
      const s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(sc, s);
    });
  },
  _sock: undefined,
  is_avaiable: function () {
    return location.origin === "https://www.pecode.com";
  },
  init: async function () {
    // ローカルに保存しているsocket.ioだと、utf-8の文字を送信すると文字化けする。
    await this._load_script("https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.slim.js");
    //await this._load_script("libs/socket.io-client/socket.io.js");
    this._sock = io("/html_server");
  },
  create_html: async function (html_string) {
    return new Promise(resolve => {
      this._sock.emit("create_html", { html_string }, (res) => {
        console.log(`uuid=${res.uuid}`);
        resolve({ uuid: res.uuid });
      });
    });
  },
}
