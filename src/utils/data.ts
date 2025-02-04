type AccountLabelsType = {
  [key: string]: string;
};

class StaticData {
  static COUNTRY_LIST_ALL_ISO = [
    { code: 'AF', code3: 'AFG', label: 'Afghanistan', number: '004' },
    { code: 'AL', code3: 'ALB', label: 'Albania', number: '008' },
    { code: 'DZ', code3: 'DZA', label: 'Algeria', number: '012' },
    { code: 'AS', code3: 'ASM', label: 'American Samoa', number: '016' },
    { code: 'AD', code3: 'AND', label: 'Andorra', number: '020' },
    { code: 'AO', code3: 'AGO', label: 'Angola', number: '024' },
    { code: 'AI', code3: 'AIA', label: 'Anguilla', number: '660' },
    { code: 'AQ', code3: 'ATA', label: 'Antarctica', number: '010' },
    { code: 'AG', code3: 'ATG', label: 'Antigua and Barbuda', number: '028' },
    { code: 'AR', code3: 'ARG', label: 'Argentina', number: '032' },
    { code: 'AM', code3: 'ARM', label: 'Armenia', number: '051' },
    { code: 'AW', code3: 'ABW', label: 'Aruba', number: '533' },
    { code: 'AU', code3: 'AUS', label: 'Australia', number: '036' },
    { code: 'AT', code3: 'AUT', label: 'Austria', number: '040' },
    { code: 'AZ', code3: 'AZE', label: 'Azerbaijan', number: '031' },
    { code: 'BS', code3: 'BHS', label: 'Bahamas', number: '044' },
    { code: 'BH', code3: 'BHR', label: 'Bahrain', number: '048' },
    { code: 'BD', code3: 'BGD', label: 'Bangladesh', number: '050' },
    { code: 'BB', code3: 'BRB', label: 'Barbados', number: '052' },
    { code: 'BY', code3: 'BLR', label: 'Belarus', number: '112' },
    { code: 'BE', code3: 'BEL', label: 'Belgium', number: '056' },
    { code: 'BZ', code3: 'BLZ', label: 'Belize', number: '084' },
    { code: 'BJ', code3: 'BEN', label: 'Benin', number: '204' },
    { code: 'BM', code3: 'BMU', label: 'Bermuda', number: '060' },
    { code: 'BT', code3: 'BTN', label: 'Bhutan', number: '064' },
    {
      code: 'BO',
      code3: 'BOL',
      label: 'Bolivia (Plurinational State of)',
      number: '068',
    },
    {
      code: 'BQ',
      code3: 'BES',
      label: 'Bonaire, Sint Eustatius and Saba',
      number: '535',
    },
    {
      code: 'BA',
      code3: 'BIH',
      label: 'Bosnia and Herzegovina',
      number: '070',
    },
    { code: 'BW', code3: 'BWA', label: 'Botswana', number: '072' },
    { code: 'BV', code3: 'BVT', label: 'Bouvet Island', number: '074' },
    { code: 'BR', code3: 'BRA', label: 'Brazil', number: '076' },
    {
      code: 'IO',
      code3: 'IOT',
      label: 'British Indian Ocean Territory',
      number: '086',
    },
    { code: 'BN', code3: 'BRN', label: 'Brunei Darussalam', number: '096' },
    { code: 'BG', code3: 'BGR', label: 'Bulgaria', number: '100' },
    { code: 'BF', code3: 'BFA', label: 'Burkina Faso', number: '854' },
    { code: 'BI', code3: 'BDI', label: 'Burundi', number: '108' },
    { code: 'CV', code3: 'CPV', label: 'Cabo Verde', number: '132' },
    { code: 'KH', code3: 'KHM', label: 'Cambodia', number: '116' },
    { code: 'CM', code3: 'CMR', label: 'Cameroon', number: '120' },
    { code: 'CA', code3: 'CAN', label: 'Canada', number: '124' },
    { code: 'KY', code3: 'CYM', label: 'Cayman Islands', number: '136' },
    {
      code: 'CF',
      code3: 'CAF',
      label: 'Central African Republic',
      number: '140',
    },
    { code: 'TD', code3: 'TCD', label: 'Chad', number: '148' },
    { code: 'CL', code3: 'CHL', label: 'Chile', number: '152' },
    { code: 'CN', code3: 'CHN', label: 'China', number: '156' },
    { code: 'CX', code3: 'CXR', label: 'Christmas Island', number: '162' },
    {
      code: 'CC',
      code3: 'CCK',
      label: 'Cocos (Keeling) Islands',
      number: '166',
    },
    { code: 'CO', code3: 'COL', label: 'Colombia', number: '170' },
    { code: 'KM', code3: 'COM', label: 'Comoros', number: '174' },
    {
      code: 'CD',
      code3: 'COD',
      label: 'Congo (the Democratic Republic of the)',
      number: '180',
    },
    { code: 'CG', code3: 'COG', label: 'Congo', number: '178' },
    { code: 'CK', code3: 'COK', label: 'Cook Islands', number: '184' },
    { code: 'CR', code3: 'CRI', label: 'Costa Rica', number: '188' },
    { code: 'HR', code3: 'HRV', label: 'Croatia', number: '191' },
    { code: 'CU', code3: 'CUB', label: 'Cuba', number: '192' },
    { code: 'CW', code3: 'CUW', label: 'Curaçao', number: '531' },
    { code: 'CY', code3: 'CYP', label: 'Cyprus', number: '196' },
    { code: 'CZ', code3: 'CZE', label: 'Czechia', number: '203' },
    { code: 'CI', code3: 'CIV', label: "Côte d'Ivoire", number: '384' },
    { code: 'DK', code3: 'DNK', label: 'Denmark', number: '208' },
    { code: 'DJ', code3: 'DJI', label: 'Djibouti', number: '262' },
    { code: 'DM', code3: 'DMA', label: 'Dominica', number: '212' },
    {
      code: 'DO',
      code3: 'DOM',
      label: 'Dominican Republic',
      number: '214',
    },
    { code: 'EC', code3: 'ECU', label: 'Ecuador', number: '218' },
    { code: 'EG', code3: 'EGY', label: 'Egypt', number: '818' },
    { code: 'SV', code3: 'SLV', label: 'El Salvador', number: '222' },
    { code: 'GQ', code3: 'GNQ', label: 'Equatorial Guinea', number: '226' },
    { code: 'ER', code3: 'ERI', label: 'Eritrea', number: '232' },
    { code: 'EE', code3: 'EST', label: 'Estonia', number: '233' },
    { code: 'SZ', code3: 'SWZ', label: 'Eswatini', number: '748' },
    { code: 'ET', code3: 'ETH', label: 'Ethiopia', number: '231' },
    {
      code: 'FK',
      code3: 'FLK',
      label: 'Falkland Islands [Malvinas]',
      number: '238',
    },
    { code: 'FO', code3: 'FRO', label: 'Faroe Islands', number: '234' },
    { code: 'FJ', code3: 'FJI', label: 'Fiji', number: '242' },
    { code: 'FI', code3: 'FIN', label: 'Finland', number: '246' },
    { code: 'FR', code3: 'FRA', label: 'France', number: '250' },
    { code: 'GF', code3: 'GUF', label: 'French Guiana', number: '254' },
    { code: 'PF', code3: 'PYF', label: 'French Polynesia', number: '258' },
    {
      code: 'TF',
      code3: 'ATF',
      label: 'French Southern Territories',
      number: '260',
    },
    { code: 'GA', code3: 'GAB', label: 'Gabon', number: '266' },
    { code: 'GM', code3: 'GMB', label: 'Gambia', number: '270' },
    { code: 'GE', code3: 'GEO', label: 'Georgia', number: '268' },
    { code: 'DE', code3: 'DEU', label: 'Germany', number: '276' },
    { code: 'GH', code3: 'GHA', label: 'Ghana', number: '288' },
    { code: 'GI', code3: 'GIB', label: 'Gibraltar', number: '292' },
    { code: 'GR', code3: 'GRC', label: 'Greece', number: '300' },
    { code: 'GL', code3: 'GRL', label: 'Greenland', number: '304' },
    { code: 'GD', code3: 'GRD', label: 'Grenada', number: '308' },
    { code: 'GP', code3: 'GLP', label: 'Guadeloupe', number: '312' },
    { code: 'GU', code3: 'GUM', label: 'Guam', number: '316' },
    { code: 'GT', code3: 'GTM', label: 'Guatemala', number: '320' },
    { code: 'GG', code3: 'GGY', label: 'Guernsey', number: '831' },
    { code: 'GN', code3: 'GIN', label: 'Guinea', number: '324' },
    { code: 'GW', code3: 'GNB', label: 'Guinea-Bissau', number: '624' },
    { code: 'GY', code3: 'GUY', label: 'Guyana', number: '328' },
    { code: 'HT', code3: 'HTI', label: 'Haiti', number: '332' },
    {
      code: 'HM',
      code3: 'HMD',
      label: 'Heard Island and McDonald Islands',
      number: '334',
    },
    { code: 'VA', code3: 'VAT', label: 'Holy See', number: '336' },
    { code: 'HN', code3: 'HND', label: 'Honduras', number: '340' },
    { code: 'HK', code3: 'HKG', label: 'Hong Kong', number: '344' },
    { code: 'HU', code3: 'HUN', label: 'Hungary', number: '348' },
    { code: 'IS', code3: 'ISL', label: 'Iceland', number: '352' },
    { code: 'IN', code3: 'IND', label: 'India', number: '356' },
    { code: 'ID', code3: 'IDN', label: 'Indonesia', number: '360' },
    {
      code: 'IR',
      code3: 'IRN',
      label: 'Iran (Islamic Republic of)',
      number: '364',
    },
    { code: 'IQ', code3: 'IRQ', label: 'Iraq', number: '368' },
    { code: 'IE', code3: 'IRL', label: 'Ireland', number: '372' },
    { code: 'IM', code3: 'IMN', label: 'Isle of Man', number: '833' },
    { code: 'IL', code3: 'ISR', label: 'Israel', number: '376' },
    { code: 'IT', code3: 'ITA', label: 'Italy', number: '380' },
    { code: 'JM', code3: 'JAM', label: 'Jamaica', number: '388' },
    { code: 'JP', code3: 'JPN', label: 'Japan', number: '392' },
    { code: 'JE', code3: 'JEY', label: 'Jersey', number: '832' },
    { code: 'JO', code3: 'JOR', label: 'Jordan', number: '400' },
    { code: 'KZ', code3: 'KAZ', label: 'Kazakhstan', number: '398' },
    { code: 'KE', code3: 'KEN', label: 'Kenya', number: '404' },
    { code: 'KI', code3: 'KIR', label: 'Kiribati', number: '296' },
    {
      code: 'KP',
      code3: 'PRK',
      label: "Korea (the Democratic People's Republic of)",
      number: '408',
    },
    {
      code: 'KR',
      code3: 'KOR',
      label: 'Korea (the Republic of)',
      number: '410',
    },
    { code: 'KW', code3: 'KWT', label: 'Kuwait', number: '414' },
    { code: 'KG', code3: 'KGZ', label: 'Kyrgyzstan', number: '417' },
    {
      code: 'LA',
      code3: 'LAO',
      label: "Lao People's Democratic Republic",
      number: '418',
    },
    { code: 'LV', code3: 'LVA', label: 'Latvia', number: '428' },
    { code: 'LB', code3: 'LBN', label: 'Lebanon', number: '422' },
    { code: 'LS', code3: 'LSO', label: 'Lesotho', number: '426' },
    { code: 'LR', code3: 'LBR', label: 'Liberia', number: '430' },
    { code: 'LY', code3: 'LBY', label: 'Libya', number: '434' },
    { code: 'LI', code3: 'LIE', label: 'Liechtenstein', number: '438' },
    { code: 'LT', code3: 'LTU', label: 'Lithuania', number: '440' },
    { code: 'LU', code3: 'LUX', label: 'Luxembourg', number: '442' },
    { code: 'MO', code3: 'MAC', label: 'Macao', number: '446' },
    { code: 'MG', code3: 'MDG', label: 'Madagascar', number: '450' },
    { code: 'MW', code3: 'MWI', label: 'Malawi', number: '454' },
    { code: 'MY', code3: 'MYS', label: 'Malaysia', number: '458' },
    { code: 'MV', code3: 'MDV', label: 'Maldives', number: '462' },
    { code: 'ML', code3: 'MLI', label: 'Mali', number: '466' },
    { code: 'MT', code3: 'MLT', label: 'Malta', number: '470' },
    {
      code: 'MH',
      code3: 'MHL',
      label: 'Marshall Islands',
      number: '584',
    },
    { code: 'MQ', code3: 'MTQ', label: 'Martinique', number: '474' },
    { code: 'MR', code3: 'MRT', label: 'Mauritania', number: '478' },
    { code: 'MU', code3: 'MUS', label: 'Mauritius', number: '480' },
    { code: 'YT', code3: 'MYT', label: 'Mayotte', number: '175' },
    { code: 'MX', code3: 'MEX', label: 'Mexico', number: '484' },
    {
      code: 'FM',
      code3: 'FSM',
      label: 'Micronesia (Federated States of)',
      number: '583',
    },
    {
      code: 'MD',
      code3: 'MDA',
      label: 'Moldova (the Republic of)',
      number: '498',
    },
    { code: 'MC', code3: 'MCO', label: 'Monaco', number: '492' },
    { code: 'MN', code3: 'MNG', label: 'Mongolia', number: '496' },
    { code: 'ME', code3: 'MNE', label: 'Montenegro', number: '499' },
    { code: 'MS', code3: 'MSR', label: 'Montserrat', number: '500' },
    { code: 'MA', code3: 'MAR', label: 'Morocco', number: '504' },
    { code: 'MZ', code3: 'MOZ', label: 'Mozambique', number: '508' },
    { code: 'MM', code3: 'MMR', label: 'Myanmar', number: '104' },
    { code: 'NA', code3: 'NAM', label: 'Namibia', number: '516' },
    { code: 'NR', code3: 'NRU', label: 'Nauru', number: '520' },
    { code: 'NP', code3: 'NPL', label: 'Nepal', number: '524' },
    { code: 'NL', code3: 'NLD', label: 'Netherlands', number: '528' },
    { code: 'NC', code3: 'NCL', label: 'New Caledonia', number: '540' },
    { code: 'NZ', code3: 'NZL', label: 'New Zealand', number: '554' },
    { code: 'NI', code3: 'NIC', label: 'Nicaragua', number: '558' },
    { code: 'NE', code3: 'NER', label: 'Niger', number: '562' },
    { code: 'NG', code3: 'NGA', label: 'Nigeria', number: '566' },
    { code: 'NU', code3: 'NIU', label: 'Niue', number: '570' },
    { code: 'NF', code3: 'NFK', label: 'Norfolk Island', number: '574' },
    {
      code: 'MP',
      code3: 'MNP',
      label: 'Northern Mariana Islands',
      number: '580',
    },
    { code: 'NO', code3: 'NOR', label: 'Norway', number: '578' },
    { code: 'OM', code3: 'OMN', label: 'Oman', number: '512' },
    { code: 'PK', code3: 'PAK', label: 'Pakistan', number: '586' },
    { code: 'PW', code3: 'PLW', label: 'Palau', number: '585' },
    { code: 'PS', code3: 'PSE', label: 'Palestine, State of', number: '275' },
    { code: 'PA', code3: 'PAN', label: 'Panama', number: '591' },
    { code: 'PG', code3: 'PNG', label: 'Papua New Guinea', number: '598' },
    { code: 'PY', code3: 'PRY', label: 'Paraguay', number: '600' },
    { code: 'PE', code3: 'PER', label: 'Peru', number: '604' },
    { code: 'PH', code3: 'PHL', label: 'Philippines', number: '608' },
    { code: 'PN', code3: 'PCN', label: 'Pitcairn', number: '612' },
    { code: 'PL', code3: 'POL', label: 'Poland', number: '616' },
    { code: 'PT', code3: 'PRT', label: 'Portugal', number: '620' },
    { code: 'PR', code3: 'PRI', label: 'Puerto Rico', number: '630' },
    { code: 'QA', code3: 'QAT', label: 'Qatar', number: '634' },
    {
      code: 'MK',
      code3: 'MKD',
      label: 'Republic of North Macedonia',
      number: '807',
    },
    { code: 'RO', code3: 'ROU', label: 'Romania', number: '642' },
    {
      code: 'RU',
      code3: 'RUS',
      label: 'Russian Federation',
      number: '643',
    },
    { code: 'RW', code3: 'RWA', label: 'Rwanda', number: '646' },
    { code: 'RE', code3: 'REU', label: 'Réunion', number: '638' },
    { code: 'BL', code3: 'BLM', label: 'Saint Barthélemy', number: '652' },
    {
      code: 'SH',
      code3: 'SHN',
      label: 'Saint Helena, Ascension and Tristan da Cunha',
      number: '654',
    },
    { code: 'KN', code3: 'KNA', label: 'Saint Kitts and Nevis', number: '659' },
    { code: 'LC', code3: 'LCA', label: 'Saint Lucia', number: '662' },
    {
      code: 'MF',
      code3: 'MAF',
      label: 'Saint Martin (French part)',
      number: '663',
    },
    {
      code: 'PM',
      code3: 'SPM',
      label: 'Saint Pierre and Miquelon',
      number: '666',
    },
    {
      code: 'VC',
      code3: 'VCT',
      label: 'Saint Vincent and the Grenadines',
      number: '670',
    },
    { code: 'WS', code3: 'WSM', label: 'Samoa', number: '882' },
    { code: 'SM', code3: 'SMR', label: 'San Marino', number: '674' },
    { code: 'ST', code3: 'STP', label: 'Sao Tome and Principe', number: '678' },
    { code: 'SA', code3: 'SAU', label: 'Saudi Arabia', number: '682' },
    { code: 'SN', code3: 'SEN', label: 'Senegal', number: '686' },
    { code: 'RS', code3: 'SRB', label: 'Serbia', number: '688' },
    { code: 'SC', code3: 'SYC', label: 'Seychelles', number: '690' },
    { code: 'SL', code3: 'SLE', label: 'Sierra Leone', number: '694' },
    { code: 'SG', code3: 'SGP', label: 'Singapore', number: '702' },
    {
      code: 'SX',
      code3: 'SXM',
      label: 'Sint Maarten (Dutch part)',
      number: '534',
    },
    { code: 'SK', code3: 'SVK', label: 'Slovakia', number: '703' },
    { code: 'SI', code3: 'SVN', label: 'Slovenia', number: '705' },
    { code: 'SB', code3: 'SLB', label: 'Solomon Islands', number: '090' },
    { code: 'SO', code3: 'SOM', label: 'Somalia', number: '706' },
    { code: 'ZA', code3: 'ZAF', label: 'South Africa', number: '710' },
    {
      code: 'GS',
      code3: 'SGS',
      label: 'South Georgia and the South Sandwich Islands',
      number: '239',
    },
    { code: 'SS', code3: 'SSD', label: 'South Sudan', number: '728' },
    { code: 'ES', code3: 'ESP', label: 'Spain', number: '724' },
    { code: 'LK', code3: 'LKA', label: 'Sri Lanka', number: '144' },
    { code: 'SD', code3: 'SDN', label: 'Sudan', number: '729' },
    { code: 'SR', code3: 'SUR', label: 'Surilabel', number: '740' },
    {
      code: 'SJ',
      code3: 'SJM',
      label: 'Svalbard and Jan Mayen',
      number: '744',
    },
    { code: 'SE', code3: 'SWE', label: 'Sweden', number: '752' },
    { code: 'CH', code3: 'CHE', label: 'Switzerland', number: '756' },
    { code: 'SY', code3: 'SYR', label: 'Syrian Arab Republic', number: '760' },
    { code: 'TW', code3: 'TWN', label: 'Taiwan', number: '158' },
    { code: 'TJ', code3: 'TJK', label: 'Tajikistan', number: '762' },
    {
      code: 'TZ',
      code3: 'TZA',
      label: 'Tanzania, United Republic of',
      number: '834',
    },
    { code: 'TH', code3: 'THA', label: 'Thailand', number: '764' },
    { code: 'TL', code3: 'TLS', label: 'Timor-Leste', number: '626' },
    { code: 'TG', code3: 'TGO', label: 'Togo', number: '768' },
    { code: 'TK', code3: 'TKL', label: 'Tokelau', number: '772' },
    { code: 'TO', code3: 'TON', label: 'Tonga', number: '776' },
    { code: 'TT', code3: 'TTO', label: 'Trinidad and Tobago', number: '780' },
    { code: 'TN', code3: 'TUN', label: 'Tunisia', number: '788' },
    { code: 'TR', code3: 'TUR', label: 'Turkey', number: '792' },
    { code: 'TM', code3: 'TKM', label: 'Turkmenistan', number: '795' },
    {
      code: 'TC',
      code3: 'TCA',
      label: 'Turks and Caicos Islands',
      number: '796',
    },
    { code: 'TV', code3: 'TUV', label: 'Tuvalu', number: '798' },
    { code: 'UG', code3: 'UGA', label: 'Uganda', number: '800' },
    { code: 'UA', code3: 'UKR', label: 'Ukraine', number: '804' },
    {
      code: 'AE',
      code3: 'ARE',
      label: 'United Arab Emirates',
      number: '784',
    },
    {
      code: 'GB',
      code3: 'GBR',
      label: 'United Kingdom',
      number: '826',
    },
    {
      code: 'UM',
      code3: 'UMI',
      label: 'United States Minor Outlying Islands',
      number: '581',
    },
    {
      code: 'US',
      code3: 'USA',
      label: 'United States of America',
      number: '840',
    },
    { code: 'UY', code3: 'URY', label: 'Uruguay', number: '858' },
    { code: 'UZ', code3: 'UZB', label: 'Uzbekistan', number: '860' },
    { code: 'VU', code3: 'VUT', label: 'Vanuatu', number: '548' },
    {
      code: 'VE',
      code3: 'VEN',
      label: 'Venezuela (Bolivarian Republic of)',
      number: '862',
    },
    { code: 'VN', code3: 'VNM', label: 'Viet Nam', number: '704' },
    {
      code: 'VG',
      code3: 'VGB',
      label: 'Virgin Islands (British)',
      number: '092',
    },
    { code: 'VI', code3: 'VIR', label: 'Virgin Islands (U.S.)', number: '850' },
    { code: 'WF', code3: 'WLF', label: 'Wallis and Futuna', number: '876' },
    { code: 'EH', code3: 'ESH', label: 'Western Sahara', number: '732' },
    { code: 'YE', code3: 'YEM', label: 'Yemen', number: '887' },
    { code: 'ZM', code3: 'ZMB', label: 'Zambia', number: '894' },
    { code: 'ZW', code3: 'ZWE', label: 'Zimbabwe', number: '716' },
    { code: 'AX', code3: 'ALA', label: 'Åland Islands', number: '248' },
  ];

