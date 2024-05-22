import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  elasticsearch_DomainSamlOptionsSamlOptions,
  elasticsearch_DomainSamlOptionsSamlOptions_GetTypes,
} from "../types/elasticsearch_DomainSamlOptionsSamlOptions";

export interface DomainSamlOptionsArgs {
  /*
Name of the domain.

The following arguments are optional:
*/
  domainName?: string;

  // The SAML authentication options for an AWS Elasticsearch Domain.
  samlOptions?: elasticsearch_DomainSamlOptionsSamlOptions;
}
export class DomainSamlOptions extends Resource {
  /*
Name of the domain.

The following arguments are optional:
*/
  public domainName?: string;

  // The SAML authentication options for an AWS Elasticsearch Domain.
  public samlOptions?: elasticsearch_DomainSamlOptionsSamlOptions;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Name of the domain.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "samlOptions",
        "The SAML authentication options for an AWS Elasticsearch Domain.",
        elasticsearch_DomainSamlOptionsSamlOptions_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
