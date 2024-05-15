import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsClusterAuthorizationAdminGroup {
  // The name of the group, e.g. `my-group@domain.com`.
  Group?: string;
}

export function Container_AwsClusterAuthorizationAdminGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Group",
      "The name of the group, e.g. `my-group@domain.com`.",
      [],
      true,
      false,
    ),
  ];
}
