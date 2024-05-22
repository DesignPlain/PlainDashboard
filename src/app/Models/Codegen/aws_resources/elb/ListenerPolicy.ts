import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ListenerPolicyArgs {
  // The load balancer to attach the policy to.
  loadBalancerName?: string;

  // The load balancer listener port to apply the policy to.
  loadBalancerPort?: number;

  // List of Policy Names to apply to the backend server.
  policyNames?: Array<string>;

  // Map of arbitrary keys and values that, when changed, will trigger an update.
  triggers?: Map<string, string>;
}
export class ListenerPolicy extends Resource {
  // The load balancer to attach the policy to.
  public loadBalancerName?: string;

  // The load balancer listener port to apply the policy to.
  public loadBalancerPort?: number;

  // List of Policy Names to apply to the backend server.
  public policyNames?: Array<string>;

  // Map of arbitrary keys and values that, when changed, will trigger an update.
  public triggers?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "triggers",
        "Map of arbitrary keys and values that, when changed, will trigger an update.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancerName",
        "The load balancer to attach the policy to.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "loadBalancerPort",
        "The load balancer listener port to apply the policy to.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "policyNames",
        "List of Policy Names to apply to the backend server.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
