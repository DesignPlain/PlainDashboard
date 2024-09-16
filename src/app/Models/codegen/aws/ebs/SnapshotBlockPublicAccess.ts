import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SnapshotBlockPublicAccessArgs {
  // The mode in which to enable "Block public access for snapshots" for the region. Allowed values are `block-all`, `block-new-sharing`, `unblocked`.
  state?: string;
}
export class SnapshotBlockPublicAccess extends DS_Resource {
  // The mode in which to enable "Block public access for snapshots" for the region. Allowed values are `block-all`, `block-new-sharing`, `unblocked`.
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'state',
        'The mode in which to enable "Block public access for snapshots" for the region. Allowed values are `block-all`, `block-new-sharing`, `unblocked`.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
