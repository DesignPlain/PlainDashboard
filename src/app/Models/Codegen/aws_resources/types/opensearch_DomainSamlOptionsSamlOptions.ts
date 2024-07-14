import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opensearch_DomainSamlOptionsSamlOptionsIdp,
  opensearch_DomainSamlOptionsSamlOptionsIdp_GetTypes,
} from "./opensearch_DomainSamlOptionsSamlOptionsIdp";

export interface opensearch_DomainSamlOptionsSamlOptions {
  // This backend role from the SAML IdP receives full permissions to the cluster, equivalent to a new master user.
  masterBackendRole?: string;

  // This username from the SAML IdP receives full permissions to the cluster, equivalent to a new master user.
  masterUserName?: string;

  // Element of the SAML assertion to use for backend roles. Default is roles.
  rolesKey?: string;

  // Duration of a session in minutes after a user logs in. Default is 60. Maximum value is 1,440.
  sessionTimeoutMinutes?: number;

  // Element of the SAML assertion to use for username. Default is NameID.
  subjectKey?: string;

  // Whether SAML authentication is enabled.
  enabled?: boolean;

  // Information from your identity provider.
  idp?: opensearch_DomainSamlOptionsSamlOptionsIdp;
}

export function opensearch_DomainSamlOptionsSamlOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "rolesKey",
      "Element of the SAML assertion to use for backend roles. Default is roles.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sessionTimeoutMinutes",
      "Duration of a session in minutes after a user logs in. Default is 60. Maximum value is 1,440.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subjectKey",
      "Element of the SAML assertion to use for username. Default is NameID.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether SAML authentication is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "idp",
      "Information from your identity provider.",
      opensearch_DomainSamlOptionsSamlOptionsIdp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "masterBackendRole",
      "This backend role from the SAML IdP receives full permissions to the cluster, equivalent to a new master user.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "masterUserName",
      "This username from the SAML IdP receives full permissions to the cluster, equivalent to a new master user.",
      [],
      false,
      false,
    ),
  ];
}
