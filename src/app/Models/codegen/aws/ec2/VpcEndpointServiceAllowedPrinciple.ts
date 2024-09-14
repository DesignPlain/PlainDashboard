import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VpcEndpointServiceAllowedPrincipleArgs {
  // The ARN of the principal to allow permissions.
  principalArn?: string;

  // The ID of the VPC endpoint service to allow permission.
  vpcEndpointServiceId?: string;
}
export class VpcEndpointServiceAllowedPrinciple extends DS_Resource {
  // The ARN of the principal to allow permissions.
  public principalArn?: string;

  // The ID of the VPC endpoint service to allow permission.
  public vpcEndpointServiceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "principalArn",
        "The ARN of the principal to allow permissions.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointServiceId",
        "The ID of the VPC endpoint service to allow permission.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
