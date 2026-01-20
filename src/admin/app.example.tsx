import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    const style = document.createElement('style');
    style.innerHTML = `
      div[data-testid="banner-trial"] {
        display: none !important;
      }
      /* Hoặc nếu class cụ thể hơn */
      div[aria-label="Trial banner"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  },
};
