import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LbStickinessPolicyArgs {
  // The cookie duration in seconds. This determines the length of the session stickiness.
  cookieDuration?: number;

  // The Session Stickiness state of the load balancer. `true` to activate session stickiness or `false` to deactivate session stickiness.
  enabled?: boolean;

  // The name of the load balancer to which you want to enable session stickiness.
  lbName?: string;
}
export class LbStickinessPolicy extends DS_Resource {
  // The cookie duration in seconds. This determines the length of the session stickiness.
  public cookieDuration?: number;

  // The Session Stickiness state of the load balancer. `true` to activate session stickiness or `false` to deactivate session stickiness.
  public enabled?: boolean;

  // The name of the load balancer to which you want to enable session stickiness.
  public lbName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'cookieDuration',
        'The cookie duration in seconds. This determines the length of the session stickiness.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        'The Session Stickiness state of the load balancer. `true` to activate session stickiness or `false` to deactivate session stickiness.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'lbName',
        'The name of the load balancer to which you want to enable session stickiness.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
