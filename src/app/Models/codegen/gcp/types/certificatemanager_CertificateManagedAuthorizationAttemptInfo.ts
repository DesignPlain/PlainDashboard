import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface certificatemanager_CertificateManagedAuthorizationAttemptInfo {
  /*
(Output)
Human readable explanation for reaching the state. Provided to help
address the configuration issues.
Not guaranteed to be stable. For programmatic access use `failure_reason` field.
*/
  details?: string;

  /*
(Output)
Domain name of the authorization attempt.
*/
  domain?: string;

  /*
(Output)
Reason for failure of the authorization attempt for the domain.
*/
  failureReason?: string;

  /*
(Output)
State of the domain for managed certificate issuance.
*/
  state?: string;
}

export function certificatemanager_CertificateManagedAuthorizationAttemptInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'failureReason',
      '(Output)\nReason for failure of the authorization attempt for the domain.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      '(Output)\nState of the domain for managed certificate issuance.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'details',
      '(Output)\nHuman readable explanation for reaching the state. Provided to help\naddress the configuration issues.\nNot guaranteed to be stable. For programmatic access use `failure_reason` field.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'domain',
      '(Output)\nDomain name of the authorization attempt.',
      () => [],
      false,
      false,
    ),
  ];
}
