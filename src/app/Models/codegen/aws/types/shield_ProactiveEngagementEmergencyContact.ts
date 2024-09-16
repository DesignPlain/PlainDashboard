import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface shield_ProactiveEngagementEmergencyContact {
  // A valid email address that will be used for this contact.
  emailAddress?: string;

  // A phone number, starting with `+` and up to 15 digits that will be used for this contact.
  phoneNumber?: string;

  // Additional notes regarding the contact.
  contactNotes?: string;
}

export function shield_ProactiveEngagementEmergencyContact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'emailAddress',
      'A valid email address that will be used for this contact.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'phoneNumber',
      'A phone number, starting with `+` and up to 15 digits that will be used for this contact.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'contactNotes',
      'Additional notes regarding the contact.',
      () => [],
      false,
      false,
    ),
  ];
}
