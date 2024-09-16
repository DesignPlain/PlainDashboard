import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId {
  /*
Required. The parts of an OID path. The most significant parts of the path come first.

- - -
*/
  objectIdPaths?: Array<number>;
}

export function certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'objectIdPaths',
      'Required. The parts of an OID path. The most significant parts of the path come first.\n\n- - -',
      () => InputType_Number_GetTypes(),
      true,
      false,
    ),
  ];
}