  static DOCUMENT_TYPE = [
    {
      key: 'passport',
      value: 'Passport',
    },
    {
      key: 'driving-licence',
      value: 'Driving licence',
    },
    {
      key: 'residency-permit',
      value: 'Residency permit',
    },
    {
      key: 'identity-card',
      value: 'Identity card',
    },
  ];

  static ALL_CURRENCIES = getAllAvailableCurrencies();

  static COMPANY_TYPER = [
    {
      key: 'LIMITED_LIABILITY',
      value: 'Limited liability',
    },
    { key: 'SOLE_TRADER', value: 'Sole trader' },
    { key: 'PARTNERSHIP', value: 'Partnership' },
    {
      key: 'PUBLIC_LIMITED_COMPANY',
      value: 'Public limited company',
    },
    {
      key: 'JOINT_STOCK_COMPANY',
      value: 'Joint stock company',
    },
    { key: 'CHARITY', value: 'Charity' },
  ];

  static SUB_TYPE = [
    { key: 'ORGANIZATION', value: 'Company' },
    { key: 'INDIVIDUAL', value: 'Individual' },
  ];

  static BENEFICIARY_TYPE = [
    { key: 'COMPANY', value: 'Company' },
    { key: 'INDIVIDUAL', value: 'Individual' },
  ];

