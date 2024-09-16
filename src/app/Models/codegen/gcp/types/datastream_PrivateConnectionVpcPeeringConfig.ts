import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datastream_PrivateConnectionVpcPeeringConfig {
  /*
A free subnet for peering. (CIDR of /29)

- - -
*/
  subnet?: string;

  /*
Fully qualified name of the VPC that Datastream will peer to.
Format: projects/{project}/global/{networks}/{name}
*/
  vpc?: string;
}

export function datastream_PrivateConnectionVpcPeeringConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'subnet',
      'A free subnet for peering. (CIDR of /29)\n\n- - -',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpc',
      'Fully qualified name of the VPC that Datastream will peer to.\nFormat: projects/{project}/global/{networks}/{name}',
      () => [],
      true,
      true,
    ),
  ];
}
