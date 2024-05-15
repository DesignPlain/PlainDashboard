import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_ClusterClusterConfigLifecycleConfig {
  /*
The time when cluster will be auto-deleted.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
Example: "2014-10-02T15:01:23.045123456Z".

- - -
*/
  AutoDeleteTime?: string;

  /*
The duration to keep the cluster alive while idling
(no jobs running). After this TTL, the cluster will be deleted. Valid range: [10m, 14d].
*/
  IdleDeleteTtl?: string;

  // Time when the cluster became idle (most recent job finished) and became eligible for deletion due to idleness.
  IdleStartTime?: string;
}

export function Dataproc_ClusterClusterConfigLifecycleConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AutoDeleteTime",
      'The time when cluster will be auto-deleted.\nA timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds.\nExample: "2014-10-02T15:01:23.045123456Z".\n\n- - -',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IdleDeleteTtl",
      "The duration to keep the cluster alive while idling\n(no jobs running). After this TTL, the cluster will be deleted. Valid range: [10m, 14d].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IdleStartTime",
      "Time when the cluster became idle (most recent job finished) and became eligible for deletion due to idleness.",
      [],
      false,
      false,
    ),
  ];
}
