import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration,
  chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration_GetTypes,
} from "../types/chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration";

export interface SdkvoiceVoiceProfileDomainArgs {
  // Description of Voice Profile Domain.
  description?: string;

  // Name of Voice Profile Domain.
  name?: string;

  // Configuration for server side encryption.
  serverSideEncryptionConfiguration?: chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration;

  //
  tags?: Map<string, string>;
}
export class SdkvoiceVoiceProfileDomain extends DS_Resource {
  // Configuration for server side encryption.
  public serverSideEncryptionConfiguration?: chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // ARN of the Voice Profile Domain.
  public arn?: string;

  // Description of Voice Profile Domain.
  public description?: string;

  // Name of Voice Profile Domain.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of Voice Profile Domain.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of Voice Profile Domain.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serverSideEncryptionConfiguration",
        "Configuration for server side encryption.",
        () =>
          chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