  static IDENTIFICATION_DOC_TYPE = [
    { key: '', value: '-' },
    { key: 'PASSPORT', value: 'Passport' },
    { key: 'DRIVERS_LICENSE', value: 'Drivers license' },
    { key: 'NATIONAL_ID', value: 'National ID' },
    { key: 'OTHER', value: 'Other' },
  ];

  static INDUSTRY_SECTOR = [
    { key: 'RETAIL_LUXURY_GOODS', value: 'Retail luxury goods' },
    { key: 'HOLDING_COMPANY', value: 'Holding company' },
    { key: 'RETAIL', value: 'Retail' },
    { key: 'LEGAL_SERVICES', value: 'Legal services' },
    { key: 'BAIL_BONDSMAN', value: 'Bail bondsman' },
    { key: 'DRUG_PARAPHERNALIA', value: 'Drug paraphernalia' },
    { key: 'COUNSELLING_CENTRE', value: 'Counselling centre' },
    { key: 'TIMESHARE', value: 'Timeshare' },
    { key: 'FORTUNE_TELLING', value: 'Fortune telling' },
    { key: 'HOSPITALITY', value: 'Hospitality' },
    { key: 'ENTERTAINMENT_SERVICES', value: 'Entertainment services' },
    { key: 'RESTAURANTS_FOOD_INDUSTRY', value: 'Restaurants food industry' },
    { key: 'CBD_MARIJUANA_DISPENSARY', value: 'CBD marijuana dispensary' },
    {
      key: 'PYROTECHNIC_HAZARDOUS_MATERIAL',
      value: 'Pyrotechnic hazardous material',
    },
    { key: 'MANUFACTURING_SERVICES', value: 'Manufacturing services' },
    { key: 'IT_PROFESSIONAL_SERVICES', value: 'IT professional services' },
    { key: 'TRAVEL_SERVICES', value: 'Travel services' },
    { key: 'MLM_PYRAMID_SCHEME', value: 'MLM pyramid scheme' },
    { key: 'MARKETPLACE', value: 'Marketplace' },
    { key: 'CONSULTANCY_SERVICES', value: 'Consultancy services' },
    { key: 'ADULT_DATING', value: 'Adult dating' },
    { key: 'TELECOMMUNICATION_SERVICES', value: 'Telecommunication services' },
    { key: 'INTRODUCER', value: 'Introducer' },
    { key: 'FINANCIAL_SERVICES', value: 'Financial services' },
    { key: 'TOBACCO', value: 'Tobacco' },
    { key: 'PROFESSIONAL_SERVICES', value: 'Professional services' },
    { key: 'WEAPONS', value: 'Weapons' },
    { key: 'CHARITY', value: 'Charity' },
    { key: 'LOGISTICS_TRANSPORT', value: 'Logistics transport' },
    { key: 'REAL_ESTATE', value: 'Real estate' },
    { key: 'CRYPTOCURRENCY', value: 'Cryptocurrency' },
    { key: 'GAMBLING', value: 'Gambling' },
    { key: 'PHARMACEUTICALS', value: 'Pharmaceuticals' },
    { key: 'GIFT_CARDS', value: 'Gift cards' },
    { key: 'MARKETING_SERVICES', value: 'Marketing services' },
    { key: 'SKILL_GAMING', value: 'Skill gaming' },
    { key: 'OTHER', value: 'Other' },
    { key: 'ICO', value: 'ICO' },
    { key: 'NUTRACEUTICALS', value: 'Nutraceuticals' },
    { key: 'NON_REGISTERED_CHARITY', value: 'Non registered charity' },
  ];

