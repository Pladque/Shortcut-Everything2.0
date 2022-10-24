const {featuresFactory} = require("../OnClickFeatures/FeaturesFactory")

export const idActionsListenersPairs = [
    {
        elementId: "dark-mode switch",
        actionObject: featuresFactory.createDarkModeFeature()
    },
]