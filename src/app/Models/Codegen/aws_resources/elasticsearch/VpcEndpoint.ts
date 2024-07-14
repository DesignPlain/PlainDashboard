import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  elasticsearch_VpcEndpointVpcOptions,
  elasticsearch_VpcEndpointVpcOptions_GetTypes,
} from "../types/elasticsearch_VpcEndpointVpcOptions";

export interface VpcEndpointArgs {
  // Options to specify the subnets and security groups for the endpoint.
  vpcOptions?: elasticsearch_VpcEndpointVpcOptions;

  // Specifies the Amazon Resource Name (ARN) of the domain to create the endpoint for
  domainArn?: string;
}
export class VpcEndpoint extends Resource {
  // Specifies the Amazon Resource Name (ARN) of the domain to create the endpoint for
  public domainArn?: string;

  // The connection endpoint ID for connecting to the domain.
  public endpoint?: string;

  // Options to specify the subnets and security groups for the endpoint.
  public vpcOptions?: elasticsearch_VpcEndpointVpcOptions;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "vpcOptions",
        "Options to specify the subnets and security groups for the endpoint.",
        elasticsearch_VpcEndpointVpcOptions_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainArn",
        "Specifies the Amazon Resource Name (ARN) of the domain to create the endpoint for",
        [],
        true,
        true,
      ),
    ];
  }
}
