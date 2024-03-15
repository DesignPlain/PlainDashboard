import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GatewaySecurityPolicyRuleArgs {
  // The location of the gateway security policy.
  Location?: string;

  // Priority of the rule. Lower number corresponds to higher precedence.
  Priority?: number;

  /*
Flag to enable TLS inspection of traffic matching on. Can only be true if the
parent GatewaySecurityPolicy references a TLSInspectionConfig.
*/
  TlsInspectionEnabled?: boolean;

  // CEL expression for matching on L7/application level criteria.
  ApplicationMatcher?: string;

  /*
Profile which tells what the primitive action should be. Possible values are: - ALLOW - DENY.
Possible values are: `BASIC_PROFILE_UNSPECIFIED`, `ALLOW`, `DENY`.
*/
  BasicProfile?: string;

  // Free-text description of the resource.
  Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // CEL expression for matching on session criteria.
  SessionMatcher?: string;

  // Whether the rule is enforced.
  Enabled?: boolean;

  /*
The name of the gatewat security policy this rule belongs to.


- - -
*/
  GatewaySecurityPolicy?: string;

  /*
Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule}
rule should match the pattern: (^a-z?$).
*/
  Name?: string;
}
export class GatewaySecurityPolicyRule extends Resource {
  // The location of the gateway security policy.
  public Location?: string;

  // Server-defined URL of this resource.
  public SelfLink?: string;

  /*
Flag to enable TLS inspection of traffic matching on. Can only be true if the
parent GatewaySecurityPolicy references a TLSInspectionConfig.
*/
  public TlsInspectionEnabled?: boolean;

  // CEL expression for matching on L7/application level criteria.
  public ApplicationMatcher?: string;

  // Free-text description of the resource.
  public Description?: string;

  /*
The timestamp when the resource was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
The timestamp when the resource was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
*/
  public CreateTime?: string;

  // Whether the rule is enforced.
  public Enabled?: boolean;

  /*
The name of the gatewat security policy this rule belongs to.


- - -
*/
  public GatewaySecurityPolicy?: string;

  // Priority of the rule. Lower number corresponds to higher precedence.
  public Priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Profile which tells what the primitive action should be. Possible values are: - ALLOW - DENY.
Possible values are: `BASIC_PROFILE_UNSPECIFIED`, `ALLOW`, `DENY`.
*/
  public BasicProfile?: string;

  /*
Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule}
rule should match the pattern: (^a-z?$).
*/
  public Name?: string;

  // CEL expression for matching on session criteria.
  public SessionMatcher?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the gateway security policy.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SessionMatcher",
        "CEL expression for matching on session criteria.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Enabled",
        "Whether the rule is enforced.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GatewaySecurityPolicy",
        "The name of the gatewat security policy this rule belongs to.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule}\nrule should match the pattern: (^a-z?$).",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "Priority of the rule. Lower number corresponds to higher precedence.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "TlsInspectionEnabled",
        "Flag to enable TLS inspection of traffic matching on. Can only be true if the\nparent GatewaySecurityPolicy references a TLSInspectionConfig.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApplicationMatcher",
        "CEL expression for matching on L7/application level criteria.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BasicProfile",
        "Profile which tells what the primitive action should be. Possible values are: * ALLOW * DENY.\nPossible values are: `BASIC_PROFILE_UNSPECIFIED`, `ALLOW`, `DENY`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Free-text description of the resource.",
      ),
    ];
  }
}
