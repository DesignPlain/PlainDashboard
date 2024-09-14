import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  iot_ThingGroupMetadataRootToParentGroup,
  iot_ThingGroupMetadataRootToParentGroup_GetTypes,
} from "./iot_ThingGroupMetadataRootToParentGroup";

export interface iot_ThingGroupMetadata {
  //
  rootToParentGroups?: Array<iot_ThingGroupMetadataRootToParentGroup>;

  //
  creationDate?: string;

  // The name of the parent Thing Group.
  parentGroupName?: string;
}

export function iot_ThingGroupMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "rootToParentGroups",
      "",
      () => iot_ThingGroupMetadataRootToParentGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "creationDate",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "parentGroupName",
      "The name of the parent Thing Group.",
      () => [],
      false,
      false,
    ),
  ];
}
