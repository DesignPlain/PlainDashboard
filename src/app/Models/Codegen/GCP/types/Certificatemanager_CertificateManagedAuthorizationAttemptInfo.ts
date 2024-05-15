import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificatemanager_CertificateManagedAuthorizationAttemptInfo {
  /*
(Output)
State of the domain for managed certificate issuance.
*/
  State?: string;

  /*
(Output)
Human readable explanation for reaching the state. Provided to help
address the configuration issues.
Not guaranteed to be stable. For programmatic access use `failure_reason` field.
*/
  Details?: string;

  /*
(Output)
Domain name of the authorization attempt.
*/
  Domain?: string;

  /*
(Output)
Reason for failure of the authorization attempt for the domain.
*/
  FailureReason?: string;
}

export function Certificatemanager_CertificateManagedAuthorizationAttemptInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nState of the domain for managed certificate issuance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Details",
      "(Output)\nHuman readable explanation for reaching the state. Provided to help\naddress the configuration issues.\nNot guaranteed to be stable. For programmatic access use `failure_reason` field.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Domain",
      "(Output)\nDomain name of the authorization attempt.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FailureReason",
      "(Output)\nReason for failure of the authorization attempt for the domain.",
      [],
      false,
      false,
    ),
  ];
}
