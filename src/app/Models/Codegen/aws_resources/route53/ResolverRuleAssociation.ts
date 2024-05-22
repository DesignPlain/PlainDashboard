import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ResolverRuleAssociationArgs {
  // A name for the association that you're creating between a resolver rule and a VPC.
  name?: string;

  // The ID of the resolver rule that you want to associate with the VPC.
  resolverRuleId?: string;

  // The ID of the VPC that you want to associate the resolver rule with.
  vpcId?: string;
}
export class ResolverRuleAssociation extends Resource {
  // A name for the association that you're creating between a resolver rule and a VPC.
  public name?: string;

  // The ID of the resolver rule that you want to associate with the VPC.
  public resolverRuleId?: string;

  // The ID of the VPC that you want to associate the resolver rule with.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name for the association that you're creating between a resolver rule and a VPC.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resolverRuleId",
        "The ID of the resolver rule that you want to associate with the VPC.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The ID of the VPC that you want to associate the resolver rule with.",
        [],
        true,
        true,
      ),
    ];
  }
}
