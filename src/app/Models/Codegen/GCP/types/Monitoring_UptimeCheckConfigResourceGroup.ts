import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_UptimeCheckConfigResourceGroup {
  // The group of resources being monitored. Should be the `name` of a group
  GroupId?: string;

  /*
The resource type of the group members.
Possible values are: `RESOURCE_TYPE_UNSPECIFIED`, `INSTANCE`, `AWS_ELB_LOAD_BALANCER`.
*/
  ResourceType?: string;
}

export function Monitoring_UptimeCheckConfigResourceGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ResourceType",
      "The resource type of the group members.\nPossible values are: `RESOURCE_TYPE_UNSPECIFIED`, `INSTANCE`, `AWS_ELB_LOAD_BALANCER`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "GroupId",
      "The group of resources being monitored. Should be the `name` of a group",
      [],
      false,
      true,
    ),
  ];
}
