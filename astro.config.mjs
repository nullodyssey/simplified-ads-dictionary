// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://ads.coachingstack.io',
    integrations: [
        sitemap(),
        starlight({
            components: {
                Head: './src/components/Head.astro',
            },
            logo: {
                light: './src/assets/logo-light.svg',
                dark: './src/assets/logo-dark.svg',
                alt: 'SimplyAds Logo',
            },
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'English',
                    lang: 'en',
                },
                fr: {
                    label: 'Français',
                    lang: 'fr',
                }
            },
            title: {
                en: 'SimplyAds',
                fr: 'SimplyAds',
            },
            social: [{
                icon: 'github',
                label: 'GitHub',
                href: 'https://github.com/nullodyssey/simplified-ads-dictionary'
            }],
            sidebar: [
                {
                    label: 'Getting Started',
                    translations: {fr: 'Commencer'},
                    items: [
                        {
                            label: 'Introduction',
                            slug: 'getting-started/introduction',
                            translations: {fr: 'Introduction'}
                        },
                        {
                            label: 'How to Use',
                            slug: 'getting-started/how-to-use',
                            translations: {fr: 'Comment utiliser'}
                        },
                        {label: 'Contributing', slug: 'getting-started/contributing', translations: {fr: 'Contribuer'}},
                    ]
                },
                {
                    label: 'Alphabetical Index',
                    translations: {fr: 'Index Alphabétique'},
                    items: [
                        {label: 'All Terms A-Z', slug: 'alphabetical-index', translations: {fr: 'Tous les termes A-Z'}},
                    ]
                },
                {
                    label: 'Metrics',
                    collapsed: true,
                    translations: {fr: 'Métriques'},
                    items: [
                        {label: 'Impression', slug: 'metrics/impression', translations: {fr: 'Impression'}},
                        {label: 'Conversion', slug: 'metrics/conversion', translations: {fr: 'Conversion'}},
                        {
                            label: 'Conversion Rate',
                            slug: 'metrics/conversion-rate',
                            translations: {fr: 'Taux de conversion'}
                        },
                        {label: 'CTR', slug: 'metrics/ctr', translations: {fr: 'Taux de clics (CTR)'}},
                        {label: 'CPC', slug: 'metrics/cpc', translations: {fr: 'Coût par clic (CPC)'}},
                        {label: 'CPM', slug: 'metrics/cpm', translations: {fr: 'Coût pour mille impressions (CPM)'}},
                        {label: 'CPA', slug: 'metrics/cpa', translations: {fr: 'Coût par acquisition (CPA)'}},
                        {
                            label: 'ROAS',
                            slug: 'metrics/roas',
                            translations: {fr: 'Retour sur les dépenses publicitaires (ROAS)'}
                        },
                        {label: 'Ad Quality', slug: 'metrics/ad-quality', translations: {fr: 'Qualité de l\'annonce'}},
                    ]
                },
                {
                    label: 'Bidding & Budget',
                    collapsed: true,
                    translations: {fr: 'Enchères & Budget'},
                    items: [
                        {label: 'Max CPC', slug: 'bidding-budget/cpc-max', translations: {fr: 'CPC max'}},
                        {
                            label: 'Bidding Strategy',
                            slug: 'bidding-budget/bidding-strategy',
                            translations: {fr: 'Stratégie d\'enchères'}
                        },
                        {
                            label: 'Daily Budget',
                            slug: 'bidding-budget/daily-budget',
                            translations: {fr: 'Budget quotidien'}
                        },
                        {
                            label: 'Automated Bidding',
                            slug: 'bidding-budget/automated-bidding',
                            translations: {fr: 'Enchères automatiques'}
                        },
                        {label: 'CPV', slug: 'bidding-budget/cpv', translations: {fr: 'CPV'}},
                        {label: 'Enhanced CPC', slug: 'bidding-budget/ecpc', translations: {fr: 'eCPC'}},
                        {
                            label: 'Impression Share',
                            slug: 'bidding-budget/impression-share',
                            translations: {fr: 'Part d\'impression'}
                        },
                        {
                            label: 'Average Position',
                            slug: 'bidding-budget/average-position',
                            translations: {fr: 'Position moyenne'}
                        },
                    ]
                },
                {
                    label: 'Targeting',
                    collapsed: true,
                    translations: {fr: 'Ciblage'},
                    items: [
                        {label: 'Keyword', slug: 'targeting/keyword', translations: {fr: 'Mot-clé'}},
                        {
                            label: 'Match Type',
                            slug: 'targeting/match-type',
                            translations: {fr: 'Type de correspondance'}
                        },
                        {label: 'Audience', slug: 'targeting/audience', translations: {fr: 'Audience'}},
                        {label: 'Geolocation', slug: 'targeting/geolocation', translations: {fr: 'Géolocalisation'}},
                        {
                            label: 'Custom Intent',
                            slug: 'targeting/custom-intent',
                            translations: {fr: 'Intentions personnalisées'}
                        },
                        {label: 'Remarketing', slug: 'targeting/remarketing', translations: {fr: 'Remarketing'}},
                        {
                            label: 'Customer List',
                            slug: 'targeting/customer-list',
                            translations: {fr: 'Liste de clients'}
                        },
                        {
                            label: 'Similar Audience',
                            slug: 'targeting/similar-audience',
                            translations: {fr: 'Audience similaire'}
                        },
                        {
                            label: 'Interest Category',
                            slug: 'targeting/interest-category',
                            translations: {fr: 'Centre d\'intérêt'}
                        },
                        {
                            label: 'Device Targeting',
                            slug: 'targeting/device-targeting',
                            translations: {fr: 'Ciblage par appareil'}
                        },
                        {
                            label: 'Ad Schedule',
                            slug: 'targeting/ad-schedule',
                            translations: {fr: 'Calendrier de diffusion'}
                        },
                    ]
                },
                {
                    label: 'Formats & Networks',
                    collapsed: true,
                    translations: {fr: 'Formats & Réseaux'},
                    items: [
                        {
                            label: 'Search Network',
                            slug: 'formats-networks/search-network',
                            translations: {fr: 'Réseau de Recherche'}
                        },
                        {
                            label: 'Display Network',
                            slug: 'formats-networks/display-network',
                            translations: {fr: 'Réseau Display'}
                        },
                        {
                            label: 'Responsive Ad',
                            slug: 'formats-networks/responsive-ad',
                            translations: {fr: 'Annonce Responsive'}
                        },
                        {
                            label: 'Shopping Ad',
                            slug: 'formats-networks/shopping-ad',
                            translations: {fr: 'Annonce Shopping'}
                        },
                        {label: 'TrueView', slug: 'formats-networks/trueview', translations: {fr: 'TrueView'}},
                        {label: 'Bumper Ads', slug: 'formats-networks/bumper-ads', translations: {fr: 'Bumper Ads'}},
                        {
                            label: 'In-Stream Skippable',
                            slug: 'formats-networks/in-stream-skippable',
                            translations: {fr: 'In-Stream skippable'}
                        },
                        {
                            label: 'In-Feed Video',
                            slug: 'formats-networks/in-feed-video',
                            translations: {fr: 'In-Feed Video'}
                        },
                    ]
                },
                {
                    label: 'Automation',
                    collapsed: true,
                    translations: {fr: 'Automatisation'},
                    items: [
                        {label: 'Smart Bidding', slug: 'automation/smart-bidding', translations: {fr: 'Smart Bidding'}},
                        {
                            label: 'Performance Max',
                            slug: 'automation/performance-max',
                            translations: {fr: 'Performance Max'}
                        },
                        {label: 'Signals', slug: 'automation/signals', translations: {fr: 'Signaux'}},
                        {
                            label: 'Machine Learning',
                            slug: 'automation/machine-learning',
                            translations: {fr: 'Apprentissage automatique'}
                        },
                        {
                            label: 'Data-Driven Attribution',
                            slug: 'automation/data-driven-attribution',
                            translations: {fr: 'Attribution basée sur les données'}
                        },
                        {
                            label: 'Audience Signals',
                            slug: 'automation/audience-signals',
                            translations: {fr: 'Signaux d\'audience'}
                        },
                    ]
                },
                {
                    label: 'Structure',
                    collapsed: true,
                    translations: {fr: 'Structure'},
                    items: [
                        {label: 'Account', slug: 'structure/account', translations: {fr: 'Compte'}},
                        {label: 'Campaign', slug: 'structure/campaign', translations: {fr: 'Campagne'}},
                        {label: 'Ad Group', slug: 'structure/ad-group', translations: {fr: 'Groupe d\'annonces'}},
                        {label: 'Ad', slug: 'structure/ad', translations: {fr: 'Annonce'}},
                    ]
                },
                {
                    label: 'Optimization',
                    collapsed: true,
                    translations: {fr: 'Optimisation'},
                    items: [
                        {
                            label: 'Recommendation',
                            slug: 'optimization/recommendation',
                            translations: {fr: 'Recommandation'}
                        },
                        {label: 'A/B Testing', slug: 'optimization/ab-testing', translations: {fr: 'A/B Testing'}},
                        {
                            label: 'Campaign Experiment',
                            slug: 'optimization/campaign-experiment',
                            translations: {fr: 'Expérience de campagne'}
                        },
                        {label: 'KPI', slug: 'optimization/kpi', translations: {fr: 'KPI'}},
                        {
                            label: 'Optimization Score',
                            slug: 'optimization/optimization-score',
                            translations: {fr: 'Score d\'optimisation'}
                        },
                        {
                            label: 'Campaign Draft',
                            slug: 'optimization/campaign-draft',
                            translations: {fr: 'Brouillon de campagne'}
                        },
                        {
                            label: 'Conversion Tracking',
                            slug: 'optimization/conversion-tracking',
                            translations: {fr: 'Suivi des conversions'}
                        },
                        {
                            label: 'Conversion Tag',
                            slug: 'optimization/conversion-tag',
                            translations: {fr: 'Tag de conversion'}
                        },
                        {
                            label: 'Remarketing Tag',
                            slug: 'optimization/remarketing-tag',
                            translations: {fr: 'Balise de remarketing'}
                        },
                    ]
                },
                {
                    label: 'Technical',
                    collapsed: true,
                    translations: {fr: 'Technique'},
                    items: [
                        {label: 'Final URL', slug: 'technical/final-url', translations: {fr: 'URL finale'}},
                        {
                            label: 'UTM Parameters',
                            slug: 'technical/utm-parameters',
                            translations: {fr: 'Paramètres UTM'}
                        },
                        {
                            label: 'Ad Extensions',
                            slug: 'technical/ad-extensions',
                            translations: {fr: 'Extensions d\'annonce'}
                        },
                        {
                            label: 'Google Ads Script',
                            slug: 'technical/google-ads-script',
                            translations: {fr: 'Script Google Ads'}
                        },
                    ]
                },
            ],
        }),
    ],
});
