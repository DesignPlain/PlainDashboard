import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AlternativeContactArgs {
  // Phone number for the alternate contact.
  phoneNumber?: string;

  // Title for the alternate contact.
  title?: string;

  // ID of the target account when managing member accounts. Will manage current user's account by default if omitted.
  accountId?: string;

  // Type of the alternate contact. Allowed values are: `BILLING`, `OPERATIONS`, `SECURITY`.
  alternateContactType?: string;

  // An email address for the alternate contact.
  emailAddress?: string;

  // Name of the alternate contact.
  name?: string;
}
export class AlternativeContact extends DS_Resource {
  // Type of the alternate contact. Allowed values are: `BILLING`, `OPERATIONS`, `SECURITY`.
  public alternateContactType?: string;

  // An email address for the alternate contact.
  public emailAddress?: string;

  // Name of the alternate contact.
  public name?: string;

  // Phone number for the alternate contact.
  public phoneNumber?: string;

  // Title for the alternate contact.
  public title?: string;

  // ID of the target account when managing member accounts. Will manage current user's account by default if omitted.
  public accountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the alternate contact.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'phoneNumber',
        'Phone number for the alternate contact.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'title',
        'Title for the alternate contact.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'accountId',
        "ID of the target account when managing member accounts. Will manage current user's account by default if omitted.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'alternateContactType',
        'Type of the alternate contact. Allowed values are: `BILLING`, `OPERATIONS`, `SECURITY`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'emailAddress',
        'An email address for the alternate contact.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
