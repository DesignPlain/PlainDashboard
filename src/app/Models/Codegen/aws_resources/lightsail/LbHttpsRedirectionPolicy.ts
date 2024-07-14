import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface LbHttpsRedirectionPolicyArgs {
  // The Https Redirection state of the load balancer. `true` to activate http to https redirection or `false` to deactivate http to https redirection.
  enabled?: boolean;

  // The name of the load balancer to which you want to enable http to https redirection.
  lbName?: string;
}
export class LbHttpsRedirectionPolicy extends Resource {
  // The Https Redirection state of the load balancer. `true` to activate http to https redirection or `false` to deactivate http to https redirection.
  public enabled?: boolean;

  // The name of the load balancer to which you want to enable http to https redirection.
  public lbName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "The Https Redirection state of the load balancer. `true` to activate http to https redirection or `false` to deactivate http to https redirection.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "lbName",
        "The name of the load balancer to which you want to enable http to https redirection.",
        [],
        true,
        true,
      ),
    ];
  }
}
