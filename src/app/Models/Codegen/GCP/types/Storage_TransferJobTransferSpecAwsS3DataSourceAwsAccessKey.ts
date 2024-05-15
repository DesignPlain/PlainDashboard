import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_TransferJobTransferSpecAwsS3DataSourceAwsAccessKey {
  // AWS Secret Access Key.
  SecretAccessKey?: string;

  // AWS Key ID.
  AccessKeyId?: string;
}

export function Storage_TransferJobTransferSpecAwsS3DataSourceAwsAccessKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SecretAccessKey",
      "AWS Secret Access Key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AccessKeyId",
      "AWS Key ID.",
      [],
      true,
      false,
    ),
  ];
}
