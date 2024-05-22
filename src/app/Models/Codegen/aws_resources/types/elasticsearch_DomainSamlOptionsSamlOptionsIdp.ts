import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticsearch_DomainSamlOptionsSamlOptionsIdp {
  // The unique Entity ID of the application in SAML Identity Provider.
  entityId?: string;

  // The Metadata of the SAML application in xml format.
  metadataContent?: string;
}

export function elasticsearch_DomainSamlOptionsSamlOptionsIdp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "entityId",
      "The unique Entity ID of the application in SAML Identity Provider.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metadataContent",
      "The Metadata of the SAML application in xml format.",
      [],
      true,
      false,
    ),
  ];
}
