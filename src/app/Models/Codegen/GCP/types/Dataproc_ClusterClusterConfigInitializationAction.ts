import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_ClusterClusterConfigInitializationAction {
  /*
The script to be executed during initialization of the cluster.
The script must be a GCS file with a gs:// prefix.
*/
  Script?: string;

  /*
The maximum duration (in seconds) which `script` is
allowed to take to execute its action. GCP will default to a predetermined
computed value if not set (currently 300).

- - -
*/
  TimeoutSec?: number;
}

export function Dataproc_ClusterClusterConfigInitializationAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Script",
      "The script to be executed during initialization of the cluster.\nThe script must be a GCS file with a gs:// prefix.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TimeoutSec",
      "The maximum duration (in seconds) which `script` is\nallowed to take to execute its action. GCP will default to a predetermined\ncomputed value if not set (currently 300).\n\n- - -",
      [],
      false,
      true,
    ),
  ];
}
