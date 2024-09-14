import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  signer_SigningProfileSignatureValidityPeriod,
  signer_SigningProfileSignatureValidityPeriod_GetTypes,
} from "../types/signer_SigningProfileSignatureValidityPeriod";
import {
  signer_SigningProfileSigningMaterial,
  signer_SigningProfileSigningMaterial_GetTypes,
} from "../types/signer_SigningProfileSigningMaterial";
import {
  signer_SigningProfileRevocationRecord,
  signer_SigningProfileRevocationRecord_GetTypes,
} from "../types/signer_SigningProfileRevocationRecord";

export interface SigningProfileArgs {
  // The validity period for a signing job. See `signature_validity_period` Block below for details.
  signatureValidityPeriod?: signer_SigningProfileSignatureValidityPeriod;

  // The AWS Certificate Manager certificate that will be used to sign code with the new signing profile. See `signing_material` Block below for details.
  signingMaterial?: signer_SigningProfileSigningMaterial;

  // A list of tags associated with the signing profile. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  name?: string;

  //
  namePrefix?: string;

  // The ID of the platform that is used by the target signing profile.
  platformId?: string;
}
export class SigningProfile extends DS_Resource {
  // The signing profile ARN, including the profile version.
  public versionArn?: string;

  // The Amazon Resource Name (ARN) for the signing profile.
  public arn?: string;

  //
  public name?: string;

  // Revocation information for a signing profile. See `revocation_record` Block below for details.
  public revocationRecords?: Array<signer_SigningProfileRevocationRecord>;

  // The AWS Certificate Manager certificate that will be used to sign code with the new signing profile. See `signing_material` Block below for details.
  public signingMaterial?: signer_SigningProfileSigningMaterial;

  // The status of the target signing profile.
  public status?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The current version of the signing profile.
  public version?: string;

  //
  public namePrefix?: string;

  // A human-readable name for the signing platform associated with the signing profile.
  public platformDisplayName?: string;

  // The ID of the platform that is used by the target signing profile.
  public platformId?: string;

  // The validity period for a signing job. See `signature_validity_period` Block below for details.
  public signatureValidityPeriod?: signer_SigningProfileSignatureValidityPeriod;

  // A list of tags associated with the signing profile. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "signatureValidityPeriod",
        "The validity period for a signing job. See `signature_validity_period` Block below for details.",
        () => signer_SigningProfileSignatureValidityPeriod_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "signingMaterial",
        "The AWS Certificate Manager certificate that will be used to sign code with the new signing profile. See `signing_material` Block below for details.",
        () => signer_SigningProfileSigningMaterial_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A list of tags associated with the signing profile. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(InputType.String, "name", "", () => [], false, true),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "platformId",
        "The ID of the platform that is used by the target signing profile.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
