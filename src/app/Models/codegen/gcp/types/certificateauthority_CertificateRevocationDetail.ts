import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface certificateauthority_CertificateRevocationDetail {
  /*
(Output)
Indicates why a Certificate was revoked.
*/
  revocationState?: string;

  /*
(Output)
The time at which this Certificate was revoked.
*/
  revocationTime?: string;
}

export function certificateauthority_CertificateRevocationDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'revocationState',
      '(Output)\nIndicates why a Certificate was revoked.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'revocationTime',
      '(Output)\nThe time at which this Certificate was revoked.',
      () => [],
      false,
      false,
    ),
  ];
}
