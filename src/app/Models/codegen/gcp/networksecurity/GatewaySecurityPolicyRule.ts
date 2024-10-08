import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface GatewaySecurityPolicyRuleArgs {
  // Free-text description of the resource.
  description?: string;

  // Whether the rule is enforced.
  enabled?: boolean;

  /*
The name of the gatewat security policy this rule belongs to.


- - -
*/
  gatewaySecurityPolicy?: string;

  // The location of the gateway security policy.
  location?: string;

  /*
Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule}
rule should match the pattern: (^a-z?$).
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // CEL expression for matching on L7/application level criteria.
  applicationMatcher?: string;

  /*
Profile which tells what the primitive action should be. Possible values are: - ALLOW - DENY.
Possible values are: `BASIC_PROFILE_UNSPECIFIED`, `ALLOW`, `DENY`.
*/
  basicProfile?: string;

  /*
Flag to enable TLS inspection of traffic matching on. Can only be true if the
parent GatewaySecurityPolicy references a TLSInspectionConfig.
*/
  tlsInspectionEnabled?: boolean;

  // Priority of the rule. Lower number corresponds to higher precedence.
  priority?: number;

  // CEL expression for matching on session criteria.
  sessionMatcher?: string;
}
export class GatewaySecurityPolicyRule extends DS_Resource {
  /*
The name of the gatewat security policy this rule belongs to.


- - -
*/
  public gatewaySecurityPolicy?: string;

  // The location of the gateway security policy.
  public location?: string;

  /*
Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule}
rule should match the pattern: (^a-z?$).
*/
  public name?: string;

  // CEL expression for matching on L7/application level criteria.
  public applicationMatcher?: string;

  // Whether the rule is enforced.
  public enabled?: boolean;

  /*
The timestamp when the resource was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
*/
  public createTime?: string;

  /*
Flag to enable TLS inspection of traffic matching on. Can only be true if the
parent GatewaySecurityPolicy references a TLSInspectionConfig.
*/
  public tlsInspectionEnabled?: boolean;

  // CEL expression for matching on session criteria.
  public sessionMatcher?: string;

  /*
Profile which tells what the primitive action should be. Possible values are: - ALLOW - DENY.
Possible values are: `BASIC_PROFILE_UNSPECIFIED`, `ALLOW`, `DENY`.
*/
  public basicProfile?: string;

  // Server-defined URL of this resource.
  public selfLink?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The timestamp when the resource was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  // Free-text description of the resource.
  public description?: string;

  // Priority of the rule. Lower number corresponds to higher precedence.
  public priority?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'sessionMatcher',
        'CEL expression for matching on session criteria.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Free-text description of the resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        'Whether the rule is enforced.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'gatewaySecurityPolicy',
        'The name of the gatewat security policy this rule belongs to.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'tlsInspectionEnabled',
        'Flag to enable TLS inspection of traffic matching on. Can only be true if the\nparent GatewaySecurityPolicy references a TLSInspectionConfig.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'priority',
        'Priority of the rule. Lower number corresponds to higher precedence.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location of the gateway security policy.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule}\nrule should match the pattern: (^a-z?$).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'applicationMatcher',
        'CEL expression for matching on L7/application level criteria.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'basicProfile',
        'Profile which tells what the primitive action should be. Possible values are: * ALLOW * DENY.\nPossible values are: `BASIC_PROFILE_UNSPECIFIED`, `ALLOW`, `DENY`.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
