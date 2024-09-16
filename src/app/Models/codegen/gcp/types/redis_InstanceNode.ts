import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface redis_InstanceNode {
  /*
(Output)
Location of the node.
*/
  zone?: string;

  /*
(Output)
Node identifying string. e.g. 'node-0', 'node-1'
*/
  id?: string;
}

export function redis_InstanceNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'zone',
      '(Output)\nLocation of the node.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      "(Output)\nNode identifying string. e.g. 'node-0', 'node-1'",
      () => [],
      false,
      false,
    ),
  ];
}
