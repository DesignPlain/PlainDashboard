import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  elasticsearch_DomainSamlOptionsSamlOptionsIdp,
  elasticsearch_DomainSamlOptionsSamlOptionsIdp_GetTypes,
} from './elasticsearch_DomainSamlOptionsSamlOptionsIdp';

export interface elasticsearch_DomainSamlOptionsSamlOptions {
  // Element of the SAML assertion to use for backend roles. Default is roles.
  rolesKey?: string;

  // Duration of a session in minutes after a user logs in. Default is 60. Maximum value is 1,440.
  sessionTimeoutMinutes?: number;

  // Custom SAML attribute to use for user names. Default is an empty string - `""`. This will cause Elasticsearch to use the `NameID` element of the `Subject`, which is the default location for name identifiers in the SAML specification.
  subjectKey?: string;

  // Whether SAML authentication is enabled.
  enabled?: boolean;

  // Information from your identity provider.
  idp?: elasticsearch_DomainSamlOptionsSamlOptionsIdp;

  // This backend role from the SAML IdP receives full permissions to the cluster, equivalent to a new master user.
  masterBackendRole?: string;

  // This username from the SAML IdP receives full permissions to the cluster, equivalent to a new master user.
  masterUserName?: string;
}

export function elasticsearch_DomainSamlOptionsSamlOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'idp',
      'Information from your identity provider.',
      () => elasticsearch_DomainSamlOptionsSamlOptionsIdp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'masterBackendRole',
      'This backend role from the SAML IdP receives full permissions to the cluster, equivalent to a new master user.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'masterUserName',
      'This username from the SAML IdP receives full permissions to the cluster, equivalent to a new master user.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rolesKey',
      'Element of the SAML assertion to use for backend roles. Default is roles.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'sessionTimeoutMinutes',
      'Duration of a session in minutes after a user logs in. Default is 60. Maximum value is 1,440.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subjectKey',
      'Custom SAML attribute to use for user names. Default is an empty string - `""`. This will cause Elasticsearch to use the `NameID` element of the `Subject`, which is the default location for name identifiers in the SAML specification.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether SAML authentication is enabled.',
      () => [],
      false,
      false,
    ),
  ];
}
