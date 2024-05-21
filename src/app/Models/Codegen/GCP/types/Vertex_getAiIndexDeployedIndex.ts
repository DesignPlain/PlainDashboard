import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      "deployedIndexId",
      "The ID of the DeployedIndex in the above IndexEndpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "indexEndpoint",
      "A resource name of the IndexEndpoint.",
      [],
      true,
      false,
    ),
  ];
}
