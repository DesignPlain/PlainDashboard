import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedpermissions_PolicyDefinitionTemplateLinkedPrincipal {
  // The entity ID of the principal.
  entityId?: string;

  // The entity type of the principal.
  entityType?: string;
}

export function verifiedpermissions_PolicyDefinitionTemplateLinkedPrincipal_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'entityId',
      'The entity ID of the principal.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'entityType',
      'The entity type of the principal.',
      () => [],
      true,
      false,
    ),
  ];
}
