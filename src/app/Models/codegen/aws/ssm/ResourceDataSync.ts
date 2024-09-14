import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_ResourceDataSyncS3Destination,
  ssm_ResourceDataSyncS3Destination_GetTypes,
} from "../types/ssm_ResourceDataSyncS3Destination";

export interface ResourceDataSyncArgs {
  // Name for the configuration.
  name?: string;

  // Amazon S3 configuration details for the sync.
  s3Destination?: ssm_ResourceDataSyncS3Destination;
}
export class ResourceDataSync extends DS_Resource {
  // Amazon S3 configuration details for the sync.
  public s3Destination?: ssm_ResourceDataSyncS3Destination;

  // Name for the configuration.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name for the configuration.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "s3Destination",
        "Amazon S3 configuration details for the sync.",
        () => ssm_ResourceDataSyncS3Destination_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
