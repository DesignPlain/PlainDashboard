import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opensearch_DomainSamlOptionsSamlOptionsIdp {
  // Unique Entity ID of the application in SAML Identity Provider.
  entityId?: string;

  // Metadata of the SAML application in xml format.
  metadataContent?: string;
}

export function opensearch_DomainSamlOptionsSamlOptionsIdp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "entityId",
      "Unique Entity ID of the application in SAML Identity Provider.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metadataContent",
      "Metadata of the SAML application in xml format.",
      () => [],
      true,
      false,
    ),
  ];
}
