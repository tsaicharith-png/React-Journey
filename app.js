import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src="https://img.magnific.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" />
    </div>
    <div className="nav-tools">
      <ul>
        <li>Home</li>
        <li>Discover Food</li>
        <li>About US</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const restaurants = [
  {
    info: {
      id: "40998",
      name: "Lucky Restaurant",
      cloudinaryImageId: "pph2zo8kj5wm6147vrsb",
      locality: "Nagole",
      areaName: "Nagole",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Tandoor"],
      avgRating: 4.1,
      parentId: "535180",
      avgRatingString: "4.1",
      totalRatingsString: "335K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 01:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "30K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/lucky-restaurant-nagole-rest40998",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "542396",
      name: "WarmOven Cake & Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/10/a23c3720-41f4-4acf-a7b3-573ed38fc628_542396.JPG",
      locality: "Hanumannagar",
      areaName: "Kothapet & Dilsukhnagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages", "Cakes"],
      avgRating: 4,
      parentId: "9696",
      avgRatingString: "4.0",
      totalRatingsString: "3.3K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/warmoven-cake-and-desserts-hanumannagar-kothapet-and-dilsukhnagar-rest542396",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "29287",
      name: "KS Bakers",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/29/5ad53781-3a01-48ea-a473-edd21a675329_29287.jpg",
      locality: "L B Nagar",
      areaName: "L B Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Pizzas", "Desserts", "Snacks", "Fast Food"],
      avgRating: 4,
      parentId: "574",
      avgRatingString: "4.0",
      totalRatingsString: "80K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "10K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/ks-bakers-l-b-nagar-rest29287",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "481967",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/d082dfab-bb70-4cc6-a96d-17e53076b8ed_481967.JPG",
      locality: "Green Hills Colony Min Road",
      areaName: "Beside Metro Station",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4,
      parentId: "11633",
      avgRatingString: "4.0",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "newg.png",
            description:
              "Premium gourmet restaurant offering an elevated, high-quality food experience.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description:
                    "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/olio-the-wood-fired-pizzeria-green-hills-colony-min-road-beside-metro-station-rest481967",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23694",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/1f843bb2-1177-4e9e-ac33-ce8904120288_23694.JPG",
      locality: "Appaji",
      areaName: "Dilsukhnagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "67K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 01:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
            description: "Top-rated for Burger, based on user votes.",
          },
          {
            imageId:
              "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
            description: "Top-rated for Corporate, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Top-rated for Burger, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Top-rated for Corporate, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/mcdonalds-appaji-dilsukhnagar-rest23694",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "644865",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b3860e4e-b88f-4fd0-93c0-d9ce3c929aa0_644865.jpg",
      locality: "L B NAGAR Circle",
      areaName: "Santoshnagar & Saidabad",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4,
      parentId: "166",
      avgRatingString: "4.0",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
            description: "Top-rated for Burger, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Burger, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/burger-king-l-b-nagar-circle-santoshnagar-and-saidabad-rest644865",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "20347",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/e7f433c3-b1ac-406a-9ed4-928ec60bf022_20347.jpg",
      locality: "Laxmi Nagar Colony",
      areaName: "Kothapet",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "22K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description:
              "Meals with high protein, low calorie and no added sugar",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description:
                    "Meals with high protein, low calorie and no added sugar",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/subway-laxmi-nagar-colony-kothapet-rest20347",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "389817",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/10/27/10ef824e-67ca-405d-a359-94f8d022af15_389817.JPG",
      locality: "Kothapet",
      areaName: "Kothapet",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.5,
      parentId: "721",
      avgRatingString: "4.5",
      totalRatingsString: "9.4K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
            description: "Top-rated for Pizza, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Top-rated for Pizza, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "1.9K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/pizza-hut-kothapet-rest389817",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "171102",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/39903adb-e620-4c38-849d-8e0cd91a7b24_171102.JPG",
      locality: "New Malakpet",
      areaName: "Lnt Mall Musarambagh",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 3.8,
      parentId: "547",
      avgRatingString: "3.8",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
            description: "Top-rated for Burger, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Burger, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/kfc-new-malakpet-lnt-mall-musarambagh-rest171102",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "495452",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Saroor Nagar West",
      areaName: "Saroor Nagar West",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 3.9,
      parentId: "61955",
      avgRatingString: "3.9",
      totalRatingsString: "4.8K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "343",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/chinese-wok-saroor-nagar-west-rest495452",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "565283",
      name: "Wendy's Burgers",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/1011918c-0de6-4f15-be99-dc85ccb32f13_565283.JPG",
      locality: "Shiva Ganga Colony",
      areaName: "LB Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "Fast Food", "wrap"],
      avgRating: 4.1,
      parentId: "972",
      avgRatingString: "4.1",
      totalRatingsString: "5.6K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/wendys-burgers-shiva-ganga-colony-lb-nagar-rest565283",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "650819",
      name: "Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/d1e328a7-68c4-45fd-b8a0-d8ce711502e1_650819.JPG",
      locality: "SALEEM NAGAR",
      areaName: "Malakpet",
      costForTwo: "₹500 for two",
      cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
      avgRating: 4,
      parentId: "1776",
      avgRatingString: "4.0",
      totalRatingsString: "5.3K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-11-04 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
            description: "Top-rated for Chinese, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Chinese, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "303",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/wow-momo-saleem-nagar-malakpet-rest650819",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "495829",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_495829.JPG",
      locality: "Jubilee Shivaiah",
      areaName: "Kothapet & Dilsukhnagar",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 3.9,
      parentId: "434792",
      avgRatingString: "3.9",
      totalRatingsString: "2.2K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/big-bowl-jubilee-shivaiah-kothapet-and-dilsukhnagar-rest495829",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "173999",
      name: "Taco Bell",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/3c61d415-50d3-4860-ad2b-7ad3154ab5eb_173999.JPG",
      locality: "L&T mall Malakpet",
      areaName: "New Malakpet",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican", "Fast Food", "Snacks"],
      avgRating: 4,
      parentId: "1557",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "729",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/taco-bell-l-and-t-mall-malakpet-new-malakpet-rest173999",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "300360",
      name: "Barbeque Nation",
      cloudinaryImageId: "h401zhjwasa0zk2wtfee",
      locality: "Kothapet",
      areaName: "Kothapet",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Kebabs",
        "Biryani",
        "Street Food",
        "Snacks",
      ],
      avgRating: 3.6,
      parentId: "2438",
      avgRatingString: "3.6",
      totalRatingsString: "3.3K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "7.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/barbeque-nation-kothapet-rest300360",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "229598",
      name: "UBQ-Meals,Thalis & Bowls",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/0e920a46-cf9d-40d2-a3e8-6f83ae7f2862_229598.JPG",
      locality: "Santosh Nagar",
      areaName: "Kiran Nagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Kebabs",
        "Barbecue",
        "Biryani",
        "Street Food",
        "Snacks",
      ],
      avgRating: 3.7,
      parentId: "617376",
      avgRatingString: "3.7",
      totalRatingsString: "4.6K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.6",
          ratingCount: "12",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/ubq-meals-thalis-and-bowls-santosh-nagar-kiran-nagar-rest229598",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "322173",
      name: "CakeZone Patisserie",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/1/93a72950-c90a-423d-ab33-495e1ab5a36d_322173.JPG",
      locality: "BESIDE METRO STATION",
      areaName: "Kothapet & Dilsukhnagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.2,
      parentId: "7003",
      avgRatingString: "4.2",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/cakezone-patisserie-beside-metro-station-kothapet-and-dilsukhnagar-rest322173",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "464701",
      name: "NH1 Bowls - Highway To North",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/b3f70582-c456-4ba3-880c-c2709edb5161_464701.jpg",
      locality: "Dilsukhnagar",
      areaName: "Sri Nagar Colony",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Punjabi", "Home Food"],
      avgRating: 4.7,
      parentId: "22452",
      avgRatingString: "4.7",
      totalRatingsString: "2.2K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
            description: "Top-rated for North Indian, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description:
                    "Top-rated for North Indian, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/nh1-bowls-highway-to-north-dilsukhnagar-sri-nagar-colony-rest464701",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "681588",
      name: "LeanCrust Pizza- ThinCrust Experts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/1c323a2f-a84a-49e8-9b21-eeb5c3d4e716_681588.JPG",
      locality: "Sri Nagar Colony",
      areaName: "Dilsukhnagar",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian", "Desserts"],
      avgRating: 4.7,
      parentId: "11216",
      avgRatingString: "4.7",
      totalRatingsString: "3.0K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
            description: "Top-rated for Corporate, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Corporate, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/leancrust-pizza-thincrust-experts-sri-nagar-colony-dilsukhnagar-rest681588",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "622178",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/95844591-894d-40ea-b5df-3fa338d0a953_622178.jpg",
      locality: "Sri Nagar Colony",
      areaName: "Dilsukhnagar",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.7,
      parentId: "11329",
      avgRatingString: "4.7",
      totalRatingsString: "2.9K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-29 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
            description: "Top-rated for Pizza, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Pizza, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-03aab942-57a2-4558-a56b-e0de18887094",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/mojo-pizza-2x-toppings-sri-nagar-colony-dilsukhnagar-rest622178",
      type: "WEBLINK",
    },
  },
];

const RestrauntCard = ({ resData }) => {
  const { info } = resData;

  return (
    <div className="res-card">
      <img
        alt={info.name}
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          info.cloudinaryImageId
        }
      />

      <div className="res-name">{info.name}</div>

      <div className="res-cusine">
        <ul>
          {info.cuisines.map((cuisine) => (
            <li key={cuisine}>{cuisine}</li>
          ))}
        </ul>
      </div>

      <div className="res-rating">{info.avgRating} Rating</div>
      <div className="res-price">{info.costForTwo}</div>
      <div className="res-time">{info.sla.deliveryTime} minutes</div>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>

    <div className="res-container">
      {restaurants.map((restaurant) => (
        <RestrauntCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  </div>
);

const Appcomponent = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appcomponent />);
