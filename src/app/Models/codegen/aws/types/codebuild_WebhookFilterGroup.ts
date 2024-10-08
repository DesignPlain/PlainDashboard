import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  codebuild_WebhookFilterGroupFilter,
  codebuild_WebhookFilterGroupFilter_GetTypes,
} from './codebuild_WebhookFilterGroupFilter';

export interface codebuild_WebhookFilterGroup {
  // A webhook filter for the group. Filter blocks are documented below.
  filters?: Array<codebuild_WebhookFilterGroupFilter>;
}

export function codebuild_WebhookFilterGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'filters',
      'A webhook filter for the group. Filter blocks are documented below.',
      () => codebuild_WebhookFilterGroupFilter_GetTypes(),
      false,
      false,
    ),
  ];
}
