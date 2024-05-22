import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gamelift_BuildStorageLocation {
  // Name of your S3 bucket.
  bucket?: string;

  // Name of the zip file containing your build files.
  key?: string;

  // A specific version of the file. If not set, the latest version of the file is retrieved.
  objectVersion?: string;

  // ARN of the access role that allows Amazon GameLift to access your S3 bucket.
  roleArn?: string;
}

export function gamelift_BuildStorageLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Name of the zip file containing your build files.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "objectVersion",
      "A specific version of the file. If not set, the latest version of the file is retrieved.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "ARN of the access role that allows Amazon GameLift to access your S3 bucket.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Name of your S3 bucket.",
      [],
      true,
      true,
    ),
  ];
}
