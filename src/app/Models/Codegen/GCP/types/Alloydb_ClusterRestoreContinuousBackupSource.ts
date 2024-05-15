import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_ClusterRestoreContinuousBackupSource {
  // The name of the source cluster that this cluster is restored from.
  Cluster?: string;

  // The point in time that this cluster is restored to, in RFC 3339 format.
  PointInTime?: string;
}

export function Alloydb_ClusterRestoreContinuousBackupSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Cluster",
      "The name of the source cluster that this cluster is restored from.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PointInTime",
      "The point in time that this cluster is restored to, in RFC 3339 format.",
      [],
      true,
      true,
    ),
  ];
}
