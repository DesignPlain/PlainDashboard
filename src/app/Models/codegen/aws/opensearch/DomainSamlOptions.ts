import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opensearch_DomainSamlOptionsSamlOptions,
  opensearch_DomainSamlOptionsSamlOptions_GetTypes,
} from '../types/opensearch_DomainSamlOptionsSamlOptions';

export interface DomainSamlOptionsArgs {
  /*
Name of the domain.

The following arguments are optional:
*/
  domainName?: string;

  // SAML authentication options for an AWS OpenSearch Domain.
  samlOptions?: opensearch_DomainSamlOptionsSamlOptions;
}
export class DomainSamlOptions extends DS_Resource {
  /*
Name of the domain.

The following arguments are optional:
*/
  public domainName?: string;

  // SAML authentication options for an AWS OpenSearch Domain.
  public samlOptions?: opensearch_DomainSamlOptionsSamlOptions;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'domainName',
        'Name of the domain.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'samlOptions',
        'SAML authentication options for an AWS OpenSearch Domain.',
        () => opensearch_DomainSamlOptionsSamlOptions_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
