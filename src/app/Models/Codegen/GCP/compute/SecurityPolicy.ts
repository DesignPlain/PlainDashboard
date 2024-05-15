import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SecurityPolicyAdvancedOptionsConfig,
  Compute_SecurityPolicyAdvancedOptionsConfig_GetTypes,
} from "../types/Compute_SecurityPolicyAdvancedOptionsConfig";
import {
  Compute_SecurityPolicyRecaptchaOptionsConfig,
  Compute_SecurityPolicyRecaptchaOptionsConfig_GetTypes,
} from "../types/Compute_SecurityPolicyRecaptchaOptionsConfig";
import {
  Compute_SecurityPolicyRule,
  Compute_SecurityPolicyRule_GetTypes,
} from "../types/Compute_SecurityPolicyRule";
import {
  Compute_SecurityPolicyAdaptiveProtectionConfig,
  Compute_SecurityPolicyAdaptiveProtectionConfig_GetTypes,
} from "../types/Compute_SecurityPolicyAdaptiveProtectionConfig";

export interface SecurityPolicyArgs {
  /*
[Advanced Configuration Options](https://cloud.google.com/armor/docs/security-policy-overview#json-parsing).
Structure is documented below.
*/
  AdvancedOptionsConfig?: Compute_SecurityPolicyAdvancedOptionsConfig;

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
  RecaptchaOptionsConfig?: Compute_SecurityPolicyRecaptchaOptionsConfig;

  /*
The set of rules that belong to this policy. There must always be a default
rule (rule with priority 2147483647 and match "\-"). If no rules are provided when creating a
security policy, a default rule with action "allow" will be added. Structure is documented below.
*/
  Rules?: Array<Compute_SecurityPolicyRule>;

  // The type indicates the intended use of the security policy. This field can be set only at resource creation time.
  Type?: string;

  // Configuration for [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.
  AdaptiveProtectionConfig?: Compute_SecurityPolicyAdaptiveProtectionConfig;
}
export class SecurityPolicy extends Resource {
  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  // [reCAPTCHA Configuration Options](https://cloud.google.com/armor/docs/configure-security-policies?hl=en#use_a_manual_challenge_to_distinguish_between_human_or_automated_clients). Structure is documented below.
  public RecaptchaOptionsConfig?: Compute_SecurityPolicyRecaptchaOptionsConfig;

  // The URI of the created resource.
  public SelfLink?: string;

  // The type indicates the intended use of the security policy. This field can be set only at resource creation time.
  public Type?: string;

  /*
[Advanced Configuration Options](https://cloud.google.com/armor/docs/security-policy-overview#json-parsing).
Structure is documented below.
*/
  public AdvancedOptionsConfig?: Compute_SecurityPolicyAdvancedOptionsConfig;

  // Fingerprint of this resource.
  public Fingerprint?: string;

  /*
The name of the security policy.

- - -
*/
  public Name?: string;

  /*
The set of rules that belong to this policy. There must always be a default
rule (rule with priority 2147483647 and match "\-"). If no rules are provided when creating a
security policy, a default rule with action "allow" will be added. Structure is documented below.
*/
  public Rules?: Array<Compute_SecurityPolicyRule>;

  // Configuration for [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.
  public AdaptiveProtectionConfig?: Compute_SecurityPolicyAdaptiveProtectionConfig;

  // An optional description of this security policy. Max size is 2048.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "RecaptchaOptionsConfig",
        "[reCAPTCHA Configuration Options](https://cloud.google.com/armor/docs/configure-security-policies?hl=en#use_a_manual_challenge_to_distinguish_between_human_or_automated_clients). Structure is documented below.",
        Compute_SecurityPolicyRecaptchaOptionsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Rules",
        'The set of rules that belong to this policy. There must always be a default\nrule (rule with priority 2147483647 and match "\\*"). If no rules are provided when creating a\nsecurity policy, a default rule with action "allow" will be added. Structure is documented below.',
        Compute_SecurityPolicyRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type indicates the intended use of the security policy. This field can be set only at resource creation time.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AdaptiveProtectionConfig",
        "Configuration for [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.",
        Compute_SecurityPolicyAdaptiveProtectionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AdvancedOptionsConfig",
        "[Advanced Configuration Options](https://cloud.google.com/armor/docs/security-policy-overview#json-parsing).\nStructure is documented below.",
        Compute_SecurityPolicyAdvancedOptionsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this security policy. Max size is 2048.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the security policy.\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
