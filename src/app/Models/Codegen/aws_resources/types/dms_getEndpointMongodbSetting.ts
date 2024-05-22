import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dms_getEndpointMongodbSetting {
  //
  authSource?: string;

  //
  authType?: string;

  //
  docsToInvestigate?: string;

  //
  extractDocId?: string;

  //
  nestingLevel?: string;

  //
  authMechanism?: string;
}

export function dms_getEndpointMongodbSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "authSource", "", [], true, false),
    new DynamicUIProps(InputType.String, "authType", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "docsToInvestigate",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "extractDocId", "", [], true, false),
    new DynamicUIProps(InputType.String, "nestingLevel", "", [], true, false),
    new DynamicUIProps(InputType.String, "authMechanism", "", [], true, false),
  ];
}
