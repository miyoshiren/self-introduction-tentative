"use strict";

$(function () {

  gsap
    .timeline()
    .from(".js_sub-copy", {
      opacity: 0,
      x: -100,
      y: 0,
      duration: 1,
    })
    .from(".js_copy", {
      opacity: 0,
      x: -100,
      y: 0,
      duration: 1,
    });

  gsap.fromTo(
    ".js_about-body",
    {
      // y値を予め下方向に200pxずらす
      y: 200,
      // 不透明度を0
      autoAlpha: 0,
    },
    {
      // y値を定位置に戻す
      y: 0,
      // 不透明度を0
      autoAlpha: 1,
      // アニメーションの時間
      duration: 1,
      // 変化前から変化後までのアニメーションの振る舞い
      ease: "Power4.inOut",
      // スクロールで発火させる
      scrollTrigger: {
        // アニメーションの発火するスクロール位置
        trigger: ".js_about-body",
        // スクロール位置の基準（markersをするとscroller-startと表示され、top centerは画面中央）
        start: "top center",
        // 発火するスクロール位置や終了位置をマーカーする
        // markers: true,
      }, // 同じクラスがついた複数要素を順番にアニメーションする（sta
    }
  );

  gsap.fromTo(
    ".js_skill-body",
    {
      // y値を予め下方向に200pxずらす
      x: -200,
      // 不透明度を0
      autoAlpha: 0,
    },
    {
      // y値を定位置に戻す
      x: 0,
      // 不透明度を0
      autoAlpha: 1,
      // アニメーションの時間
      duration: 1,
      // 変化前から変化後までのアニメーションの振る舞い
      ease: "Power4.inOut",
      // スクロールで発火させる
      scrollTrigger: {
        // アニメーションの発火するスクロール位置
        trigger: ".js_skill-body",
        // スクロール位置の基準（markersをするとscroller-startと表示され、top centerは画面中央）
        start: "top center",
        // 発火するスクロール位置や終了位置をマーカーする
        // markers: true,
      }, // 同じクラスがついた複数要素を順番にアニメーションする（sta
    }
  );




  gsap.fromTo(
    ".js_works-body",
    {
      // y値を予め下方向に200pxずらす
      y: 200,
      // 不透明度を0
      autoAlpha: 0,
    },
    {
      // y値を定位置に戻す
      y: 0,
      // 不透明度を0
      autoAlpha: 1,
      // アニメーションの時間
      duration: 1,
      // 変化前から変化後までのアニメーションの振る舞い
      ease: "Power4.inOut",
      // スクロールで発火させる
      scrollTrigger: {
        // アニメーションの発火するスクロール位置
        trigger: ".js_works-body",
        // スクロール位置の基準（markersをするとscroller-startと表示され、top centerは画面中央）
        start: "top center",
        // 発火するスクロール位置や終了位置をマーカーする
        // markers: true,
      }, // 同じクラスがついた複数要素を順番にアニメーションする（sta
    }
  );
});

$(".top_service-boxs").slick({
  autoplay: true, // 自動再生
  arrows: true, // 矢印
  dots: true, // インジケーター
});
