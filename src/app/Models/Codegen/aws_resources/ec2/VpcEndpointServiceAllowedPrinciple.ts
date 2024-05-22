import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpcEndpointServiceAllowedPrincipleArgs {
  // The ARN of the principal to allow permissions.
  principalArn?: string;

  // The ID of the VPC endpoint service to allow permission.
  vpcEndpointServiceId?: string;
}
export class VpcEndpointServiceAllowedPrinciple extends Resource {
  // The ID of the VPC endpoint service to allow permission.
  public vpcEndpointServiceId?: string;

  // The ARN of the principal to allow permissions.
  public principalArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointServiceId",
        "The ID of the VPC endpoint service to allow permission.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principalArn",
        "The ARN of the principal to allow permissions.",
        [],
        true,
        true,
      ),
    ];
  }
}
