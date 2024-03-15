import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { SecurityPolicyRule } from "../types/SecurityPolicyRule";
import { SecurityPolicyAdaptiveProtectionConfig } from "../types/SecurityPolicyAdaptiveProtectionConfig";
import { SecurityPolicyAdvancedOptionsConfig } from "../types/SecurityPolicyAdvancedOptionsConfig";
import { SecurityPolicyRecaptchaOptionsConfig } from "../types/SecurityPolicyRecaptchaOptionsConfig";

export interface SecurityPolicyArgs {
  /*
[Advanced Configuration Options](https://cloud.google.com/armor/docs/security-policy-overview#json-parsing).
Structure is documented below.
*/
  AdvancedOptionsConfig?: SecurityPolicyAdvancedOptionsConfig;

  // An optional description of this security policy. Max size is 2048.
  Description?: string;

  /*
The name of the security policy.

- - -
*/
  Name?: string;

  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  // [reCAPTCHA Configuration Options](https://cloud.google.com/armor/docs/configure-security-policies?hl=en#use_a_manual_challenge_to_distinguish_between_human_or_automated_clients). Structure is documented below.
  RecaptchaOptionsConfig?: SecurityPolicyRecaptchaOptionsConfig;

  /*
The set of rules that belong to this policy. There must always be a default
rule (rule with priority 2147483647 and match "\-"). If no rules are provided when creating a
security policy, a default rule with action "allow" will be added. Structure is documented below.
*/
  Rules?: Array<SecurityPolicyRule>;

  // The type indicates the intended use of the security policy. This field can be set only at resource creation time.
  Type?: string;

  // Configuration for [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.
  AdaptiveProtectionConfig?: SecurityPolicyAdaptiveProtectionConfig;
}
export class SecurityPolicy extends Resource {
  // The URI of the created resource.
  public SelfLink?: string;

  // The type indicates the intended use of the security policy. This field can be set only at resource creation time.
  public Type?: string;

  // An optional description of this security policy. Max size is 2048.
  public Description?: string;

  /*
[Advanced Configuration Options](https://cloud.google.com/armor/docs/security-policy-overview#json-parsing).
Structure is documented below.
*/
  public AdvancedOptionsConfig?: SecurityPolicyAdvancedOptionsConfig;

  // Fingerprint of this resource.
  public Fingerprint?: string;

  /*
The name of the security policy.

- - -
*/
  public Name?: string;

  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  // [reCAPTCHA Configuration Options](https://cloud.google.com/armor/docs/configure-security-policies?hl=en#use_a_manual_challenge_to_distinguish_between_human_or_automated_clients). Structure is documented below.
  public RecaptchaOptionsConfig?: SecurityPolicyRecaptchaOptionsConfig;

  /*
The set of rules that belong to this policy. There must always be a default
rule (rule with priority 2147483647 and match "\-"). If no rules are provided when creating a
security policy, a default rule with action "allow" will be added. Structure is documented below.
*/
  public Rules?: Array<SecurityPolicyRule>;

  // Configuration for [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.
  public AdaptiveProtectionConfig?: SecurityPolicyAdaptiveProtectionConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AdvancedOptionsConfig",
        "[Advanced Configuration Options](https://cloud.google.com/armor/docs/security-policy-overview#json-parsing).\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this security policy. Max size is 2048.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the security policy.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RecaptchaOptionsConfig",
        "[reCAPTCHA Configuration Options](https://cloud.google.com/armor/docs/configure-security-policies?hl=en#use_a_manual_challenge_to_distinguish_between_human_or_automated_clients). Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Rules",
        'The set of rules that belong to this policy. There must always be a default\nrule (rule with priority 2147483647 and match "\\*"). If no rules are provided when creating a\nsecurity policy, a default rule with action "allow" will be added. Structure is documented below.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type indicates the intended use of the security policy. This field can be set only at resource creation time.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AdaptiveProtectionConfig",
        "Configuration for [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.",
      ),
    ];
  }
}
