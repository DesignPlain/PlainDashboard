import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cfg_RecorderRecordingGroupExclusionByResourceType,
  cfg_RecorderRecordingGroupExclusionByResourceType_GetTypes,
} from "./cfg_RecorderRecordingGroupExclusionByResourceType";
import {
  cfg_RecorderRecordingGroupRecordingStrategy,
  cfg_RecorderRecordingGroupRecordingStrategy_GetTypes,
} from "./cfg_RecorderRecordingGroupRecordingStrategy";

export interface cfg_RecorderRecordingGroup {
  // An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.To use this option, you must set the useOnly field of RecordingStrategy to `EXCLUSION_BY_RESOURCE_TYPES` Requires `all_supported = false`. Conflicts with `resource_types`.
  exclusionByResourceTypes?: Array<cfg_RecorderRecordingGroupExclusionByResourceType>;

  // Specifies whether AWS Config includes all supported types of _global resources_ with the resources that it records. Requires `all_supported = true`. Conflicts with `resource_types`.
  includeGlobalResourceTypes?: boolean;

  // Recording Strategy. Detailed below.
  recordingStrategies?: Array<cfg_RecorderRecordingGroupRecordingStrategy>;

  // A list that specifies the types of AWS resources for which AWS Config records configuration changes (for example, `AWS::EC2::Instance` or `AWS::CloudTrail::Trail`). See [relevant part of AWS Docs](http://docs.aws.amazon.com/config/latest/APIReference/API_ResourceIdentifier.html#config-Type-ResourceIdentifier-resourceType) for available types. In order to use this attribute, `all_supported` must be set to false.
  resourceTypes?: Array<string>;

  // Specifies whether AWS Config records configuration changes for every supported type of regional resource (which includes any new type that will become supported in the future). Conflicts with `resource_types`. Defaults to `true`.
  allSupported?: boolean;
}

export function cfg_RecorderRecordingGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "exclusionByResourceTypes",
      "An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.To use this option, you must set the useOnly field of RecordingStrategy to `EXCLUSION_BY_RESOURCE_TYPES` Requires `all_supported = false`. Conflicts with `resource_types`.",
      cfg_RecorderRecordingGroupExclusionByResourceType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeGlobalResourceTypes",
      "Specifies whether AWS Config includes all supported types of _global resources_ with the resources that it records. Requires `all_supported = true`. Conflicts with `resource_types`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "recordingStrategies",
      "Recording Strategy. Detailed below.",
      cfg_RecorderRecordingGroupRecordingStrategy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resourceTypes",
      "A list that specifies the types of AWS resources for which AWS Config records configuration changes (for example, `AWS::EC2::Instance` or `AWS::CloudTrail::Trail`). See [relevant part of AWS Docs](http://docs.aws.amazon.com/config/latest/APIReference/API_ResourceIdentifier.html#config-Type-ResourceIdentifier-resourceType) for available types. In order to use this attribute, `all_supported` must be set to false.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allSupported",
      "Specifies whether AWS Config records configuration changes for every supported type of regional resource (which includes any new type that will become supported in the future). Conflicts with `resource_types`. Defaults to `true`.",
      [],
      false,
      false,
    ),
  ];
}
