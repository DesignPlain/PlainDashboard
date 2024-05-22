import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface rds_InstanceS3Import {
  // The bucket name where your backup is stored
  bucketName?: string;

  // Can be blank, but is the path to your backup
  bucketPrefix?: string;

  // Role applied to load the data.
  ingestionRole?: string;

  // Source engine for the backup
  sourceEngine?: string;

  /*
Version of the source engine used to make the backup

This will not recreate the resource if the S3 object changes in some way.  It's only used to initialize the database.
*/
  sourceEngineVersion?: string;
}

export function rds_InstanceS3Import_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "The bucket name where your backup is stored",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
      "Can be blank, but is the path to your backup",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ingestionRole",
      "Role applied to load the data.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceEngine",
      "Source engine for the backup",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceEngineVersion",
      "Version of the source engine used to make the backup\n\nThis will not recreate the resource if the S3 object changes in some way.  It's only used to initialize the database.",
      [],
      true,
      true,
    ),
  ];
}
