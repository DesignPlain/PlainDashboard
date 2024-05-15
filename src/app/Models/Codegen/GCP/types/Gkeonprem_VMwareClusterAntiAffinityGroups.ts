import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterAntiAffinityGroups {
  /*
Spread nodes across at least three physical hosts (requires at least three
hosts).
Enabled by default.
*/
  AagConfigDisabled?: boolean;
}

export function Gkeonprem_VMwareClusterAntiAffinityGroups_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AagConfigDisabled",
      "Spread nodes across at least three physical hosts (requires at least three\nhosts).\nEnabled by default.",
      [],
      true,
      false,
    ),
  ];
}
