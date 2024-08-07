import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  signer_SigningProfileRevocationRecord,
  signer_SigningProfileRevocationRecord_GetTypes,
} from "../types/signer_SigningProfileRevocationRecord";
import {
  signer_SigningProfileSignatureValidityPeriod,
  signer_SigningProfileSignatureValidityPeriod_GetTypes,
} from "../types/signer_SigningProfileSignatureValidityPeriod";
import {
  signer_SigningProfileSigningMaterial,
  signer_SigningProfileSigningMaterial_GetTypes,
} from "../types/signer_SigningProfileSigningMaterial";

export interface SigningProfileArgs {
  // A list of tags associated with the signing profile. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A unique signing profile name. By default generated by the provider. Signing profile names are immutable and cannot be reused after canceled.
  name?: string;

  // A signing profile name prefix. The provider will generate a unique suffix. Conflicts with `name`.
  namePrefix?: string;

  // The ID of the platform that is used by the target signing profile.
  platformId?: string;

  // The validity period for a signing job.
  signatureValidityPeriod?: signer_SigningProfileSignatureValidityPeriod;

  //
  signingMaterial?: signer_SigningProfileSigningMaterial;
}
export class SigningProfile extends Resource {
  // A unique signing profile name. By default generated by the provider. Signing profile names are immutable and cannot be reused after canceled.
  public name?: string;

  // The ID of the platform that is used by the target signing profile.
  public platformId?: string;

  //
  public signingMaterial?: signer_SigningProfileSigningMaterial;

  // A list of tags associated with the signing profile. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The validity period for a signing job.
  public signatureValidityPeriod?: signer_SigningProfileSignatureValidityPeriod;

  // The status of the target signing profile.
  public status?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The current version of the signing profile.
  public version?: string;

  // The Amazon Resource Name (ARN) for the signing profile.
  public arn?: string;

  // A signing profile name prefix. The provider will generate a unique suffix. Conflicts with `name`.
  public namePrefix?: string;

  // A human-readable name for the signing platform associated with the signing profile.
  public platformDisplayName?: string;

  // Revocation information for a signing profile.
  public revocationRecords?: Array<signer_SigningProfileRevocationRecord>;

  // The signing profile ARN, including the profile version.
  public versionArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "A signing profile name prefix. The provider will generate a unique suffix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "platformId",
        "The ID of the platform that is used by the target signing profile.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "signatureValidityPeriod",
        "The validity period for a signing job.",
        signer_SigningProfileSignatureValidityPeriod_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "signingMaterial",
        "",
        signer_SigningProfileSigningMaterial_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A list of tags associated with the signing profile. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique signing profile name. By default generated by the provider. Signing profile names are immutable and cannot be reused after canceled.",
        [],
        false,
        true,
      ),
    ];
  }
}
