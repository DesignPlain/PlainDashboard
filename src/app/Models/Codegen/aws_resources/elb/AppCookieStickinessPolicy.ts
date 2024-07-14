import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AppCookieStickinessPolicyArgs {
  /*
Load balancer port to which the policy
should be applied. This must be an active listener on the load
balancer.
*/
  lbPort?: number;

  /*
Name of load balancer to which the policy
should be attached.
*/
  loadBalancer?: string;

  // Name of the stickiness policy.
  name?: string;

  // Application cookie whose lifetime the ELB's cookie should follow.
  cookieName?: string;
}
export class AppCookieStickinessPolicy extends Resource {
  /*
Load balancer port to which the policy
should be applied. This must be an active listener on the load
balancer.
*/
  public lbPort?: number;

  /*
Name of load balancer to which the policy
should be attached.
*/
  public loadBalancer?: string;

  // Name of the stickiness policy.
  public name?: string;

  // Application cookie whose lifetime the ELB's cookie should follow.
  public cookieName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "loadBalancer",
        "Name of load balancer to which the policy\nshould be attached.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the stickiness policy.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cookieName",
        "Application cookie whose lifetime the ELB's cookie should follow.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "lbPort",
        "Load balancer port to which the policy\nshould be applied. This must be an active listener on the load\nbalancer.",
        [],
        true,
        true,
      ),
    ];
  }
}
