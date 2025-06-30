import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'bar',
      position: 'bottom',
      equalWeightButtons: true,
      flipButtons: true,
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: true,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4</a>',
          onAccept: () => {
            console.log('ga4 accepted');
            // TODO: load ga4
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "Hi there! I use cookies on my website!",
          description:
            'My website uses functional and analytical cookies to better serve users and provide insights to myself.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'I use cookies as part of my website to enhance both user experience and my understanding of how my website is being viewed.',
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                'These cookies are needed to handle things such as theme toggling. Without them, the site would not function correctly.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics Cookies',
              description:
                'These cookies are used with Google Analytics to help me better understand who is viewing my website and how they are interacting.',
              linkedCategory: 'analytics',
            },
          ],
        },
      },
    },
  },
};
