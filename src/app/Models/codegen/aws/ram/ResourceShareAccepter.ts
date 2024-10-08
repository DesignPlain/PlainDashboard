import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ResourceShareAccepterArgs {
  // The ARN of the resource share.
  shareArn?: string;
}
export class ResourceShareAccepter extends DS_Resource {
  // The name of the resource share.
  public shareName?: string;

  // The status of the resource share (ACTIVE, PENDING, FAILED, DELETING, DELETED).
  public status?: string;

  // The ARN of the resource share invitation.
  public invitationArn?: string;

  // The account ID of the receiver account which accepts the invitation.
  public receiverAccountId?: string;

  // A list of the resource ARNs shared via the resource share.
  public resources?: Array<string>;

  // The account ID of the sender account which submits the invitation.
  public senderAccountId?: string;

  // The ARN of the resource share.
  public shareArn?: string;

  // The ID of the resource share as displayed in the console.
  public shareId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'shareArn',
        'The ARN of the resource share.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
