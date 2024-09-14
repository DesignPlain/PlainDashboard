import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_FieldLevelEncryptionProfileEncryptionEntities,
  cloudfront_FieldLevelEncryptionProfileEncryptionEntities_GetTypes,
} from "../types/cloudfront_FieldLevelEncryptionProfileEncryptionEntities";

export interface FieldLevelEncryptionProfileArgs {
  // An optional comment about the Field Level Encryption Profile.
  comment?: string;

  // The encryption entities config block for field-level encryption profiles that contains an attribute `items` which includes the encryption key and field pattern specifications.
  encryptionEntities?: cloudfront_FieldLevelEncryptionProfileEncryptionEntities;

  // The name of the Field Level Encryption Profile.
  name?: string;
}
export class FieldLevelEncryptionProfile extends DS_Resource {
  // The current version of the Field Level Encryption Profile. For example: `E2QWRUHAPOMQZL`.
  public etag?: string;

  // The name of the Field Level Encryption Profile.
  public name?: string;

  // Internal value used by CloudFront to allow future updates to the Field Level Encryption Profile.
  public callerReference?: string;

  // An optional comment about the Field Level Encryption Profile.
  public comment?: string;

  // The encryption entities config block for field-level encryption profiles that contains an attribute `items` which includes the encryption key and field pattern specifications.
  public encryptionEntities?: cloudfront_FieldLevelEncryptionProfileEncryptionEntities;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "comment",
        "An optional comment about the Field Level Encryption Profile.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionEntities",
        "The encryption entities config block for field-level encryption profiles that contains an attribute `items` which includes the encryption key and field pattern specifications.",
        () =>
          cloudfront_FieldLevelEncryptionProfileEncryptionEntities_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Field Level Encryption Profile.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
