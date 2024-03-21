import Types from "@contentstack/app-sdk/dist/src/types";
import { useAppSdk } from "./useAppSdk";
import { get, isEmpty, keys } from "lodash";
import { useMemo } from "react";

type LocationType = Types.LocationType

/**
 * Returns the location name (eg: CustomField) and the location instance from the SDK
 * based on active location
 * @return {locationName, location}
 */
export const useAppLocation = () => {
  const appSdk = useAppSdk();
  const locations = useMemo(() => keys(appSdk?.location), [appSdk]);

  /**
   * memoized locationName and location instance
   */
  const { locationName, location } = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let location: any;
    let locationName: keyof LocationType | string = "";
    for (let i = 0; i <= locations.length; i++) {
      if (!isEmpty(get(appSdk, `location.${locations[i]}`, undefined))) {
        locationName = locations[i] as string;
        location = get(
          appSdk?.location,
          locationName
        ) as LocationType[keyof LocationType];
        break;
      }
    }

    return { location, locationName };
  }, [locations, appSdk]);

  return { locationName, location };
};
