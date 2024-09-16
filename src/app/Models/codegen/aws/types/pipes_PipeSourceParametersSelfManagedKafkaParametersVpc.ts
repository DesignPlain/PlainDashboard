import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pipes_PipeSourceParametersSelfManagedKafkaParametersVpc {
  //
  securityGroups?: Array<string>;

  //
  subnets?: Array<string>;
}

export function pipes_PipeSourceParametersSelfManagedKafkaParametersVpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'securityGroups',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnets',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
