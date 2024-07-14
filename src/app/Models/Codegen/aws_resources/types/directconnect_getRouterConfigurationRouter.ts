import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface directconnect_getRouterConfigurationRouter {
  // Router vendor
  vendor?: string;

  // Router XSLT Template Name
  xsltTemplateName?: string;

  //
  xsltTemplateNameForMacSec?: string;

  // Router platform
  platform?: string;

  /*
ID of the Router Type. For example: `CiscoSystemsInc-2900SeriesRouters-IOS124`

There is currently no AWS API to retrieve the full list of `router_type_identifier` values. Here is a list of known `RouterType` objects that can be used:
*/
  routerTypeIdentifier?: string;

  // Router operating system
  software?: string;
}

export function directconnect_getRouterConfigurationRouter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "xsltTemplateName",
      "Router XSLT Template Name",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "xsltTemplateNameForMacSec",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "platform",
      "Router platform",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "routerTypeIdentifier",
      "ID of the Router Type. For example: `CiscoSystemsInc-2900SeriesRouters-IOS124`\n\nThere is currently no AWS API to retrieve the full list of `router_type_identifier` values. Here is a list of known `RouterType` objects that can be used:",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "software",
      "Router operating system",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vendor",
      "Router vendor",
      [],
      true,
      false,
    ),
  ];
}
