import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3control_StorageLensConfigurationStorageLensConfigurationAwsOrg {
  // The Amazon Resource Name (ARN) of the Amazon Web Services organization.
  arn?: string;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationAwsOrg_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the Amazon Web Services organization.",
      () => [],
      true,
      false,
    ),
  ];
}
