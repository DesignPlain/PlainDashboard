import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface rds_ClusterS3Import {
  // Bucket name where your backup is stored
  bucketName?: string;

  // Can be blank, but is the path to your backup
  bucketPrefix?: string;

  // Role applied to load the data.
  ingestionRole?: string;

  // Source engine for the backup
  sourceEngine?: string;

  /*
Version of the source engine used to make the backup

This will not recreate the resource if the S3 object changes in some way. It's only used to initialize the database. This only works currently with the aurora engine. See AWS for currently supported engines and options. See [Aurora S3 Migration Docs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3).
*/
  sourceEngineVersion?: string;
}

export function rds_ClusterS3Import_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sourceEngineVersion",
      "Version of the source engine used to make the backup\n\nThis will not recreate the resource if the S3 object changes in some way. It's only used to initialize the database. This only works currently with the aurora engine. See AWS for currently supported engines and options. See [Aurora S3 Migration Docs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3).",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Bucket name where your backup is stored",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
      "Can be blank, but is the path to your backup",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ingestionRole",
      "Role applied to load the data.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceEngine",
      "Source engine for the backup",
      () => [],
      true,
      true,
    ),
  ];
}
