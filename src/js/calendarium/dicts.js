const supported_countries = {
  'at': {'country_name': 'Austria', 'data_years_from': '1947', 'data_years_to': '2019', 'who_country_code': 'AUT'},
  'au': {'country_name': 'Australia', 'data_years_from': '1921', 'data_years_to': '2020', 'who_country_code': 'AUS'},
  'by': {'country_name': 'Belarus', 'data_years_from': '1959', 'data_years_to': '2018', 'who_country_code': 'BLR'},
  'be': {'country_name': 'Belgium', 'data_years_from': '1841', 'data_years_to': '2022', 'who_country_code': 'BEL'},
  'bg': {'country_name': 'Bulgaria', 'data_years_from': '1947', 'data_years_to': '2021', 'who_country_code': 'BGR'},
  'ca': {'country_name': 'Canada', 'data_years_from': '1921', 'data_years_to': '2021', 'who_country_code': 'CAN'},
  'cl': {'country_name': 'Chile', 'data_years_from': '1992', 'data_years_to': '2020', 'who_country_code': 'CHL'},
  'hr': {'country_name': 'Croatia', 'data_years_from': '2001', 'data_years_to': '2020', 'who_country_code': 'HRV'},
  'cz': {'country_name': 'Czechia', 'data_years_from': '1950', 'data_years_to': '2021', 'who_country_code': 'CZE'},
  'fi': {'country_name': 'Finland', 'data_years_from': '1878', 'data_years_to': '2022', 'who_country_code': 'FIN'},
  'fr': {'country_name': 'France', 'data_years_from': '1816', 'data_years_to': '2021', 'who_country_code': 'FRA'},
  'de': {'country_name': 'Germany', 'data_years_from': '1990', 'data_years_to': '2020', 'who_country_code': 'DEU'},
  'gr': {'country_name': 'Greece', 'data_years_from': '1981', 'data_years_to': '2019', 'who_country_code': 'GRC'},
  'hk': {'country_name': 'Hong Kong', 'data_years_from': '1986', 'data_years_to': '2020', 'who_country_code': 'CHN'}, // no WHO code for HK, using China
  'hu': {'country_name': 'Hungary', 'data_years_from': '1950', 'data_years_to': '2020', 'who_country_code': 'HUN'},
  'is': {'country_name': 'Iceland', 'data_years_from': '1838', 'data_years_to': '2021', 'who_country_code': 'ISL'},
  'ie': {'country_name': 'Ireland', 'data_years_from': '1950', 'data_years_to': '2020', 'who_country_code': 'IRL'},
  'il': {'country_name': 'Israel', 'data_years_from': '1983', 'data_years_to': '2016', 'who_country_code': 'ISR'},
  'it': {'country_name': 'Italy', 'data_years_from': '1872', 'data_years_to': '2020', 'who_country_code': 'ITA'},
  'jp': {'country_name': 'Japan', 'data_years_from': '1947', 'data_years_to': '2021', 'who_country_code': 'JPN'},
  'lv': {'country_name': 'Latvia', 'data_years_from': '1959', 'data_years_to': '2019', 'who_country_code': 'LVA'},
  'lt': {'country_name': 'Lithuania', 'data_years_from': '1959', 'data_years_to': '2020', 'who_country_code': 'LTU'},
  'lu': {'country_name': 'Luxembourg', 'data_years_from': '1960', 'data_years_to': '2022', 'who_country_code': 'LUX'},
  'nl': {'country_name': 'Netherlands', 'data_years_from': '1850', 'data_years_to': '2021', 'who_country_code': 'NLD'},
  'nz': {'country_name': 'New Zealand', 'data_years_from': '1948', 'data_years_to': '2021', 'who_country_code': 'NZL'},
  'no': {'country_name': 'Norway', 'data_years_from': '1846', 'data_years_to': '2022', 'who_country_code': 'NOR'},
  'pl': {'country_name': 'Poland', 'data_years_from': '1958', 'data_years_to': '2019', 'who_country_code': 'POL'},
  'pt': {'country_name': 'Portugal', 'data_years_from': '1940', 'data_years_to': '2022', 'who_country_code': 'PRT'},
  'kr': {'country_name': 'Republic of Korea', 'data_years_from': '2003', 'data_years_to': '2020', 'who_country_code': 'KOR'},
  'ru': {'country_name': 'Russia', 'data_years_from': '1959', 'data_years_to': '2014', 'who_country_code': 'RUS'},
  'sk': {'country_name': 'Slovakia', 'data_years_from': '1950', 'data_years_to': '2019', 'who_country_code': 'SVK'},
  'si': {'country_name': 'Slovenia', 'data_years_from': '1983', 'data_years_to': '2019', 'who_country_code': 'SVN'},
  'es': {'country_name': 'Spain', 'data_years_from': '1908', 'data_years_to': '2021', 'who_country_code': 'ESP'},
  'se': {'country_name': 'Sweden', 'data_years_from': '1751', 'data_years_to': '2022', 'who_country_code': 'SWE'},
  'ch': {'country_name': 'Switzerland', 'data_years_from': '1876', 'data_years_to': '2022', 'who_country_code': 'CHE'},
  'tw': {'country_name': 'Taiwan', 'data_years_from': '1970', 'data_years_to': '2021', 'who_country_code': 'CHN'}, // no WHO code for TW, using China
  'ua': {'country_name': 'Ukraine', 'data_years_from': '1959', 'data_years_to': '2013', 'who_country_code': 'UKR'},
  'uk': {'country_name': 'United Kingdom', 'data_years_from': '1922', 'data_years_to': '2021', 'who_country_code': 'GBR'},
  'us': {'country_name': 'United States ', 'data_years_from': '1933', 'data_years_to': '2021', 'who_country_code': 'USA'},
};

