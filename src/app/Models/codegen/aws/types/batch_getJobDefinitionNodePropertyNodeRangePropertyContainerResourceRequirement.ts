import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerResourceRequirement {
  // The type of resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
  type?: string;

  // The quantity of the specified resource to reserve for the container.
  value?: string;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerResourceRequirement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The quantity of the specified resource to reserve for the container.',
      () => [],
      true,
      false,
    ),
  ];
}
