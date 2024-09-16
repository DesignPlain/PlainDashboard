import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainer,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainer_GetTypes,
} from './batch_getJobDefinitionNodePropertyNodeRangePropertyContainer';

export interface batch_getJobDefinitionNodePropertyNodeRangeProperty {
  // The range of nodes, using node index values. A range of 0:3 indicates nodes with index values of 0 through 3. I
  targetNodes?: string;

  // The container details for the node range.
  containers?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainer>;
}

export function batch_getJobDefinitionNodePropertyNodeRangeProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'containers',
      'The container details for the node range.',
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'targetNodes',
      'The range of nodes, using node index values. A range of 0:3 indicates nodes with index values of 0 through 3. I',
      () => [],
      true,
      false,
    ),
  ];
}
