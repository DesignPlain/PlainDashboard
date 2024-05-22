import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration,
  chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration_GetTypes,
} from "../types/chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration";

export interface SdkvoiceVoiceProfileDomainArgs {
  // Name of Voice Profile Domain.
  name?: string;

  // Configuration for server side encryption.
  serverSideEncryptionConfiguration?: chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration;

  //
  tags?: Map<string, string>;

  // Description of Voice Profile Domain.
  description?: string;
}
export class SdkvoiceVoiceProfileDomain extends Resource {
  // Description of Voice Profile Domain.
  public description?: string;

  // Name of Voice Profile Domain.
  public name?: string;

  // Configuration for server side encryption.
  public serverSideEncryptionConfiguration?: chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // ARN of the Voice Profile Domain.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of Voice Profile Domain.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of Voice Profile Domain.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serverSideEncryptionConfiguration",
        "Configuration for server side encryption.",
        chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
