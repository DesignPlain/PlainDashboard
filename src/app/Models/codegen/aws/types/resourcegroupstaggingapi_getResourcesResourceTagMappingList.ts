import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  resourcegroupstaggingapi_getResourcesResourceTagMappingListComplianceDetail,
  resourcegroupstaggingapi_getResourcesResourceTagMappingListComplianceDetail_GetTypes,
} from "./resourcegroupstaggingapi_getResourcesResourceTagMappingListComplianceDetail";

export interface resourcegroupstaggingapi_getResourcesResourceTagMappingList {
  // List of objects with information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.
  complianceDetails?: Array<resourcegroupstaggingapi_getResourcesResourceTagMappingListComplianceDetail>;

  // ARN of the resource.
  resourceArn?: string;

  // Map of tags assigned to the resource.
  tags?: Map<string, string>;
}

export function resourcegroupstaggingapi_getResourcesResourceTagMappingList_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "complianceDetails",
      "List of objects with information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.",
      () =>
        resourcegroupstaggingapi_getResourcesResourceTagMappingListComplianceDetail_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "ARN of the resource.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Map of tags assigned to the resource.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
