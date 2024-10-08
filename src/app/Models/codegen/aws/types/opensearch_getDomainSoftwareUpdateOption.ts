import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface opensearch_getDomainSoftwareUpdateOption {
  // Enabled or disabled.
  autoSoftwareUpdateEnabled?: boolean;
}

export function opensearch_getDomainSoftwareUpdateOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'autoSoftwareUpdateEnabled',
      'Enabled or disabled.',
      () => [],
      true,
      false,
    ),
  ];
}
