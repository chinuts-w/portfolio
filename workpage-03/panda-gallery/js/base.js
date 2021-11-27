$(".main-area").slick({
  autoplay: true, // 自動再生を設定
  arrows: false, //  切り変え矢印の有無
  autoplaySpeed: 4000, // 自動再生のスピード（ミリ秒単位）
  speed: 2000, // 自動再生や左右の矢印でスライドするスピード
  infinite: true, // 無限スクロールにするかどうか。最後の画像の次は最初の画像が表示される。
  slidesToShow:1,　//表示するスライド数
});
