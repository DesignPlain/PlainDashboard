import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  fms_PolicySecurityServicePolicyDataPolicyOption,
  fms_PolicySecurityServicePolicyDataPolicyOption_GetTypes,
} from "./fms_PolicySecurityServicePolicyDataPolicyOption";

export interface fms_PolicySecurityServicePolicyData {
  // Details about the service that are specific to the service type, in JSON format. For service type `SHIELD_ADVANCED`, this is an empty string. Examples depending on `type` can be found in the [AWS Firewall Manager SecurityServicePolicyData API Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_SecurityServicePolicyData.html).
  managedServiceData?: string;

  // Contains the Network Firewall firewall policy options to configure a centralized deployment model. Documented below.
  policyOption?: fms_PolicySecurityServicePolicyDataPolicyOption;

  // The service that the policy is using to protect the resources. For the current list of supported types, please refer to the [AWS Firewall Manager SecurityServicePolicyData API Type Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_SecurityServicePolicyData.html#fms-Type-SecurityServicePolicyData-Type).
  type?: string;
}

export function fms_PolicySecurityServicePolicyData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The service that the policy is using to protect the resources. For the current list of supported types, please refer to the [AWS Firewall Manager SecurityServicePolicyData API Type Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_SecurityServicePolicyData.html#fms-Type-SecurityServicePolicyData-Type).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "managedServiceData",
      "Details about the service that are specific to the service type, in JSON format. For service type `SHIELD_ADVANCED`, this is an empty string. Examples depending on `type` can be found in the [AWS Firewall Manager SecurityServicePolicyData API Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_SecurityServicePolicyData.html).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "policyOption",
      "Contains the Network Firewall firewall policy options to configure a centralized deployment model. Documented below.",
      fms_PolicySecurityServicePolicyDataPolicyOption_GetTypes(),
      false,
      false,
    ),
  ];
}
