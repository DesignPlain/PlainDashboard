import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Kms_CryptoKeyVersionTemplate,
  Kms_CryptoKeyVersionTemplate_GetTypes,
} from "../types/Kms_CryptoKeyVersionTemplate";
import {
  Kms_CryptoKeyPrimary,
  Kms_CryptoKeyPrimary_GetTypes,
} from "../types/Kms_CryptoKeyPrimary";

export interface CryptoKeyArgs {
  /*
The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.
If not specified at creation time, the default duration is 24 hours.
*/
  DestroyScheduledDuration?: string;

  /*
The KeyRing that this key belongs to.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'`.


- - -
*/
  KeyRing?: string;

  /*
Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.
The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter `s` (seconds). It must be greater than a day (ie, 86400).
*/
  RotationPeriod?: string;

  /*
A template describing settings for new crypto key versions.
Structure is documented below.
*/
  VersionTemplate?: Kms_CryptoKeyVersionTemplate;

  // Whether this key may contain imported versions only.
  ImportOnly?: boolean;

  /*
Labels with user-defined metadata to apply to this resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The resource name for the CryptoKey.
  Name?: string;

  /*
The immutable purpose of this CryptoKey. See the
[purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose)
for possible inputs.
Default value is "ENCRYPT_DECRYPT".
*/
  Purpose?: string;

  /*
If set to true, the request will create a CryptoKey without any CryptoKeyVersions.
You must use the `gcp.kms.KeyRingImportJob` resource to import the CryptoKeyVersion.
*/
  SkipInitialVersionCreation?: boolean;
}
export class CryptoKey extends Resource {
  /*
Labels with user-defined metadata to apply to this resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The resource name for the CryptoKey.
  public Name?: string;

  /*
A copy of the primary CryptoKeyVersion that will be used by cryptoKeys.encrypt when this CryptoKey is given in EncryptRequest.name.
Keys with purpose ENCRYPT_DECRYPT may have a primary. For other keys, this field will be unset.
Structure is documented below.
*/
  public Primaries?: Array<Kms_CryptoKeyPrimary>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.
The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter `s` (seconds). It must be greater than a day (ie, 86400).
*/
  public RotationPeriod?: string;

  /*
The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.
If not specified at creation time, the default duration is 24 hours.
*/
  public DestroyScheduledDuration?: string;

  // Whether this key may contain imported versions only.
  public ImportOnly?: boolean;

  /*
The KeyRing that this key belongs to.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'`.


- - -
*/
  public KeyRing?: string;

  /*
The immutable purpose of this CryptoKey. See the
[purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose)
for possible inputs.
Default value is "ENCRYPT_DECRYPT".
*/
  public Purpose?: string;

  /*
If set to true, the request will create a CryptoKey without any CryptoKeyVersions.
You must use the `gcp.kms.KeyRingImportJob` resource to import the CryptoKeyVersion.
*/
  public SkipInitialVersionCreation?: boolean;

  /*
A template describing settings for new crypto key versions.
Structure is documented below.
*/
  public VersionTemplate?: Kms_CryptoKeyVersionTemplate;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DestroyScheduledDuration",
        "The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.\nIf not specified at creation time, the default duration is 24 hours.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "KeyRing",
        "The KeyRing that this key belongs to.\nFormat: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "RotationPeriod",
        "Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.\nThe first rotation will take place after the specified period. The rotation period has\nthe format of a decimal number with up to 9 fractional digits, followed by the\nletter `s` (seconds). It must be greater than a day (ie, 86400).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels with user-defined metadata to apply to this resource.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Purpose",
        'The immutable purpose of this CryptoKey. See the\n[purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose)\nfor possible inputs.\nDefault value is "ENCRYPT_DECRYPT".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "VersionTemplate",
        "A template describing settings for new crypto key versions.\nStructure is documented below.",
        Kms_CryptoKeyVersionTemplate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ImportOnly",
        "Whether this key may contain imported versions only.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name for the CryptoKey.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "SkipInitialVersionCreation",
        "If set to true, the request will create a CryptoKey without any CryptoKeyVersions.\nYou must use the `gcp.kms.KeyRingImportJob` resource to import the CryptoKeyVersion.",
        [],
        false,
        true,
      ),
    ];
  }
}
