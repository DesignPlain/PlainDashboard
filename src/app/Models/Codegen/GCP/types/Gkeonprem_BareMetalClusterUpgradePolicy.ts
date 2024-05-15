import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalClusterUpgradePolicy {
  /*
Specifies which upgrade policy to use.
Possible values are: `SERIAL`, `CONCURRENT`.
*/
  Policy?: string;
}

export function Gkeonprem_BareMetalClusterUpgradePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Policy",
      "Specifies which upgrade policy to use.\nPossible values are: `SERIAL`, `CONCURRENT`.",
      [],
      false,
      false,
    ),
  ];
}
