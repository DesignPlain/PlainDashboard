import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface LoadBalancerBackendServerPolicyArgs {
  // The instance port to apply the policy to.
  instancePort?: number;

  // The load balancer to attach the policy to.
  loadBalancerName?: string;

  // List of Policy Names to apply to the backend server.
  policyNames?: Array<string>;
}
export class LoadBalancerBackendServerPolicy extends DS_Resource {
  // List of Policy Names to apply to the backend server.
  public policyNames?: Array<string>;

  // The instance port to apply the policy to.
  public instancePort?: number;

  // The load balancer to attach the policy to.
  public loadBalancerName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "instancePort",
        "The instance port to apply the policy to.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancerName",
        "The load balancer to attach the policy to.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "policyNames",
        "List of Policy Names to apply to the backend server.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
