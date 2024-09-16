import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_ClusterClusterConfigInitializationAction {
  /*
The script to be executed during initialization of the cluster.
The script must be a GCS file with a gs:// prefix.
*/
  script?: string;

  /*
The maximum duration (in seconds) which `script` is
allowed to take to execute its action. GCP will default to a predetermined
computed value if not set (currently 300).

- - -
*/
  timeoutSec?: number;
}

export function dataproc_ClusterClusterConfigInitializationAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'timeoutSec',
      'The maximum duration (in seconds) which `script` is\nallowed to take to execute its action. GCP will default to a predetermined\ncomputed value if not set (currently 300).\n\n- - -',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'script',
      'The script to be executed during initialization of the cluster.\nThe script must be a GCS file with a gs:// prefix.',
      () => [],
      true,
      true,
    ),
  ];
}