const who_map_age_to_groups = {
  0: '0-1', 
  1: '1-4', 2: '1-4', 3: '1-4', 4: '1-4', 
  5: '5-9', 6: '5-9', 7: '5-9', 8: '5-9', 9: '5-9', 
  10: '10-14', 11: '10-14', 12: '10-14', 13: '10-14', 14: '10-14', 
  15: '15-19', 16: '15-19', 17: '15-19', 18: '15-19', 19: '15-19', 
  20: '20-24', 21: '20-24', 22: '20-24', 23: '20-24', 24: '20-24', 
  25: '25-29', 26: '25-29', 27: '25-29', 28: '25-29', 29: '25-29', 
  30: '30-34', 31: '30-34', 32: '30-34', 33: '30-34', 34: '30-34', 
  35: '35-39', 36: '35-39', 37: '35-39', 38: '35-39', 39: '35-39', 
  40: '40-44', 41: '40-44', 42: '40-44', 43: '40-44', 44: '40-44', 
  45: '45-49', 46: '45-49', 47: '45-49', 48: '45-49', 49: '45-49', 
  50: '50-54', 51: '50-54', 52: '50-54', 53: '50-54', 54: '50-54', 
  55: '55-59', 56: '55-59', 57: '55-59', 58: '55-59', 59: '55-59', 
  60: '60-64', 61: '60-64', 62: '60-64', 63: '60-64', 64: '60-64', 
  65: '65-69', 66: '65-69', 67: '65-69', 68: '65-69', 69: '65-69', 
  70: '70-74', 71: '70-74', 72: '70-74', 73: '70-74', 74: '70-74', 
  75: '75-79', 76: '75-79', 77: '75-79', 78: '75-79', 79: '75-79', 
  80: '80-84', 81: '80-84', 82: '80-84', 83: '80-84', 84: '80-84', 
  85: '85PLUS', 86: '85PLUS', 87: '85PLUS', 88: '85PLUS', 89: '85PLUS', 
};

const who_sex_groups = ['MLE', 'FMLE'];
const who_causes_groups = ['Injuries',  'Chronic respiratory diseases', 'Cardiovascular diseases',  'Diabetes', 'Cancers', 'Other noncommunicable diseases',  'Maternal causes',  'Communicable diseases',  'Dimentias'];
const who_causes_colors = ['#0193d6',   '#892e2f',                      '#86bee7',                  '#ffe094',  '#023f88', '#f5887d',                         '#fcc513',          '#5e82a0',                'black'];
const who_sexes_map = {'m': 'MLE', 'f': 'FMLE'};