  static ACCOUNT_LABELS: AccountLabelsType = {
    'account.paymentType': 'Payment type',
    'account.beneficiaryEntityType': 'Beneficiary type',
    'account.beneficiaryCountry': 'Beneficiary country',
    'account.country': 'Bank country',
    'account.currency': 'Currency',

    'account.beneficiaryCompanyName': 'Company name',
    'account.beneficiaryFirstName': 'First name',
    'account.beneficiaryLastName': 'Last name',
    'account.beneficiaryAddress': 'Address',
    'account.beneficiaryCity': 'City',
    'account.beneficiaryPostcode': 'Post code',
    'account.beneficiaryStateOrProvince': 'State or province',
    'account.beneficiaryDateOfBirth': 'Date of birth',

    'account.bankAccountHolderName': 'Account name',
    'account.bicSwift': 'BIC/SWIFT',
    'account.iban': 'IBAN',
    'account.accountNumber': 'Account number',
    'account.beneficiaryIdentificationType': 'Beneficiary identification type',
    'account.beneficiaryIdentificationValue': 'Identification value',

    'account.aba': 'ABA',
    'account.bankCode': 'Bank code',
    'account.branchCode': 'Branch code',
    'account.bsbCode': 'BSB code',
    'account.blzCode': 'BLZ code',
    'account.clabe': 'CLABE',
    'account.clabeCode': 'CLABE code',
    'account.cnaps': 'CNAPS',
    'account.institutionNo': 'Institution number',
    'account.ifsCode': 'IFS code',
    'account.ctn': 'CTN',
    'account.sortCode': 'Sort code',
    'account.routingCode': 'Routing Code',
  };
}

