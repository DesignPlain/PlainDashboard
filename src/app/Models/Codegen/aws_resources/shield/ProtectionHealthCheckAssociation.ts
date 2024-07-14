import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ProtectionHealthCheckAssociationArgs {
  // The ARN (Amazon Resource Name) of the Route53 Health Check resource which will be associated to the protected resource.
  healthCheckArn?: string;

  // The ID of the protected resource.
  shieldProtectionId?: string;
}
export class ProtectionHealthCheckAssociation extends Resource {
  // The ARN (Amazon Resource Name) of the Route53 Health Check resource which will be associated to the protected resource.
  public healthCheckArn?: string;

  // The ID of the protected resource.
  public shieldProtectionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "healthCheckArn",
        "The ARN (Amazon Resource Name) of the Route53 Health Check resource which will be associated to the protected resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "shieldProtectionId",
        "The ID of the protected resource.",
        [],
        true,
        true,
      ),
    ];
  }
}