const who_map_causes_to_groups = {
  'Ischaemic heart disease': 'Cardiovascular diseases',
  'Stroke': 'Cardiovascular diseases',
  'Trachea, bronchus, lung cancers': 'Cancers',
  'Chronic obstructive pulmonary disease': 'Chronic respiratory diseases',
  'Colon and rectum cancers': 'Cancers',
  'Prostate cancer': 'Cancers',
  'Stomach cancer': 'Cancers',
  'Pancreas cancer': 'Cancers',
  'Cirrhosis of the liver': 'Other noncommunicable diseases',
  'Lower respiratory infections': 'Communicable diseases',
  'Cardiomyopathy, myocarditis, endocarditis': 'Cardiovascular diseases',
  'Self-harm': 'Injuries',
  'Liver cancer': 'Cancers',
  'Bladder cancer': 'Cancers',
  'Mouth and oropharynx cancers': 'Cancers',
  'Hypertensive heart disease': 'Cardiovascular diseases',
  'Kidney cancer': 'Cancers',
  'Diabetes mellitus': 'Diabetes',
  'Oesophagus cancer': 'Cancers',
  'Alzheimer disease and other dementias': 'Dimentias',
  'Lymphomas, multiple myeloma': 'Other noncommunicable diseases',
  'Leukaemia': 'Cancers',
  'Alcohol use disorders': 'Other noncommunicable diseases',
  'Peptic ulcer disease': 'Other noncommunicable diseases',
  'Parkinson disease': 'Other noncommunicable diseases',
  'Larynx cancer': 'Cancers',
  'Falls': 'Injuries',
  'Kidney diseases': 'Other noncommunicable diseases',
  'Brain and nervous system cancers': 'Cancers',
  'Pancreatitis': 'Other noncommunicable diseases',
  'Melanoma and other skin cancers': 'Cancers',
  'Road injury': 'Injuries',
  'Gallbladder and biliary tract cancer': 'Cancers',
  'Fire, heat and hot substances': 'Injuries',
  'Gallbladder and biliary diseases': 'Other noncommunicable diseases',
  'Tuberculosis': 'Communicable diseases',
  'Poisonings': 'Injuries',
  'Drug use disorders': 'Other noncommunicable diseases',
  'Paralytic ileus and intestinal obstruction': 'Other noncommunicable diseases',
  'Drowning': 'Injuries',
  'Interpersonal violence': 'Injuries',
  'HIV/AIDS': 'Communicable diseases',
  'Asthma': 'Chronic respiratory diseases',
  'Skin diseases': 'Communicable diseases',
  'Rheumatic heart disease': 'Cardiovascular diseases',
  'Urolithiasis': 'Other noncommunicable diseases',
  'Exposure to mechanical forces': 'Injuries',
  'Thyroid cancer': 'Cancers',
  'Inflammatory bowel disease': 'Other noncommunicable diseases',
  'Mesothelioma': 'Cancers',
  'Meningitis': 'Сommunicable diseases',
  'Appendicitis': 'Other noncommunicable diseases',
  'Encephalitis': 'Communicable diseases',
  'Gastritis and duodenitis': 'Other noncommunicable diseases',
  'Epilepsy': 'Other noncommunicable diseases',
  'Rheumatoid arthritis': 'Other noncommunicable diseases',
  'Testicular cancer': 'Cancers',
  'Protein-energy malnutrition': 'Other noncommunicable diseases',
  'Multiple sclerosis': 'Other noncommunicable diseases',
  'Diarrhoeal diseases': 'Communicable diseases',
  'Echinococcosis': 'Communicable diseases',
  'Upper respiratory infections': 'Communicable diseases',
  'Collective violence and legal intervention': 'Injuries',
  'Acute hepatitis B': 'Communicable diseases',
  'Syphilis': 'Communicable diseases',
  'Rabies': 'Communicable diseases',
  'Cysticercosis': 'Communicable diseases',
  'Acute hepatitis E': 'Communicable diseases',
  'Tetanus': 'Communicable diseases',
  'Osteoarthritis': 'Other noncommunicable diseases',
  'Malaria': 'Communicable diseases',
  'Gout': 'Other noncommunicable diseases',
  'Back and neck pain': 'Other noncommunicable diseases',
  'Acute hepatitis A': 'Communicable diseases',
  'Acute hepatitis C': 'Communicable diseases',
  'Measles': 'Communicable diseases',
  'Genital herpes': 'Communicable diseases',
  'Whooping cough': 'Other noncommunicable diseases',
  'Diphtheria': 'Communicable diseases',
  'African trypanosomiasis': 'Communicable diseases',
  'Congenital anomalies': 'Other noncommunicable diseases',
  'Oral conditions': '',
  'Sudden infant death syndrome': 'Other noncommunicable diseases',
  'Benign prostatic hyperplasia': '',
  'Chagas disease': '',
  'Chlamydia': '',
  'Gonorrhoea': '',
  'Trichomoniasis': '',
  'Dengue': '',
  'Trachoma': '',
  'Yellow fever': '',
  'Natural disasters': '',
  'Infertility': 'Other noncommunicable diseases',
  'Gynecological diseases': '',
  'Migraine': 'Other noncommunicable diseases',
  'Non-migraine headache': 'Other noncommunicable diseases',
  'Glaucoma': 'Other noncommunicable diseases',
  'Cataracts': 'Other noncommunicable diseases',
  'Uncorrected refractive errors': 'Other noncommunicable diseases',
  'Macular degeneration': 'Other noncommunicable diseases',
  'Other vision loss': 'Other noncommunicable diseases',
  'Other hearing loss': 'Other noncommunicable diseases',
  'Iodine deficiency': 'Other noncommunicable diseases',
  'Vitamin A deficiency': 'Other noncommunicable diseases',
  'Iron-deficiency anaemia': 'Other noncommunicable diseases',
  'Breast cancer': 'Cancers',
  'Cervix uteri cancer': 'Cancers',
  'Corpus uteri cancer': 'Cancers',
  'Ovary cancer': 'Cancers',
  'Anxiety disorders': 'Other noncommunicable diseases',
  'Eating disorders': 'Other noncommunicable diseases',
  'Autism and Asperger syndrome': 'Other noncommunicable diseases',
  'Childhood behavioural disorders': 'Other noncommunicable diseases',
  'Idiopathic intellectual disability': 'Other noncommunicable diseases',
  'Thalassaemias': 'Other noncommunicable diseases',
  'Sickle cell disorders and trait': 'Other noncommunicable diseases',
  'Depressive disorders': 'Other noncommunicable diseases',
  'Bipolar disorder': 'Other noncommunicable diseases',
  'Schizophrenia': 'Other noncommunicable diseases',
  'Schistosomiasis': '',
  'Leishmaniasis': '',
  'Lymphatic filariasis': '',
  'Onchocerciasis': '',
  'Ascariasis': 'Communicable diseases',
  'Trichuriasis': 'Communicable diseases',
  'Hookworm disease': 'Communicable diseases',
  'Food-bourne trematodes': 'Communicable diseases',
  'Leprosy': 'Communicable diseases',
  'Otitis media': 'Other noncommunicable diseases',
  'Maternal conditions': 'Maternal causes',
  'Neonatal conditions': 'Communicable diseases',
};

