import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface timestreaminfluxdb_DbInstanceLogDeliveryConfigurationS3Configuration {
  // Name of the S3 bucket to deliver logs to.
  bucketName?: string;

  /*
Indicates whether log delivery to the S3 bucket is enabled.

--Note--: Only three arguments do updates in-place: `db_parameter_group_identifier`, `log_delivery_configuration`, and `tags`. Changes to any other argument after a DB instance has been deployed will cause destruction and re-creation of the DB instance. Additionally, when `db_parameter_group_identifier` is added to a DB instance or modified, the DB instance will be updated in-place but if `db_parameter_group_identifier` is removed from a DB instance, the DB instance will be destroyed and re-created.
*/
  enabled?: boolean;
}

export function timestreaminfluxdb_DbInstanceLogDeliveryConfigurationS3Configuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Name of the S3 bucket to deliver logs to.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Indicates whether log delivery to the S3 bucket is enabled.\n\n**Note**: Only three arguments do updates in-place: `db_parameter_group_identifier`, `log_delivery_configuration`, and `tags`. Changes to any other argument after a DB instance has been deployed will cause destruction and re-creation of the DB instance. Additionally, when `db_parameter_group_identifier` is added to a DB instance or modified, the DB instance will be updated in-place but if `db_parameter_group_identifier` is removed from a DB instance, the DB instance will be destroyed and re-created.",
      () => [],
      true,
      false,
    ),
  ];
}
