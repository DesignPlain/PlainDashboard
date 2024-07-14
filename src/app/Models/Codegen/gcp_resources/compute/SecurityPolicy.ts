import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_SecurityPolicyRecaptchaOptionsConfig,
  compute_SecurityPolicyRecaptchaOptionsConfig_GetTypes,
} from "../types/compute_SecurityPolicyRecaptchaOptionsConfig";
import {
  compute_SecurityPolicyRule,
  compute_SecurityPolicyRule_GetTypes,
} from "../types/compute_SecurityPolicyRule";
import {
  compute_SecurityPolicyAdaptiveProtectionConfig,
  compute_SecurityPolicyAdaptiveProtectionConfig_GetTypes,
} from "../types/compute_SecurityPolicyAdaptiveProtectionConfig";
import {
  compute_SecurityPolicyAdvancedOptionsConfig,
  compute_SecurityPolicyAdvancedOptionsConfig_GetTypes,
} from "../types/compute_SecurityPolicyAdvancedOptionsConfig";

export interface SecurityPolicyArgs {
  // An optional description of this security policy. Max size is 2048.
  description?: string;

  /*
The name of the security policy.

- - -
*/
  name?: string;

  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  // [reCAPTCHA Configuration Options](https://cloud.google.com/armor/docs/configure-security-policies?hl=en#use_a_manual_challenge_to_distinguish_between_human_or_automated_clients). Structure is documented below.
  recaptchaOptionsConfig?: compute_SecurityPolicyRecaptchaOptionsConfig;

  /*
The set of rules that belong to this policy. There must always be a default
rule (rule with priority 2147483647 and match "\-"). If no rules are provided when creating a
security policy, a default rule with action "allow" will be added. Structure is documented below.
*/
  rules?: Array<compute_SecurityPolicyRule>;

  // The type indicates the intended use of the security policy. This field can be set only at resource creation time.
  type?: string;

  // Configuration for [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.
  adaptiveProtectionConfig?: compute_SecurityPolicyAdaptiveProtectionConfig;

  /*
[Advanced Configuration Options](https://cloud.google.com/armor/docs/security-policy-overview#json-parsing).
Structure is documented below.
*/
  advancedOptionsConfig?: compute_SecurityPolicyAdvancedOptionsConfig;
}
export class SecurityPolicy extends Resource {
  // Configuration for [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.
  public adaptiveProtectionConfig?: compute_SecurityPolicyAdaptiveProtectionConfig;

  // Fingerprint of this resource.
  public fingerprint?: string;

  /*
The name of the security policy.

- - -
*/
  public name?: string;

  // The type indicates the intended use of the security policy. This field can be set only at resource creation time.
  public type?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
[Advanced Configuration Options](https://cloud.google.com/armor/docs/security-policy-overview#json-parsing).
Structure is documented below.
*/
  public advancedOptionsConfig?: compute_SecurityPolicyAdvancedOptionsConfig;

  // An optional description of this security policy. Max size is 2048.
  public description?: string;

  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  // [reCAPTCHA Configuration Options](https://cloud.google.com/armor/docs/configure-security-policies?hl=en#use_a_manual_challenge_to_distinguish_between_human_or_automated_clients). Structure is documented below.
  public recaptchaOptionsConfig?: compute_SecurityPolicyRecaptchaOptionsConfig;

  /*
The set of rules that belong to this policy. There must always be a default
rule (rule with priority 2147483647 and match "\-"). If no rules are provided when creating a
security policy, a default rule with action "allow" will be added. Structure is documented below.
*/
  public rules?: Array<compute_SecurityPolicyRule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "adaptiveProtectionConfig",
        "Configuration for [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview?hl=en). Structure is documented below.",
        compute_SecurityPolicyAdaptiveProtectionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "advancedOptionsConfig",
        "[Advanced Configuration Options](https://cloud.google.com/armor/docs/security-policy-overview#json-parsing).\nStructure is documented below.",
        compute_SecurityPolicyAdvancedOptionsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this security policy. Max size is 2048.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the security policy.\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "recaptchaOptionsConfig",
        "[reCAPTCHA Configuration Options](https://cloud.google.com/armor/docs/configure-security-policies?hl=en#use_a_manual_challenge_to_distinguish_between_human_or_automated_clients). Structure is documented below.",
        compute_SecurityPolicyRecaptchaOptionsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        'The set of rules that belong to this policy. There must always be a default\nrule (rule with priority 2147483647 and match "\\*"). If no rules are provided when creating a\nsecurity policy, a default rule with action "allow" will be added. Structure is documented below.',
        compute_SecurityPolicyRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type indicates the intended use of the security policy. This field can be set only at resource creation time.",
        [],
        false,
        false,
      ),
    ];
  }
}
