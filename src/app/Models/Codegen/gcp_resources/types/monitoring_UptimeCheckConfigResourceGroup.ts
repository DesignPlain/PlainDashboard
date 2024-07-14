import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface monitoring_UptimeCheckConfigResourceGroup {
  // The group of resources being monitored. Should be the `name` of a group
  groupId?: string;

  /*
The resource type of the group members.
Possible values are: `RESOURCE_TYPE_UNSPECIFIED`, `INSTANCE`, `AWS_ELB_LOAD_BALANCER`.
*/
  resourceType?: string;
}

export function monitoring_UptimeCheckConfigResourceGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceType",
      "The resource type of the group members.\nPossible values are: `RESOURCE_TYPE_UNSPECIFIED`, `INSTANCE`, `AWS_ELB_LOAD_BALANCER`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "groupId",
      "The group of resources being monitored. Should be the `name` of a group",
      [],
      false,
      true,
    ),
  ];
}
