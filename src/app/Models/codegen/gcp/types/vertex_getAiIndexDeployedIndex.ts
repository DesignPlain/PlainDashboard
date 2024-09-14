import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface vertex_getAiIndexDeployedIndex {
  // The ID of the DeployedIndex in the above IndexEndpoint.
  deployedIndexId?: string;

  // A resource name of the IndexEndpoint.
  indexEndpoint?: string;
}

export function vertex_getAiIndexDeployedIndex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "indexEndpoint",
      "A resource name of the IndexEndpoint.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deployedIndexId",
      "The ID of the DeployedIndex in the above IndexEndpoint.",
      () => [],
      true,
      false,
    ),
  ];
}
