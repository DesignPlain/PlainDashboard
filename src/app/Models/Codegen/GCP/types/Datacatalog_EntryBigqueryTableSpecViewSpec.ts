import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datacatalog_EntryBigqueryTableSpecViewSpec {
  /*
(Output)
The query that defines the table view.
*/
  ViewQuery?: string;
}

export function Datacatalog_EntryBigqueryTableSpecViewSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ViewQuery",
      "(Output)\nThe query that defines the table view.",
      [],
      false,
      false,
    ),
  ];
}
