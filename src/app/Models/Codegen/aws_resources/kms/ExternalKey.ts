import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ExternalKeyArgs {
  // Specifies whether to disable the policy lockout check performed when creating or updating the key's policy. Setting this value to `true` increases the risk that the key becomes unmanageable. For more information, refer to the scenario in the [Default Key Policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section in the AWS Key Management Service Developer Guide. Defaults to `false`.
  bypassPolicyLockoutSafetyCheck?: boolean;

  // A key-value map of tags to assign to the key. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. If not specified, key material does not expire. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  validTo?: string;

  // Duration in days after which the key is deleted after destruction of the resource. Must be between `7` and `30` days. Defaults to `30`.
  deletionWindowInDays?: number;

  // Description of the key.
  description?: string;

  // Specifies whether the key is enabled. Keys pending import can only be `false`. Imported keys default to `true` unless expired.
  enabled?: boolean;

  // Base64 encoded 256-bit symmetric encryption key material to import. The CMK is permanently associated with this key material. The same key material can be reimported, but you cannot import different key material.
  keyMaterialBase64?: string;

  // Indicates whether the KMS key is a multi-Region (`true`) or regional (`false`) key. Defaults to `false`.
  multiRegion?: boolean;

  // A key policy JSON document. If you do not provide a key policy, AWS KMS attaches a default key policy to the CMK.
  policy?: string;
}
export class ExternalKey extends Resource {
  // Time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. If not specified, key material does not expire. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  public validTo?: string;

  // A key policy JSON document. If you do not provide a key policy, AWS KMS attaches a default key policy to the CMK.
  public policy?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The cryptographic operations for which you can use the CMK.
  public keyUsage?: string;

  // Duration in days after which the key is deleted after destruction of the resource. Must be between `7` and `30` days. Defaults to `30`.
  public deletionWindowInDays?: number;

  // Specifies whether the key is enabled. Keys pending import can only be `false`. Imported keys default to `true` unless expired.
  public enabled?: boolean;

  // Whether the key material expires. Empty when pending key material import, otherwise `KEY_MATERIAL_EXPIRES` or `KEY_MATERIAL_DOES_NOT_EXPIRE`.
  public expirationModel?: string;

  // Indicates whether the KMS key is a multi-Region (`true`) or regional (`false`) key. Defaults to `false`.
  public multiRegion?: boolean;

  // A key-value map of tags to assign to the key. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the key.
  public arn?: string;

  // Description of the key.
  public description?: string;

  // Base64 encoded 256-bit symmetric encryption key material to import. The CMK is permanently associated with this key material. The same key material can be reimported, but you cannot import different key material.
  public keyMaterialBase64?: string;

  // The state of the CMK.
  public keyState?: string;

  // Specifies whether to disable the policy lockout check performed when creating or updating the key's policy. Setting this value to `true` increases the risk that the key becomes unmanageable. For more information, refer to the scenario in the [Default Key Policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section in the AWS Key Management Service Developer Guide. Defaults to `false`.
  public bypassPolicyLockoutSafetyCheck?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A key-value map of tags to assign to the key. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "validTo",
        "Time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. If not specified, key material does not expire. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyMaterialBase64",
        "Base64 encoded 256-bit symmetric encryption key material to import. The CMK is permanently associated with this key material. The same key material can be reimported, but you cannot import different key material.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multiRegion",
        "Indicates whether the KMS key is a multi-Region (`true`) or regional (`false`) key. Defaults to `false`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "A key policy JSON document. If you do not provide a key policy, AWS KMS attaches a default key policy to the CMK.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "bypassPolicyLockoutSafetyCheck",
        "Specifies whether to disable the policy lockout check performed when creating or updating the key's policy. Setting this value to `true` increases the risk that the key becomes unmanageable. For more information, refer to the scenario in the [Default Key Policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section in the AWS Key Management Service Developer Guide. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "deletionWindowInDays",
        "Duration in days after which the key is deleted after destruction of the resource. Must be between `7` and `30` days. Defaults to `30`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the key.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Specifies whether the key is enabled. Keys pending import can only be `false`. Imported keys default to `true` unless expired.",
        [],
        false,
        false,
      ),
    ];
  }
}
