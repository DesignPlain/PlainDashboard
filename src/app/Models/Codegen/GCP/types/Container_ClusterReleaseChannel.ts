import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterReleaseChannel {
  /*
The selected release channel.
Accepted values are:
- UNSPECIFIED: Not set.
- RAPID: Weekly upgrade cadence; Early testers and developers who requires new features.
- REGULAR: Multiple per month upgrade cadence; Production users who need features not yet offered in the Stable channel.
- STABLE: Every few months upgrade cadence; Production users who need stability above all else, and for whom frequent upgrades are too risky.
*/
  Channel?: string;
}

export function Container_ClusterReleaseChannel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Channel",
      "The selected release channel.\nAccepted values are:\n* UNSPECIFIED: Not set.\n* RAPID: Weekly upgrade cadence; Early testers and developers who requires new features.\n* REGULAR: Multiple per month upgrade cadence; Production users who need features not yet offered in the Stable channel.\n* STABLE: Every few months upgrade cadence; Production users who need stability above all else, and for whom frequent upgrades are too risky.",
      [],
      true,
      false,
    ),
  ];
}
