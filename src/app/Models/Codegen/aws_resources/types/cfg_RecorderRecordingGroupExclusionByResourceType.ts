import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cfg_RecorderRecordingGroupExclusionByResourceType {
  // A list that specifies the types of AWS resources for which AWS Config excludes records configuration changes. See [relevant part of AWS Docs](http://docs.aws.amazon.com/config/latest/APIReference/API_ResourceIdentifier.html#config-Type-ResourceIdentifier-resourceType) for available types.
  resourceTypes?: Array<string>;
}

export function cfg_RecorderRecordingGroupExclusionByResourceType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "resourceTypes",
      "A list that specifies the types of AWS resources for which AWS Config excludes records configuration changes. See [relevant part of AWS Docs](http://docs.aws.amazon.com/config/latest/APIReference/API_ResourceIdentifier.html#config-Type-ResourceIdentifier-resourceType) for available types.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
