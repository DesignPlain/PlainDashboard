import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gamelift_ScriptStorageLocation {
  // Name of your S3 bucket.
  bucket?: string;

  // Name of the zip file containing your script files.
  key?: string;

  // A specific version of the file. If not set, the latest version of the file is retrieved.
  objectVersion?: string;

  // ARN of the access role that allows Amazon GameLift to access your S3 bucket.
  roleArn?: string;
}

export function gamelift_ScriptStorageLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Name of the zip file containing your script files.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "objectVersion",
      "A specific version of the file. If not set, the latest version of the file is retrieved.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "ARN of the access role that allows Amazon GameLift to access your S3 bucket.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Name of your S3 bucket.",
      () => [],
      true,
      false,
    ),
  ];
}
