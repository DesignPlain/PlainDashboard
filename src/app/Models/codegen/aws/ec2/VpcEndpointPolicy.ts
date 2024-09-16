import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VpcEndpointPolicyArgs {
  // A policy to attach to the endpoint that controls access to the service. Defaults to full access. All `Gateway` and some `Interface` endpoints support policies - see the [relevant AWS documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-access.html) for more details.
  policy?: string;

  // The VPC Endpoint ID.
  vpcEndpointId?: string;
}
export class VpcEndpointPolicy extends DS_Resource {
  // A policy to attach to the endpoint that controls access to the service. Defaults to full access. All `Gateway` and some `Interface` endpoints support policies - see the [relevant AWS documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-access.html) for more details.
  public policy?: string;

  // The VPC Endpoint ID.
  public vpcEndpointId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'policy',
        'A policy to attach to the endpoint that controls access to the service. Defaults to full access. All `Gateway` and some `Interface` endpoints support policies - see the [relevant AWS documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-access.html) for more details.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpcEndpointId',
        'The VPC Endpoint ID.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
