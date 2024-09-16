import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_ManagedPrefixListEntry {
  // CIDR block of this entry.
  cidr?: string;

  // Description of this entry. Due to API limitations, updating only the description of an existing entry requires temporarily removing and re-adding the entry.
  description?: string;
}

export function ec2_ManagedPrefixListEntry_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'cidr',
      'CIDR block of this entry.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Description of this entry. Due to API limitations, updating only the description of an existing entry requires temporarily removing and re-adding the entry.',
      () => [],
      false,
      false,
    ),
  ];
}
