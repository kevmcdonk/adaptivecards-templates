import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../store/rootReducer";
import AdaptiveCardPanel from "./AdaptiveCardPanel";

it("Renders without crashing", () => {
  const div = document.createElement("div");
  const store = createStore(rootReducer, {});
  const template = {
    "name": "Untitled Template",
    "instances": [
      {
        "json": "\"{\\\"$schema\\\":\\\"http://adaptivecards.io/schemas/adaptive-card.json\\\",\\\"type\\\":\\\"AdaptiveCard\\\",\\\"version\\\":\\\"1.0\\\",\\\"body\\\":[{\\\"type\\\":\\\"TextBlock\\\",\\\"text\\\":\\\"Your registration is almost complete\\\",\\\"size\\\":\\\"Medium\\\",\\\"weight\\\":\\\"Bolder\\\"},{\\\"type\\\":\\\"TextBlock\\\",\\\"text\\\":\\\"What type of food do you prefer?\\\",\\\"wrap\\\":true},{\\\"type\\\":\\\"ImageSet\\\",\\\"imageSize\\\":\\\"medium\\\",\\\"images\\\":[{\\\"type\\\":\\\"Image\\\",\\\"url\\\":\\\"{hasMenu.hasMenuSection[0].image}\\\"},{\\\"type\\\":\\\"Image\\\",\\\"url\\\":\\\"{hasMenu.hasMenuSection[0].hasMenuSection[0].image}\\\"},{\\\"type\\\":\\\"Image\\\",\\\"url\\\":\\\"{hasMenu.hasMenuSection[0].hasMenuSection[1].image}\\\"}]}],\\\"actions\\\":[{\\\"type\\\":\\\"Action.ShowCard\\\",\\\"title\\\":\\\"{hasMenu.hasMenuSection[0].name}\\\",\\\"card\\\":{\\\"type\\\":\\\"AdaptiveCard\\\",\\\"body\\\":[{\\\"type\\\":\\\"TextBlock\\\",\\\"text\\\":\\\"{hasMenu.hasMenuSection[0].description}\\\",\\\"size\\\":\\\"Medium\\\",\\\"wrap\\\":true},{\\\"type\\\":\\\"Input.ChoiceSet\\\",\\\"id\\\":\\\"SteakTemp\\\",\\\"style\\\":\\\"expanded\\\",\\\"choices\\\":[{\\\"title\\\":\\\"Rare\\\",\\\"value\\\":\\\"rare\\\"},{\\\"title\\\":\\\"Medium-Rare\\\",\\\"value\\\":\\\"medium-rare\\\"},{\\\"title\\\":\\\"Well-done\\\",\\\"value\\\":\\\"well-done\\\"}]},{\\\"type\\\":\\\"Input.Text\\\",\\\"id\\\":\\\"SteakOther\\\",\\\"isMultiline\\\":true,\\\"placeholder\\\":\\\"Any other preparation requests?\\\"}],\\\"actions\\\":[{\\\"type\\\":\\\"Action.Submit\\\",\\\"title\\\":\\\"OK\\\",\\\"data\\\":{\\\"FoodChoice\\\":\\\"Steak\\\"}}],\\\"$schema\\\":\\\"http://adaptivecards.io/schemas/adaptive-card.json\\\"}},{\\\"type\\\":\\\"Action.ShowCard\\\",\\\"title\\\":\\\"{hasMenu.hasMenuSection[0].hasMenuSection[0].name}\\\",\\\"card\\\":{\\\"type\\\":\\\"AdaptiveCard\\\",\\\"body\\\":[{\\\"type\\\":\\\"TextBlock\\\",\\\"text\\\":\\\"{hasMenu.hasMenuSection[0].hasMenuSection[0].description}\\\",\\\"size\\\":\\\"Medium\\\",\\\"wrap\\\":true},{\\\"type\\\":\\\"Input.ChoiceSet\\\",\\\"id\\\":\\\"ChickenAllergy\\\",\\\"style\\\":\\\"expanded\\\",\\\"isMultiSelect\\\":true,\\\"choices\\\":[{\\\"title\\\":\\\"I'm allergic to peanuts\\\",\\\"value\\\":\\\"peanut\\\"}]},{\\\"type\\\":\\\"Input.Text\\\",\\\"id\\\":\\\"ChickenOther\\\",\\\"isMultiline\\\":true,\\\"placeholder\\\":\\\"Any other preparation requests?\\\"}],\\\"actions\\\":[{\\\"type\\\":\\\"Action.Submit\\\",\\\"title\\\":\\\"OK\\\",\\\"data\\\":{\\\"FoodChoice\\\":\\\"Chicken\\\"}}],\\\"$schema\\\":\\\"http://adaptivecards.io/schemas/adaptive-card.json\\\"}},{\\\"type\\\":\\\"Action.ShowCard\\\",\\\"title\\\":\\\"{hasMenu.hasMenuSection[0].hasMenuSection[1].name}\\\",\\\"card\\\":{\\\"type\\\":\\\"AdaptiveCard\\\",\\\"body\\\":[{\\\"type\\\":\\\"TextBlock\\\",\\\"text\\\":\\\"{hasMenu.hasMenuSection[0].hasMenuSection[1].description}\\\",\\\"size\\\":\\\"Medium\\\",\\\"wrap\\\":true},{\\\"type\\\":\\\"Input.Toggle\\\",\\\"id\\\":\\\"Vegetarian\\\",\\\"title\\\":\\\"Please prepare it vegan\\\",\\\"valueOn\\\":\\\"vegan\\\",\\\"valueOff\\\":\\\"notVegan\\\",\\\"wrap\\\":false},{\\\"type\\\":\\\"Input.Text\\\",\\\"id\\\":\\\"VegOther\\\",\\\"isMultiline\\\":true,\\\"placeholder\\\":\\\"Any other preparation requests?\\\"}],\\\"actions\\\":[{\\\"type\\\":\\\"Action.Submit\\\",\\\"title\\\":\\\"OK\\\",\\\"data\\\":{\\\"FoodChoice\\\":\\\"Vegetarian\\\"}}],\\\"$schema\\\":\\\"http://adaptivecards.io/schemas/adaptive-card.json\\\"}}]}\"",
        "version": "1.0"
      }
    ],
    "tags": [],
    "owner": "06eabf31-88c4-452f-91e2-24a743e0f2ec",
    "isPublished": "true",
    "createdAt": "2020-02-13T00:47:58.960Z",
    "updatedAt": "2020-02-13T02:29:56.482Z",
    "_id": "83c90d74-cd66-4afe-b248-31a9ab56d351"
  }
  ReactDOM.render(
    <Provider store={store}>
      <AdaptiveCardPanel onClick={() => { }} template={template} />
    </Provider>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
