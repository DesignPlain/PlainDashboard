import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_AiIndexDeployedIndex {
  /*
(Output)
The ID of the DeployedIndex in the above IndexEndpoint.
*/
  DeployedIndexId?: string;

  /*
(Output)
A resource name of the IndexEndpoint.
*/
  IndexEndpoint?: string;
}

export function Vertex_AiIndexDeployedIndex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DeployedIndexId",
      "(Output)\nThe ID of the DeployedIndex in the above IndexEndpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IndexEndpoint",
      "(Output)\nA resource name of the IndexEndpoint.",
      [],
      false,
      false,
    ),
  ];
}
