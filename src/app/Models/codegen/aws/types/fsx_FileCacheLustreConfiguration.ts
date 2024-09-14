import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  fsx_FileCacheLustreConfigurationLogConfiguration,
  fsx_FileCacheLustreConfigurationLogConfiguration_GetTypes,
} from "./fsx_FileCacheLustreConfigurationLogConfiguration";
import {
  fsx_FileCacheLustreConfigurationMetadataConfiguration,
  fsx_FileCacheLustreConfigurationMetadataConfiguration_GetTypes,
} from "./fsx_FileCacheLustreConfigurationMetadataConfiguration";

export interface fsx_FileCacheLustreConfiguration {
  //
  logConfigurations?: Array<fsx_FileCacheLustreConfigurationLogConfiguration>;

  // The configuration for a Lustre MDT (Metadata Target) storage volume. See the `metadata_configuration` block.
  metadataConfigurations?: Array<fsx_FileCacheLustreConfigurationMetadataConfiguration>;

  //
  mountName?: string;

  // Provisions the amount of read and write throughput for each 1 tebibyte (TiB) of cache storage capacity, in MB/s/TiB. The only supported value is `1000`.
  perUnitStorageThroughput?: number;

  // A recurring weekly time, in the format `D:HH:MM`. `D` is the day of the week, for which `1` represents Monday and `7` represents Sunday. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, 1:05:00 specifies maintenance at 5 AM Monday. See the [ISO week date](https://en.wikipedia.org/wiki/ISO_week_date) for more information.
  weeklyMaintenanceStartTime?: string;

  // Specifies the cache deployment type. The only supported value is `CACHE_1`.
  deploymentType?: string;
}

export function fsx_FileCacheLustreConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "metadataConfigurations",
      "The configuration for a Lustre MDT (Metadata Target) storage volume. See the `metadata_configuration` block.",
      () => fsx_FileCacheLustreConfigurationMetadataConfiguration_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "mountName",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "perUnitStorageThroughput",
      "Provisions the amount of read and write throughput for each 1 tebibyte (TiB) of cache storage capacity, in MB/s/TiB. The only supported value is `1000`.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "weeklyMaintenanceStartTime",
      "A recurring weekly time, in the format `D:HH:MM`. `D` is the day of the week, for which `1` represents Monday and `7` represents Sunday. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, 1:05:00 specifies maintenance at 5 AM Monday. See the [ISO week date](https://en.wikipedia.org/wiki/ISO_week_date) for more information.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deploymentType",
      "Specifies the cache deployment type. The only supported value is `CACHE_1`.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "logConfigurations",
      "",
      () => fsx_FileCacheLustreConfigurationLogConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
