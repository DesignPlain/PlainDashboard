import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel {
  // Required. Label name presented as key in xDS Node Metadata.
  labelName?: string;

  /*
Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.

- - -
*/
  labelValue?: string;
}

export function networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'labelName',
      'Required. Label name presented as key in xDS Node Metadata.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'labelValue',
      'Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.\n\n- - -',
      () => [],
      true,
      false,
    ),
  ];
}
