import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  elb_LoadBalancerPolicyPolicyAttribute,
  elb_LoadBalancerPolicyPolicyAttribute_GetTypes,
} from "../types/elb_LoadBalancerPolicyPolicyAttribute";

export interface LoadBalancerPolicyArgs {
  // The load balancer on which the policy is defined.
  loadBalancerName?: string;

  // Policy attribute to apply to the policy.
  policyAttributes?: Array<elb_LoadBalancerPolicyPolicyAttribute>;

  // The name of the load balancer policy.
  policyName?: string;

  // The policy type.
  policyTypeName?: string;
}
export class LoadBalancerPolicy extends Resource {
  // The load balancer on which the policy is defined.
  public loadBalancerName?: string;

  // Policy attribute to apply to the policy.
  public policyAttributes?: Array<elb_LoadBalancerPolicyPolicyAttribute>;

  // The name of the load balancer policy.
  public policyName?: string;

  // The policy type.
  public policyTypeName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "policyAttributes",
        "Policy attribute to apply to the policy.",
        elb_LoadBalancerPolicyPolicyAttribute_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyName",
        "The name of the load balancer policy.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyTypeName",
        "The policy type.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancerName",
        "The load balancer on which the policy is defined.",
        [],
        true,
        true,
      ),
    ];
  }
}
