import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig {
  // Type of the boot disk (default is "pd-standard"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive).
  bootDiskType?: string;

  // Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
  numLocalSsds?: number;

  // Size in GB of the boot disk (default is 500GB).
  bootDiskSizeGb?: number;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bootDiskType",
      'Type of the boot disk (default is "pd-standard"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive).',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numLocalSsds",
      "Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bootDiskSizeGb",
      "Size in GB of the boot disk (default is 500GB).",
      [],
      false,
      true,
    ),
  ];
}
