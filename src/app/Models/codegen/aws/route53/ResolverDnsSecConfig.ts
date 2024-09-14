import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ResolverDnsSecConfigArgs {
  // The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for.
  resourceId?: string;
}
export class ResolverDnsSecConfig extends DS_Resource {
  // The owner account ID of the virtual private cloud (VPC) for a configuration for DNSSEC validation.
  public ownerId?: string;

  // The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for.
  public resourceId?: string;

  // The validation status for a DNSSEC configuration. The status can be one of the following: `ENABLING`, `ENABLED`, `DISABLING` and `DISABLED`.
  public validationStatus?: string;

  // The ARN for a configuration for DNSSEC validation.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceId",
        "The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
