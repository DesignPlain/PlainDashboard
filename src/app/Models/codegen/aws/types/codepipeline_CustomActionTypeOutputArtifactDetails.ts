import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codepipeline_CustomActionTypeOutputArtifactDetails {
  // The minimum number of artifacts allowed for the action type. Min: 0, Max: 5
  minimumCount?: number;

  // The maximum number of artifacts allowed for the action type. Min: 0, Max: 5
  maximumCount?: number;
}

export function codepipeline_CustomActionTypeOutputArtifactDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minimumCount",
      "The minimum number of artifacts allowed for the action type. Min: 0, Max: 5",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumCount",
      "The maximum number of artifacts allowed for the action type. Min: 0, Max: 5",
      () => [],
      true,
      false,
    ),
  ];
}
