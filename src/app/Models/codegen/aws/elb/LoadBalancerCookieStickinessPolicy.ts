import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LoadBalancerCookieStickinessPolicyArgs {
  /*
The load balancer port to which the policy
should be applied. This must be an active listener on the load
balancer.
*/
  lbPort?: number;

  /*
The load balancer to which the policy
should be attached.
*/
  loadBalancer?: string;

  // The name of the stickiness policy.
  name?: string;

  /*
The time period after which
the session cookie should be considered stale, expressed in seconds.
*/
  cookieExpirationPeriod?: number;
}
export class LoadBalancerCookieStickinessPolicy extends DS_Resource {
  /*
The time period after which
the session cookie should be considered stale, expressed in seconds.
*/
  public cookieExpirationPeriod?: number;

  /*
The load balancer port to which the policy
should be applied. This must be an active listener on the load
balancer.
*/
  public lbPort?: number;

  /*
The load balancer to which the policy
should be attached.
*/
  public loadBalancer?: string;

  // The name of the stickiness policy.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the stickiness policy.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'cookieExpirationPeriod',
        'The time period after which\nthe session cookie should be considered stale, expressed in seconds.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'lbPort',
        'The load balancer port to which the policy\nshould be applied. This must be an active listener on the load\nbalancer.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'loadBalancer',
        'The load balancer to which the policy\nshould be attached.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
