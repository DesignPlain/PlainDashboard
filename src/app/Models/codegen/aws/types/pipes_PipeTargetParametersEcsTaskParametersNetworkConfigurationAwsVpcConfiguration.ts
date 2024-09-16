import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pipes_PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration {
  // Specifies whether the task's elastic network interface receives a public IP address. You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE. Valid Values: ENABLED, DISABLED.
  assignPublicIp?: string;

  //
  securityGroups?: Array<string>;

  //
  subnets?: Array<string>;
}

export function pipes_PipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'assignPublicIp',
      "Specifies whether the task's elastic network interface receives a public IP address. You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE. Valid Values: ENABLED, DISABLED.",
      () => [],
      false,
      false,
    ),
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