//Returns true if a currency is whithing the list of CC's available currencies
export function isCcCurrency(currency?: string) {
  const ccCurrencies = [
    'AED',
    'AUD',
    'BGN',
    'BHD',
    'CAD',
    'CHF',
    'CNY',
    'CZK',
    'DKK',
    'EUR',
    'GBP',
    'HKD',
    'HRK',
    'HUF',
    'ILS',
    'JPY',
    'KES',
    'KWD',
    'MXN',
    'NOK',
    'NZD',
    'OMR',
    'PLN',
    'QAR',
    'RON',
    'SAR',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'UGX',
    'USD',
    'ZAR',
  ];

  if (currency === undefined) return false;

  return ccCurrencies.includes(currency);
}

export function getCurrencyCloudOnlineCurrencies() {
  return [
    { key: 'GBP', value: 'British pound (GBP)' },
    { key: 'EUR', value: 'Euro (EUR)' },
    { key: 'USD', value: 'United States dollar (USD)' },
    { key: 'AED', value: 'United Arab Emirates dirham (AED)' },
    { key: 'AUD', value: 'Australian dollar (AUD)' },
    { key: 'BGN', value: 'Bulgarian lev (BGN)' },
    { key: 'BHD', value: 'Bahraini dinar (BHD)' },
    { key: 'CAD', value: 'Canadian dollar (CAD)' },
    { key: 'CHF', value: 'Swiss franc (CHF)' },
    { key: 'CNY', value: 'Chinese yuan (CNY)' },
    { key: 'CZK', value: 'Czech koruna (CZK)' },
    { key: 'DKK', value: 'Danish krone (DKK)' },
    { key: 'HKD', value: 'Hong Kong dollar (HKD)' },
    { key: 'HRK', value: 'Croatian kuna (HRK)' },
    { key: 'HUF', value: 'Hungarian forint (HUF)' },
    { key: 'ILS', value: 'Israeli new shekel (ILS)' },
    { key: 'JPY', value: 'Japanese yen (JPY)' },
    { key: 'KES', value: 'Kenyan shilling (KES)' },
    { key: 'KWD', value: 'Kuwaiti dinar (KWD)' },
    { key: 'MXN', value: 'Mexican peso (MXN)' },
    { key: 'NOK', value: 'Norwegian krone (NOK)' },
    { key: 'NZD', value: 'New Zealand dollar (NZD)' },
    { key: 'OMR', value: 'Omani rial (OMR)' },
    { key: 'PLN', value: 'Polish złoty (PLN)' },
    { key: 'QAR', value: 'Qatari riyal (QAR)' },
    { key: 'RON', value: 'Romanian leu (RON)' },
    { key: 'SAR', value: 'Saudi riyal (SAR)' },
    { key: 'SEK', value: 'Swedish krona (SEK)' },
    { key: 'SGD', value: 'Singapore dollar (SGD)' },
    { key: 'THB', value: 'Thai baht (THB)' },
    { key: 'TRY', value: 'Turkish lira (TRY)' },
    { key: 'UGX', value: 'Ugandan shilling (UGX)' },
    { key: 'ZAR', value: 'South African rand (ZAR)' },
  ];
}

