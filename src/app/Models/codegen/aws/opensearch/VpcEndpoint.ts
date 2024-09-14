import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opensearch_VpcEndpointVpcOptions,
  opensearch_VpcEndpointVpcOptions_GetTypes,
} from "../types/opensearch_VpcEndpointVpcOptions";

export interface VpcEndpointArgs {
  // Specifies the Amazon Resource Name (ARN) of the domain to create the endpoint for
  domainArn?: string;

  // Options to specify the subnets and security groups for the endpoint.
  vpcOptions?: opensearch_VpcEndpointVpcOptions;
}
export class VpcEndpoint extends DS_Resource {
  // Specifies the Amazon Resource Name (ARN) of the domain to create the endpoint for
  public domainArn?: string;

  // The connection endpoint ID for connecting to the domain.
  public endpoint?: string;

  // Options to specify the subnets and security groups for the endpoint.
  public vpcOptions?: opensearch_VpcEndpointVpcOptions;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domainArn",
        "Specifies the Amazon Resource Name (ARN) of the domain to create the endpoint for",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcOptions",
        "Options to specify the subnets and security groups for the endpoint.",
        () => opensearch_VpcEndpointVpcOptions_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
