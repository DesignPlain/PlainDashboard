import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_AiEndpointDeployedModelPrivateEndpoint {
  /*
(Output)
Output only. Http(s) path to send prediction requests.
*/
  predictHttpUri?: string;

  /*
(Output)
Output only. The name of the service attachment resource. Populated if private service connect is enabled.
*/
  serviceAttachment?: string;

  /*
(Output)
Output only. Http(s) path to send explain requests.
*/
  explainHttpUri?: string;

  /*
(Output)
Output only. Http(s) path to send health check requests.
*/
  healthHttpUri?: string;
}

export function vertex_AiEndpointDeployedModelPrivateEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'predictHttpUri',
      '(Output)\nOutput only. Http(s) path to send prediction requests.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAttachment',
      '(Output)\nOutput only. The name of the service attachment resource. Populated if private service connect is enabled.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'explainHttpUri',
      '(Output)\nOutput only. Http(s) path to send explain requests.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'healthHttpUri',
      '(Output)\nOutput only. Http(s) path to send health check requests.',
      () => [],
      false,
      false,
    ),
  ];
}
