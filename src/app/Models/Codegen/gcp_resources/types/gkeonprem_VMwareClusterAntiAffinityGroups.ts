import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkeonprem_VMwareClusterAntiAffinityGroups {
  /*
Spread nodes across at least three physical hosts (requires at least three
hosts).
Enabled by default.
*/
  aagConfigDisabled?: boolean;
}

export function gkeonprem_VMwareClusterAntiAffinityGroups_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "aagConfigDisabled",
      "Spread nodes across at least three physical hosts (requires at least three\nhosts).\nEnabled by default.",
      [],
      true,
      false,
    ),
  ];
}
