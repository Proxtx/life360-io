import { genModule } from "@proxtx/combine/combine.js";
import { genCombine } from "@proxtx/combine-rest/request.js";
import config from "@proxtx/config";

const dataApi = await genCombine(
  config.Life360.api + "/",
  "public/data.js",
  genModule
);

export class Info {
  name = "Life360";

  async info() {
    let places = await dataApi.getUserPlaces(config.Life360.pwd);
    let returnObj = [];

    for (let name in places) {
      returnObj.push({
        element: "title-box-io",
        title: name,
        contains: {
          element: "box-io",
          contains: {
            element: "text-io",
            text: places[name],
            size: "90%",
            color: "var(--greyColor)",
          },
        },
      });
    }
    return returnObj;
  }
}
