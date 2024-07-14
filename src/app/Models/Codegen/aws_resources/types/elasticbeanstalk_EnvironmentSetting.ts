import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elasticbeanstalk_EnvironmentSetting {
  /*
A unique name for this Environment. This name is used
in the application URL
*/
  name?: string;

  //
  namespace?: string;

  //
  resource?: string;

  //
  value?: string;
}

export function elasticbeanstalk_EnvironmentSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "namespace", "", [], true, false),
    new DynamicUIProps(InputType.String, "resource", "", [], false, false),
    new DynamicUIProps(InputType.String, "value", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "name",
      "A unique name for this Environment. This name is used\nin the application URL",
      [],
      true,
      false,
    ),
  ];
}
