import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ResolverDnsSecConfigArgs {
  // The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for.
  resourceId?: string;
}
export class ResolverDnsSecConfig extends Resource {
  // The ARN for a configuration for DNSSEC validation.
  public arn?: string;

  // The owner account ID of the virtual private cloud (VPC) for a configuration for DNSSEC validation.
  public ownerId?: string;

  // The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for.
  public resourceId?: string;

  // The validation status for a DNSSEC configuration. The status can be one of the following: `ENABLING`, `ENABLED`, `DISABLING` and `DISABLED`.
  public validationStatus?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceId",
        "The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for.",
        [],
        true,
        true,
      ),
    ];
  }
}
