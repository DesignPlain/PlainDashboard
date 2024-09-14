import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dms_getEndpointRedshiftSetting {
  //
  bucketFolder?: string;

  //
  bucketName?: string;

  //
  encryptionMode?: string;

  //
  serverSideEncryptionKmsKeyId?: string;

  //
  serviceAccessRoleArn?: string;
}

export function dms_getEndpointRedshiftSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serverSideEncryptionKmsKeyId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccessRoleArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketFolder",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionMode",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
