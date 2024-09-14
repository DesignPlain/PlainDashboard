import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration {
  /*
ARN for KMS Key.

The following arguments are optional:
*/
  kmsKeyArn?: string;
}

export function chime_SdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "ARN for KMS Key.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
  ];
}
