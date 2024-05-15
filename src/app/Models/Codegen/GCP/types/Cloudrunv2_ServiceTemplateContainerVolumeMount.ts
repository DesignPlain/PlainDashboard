import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_ServiceTemplateContainerVolumeMount {
  // Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run
  MountPath?: string;

  // This must match the Name of a Volume.
  Name?: string;
}

export function Cloudrunv2_ServiceTemplateContainerVolumeMount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MountPath",
      "Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "This must match the Name of a Volume.",
      [],
      true,
      false,
    ),
  ];
}
