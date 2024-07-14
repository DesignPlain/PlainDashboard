import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_ThingGroupMetadataRootToParentGroup {
  //
  groupArn?: string;

  //
  groupName?: string;
}

export function iot_ThingGroupMetadataRootToParentGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "groupArn", "", [], false, false),
    new DynamicUIProps(InputType.String, "groupName", "", [], false, false),
  ];
}