export function getRailsbankOnlineCurrencies(servicingLocation: string) {
  const currencies = [{ key: 'EUR', value: 'Euro (EUR)' }];
  if (servicingLocation == 'UK') {
    currencies.unshift({ key: 'GBP', value: 'British pound (GBP)' });
  }
  return currencies;
}

export function getPrimeTrustOnlineCurrencies() {
  return [
    { key: 'USD', value: 'United States dollar (USD)' },
    { key: 'EUR', value: 'Euro (EUR)' },
    { key: 'GBP', value: 'British pound (GBP)' },
    { key: 'AUD', value: 'Australian dollar (AUD)' },
    { key: 'CAD', value: 'Canadian dollar (CAD)' },
    { key: 'JPY', value: 'Japanese yen (JPY)' },
  ];
}

export function getOpenPaydOnlineCurrencies() {
  return [
    { key: 'AED', value: 'United Arab Emirates Dirham (AED)' },
    { key: 'AUD', value: 'Australian Dollar (AUD)' },
    { key: 'BGN', value: 'Bulgarian Lev (BGN)' },
    { key: 'BHD', value: 'Bahraini Dinar (BHD)' },
    { key: 'BWP', value: 'Botswana Pula (BWP)' },
    { key: 'CLP', value: 'Chilean Peso (CLP)' },
    { key: 'CNH', value: 'Renminbi (CNH)' },
    { key: 'EGP', value: 'Egyptian Pound (EGP)' },
    { key: 'ETB', value: 'Ethiopia Birr (ETB)' },
    { key: 'FJD', value: 'Fiji Dollar (FJD)' },
    { key: 'GHS', value: 'Ghanian Cedi (GHS)' },
    { key: 'NGN', value: 'Nigerian naira (NGN)' },
    { key: 'HKD', value: 'Hong Kong Dollar (HKD)' },
    { key: 'ILS', value: 'Israeli Shekel (ILS)' },
    { key: 'INR', value: 'Indian Rupee (INR)' },
    { key: 'ISK', value: 'Iceland Krona (ISK)' },
    { key: 'JPY', value: 'Japanese Yen (JPY)' },
    { key: 'KES', value: 'Kenyan Shilling (KES)' },
    { key: 'KWD', value: 'Kuwaiti Dinar (KWD)' },
    { key: 'LSL', value: 'Lesotho Malati (LSL)' },
    { key: 'MAD', value: 'Moroccan Dirham (MAD)' },
    { key: 'MGA', value: 'Madagascar Ariary (MGA)' },
    { key: 'MUR', value: 'Mauritius Rupee (MUR)' },
    { key: 'MWK', value: 'Malawi Kwacha (MWK)' },
    { key: 'MXN', value: 'Mexican Peso (MXN)' },
    { key: 'MZN', value: 'Mozambique New Metical (MZN)' },
    { key: 'NAD', value: 'Namibia Dollar (NAD)' },
    { key: 'NZD', value: 'New Zealand Dollar (NZD)' },
    { key: 'OMR', value: 'Omani Rial (OMR)' },
    { key: 'PGK', value: 'Papua New Guinea Kina (PGK)' },
    { key: 'QAR', value: 'Qatari Riyal (QAR)' },
    { key: 'RUB', value: 'Russian ruble (RUB)' },
    { key: 'RWF', value: 'Rwandan Franc (RWF)' },
    { key: 'SAR', value: 'Saudi Riyal (SAR)' },
    { key: 'SBD', value: 'Solomon Islands Dollar (SBD)' },
    { key: 'SGD', value: 'Singapore Dollar (SGD)' },
    { key: 'SZL', value: 'Swaziland Lilangeni (SZL)' },
    { key: 'THB', value: 'Thai Baht (THB)' },
    { key: 'TRY', value: 'Turkish Lira (TRY)' },
    { key: 'TOP', value: "Tongan Pa'anga (TOP)" },
    { key: 'TZS', value: 'Tanzanian Shilling (TZS)' },
    { key: 'UGX', value: 'Ugandan Shilling (UGX)' },
    { key: 'VUV', value: 'Vanuatu Vatu (VUV)' },
    { key: 'WST', value: 'Samoan Tala (WST)' },
    { key: 'XAF', value: 'CFA Franc (XAF)' },
    { key: 'XOF', value: 'CFA Franc BCEAO (XOF)' },
    { key: 'XPF', value: 'Central Polynesian Franc (XPF)' },
    { key: 'ZAR', value: 'South African Rand (ZAR)' },
    { key: 'ZMW', value: 'Zambia Kwacha (ZMW)' },
    { key: 'GBP', value: 'British pound (GBP)' },
    { key: 'EUR', value: 'Euro (EUR)' },
  ];
}

export function getOnlineCurrencies(provider?: string, servicingLocation?: string | null) {
  switch (provider) {
    case 'CURRENCY_CLOUD':
      return getCurrencyCloudOnlineCurrencies();
    case 'RAILSBANK':
      return getRailsbankOnlineCurrencies(servicingLocation ?? 'UK');
    case 'PRIMETRUST':
      return getPrimeTrustOnlineCurrencies();
    case 'OPENPAYD':
      return getOpenPaydOnlineCurrencies();
    default:
      return getCurrencyCloudOnlineCurrencies(); //We will return CC as default, just in case
  }
}

export function getAllAvailableCurrencies() {
  const currencies = getRailsbankOnlineCurrencies('UK')
    .concat(getPrimeTrustOnlineCurrencies())
    .concat(getOpenPaydOnlineCurrencies());

  const uniqueCurrencies = new Map(currencies.map((item) => [item['key'], item]));
  return Array.from(uniqueCurrencies.values());
}

export default StaticData;
