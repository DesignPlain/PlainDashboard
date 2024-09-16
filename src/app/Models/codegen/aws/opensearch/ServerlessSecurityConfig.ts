import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opensearch_ServerlessSecurityConfigSamlOptions,
  opensearch_ServerlessSecurityConfigSamlOptions_GetTypes,
} from '../types/opensearch_ServerlessSecurityConfigSamlOptions';

export interface ServerlessSecurityConfigArgs {
  // Description of the security configuration.
  description?: string;

  // Name of the policy.
  name?: string;

  // Configuration block for SAML options.
  samlOptions?: opensearch_ServerlessSecurityConfigSamlOptions;

  /*
Type of configuration. Must be `saml`.

The following arguments are optional:
*/
  type?: string;
}
export class ServerlessSecurityConfig extends DS_Resource {
  // Version of the configuration.
  public configVersion?: string;

  // Description of the security configuration.
  public description?: string;

  // Name of the policy.
  public name?: string;

  // Configuration block for SAML options.
  public samlOptions?: opensearch_ServerlessSecurityConfigSamlOptions;

  /*
Type of configuration. Must be `saml`.

The following arguments are optional:
*/
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the policy.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'samlOptions',
        'Configuration block for SAML options.',
        () => opensearch_ServerlessSecurityConfigSamlOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'Type of configuration. Must be `saml`.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the security configuration.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