const explanation_texts = {
  'cln':  'This is a clean canvas for a 101 years long Life&nbsp;Calendar made for printing and manual filling. It starts from a ring at the bottom left corner, from the first week of your life.',
  'lft':  'This is a 101 years long Life Calendar which is already pre-filled for a specified birthday. It starts from the circle at the bottom left corner, from the first week of life for a specified date of birth.',
  'mby':  'This is a 101 years long Life Calendar with 2 mortality charts built on it for a specified country, sex at birth and year of birth. Data source for these charts is <a href="https://www.mortality.org" target="_blank" title="Human Mortality Database">Human Mortality Database (HMD)</a>.',
  'mbly': 'This is a 101 years long Life Calendar with 4 mortality charts built on it for a specified country, sex at birth, year of birth and latest data-available year for that country. Data source for these charts is <a href="https://www.mortality.org" target="_blank" title="Human Mortality Database">Human Mortality Database (HMD)</a>.',
  'mc':   'This is a 101 years long Life Calendar with 4 mortality charts built on it for a specified country, sex at birth and "compare to" country and sex at birth both for the latest data-available years. Data source for these charts is <a href="https://www.mortality.org" target="_blank" title="Human Mortality Database">Human Mortality Database (HMD)</a>.',
  'all':  'This is a 101 years long Life Calendar which is already pre-filled for a specified birthday. It can have up to 6 mortality charts built on it for a specified country, sex at birth, year of birth, latest data-available year and "compare to" country and sex at birth for the latest data-available year. Data source for these charts is <a href="https://www.mortality.org" target="_blank" title="Human Mortality Database">Human Mortality Database (HMD)</a>.',
  'cau':  'This is a 89 years long "Causes of Deaths at age" stacked and normalized chart built for a specified country, sex at birth and latest data-available year. Data source for this chart is: <a href="https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates/ghe-leading-causes-of-death" target="_blank" title="The Global Health Observatory by World Health Organization">World Health Organization (WHO)</a>.',
  'cam':  'This is a 89 years long "Causes of Deaths at age" stacked and normalized chart shaped by a "Mortality curve" for a specified country, sex at birth and latest data-available year. Data sources for this chart are: <a href="https://www.mortality.org" target="_blank" title="Human Mortality Database">Human Mortality Database (HMD)</a> and <a href="https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates/ghe-leading-causes-of-death" target="_blank" title="The Global Health Observatory by World Health Organization">World Health Organization (WHO)</a>.',
}

const values_texts = {
  'cln':  'Lets you to print empty Life Calendar canvas, fill it manually with your favorite color(s) and then put it on a wall / fridge.',
  'lft':  'Shows you how many weeks have already passed since your birthday and allows you to print already pre-filled calendar instead of clean one.',
  'mby':  'Shows you mortality situation in your motherland for your sex at a year you were born. Explanatory data-skin.',
  'mbly': 'Shows you how mortality situation have changed in your motherland between your year of birth and latest data-available year. Explanatory data-skin.',
  'mc':   'Allows you to compare different countries and sexes &mdash; so you can see the difference in life expectancies in any combination: men with women in one country, women with women or men with men in different countries.',
  'all':  'Shows you how many weeks have already passed since your birthday and allows you to compare different countries and sexes &mdash; so you can see the difference in life expectancies in any combination: men with women in one country, women with women or men with men in different countries.',
  'cau':  'Shows you causes of deaths for the people of different sexes at different ages in different countries.',
  'cam':  'Shows you causes of deaths to understand the actual volumes of causes of deaths for the people of different sexes at different ages in different countries.'
}
