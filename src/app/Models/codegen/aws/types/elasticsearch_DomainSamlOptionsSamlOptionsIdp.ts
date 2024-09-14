import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elasticsearch_DomainSamlOptionsSamlOptionsIdp {
  // The Metadata of the SAML application in xml format.
  metadataContent?: string;

  // The unique Entity ID of the application in SAML Identity Provider.
  entityId?: string;
}

export function elasticsearch_DomainSamlOptionsSamlOptionsIdp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metadataContent",
      "The Metadata of the SAML application in xml format.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "entityId",
      "The unique Entity ID of the application in SAML Identity Provider.",
      () => [],
      true,
      false,
    ),
  ];
}
