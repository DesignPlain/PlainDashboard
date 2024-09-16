import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emr_ClusterMasterInstanceFleetInstanceTypeConfigEbsConfig {
  // Number of I/O operations per second (IOPS) that the volume supports.
  iops?: number;

  // Volume size, in gibibytes (GiB).
  size?: number;

  // Volume type. Valid options are `gp3`, `gp2`, `io1`, `io2`, `standard`, `st1` and `sc1`. See [EBS Volume Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html).
  type?: string;

  // Number of EBS volumes with this configuration to attach to each EC2 instance in the instance group (default is 1).
  volumesPerInstance?: number;
}

export function emr_ClusterMasterInstanceFleetInstanceTypeConfigEbsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'iops',
      'Number of I/O operations per second (IOPS) that the volume supports.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'size',
      'Volume size, in gibibytes (GiB).',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Volume type. Valid options are `gp3`, `gp2`, `io1`, `io2`, `standard`, `st1` and `sc1`. See [EBS Volume Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html).',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'volumesPerInstance',
      'Number of EBS volumes with this configuration to attach to each EC2 instance in the instance group (default is 1).',
      () => [],
      false,
      true,
    ),
  ];
}
