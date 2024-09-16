import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_AiIndexDeployedIndex {
  /*
(Output)
The ID of the DeployedIndex in the above IndexEndpoint.
*/
  deployedIndexId?: string;

  /*
(Output)
A resource name of the IndexEndpoint.
*/
  indexEndpoint?: string;
}

export function vertex_AiIndexDeployedIndex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'deployedIndexId',
      '(Output)\nThe ID of the DeployedIndex in the above IndexEndpoint.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'indexEndpoint',
      '(Output)\nA resource name of the IndexEndpoint.',
      () => [],
      false,
      false,
    ),
  ];
}
