import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ResolverConfigArgs {
  // Indicates whether or not the Resolver will create autodefined rules for reverse DNS lookups. Valid values: `ENABLE`, `DISABLE`.
  autodefinedReverseFlag?: string;

  // The ID of the VPC that the configuration is for.
  resourceId?: string;
}
export class ResolverConfig extends Resource {
  // The AWS account ID of the owner of the VPC that this resolver configuration applies to.
  public ownerId?: string;

  // The ID of the VPC that the configuration is for.
  public resourceId?: string;

  // Indicates whether or not the Resolver will create autodefined rules for reverse DNS lookups. Valid values: `ENABLE`, `DISABLE`.
  public autodefinedReverseFlag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "autodefinedReverseFlag",
        "Indicates whether or not the Resolver will create autodefined rules for reverse DNS lookups. Valid values: `ENABLE`, `DISABLE`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceId",
        "The ID of the VPC that the configuration is for.",
        [],
        true,
        true,
      ),
    ];
  }
}
