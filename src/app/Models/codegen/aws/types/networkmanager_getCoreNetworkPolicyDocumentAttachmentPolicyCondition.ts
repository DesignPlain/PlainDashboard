import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyCondition {
  // string value
  value?: string;

  // string value
  key?: string;

  // Valid values include: `equals`, `not-equals`, `contains`, `begins-with`.
  operator?: string;

  // Valid values include: `account-id`, `any`, `tag-value`, `tag-exists`, `resource-id`, `region`, `attachment-type`.
  type?: string;
}

export function networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'string value',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'operator',
      'Valid values include: `equals`, `not-equals`, `contains`, `begins-with`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Valid values include: `account-id`, `any`, `tag-value`, `tag-exists`, `resource-id`, `region`, `attachment-type`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'string value',
      () => [],
      false,
      false,
    ),
  ];
}
