import type { Block } from "./works";

// Generated from Gilgit_Baltistan_Floods_Research_Ali_Shan.docx
export const floodArticle: Block[] = [
  {
    "h": "Abstract",
    "level": 2
  },
  {
    "p": "Gilgit-Baltistan (GB) is exposed to intersecting mountain hazards: short-duration intense rainfall, flash floods, glacial lake outburst floods (GLOFs), slope failure, and river erosion. This desk-based study synthesizes official disaster reporting and scientific assessments to examine human casualties, housing loss, disruption of connectivity, and livelihood vulnerability. For the 2025 monsoon period, Pakistan’s National Disaster Management Authority (NDMA) reported 31 deaths, 52 injuries, 1,260 damaged houses, 290.17 km of damaged roads, and 92 damaged bridges in GB [1, 2]. An earlier NDMA advisory records 1,793 damaged houses, 33 km of affected roads, and 61 affected bridges in 2022 [3]. These numbers represent different reporting periods and definitions and must not be interpreted as a simple annual trend. A cross-check identifies an important discrepancy: NDMA’s published 2025 district house-damage table sums to 1,223, not 1,260. The paper argues for district-level disaster data validation, climate-informed infrastructure, accessible early warnings, and community-centered recovery. It presents a transparent foundation for a subsequent Python and geospatial study, but it does not claim original fieldwork, a causal attribution analysis, or predictive modeling."
  },
  {
    "p": "Keywords: Gilgit-Baltistan; flood risk; glacial lake outburst floods; climate change; disaster losses; data quality; adaptation"
  },
  {
    "h": "1 Introduction",
    "level": 2
  },
  {
    "p": "In mountainous Gilgit-Baltistan, the human consequences of a flood extend beyond the water itself. A damaged bridge may isolate an entire valley; a destroyed irrigation channel may interrupt the next growing season; the loss of a small parcel of cultivated land can undermine a household’s income and food security. The region’s narrow valleys, steep slopes, glacier-fed rivers and dispersed settlements compound such impacts. The scientific question is not simply whether floods occur, but how multiple environmental hazards intersect with housing location, infrastructure design and a community’s capacity to respond [3, 4]."
  },
  {
    "p": "This article asks: (1) What do documented public data establish about recent deaths and damages? (2) Through which pathways do floods disrupt lives? (3) What can climate science reasonably tell us about changing risk? (4) What additional data analysis would support evidence-based local decisions?"
  },
  {
    "h": "2 Sources and method",
    "level": 2
  },
  {
    "p": "This is a structured desk review, not a field survey. The core quantitative sources are NDMA’s 2025 post-monsoon infrastructure assessment and seminar report [1, 2], its 2025 pre-monsoon advisory describing 2022 impacts [3], the 2022 Pakistan Post-Disaster Needs Assessment [5], and the 2023 ICIMOD Hindu Kush Himalaya cryosphere assessment [4]. UNDP’s GLOF-II project record and ICIMOD’s community warning case study inform adaptation analysis [6, 7]. Reported figures are treated as administrative observations, not independently audited estimates. Data from distinct years are shown side by side but not pooled into a time series."
  },
  {
    "p": "Definitions matter. “Deaths” in a seasonal disaster report are not necessarily deaths caused only by floods, and the record does not establish the fraction attributable to human-driven warming. “Damaged houses” include partial and full losses, not necessarily unique displaced households. Counts of damaged bridges and road kilometers reflect infrastructure exposure and administrative assessment practices as well as hazard intensity."
  },
  {
    "h": "3 What the reported losses show",
    "level": 2
  },
  {
    "table": [
      [
        "Measure",
        "2022 GB NDMA advisory",
        "2025 GB NDMA reports"
      ],
      [
        "Deaths",
        "Not stated in this advisory",
        "31"
      ],
      [
        "Injuries",
        "Not stated in this advisory",
        "52"
      ],
      [
        "Damaged houses",
        "1,793",
        "1,260"
      ],
      [
        "Affected road length",
        "33 km",
        "290.17 km"
      ],
      [
        "Affected bridges",
        "61",
        "92"
      ]
    ]
  },
  {
    "p": "Sources: [1–3]. Different reporting windows, categories and assessment procedures prevent interpreting changes between these columns as an increase or decrease in flood frequency, severity or climate-attributable harm."
  },
  {
    "p": "For 2025, the NDMA infrastructure assessment further separates 1,260 damaged houses into 481 partly and 779 fully damaged [1]. This implies 61.8% of houses in the regional damage count were classified as fully damaged. The proportion describes this recorded inventory; it is not a housing-stock damage rate. The national post-disaster assessment for 2022 estimated more than US$30 billion in damages and economic losses across Pakistan, but that national figure must not be relabeled as a GB-only total [5]."
  },
  {
    "h": "4 Where the housing damage was concentrated",
    "level": 2
  },
  {
    "table": [
      [
        "District",
        "Partly damaged",
        "Fully damaged",
        "Reported total"
      ],
      [
        "Astore",
        "19",
        "4",
        "23"
      ],
      [
        "Diamer",
        "81",
        "396",
        "477"
      ],
      [
        "Ghanche",
        "17",
        "37",
        "54"
      ],
      [
        "Ghizer",
        "160",
        "278",
        "438"
      ],
      [
        "Gilgit",
        "42",
        "41",
        "83"
      ],
      [
        "Hunza",
        "1",
        "14",
        "15"
      ],
      [
        "Kharmang",
        "16",
        "15",
        "31"
      ],
      [
        "Nagar",
        "1",
        "3",
        "4"
      ],
      [
        "Shigar",
        "20",
        "22",
        "42"
      ],
      [
        "Skardu",
        "28",
        "28",
        "56"
      ],
      [
        "Sum of published rows",
        "385",
        "838",
        "1223"
      ],
      [
        "NDMA regional total",
        "481",
        "779",
        "1260"
      ]
    ]
  },
  {
    "p": "Source: NDMA post-monsoon 2025 report, Table 13 and national summary [1]. Important data-quality note: summing the individual district values gives 385 partially damaged, 838 fully damaged and 1,223 total. The regional report instead states 481 partial, 779 full and 1,260 total. The mismatch is 37 in overall total and is larger within damage subcategories. No district allocation should be invented to reconcile the values."
  },
  {
    "p": "Using the district-level totals as published, Diamer and Ghizer account for 915 of 1,223 listed houses, or 74.8% of district-tabulated damage. This is concentration of recorded losses, not proof that these districts have the highest per-capita risk. A meaningful comparison requires population, housing-stock and exposure denominators, and consistent reporting coverage."
  },
  {
    "h": "5 How floods alter everyday life",
    "level": 2
  },
  {
    "h": "5.1 Death injury displacement and the right to shelter",
    "level": 3
  },
  {
    "p": "The most visible human losses are deaths and injuries; the less visible consequences include forced relocation, interruption of schooling, family separation, costly reconstruction, and psychological strain. Damage to 1,260 homes does not justify assuming a particular number of displaced persons without occupancy and displacement records. Repeated shocks can reduce savings, leave families in insecure temporary shelter and disproportionately burden older residents, children and people with disabilities [1, 5]."
  },
  {
    "h": "5.2 Agriculture irrigation and household income",
    "level": 3
  },
  {
    "p": "Cultivable land is scarce in steep mountain valleys. Floods can remove topsoil, deposit boulders and sediment, destroy fields and damage the channels carrying glacier-fed irrigation water. This can shift the consequences of a brief event across several growing seasons. The UNDP GLOF-II program has therefore combined flood protection with irrigation-channel rehabilitation and livelihood training, illustrating why disaster management cannot be separated from water and food security [6]."
  },
  {
    "h": "5.3 Roads bridges electricity and access to services",
    "level": 3
  },
  {
    "p": "In 2025, NDMA recorded 290.17 km of damaged roads and 92 bridges in GB [1]. These are not merely physical assets: roads and crossings connect communities with clinics, education, markets, emergency responders and food supplies. NDMA documents a damaged road at Brundubar Nullah in Hunza, riverbank erosion following a Shishper GLOF, and bridge and slope failures around Babusar–Chilas in July 2025. The report identifies both hydrometeorological triggers and weaknesses in design, drainage and slope protection [1]."
  },
  {
    "h": "5.4 Unequal vulnerability",
    "level": 3
  },
  {
    "p": "Risk depends on where people live, the durability of housing, access to warnings and transport, income, caregiving responsibilities, and the availability of alternative water and work. An ICIMOD report summarizing a 2017 survey of 250 GB villages found serious concern about natural hazards and observed particular vulnerability among women; these are survey findings, not a region-wide census or a 2025 casualty estimate [7]. Future work should disaggregate losses by sex, age, disability, settlement and livelihood without guessing these values from aggregate totals."
  },
  {
    "h": "6 Climate change and compound mountain hazards",
    "level": 2
  },
  {
    "p": "Climate warming changes snow, ice and mountain hydrology, but hazard pathways are specific. Higher temperatures can alter glacier melt and snowmelt timing, expand or destabilize some glacial lakes, and affect the amount of water available downstream. Intense rainfall can trigger rapid runoff and slope failure. A GLOF occurs when stored water suddenly escapes from a glacial lake, potentially entraining debris. A flash flood caused by rain is not automatically a GLOF, and not every glacier in the Karakoram responds in the same way [4]."
  },
  {
    "p": "ICIMOD’s 2023 peer-reviewed regional assessment documents substantial cryosphere changes and heightened risks to water security and mountain communities across the Hindu Kush Himalaya [4]. Its regional findings should not be applied mechanically as a measured rate for GB alone. Likewise, one cannot claim that climate change caused each of the 31 recorded 2025 deaths: that would require event attribution, exposure data, and an appropriate counterfactual model. A defensible conclusion is that climate-related changes interact with pre-existing geographic and social vulnerability to increase concern about future extremes."
  },
  {
    "h": "7 Illustrative 2025 events",
    "level": 2
  },
  {
    "p": "NDMA describes the 20 July 2025 Shishper GLOF and associated riverbank erosion near Hunza, a 21 July cloudburst-related bridge failure in the Babusar–Chilas corridor, rainfall-triggered slope failure in the same corridor, and house collapses after flash flooding in Gilgit on 16 August [1]. These cases show cascading impacts: upstream water or slope failure can translate into transport disruption and downstream livelihood harm. The cases establish occurrence and documented damage, not precise local fatalities or causal attribution in isolation."
  },
  {
    "h": "8 What is being done and what could improve",
    "level": 2
  },
  {
    "p": "UNDP’s GLOF-II program reports 254 early warning systems installed, including 174 live systems, alongside flood protection, shelters, community disaster-management centers, and irrigation interventions across selected GB and KP valleys; the program’s figures cover both regions and must not be represented as GB-only counts [6]. ICIMOD records how a community-based warning system helped residents evacuate in Sherqilla during an August 2017 event [7]. These examples indicate plausible paths to reducing exposure, though program-output counts alone are not proof of a quantified reduction in mortality."
  },
  {
    "p": "A robust strategy would integrate accessible warning channels, community drills, hazard-aware land use, bridge and drainage design with updated rainfall extremes, slope and glacier-lake monitoring, and transparent public reporting after events. Recovery measures should explicitly consider people whose land, irrigation access or livelihoods are lost even when homes remain intact."
  },
  {
    "h": "9 Data science extension and reproducibility plan",
    "level": 2
  },
  {
    "p": "For a defensible independent portfolio study, build an event-level dataset with fields: event_id, date, district, locality, hazard_type, deaths, injuries, houses_partial, houses_full, road_km, bridges, affected_population, source_url, publication_date, reporting_cutoff, and confidence_note. Store missing values as NA, never zero. The next research phase should download dated NDMA situation reports, deduplicate revised events, and join them to district census denominators and spatial exposure data where licensing permits."
  },
  {
    "p": "Analyses to implement in Python: (1) data validation and checksums between district tables and regional totals; (2) visualizations of recorded damage counts and their reporting uncertainty; (3) district-normalized house damage per 1,000 households once denominators are available; (4) mapping event footprints against settlements, roads and glacier-lake layers; and (5) sensitivity analysis for missing and revised records. Climate association tests should use spatially and temporally matched meteorological records, lag structures and clear confounder controls. Prediction should be attempted only after assembling enough events to evaluate out-of-sample performance."
  },
  {
    "p": "Suggested repository structure: data/raw, data/processed, notebooks/01_validate_ndma.ipynb, src/clean.py, src/analysis.py, figures, methodology.md, and README.md. Do not claim that these scripts or models exist until implemented. Ethical requirements include no identifying details from affected households without informed permission and no publication of precise private household coordinates."
  },
  {
    "h": "10 Limitations",
    "level": 2
  },
  {
    "p": "Administrative disaster reports can be revised; event definitions and infrastructure assessment coverage may change. There are inconsistencies within NDMA’s published 2025 tabulation, including its district house-damage sums versus the regional summary. Casualty totals group multiple monsoon-related hazards. There is no consistent annual GB-specific affected-person count, verified displaced-person total, or harmonized economic-loss series in the selected evidence. The study cannot infer a climate trend from two non-comparable years, calculate the full number of people affected from house counts, or assign causation to anthropogenic warming for individual events."
  },
  {
    "h": "11 Conclusion",
    "level": 2
  },
  {
    "p": "Floods in Gilgit-Baltistan are both sudden disasters and long-running social and economic disruptions. NDMA’s 2025 seasonal records document loss of life, injuries, damaged housing, and substantial disruption of roads and bridges. Scientific assessments indicate that changes in the regional cryosphere and rainfall extremes require adaptation in already exposed mountain settlements. Yet the strongest next step is also methodological: release harmonized, validated, district-level disaster records that allow researchers and communities to distinguish incidence, exposure, loss, and recovery. Reliable measurement, combined with locally usable early warning and resilient infrastructure, is central to protecting life in GB."
  },
  {
    "h": "References",
    "level": 2
  },
  {
    "p": "[1] National Disaster Management Authority (NDMA). (2026). Post-Monsoon 2025 Infrastructure Damage Report. https://www.ndma.gov.pk/public/storage/ia-books/February2026/epjfF0hIfEZk9Dc40ADm.pdf"
  },
  {
    "p": "[2] NDMA. (2025). Building Back Better: Sustainable Pathways for Post-Monsoon 2025 Rebuilding, seminar report. https://ndma.gov.pk/storage/ia-books/December2025/c27eVIfuRIQ1rz5bZx6i.pdf"
  },
  {
    "p": "[3] NDMA. (2025). Monsoon Infrastructure Advisory: Gilgit-Baltistan, pre-disaster phase. https://ndma.gov.pk/public/storage/ia-books/May2025/MjMTBuxNbw4gQVZRN3tu.pdf"
  },
  {
    "p": "[4] ICIMOD. (2023). Water, ice, society, and ecosystems in the Hindu Kush Himalaya: An outlook. https://doi.org/10.53055/ICIMOD.1028"
  },
  {
    "p": "[5] Government of Pakistan et al. (2022). Pakistan Floods 2022: Post-Disaster Needs Assessment. https://www.undp.org/pakistan/publications/pakistan-floods-2022-post-disaster-needs-assessment-pdna"
  },
  {
    "p": "[6] UNDP Pakistan. (2025–2026 project page). Scaling-up of Glacial Lake Outburst Floods Risk Reduction in Northern Pakistan. https://www.undp.org/pakistan/projects/scaling-glacial-lake-outburst-floods-risk-reduction-northern-pakistan-glof-ii-project"
  },
  {
    "p": "[7] Ali, A. (2020). Sounding the bell: How the community-based flood early warning system is saving lives in Gilgit-Baltistan. ICIMOD. https://www.icimod.org/article/sounding-the-bell-how-the-community-based-flood-early-warning-system-is-saving-lives-in-gilgit-baltistan/"
  },
  {
    "p": "Research integrity statement: This is an original synthesis of cited secondary sources, prepared as an independent student research draft. It has not undergone peer review and does not contain original fieldwork or completed computational modeling."
  }
];
