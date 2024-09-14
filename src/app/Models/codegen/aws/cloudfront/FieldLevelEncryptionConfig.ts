import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfig,
  cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfig_GetTypes,
} from "../types/cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfig";
import {
  cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfig,
  cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfig_GetTypes,
} from "../types/cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfig";

export interface FieldLevelEncryptionConfigArgs {
  // An optional comment about the Field Level Encryption Config.
  comment?: string;

  // Content Type Profile Config specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use.
  contentTypeProfileConfig?: cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfig;

  // Query Arg Profile Config that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request.
  queryArgProfileConfig?: cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfig;
}
export class FieldLevelEncryptionConfig extends DS_Resource {
  // An optional comment about the Field Level Encryption Config.
  public comment?: string;

  // Content Type Profile Config specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use.
  public contentTypeProfileConfig?: cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfig;

  // The current version of the Field Level Encryption Config. For example: `E2QWRUHAPOMQZL`.
  public etag?: string;

  // Query Arg Profile Config that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request.
  public queryArgProfileConfig?: cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfig;

  // Internal value used by CloudFront to allow future updates to the Field Level Encryption Config.
  public callerReference?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "contentTypeProfileConfig",
        "Content Type Profile Config specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use.",
        () =>
          cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "queryArgProfileConfig",
        "Query Arg Profile Config that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request.",
        () =>
          cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "comment",
        "An optional comment about the Field Level Encryption Config.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
