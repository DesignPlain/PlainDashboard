import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EndpointPrivateDnsArgs {
  // Indicates whether a private hosted zone is associated with the VPC. Only applicable for `Interface` endpoints.
  privateDnsEnabled?: boolean;

  // VPC endpoint identifier.
  vpcEndpointId?: string;
}
export class EndpointPrivateDns extends DS_Resource {
  // Indicates whether a private hosted zone is associated with the VPC. Only applicable for `Interface` endpoints.
  public privateDnsEnabled?: boolean;

  // VPC endpoint identifier.
  public vpcEndpointId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'privateDnsEnabled',
        'Indicates whether a private hosted zone is associated with the VPC. Only applicable for `Interface` endpoints.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpcEndpointId',
        'VPC endpoint identifier.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
