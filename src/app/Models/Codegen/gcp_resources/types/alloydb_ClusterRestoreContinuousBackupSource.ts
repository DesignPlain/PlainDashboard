import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alloydb_ClusterRestoreContinuousBackupSource {
  // The name of the source cluster that this cluster is restored from.
  cluster?: string;

  // The point in time that this cluster is restored to, in RFC 3339 format.
  pointInTime?: string;
}

export function alloydb_ClusterRestoreContinuousBackupSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cluster",
      "The name of the source cluster that this cluster is restored from.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "pointInTime",
      "The point in time that this cluster is restored to, in RFC 3339 format.",
      [],
      true,
      true,
    ),
  ];
}
