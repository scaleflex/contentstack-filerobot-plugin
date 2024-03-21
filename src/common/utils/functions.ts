// import Extension from "@contentstack/app-sdk/dist/src/extension";
import { get, isEmpty, keys } from "lodash";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getAppLocation(sdk: any): string {
  const locations = keys(sdk?.location);
  let locationName = "";
  for (let i = 0; i <= locations.length; i++) {
    if (!isEmpty(get(sdk, `location.${locations[i]}`, undefined))) {
      locationName = locations[i];
      break;
    }
  }
  return locationName;
}
