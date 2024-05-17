import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vertex_AiEndpointDeployedModelPrivateEndpoint {
  /*
(Output)
Output only. The name of the service attachment resource. Populated if private service connect is enabled.
*/
  ServiceAttachment?: string;

  /*
(Output)
Output only. Http(s) path to send explain requests.
*/
  ExplainHttpUri?: string;

  /*
(Output)
Output only. Http(s) path to send health check requests.
*/
  HealthHttpUri?: string;

  /*
(Output)
Output only. Http(s) path to send prediction requests.
*/
  PredictHttpUri?: string;
}

export function Vertex_AiEndpointDeployedModelPrivateEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ServiceAttachment",
      "(Output)\nOutput only. The name of the service attachment resource. Populated if private service connect is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExplainHttpUri",
      "(Output)\nOutput only. Http(s) path to send explain requests.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HealthHttpUri",
      "(Output)\nOutput only. Http(s) path to send health check requests.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PredictHttpUri",
      "(Output)\nOutput only. Http(s) path to send prediction requests.",
      [],
      false,
      false,
    ),
  ];
}
