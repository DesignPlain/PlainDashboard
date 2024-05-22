import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticbeanstalk_ConfigurationTemplateSetting {
  // A unique name for this Template.
  name?: string;

  //
  namespace?: string;

  //
  resource?: string;

  //
  value?: string;
}

export function elasticbeanstalk_ConfigurationTemplateSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "namespace", "", [], true, false),
    new DynamicUIProps(InputType.String, "resource", "", [], false, false),
    new DynamicUIProps(InputType.String, "value", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "name",
      "A unique name for this Template.",
      [],
      true,
      false,
    ),
  ];
}
