import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codepipeline_CustomActionTypeInputArtifactDetails {
  // The maximum number of artifacts allowed for the action type. Min: 0, Max: 5
  maximumCount?: number;

  // The minimum number of artifacts allowed for the action type. Min: 0, Max: 5
  minimumCount?: number;
}

export function codepipeline_CustomActionTypeInputArtifactDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumCount",
      "The maximum number of artifacts allowed for the action type. Min: 0, Max: 5",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minimumCount",
      "The minimum number of artifacts allowed for the action type. Min: 0, Max: 5",
      [],
      true,
      false,
    ),
  ];
}
