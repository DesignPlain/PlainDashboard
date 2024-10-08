import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ecr_ReplicationConfigurationReplicationConfigurationRuleDestination {
  // A Region to replicate to.
  region?: string;

  // The account ID of the destination registry to replicate to.
  registryId?: string;
}

export function ecr_ReplicationConfigurationReplicationConfigurationRuleDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'registryId',
      'The account ID of the destination registry to replicate to.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      'A Region to replicate to.',
      () => [],
      true,
      false,
    ),
  ];
}
