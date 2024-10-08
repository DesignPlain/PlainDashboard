import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mskconnect_ConnectorKafkaClusterApacheKafkaClusterVpc {
  // The security groups for the connector.
  securityGroups?: Array<string>;

  // The subnets for the connector.
  subnets?: Array<string>;
}

export function mskconnect_ConnectorKafkaClusterApacheKafkaClusterVpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'securityGroups',
      'The security groups for the connector.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnets',
      'The subnets for the connector.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
