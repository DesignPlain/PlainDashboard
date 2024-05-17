import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_getAiIndexDeployedIndex {
  // The ID of the DeployedIndex in the above IndexEndpoint.
  DeployedIndexId?: string;

  // A resource name of the IndexEndpoint.
  IndexEndpoint?: string;
}

export function Vertex_getAiIndexDeployedIndex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DeployedIndexId",
      "The ID of the DeployedIndex in the above IndexEndpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IndexEndpoint",
      "A resource name of the IndexEndpoint.",
      [],
      true,
      false,
    ),
  ];
}
