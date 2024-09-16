import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AttachmentArgs {
  // The name of the ELB.
  elb?: string;

  // Instance ID to place in the ELB pool.
  instance?: string;
}
export class Attachment extends DS_Resource {
  // The name of the ELB.
  public elb?: string;

  // Instance ID to place in the ELB pool.
  public instance?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'elb',
        'The name of the ELB.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'instance',
        'Instance ID to place in the ELB pool.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
