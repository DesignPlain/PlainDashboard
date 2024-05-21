import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datacatalog_EntryBigqueryTableSpecViewSpec {
  /*
(Output)
The query that defines the table view.
*/
  viewQuery?: string;
}

export function datacatalog_EntryBigqueryTableSpecViewSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "viewQuery",
      "(Output)\nThe query that defines the table view.",
      [],
      false,
      false,
    ),
  ];
}
