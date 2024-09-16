import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface InvitationAccepterArgs {
  // The AWS account ID for the account that sent the invitation.
  administratorAccountId?: string;
}
export class InvitationAccepter extends DS_Resource {
  // The AWS account ID for the account that sent the invitation.
  public administratorAccountId?: string;

  // The unique identifier for the invitation.
  public invitationId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'administratorAccountId',
        'The AWS account ID for the account that sent the invitation.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
