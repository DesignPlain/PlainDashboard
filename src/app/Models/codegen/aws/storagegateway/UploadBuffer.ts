import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface UploadBufferArgs {
  // Local disk identifier. For example, `pci-0000:03:00.0-scsi-0:0:0:0`.
  diskId?: string;

  // Local disk path. For example, `/dev/nvme1n1`.
  diskPath?: string;

  // The Amazon Resource Name (ARN) of the gateway.
  gatewayArn?: string;
}
export class UploadBuffer extends DS_Resource {
  // Local disk identifier. For example, `pci-0000:03:00.0-scsi-0:0:0:0`.
  public diskId?: string;

  // Local disk path. For example, `/dev/nvme1n1`.
  public diskPath?: string;

  // The Amazon Resource Name (ARN) of the gateway.
  public gatewayArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'diskId',
        'Local disk identifier. For example, `pci-0000:03:00.0-scsi-0:0:0:0`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'diskPath',
        'Local disk path. For example, `/dev/nvme1n1`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'gatewayArn',
        'The Amazon Resource Name (ARN) of the gateway.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
