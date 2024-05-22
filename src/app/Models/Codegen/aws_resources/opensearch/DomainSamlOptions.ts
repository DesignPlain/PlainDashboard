import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opensearch_DomainSamlOptionsSamlOptions,
  opensearch_DomainSamlOptionsSamlOptions_GetTypes,
} from "../types/opensearch_DomainSamlOptionsSamlOptions";

export interface DomainSamlOptionsArgs {
  /*
Name of the domain.

The following arguments are optional:
*/
  domainName?: string;

  // SAML authentication options for an AWS OpenSearch Domain.
  samlOptions?: opensearch_DomainSamlOptionsSamlOptions;
}
export class DomainSamlOptions extends Resource {
  // SAML authentication options for an AWS OpenSearch Domain.
  public samlOptions?: opensearch_DomainSamlOptionsSamlOptions;

  /*
Name of the domain.

The following arguments are optional:
*/
  public domainName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "samlOptions",
        "SAML authentication options for an AWS OpenSearch Domain.",
        opensearch_DomainSamlOptionsSamlOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Name of the domain.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
    ];
  }
}
