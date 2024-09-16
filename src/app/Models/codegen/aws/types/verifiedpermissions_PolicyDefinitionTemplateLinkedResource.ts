import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedpermissions_PolicyDefinitionTemplateLinkedResource {
  // The entity type of the resource.
  entityType?: string;

  // The entity ID of the resource.
  entityId?: string;
}

export function verifiedpermissions_PolicyDefinitionTemplateLinkedResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'entityType',
      'The entity type of the resource.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'entityId',
      'The entity ID of the resource.',
      () => [],
      true,
      false,
    ),
  ];
}
